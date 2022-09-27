import { unwrapResult } from '@reduxjs/toolkit'
import React, { useCallback, useEffect } from 'react'
import { FCButton } from '../../components/FCButton'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { decrement, increment, requestLoadUser, selectCount, selectLoading } from '../../redux/slices/counterSlice'

type Props = {}

const HomePage = (props: Props) => {
    const dispatch = useAppDispatch()

    const count = useAppSelector(selectCount)
    const loading = useAppSelector(selectLoading)

    useEffect(() => {
        handleLoadUser(1)
    }, [])


    const handleAdd = useCallback(() => {
        dispatch(increment())

    }, [])

    const handleSubtraction = useCallback(() => {
        dispatch(decrement())
    }, [])

    const handleLoadUser = async (status: number) => {
        try {
            const actionResult = await dispatch(requestLoadUser({ status }));

            unwrapResult(actionResult)

        } catch (error) {
            console.log('error');

        }
    }

    return (
        <>
            <div>HomePage</div>
            <div>
                <div>count : {count}</div>
                <button onClick={handleAdd}>+</button>
                <button onClick={handleSubtraction}>-</button>
            </div>
            <div>
                <FCButton text={'test FC button'} className="mybutton" style={{
                    color: 'red',
                    padding: '20px',
                    border: 'none',
                    backgroundColor: '#000',
                    marginTop: '20px'
                }} handleAction={() => alert('hello world!')} />
                <h1>{loading}</h1>
            </div>
        </>
    )
}

export default HomePage