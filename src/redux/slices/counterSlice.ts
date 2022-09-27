import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { apiLoadUser } from '../../api/services'

// Define a type for the slice state
export interface CounterState {
    value: number,
    loading: string,
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
    loading: ''
}

export const requestLoadUser = createAsyncThunk('user/loadUser', async (props: {
    status: number
}) => {
    const res = await apiLoadUser(props)
    return res.data;
})

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {
        const actionList = [requestLoadUser]
        actionList.forEach(action => {
            builder.addCase(action.pending, (state) => {
                state.loading = 'loading....'
            })
            builder.addCase(action.rejected, (state) => {
                state.loading = 'error server'
            })
        })

        builder.addCase(requestLoadUser.fulfilled, (state) => {
            state.loading = "loaded !"
        })
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value
export const selectLoading = (state: RootState) => state.counter.loading

export default counterSlice.reducer