const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors no-underline">
          Hinoco
        </a>
        <nav className="flex gap-6">
          <a
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors no-underline"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors no-underline"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
