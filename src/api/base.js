import common from '@/config/env.js'
import axios from '../axios';

let baseUrl = common.baseUrl;


export const requestLogin = params => { return axios.post(`${baseUrl}/n/login/login`, params).then(res => res.data); };
export const getRegions = params => { return axios.get(`${basic}/t/region/query`, { params, params }); };