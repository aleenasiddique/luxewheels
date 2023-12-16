import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./index.css"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Fleet from "./pages/Fleet"
import About from "./pages/About"


function App() {
return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
     <Route index element={<Home />} />
     <Route path="fleet" element={<Fleet />} />
     <Route path="about" element={<About />} />
    </Route>
  </Routes>
  </BrowserRouter>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


