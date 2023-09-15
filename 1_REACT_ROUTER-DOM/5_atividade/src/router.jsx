import{ Routes, Route } from "react-router-dom"
import Messi from "./pages/Messi"
import Cristiano from "./pages/Cristiano"

function Router () {
    return (
        <Routes>
            <Route path= "/Messi" element={<Messi />} />
            <Route path= "/Cristiano" element={<Cristiano />} />
        </Routes>
    )
}

export default Router