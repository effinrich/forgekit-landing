import { BrowserRouter, Routes, Route } from "react-router-dom"

import { MainLayout } from "./layouts/MainLayout"
import { Home } from "./pages/Home"
import { Success } from "./pages/Success"
import { StorybookMcp } from "./pages/StorybookMcp"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/storybook-mcp" element={<StorybookMcp />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
