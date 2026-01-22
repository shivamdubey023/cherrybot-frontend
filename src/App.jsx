import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Chat from "./Pages/Chat"

function App() {
  return(
    <BrowserRouter>
    <Routes>                      
    <Route path="/login" element ={<Login />}/>
    <Route path="/register" element ={<Register />}/>
    <Route path="/chat" element ={<Chat />}/>

    {/* default route */}
    <Route path="*" element ={<Login />}/>
      </Routes>
    </BrowserRouter>
  )}
export default App