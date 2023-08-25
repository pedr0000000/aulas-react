import{ Routes, Route } from "raact-router-dom"
import Home from "./pages/home"

function Router () {
    return (
        <Router>
            <Route path= "/" element={<Home />} />
        </Router>
    )
}

export default Router 
