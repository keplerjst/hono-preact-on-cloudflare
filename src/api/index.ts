import { Hono } from 'hono'

const api = new Hono().get('/hello', (c) => {
  return c.json({ message: 'Hello!' })
})

export type ApiType = typeof api
export default api
