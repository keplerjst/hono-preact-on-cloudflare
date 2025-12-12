const Header = () => {
  return (
    <header>
      <h1>Hono + Preact on Cloudflare Worker /w D1</h1>
      <div className="flex justify-center gap-2">
        <a className="p-1 hover:bg-gray-100" href="/">
          Home
        </a>
        <a className="p-1 hover:bg-gray-100" href="/about">
          About
        </a>
      </div>
    </header>
  )
}

export default Header
