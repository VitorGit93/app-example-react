import { Home } from "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Contacts } from "./pages/Contacts"
import { GalleryPage } from "./pages/GalleryPage"
import { CssBaseline } from "@mui/material"


function App() {
    return (
        <>
            <CssBaseline/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/gallery" element={<GalleryPage/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
