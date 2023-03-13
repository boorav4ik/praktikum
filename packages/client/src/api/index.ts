import axios from 'axios'
import { ApiHost } from './config'

const host = axios.create({
  baseURL: ApiHost,
  withCredentials: true,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default host
