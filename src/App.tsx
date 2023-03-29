import "./App.css"
import { NavBarMenu } from "./components/NavBarMenu"
import { Home } from "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Gallery } from "./components/Gallery"
import { Contacts } from "./pages/Contacts"


function App() {
    return (
        <div id="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Routes>
                <NavBarMenu />
            </BrowserRouter>
        </div>
    )
}

export default App
