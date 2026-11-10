import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))
const Success = lazy(() => import('./pages/Success').then(m => ({ default: m.Success })))
const Packages = lazy(() => import('./pages/Packages').then(m => ({ default: m.Packages })))
const Docs = lazy(() => import('./pages/Docs').then(m => ({ default: m.Docs })))
const Changelog = lazy(() => import('./pages/Changelog').then(m => ({ default: m.Changelog })))
const Roadmap = lazy(() => import('./pages/Roadmap').then(m => ({ default: m.Roadmap })))
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })))
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })))
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })))
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })))
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })))

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/success" element={<Success />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
