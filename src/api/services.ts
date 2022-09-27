import EndPoint from "../common/endpoints"
import { ApiConfig } from "./config"

export const apiLoadUser = async (payload?: unknown) => {
    return ApiConfig(EndPoint.LOAD_USERS_BY_WORK_STATUS, payload)
}