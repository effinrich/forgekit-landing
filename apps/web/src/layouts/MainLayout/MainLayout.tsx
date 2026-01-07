import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div>
      <header>
        <nav>
          <a href="/">Home</a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Built with Forgekit</p>
      </footer>
    </div>
  )
}
