import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
function App() {
  return (
    <>
     <BrowserRouter>
       <Navbar />
       <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<Dashboard />} path='/' />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
