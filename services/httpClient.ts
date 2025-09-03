"use client";

import { Toasting } from '@/utils/toasting';
import axios, { AxiosError } from 'axios';


export const apiVersion = process.env.NEXT_PUBLIC_API_VERSION || 'v1';
export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://192.168.1.105:8000';

const http = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10 * 60 * 1000,
});

// http.interceptors.request.use(
//     (config) => {
//         const token = LocalStorage.get('accessToken');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

http.interceptors.response.use(
    (response) => {
        if (response.status === 200 || response.status === 201 || response.status === 204) {
            return response.data;
        } else {
            Toasting({
                message: response.data.message || 'Internal server error',
                type: 'error',
            })
            return Promise.reject(response.data);
        }
    },
    async (error: AxiosError<any>) => {
        if ((error.response?.status === 401 || error.response?.status === 403)) {
            // LocalStorage.clear();
            // deleteCookie('token')
        }
        Toasting({
            message: error.response?.data.message || 'Internal server error',
            type: 'error',
        })
        return Promise.reject(error);
    }
);

// TODO: Handle refresh token
// TODO: Handle error

export default http; 