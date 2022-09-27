import axios from "axios";

export const PREFIX_API = process.env.REACT_APP_PREFIX_API;
export const ENDPOINT_LOCAL = process.env.REACT_APP_ENDPOINT;

const axiosInstant = axios.create();
axiosInstant.defaults.baseURL = `${ENDPOINT_LOCAL}/${PREFIX_API}`;
axiosInstant.defaults.withCredentials = true;
axiosInstant.defaults.timeout = 20000;
axiosInstant.defaults.headers.post['Content-Type'] = "application/json";

export const ApiConfig = async (url: string, payload?: unknown, method = "POST") => {
    if (method === 'POST') {

        return axiosInstant.post(`${url}`, payload)
            .then(response => {
                return response
            })
            .catch(error => error);
    }
}

export const ApiUploadFile = async (url: string, file: string | Blob, fieldName = "file") => {
    const formData = new FormData();
    formData.append(fieldName, file)
    return axiosInstant.post(url, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}