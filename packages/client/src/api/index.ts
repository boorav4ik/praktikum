import axios from 'axios'
import { API_HOST } from './config'

const $host = axios.create({
  baseURL: API_HOST,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default $host
