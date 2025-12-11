import { ErrorBoundary, LocationProvider, Router } from 'preact-iso'
import About from './app/About'
import Home from './app/Home'

const App = ({ path }: { path?: string }) => {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Home path="/" />
          <About path="/about" />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  )
}

export default App
