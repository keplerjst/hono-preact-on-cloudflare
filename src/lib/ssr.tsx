import type { Fetcher } from '@cloudflare/workers-types'
import type { MiddlewareHandler } from 'hono'
import { StatusCode } from 'hono/utils/http-status'
import { JSX } from 'preact'
import { prerender } from 'preact-iso'
import { locationStub } from 'preact-iso/prerender'

type Env = {
  ASSETS: Fetcher
}

export type SSRElement = () => JSX.Element

type HTMLReplacer = (html: string, content: string) => string
type SSROptions = {
  indexPath: string
  replacer: HTMLReplacer
  notFound: SSRElement
}

export const ssr = (
  App: SSRElement,
  options?: Partial<SSROptions>
): MiddlewareHandler<{ Bindings: Env }> => {
  return async (c, next) => {
    const path = new URL(c.req.url).pathname
    locationStub(path)
    let content = await prerender(<App />)
    let statusCode: StatusCode = 200

    if (content.html === '') {
      if (options?.notFound) {
        content = await prerender(options.notFound())
        statusCode = 404
      } else {
        return await next()
      }
    }

    const indexPath = options?.indexPath || '/index.html'
    const assetUrl = new URL(indexPath, c.req.url)
    const res = await c.env.ASSETS.fetch(assetUrl.toString())
    const view = await res.text()
    let replacer = options?.replacer

    if (!replacer) {
      replacer = (html: string, content: string) =>
        html.replace(
          /<div id="root"><\/div>/,
          `<div id="root">${content}</div>`
        )
    }

    const html = replacer(view, content.html)
    return c.html(html, statusCode)
  }
}
