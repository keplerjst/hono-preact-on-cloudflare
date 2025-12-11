import { Fetcher } from '@cloudflare/workers-types'
import { Hono } from 'hono'
import App from './App'
import api from './api'
import { ssr } from './lib/ssr'

type Env = {
  ASSETS: Fetcher
}

const app = new Hono<{ Bindings: Env }>()

app.route('/api', api)
app.get('*', ssr(App))

export default app
