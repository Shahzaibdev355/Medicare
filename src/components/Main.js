
import { Routes, Route, } from "react-router-dom"
import "../assets/css/bootstrap.min.css"
import "../assets/css/dashboard.css"
import "../assets/css/mdb.min.css"
import "../assets/css/style.css"
import Dasboard from "./Dashboard"
import Appointments from "./Appointments"



const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dasboard/>}></Route>
                <Route path="/appointment" element={<Appointments/>}></Route>
            </Routes>

           

        </>
    );
}

export default Main;