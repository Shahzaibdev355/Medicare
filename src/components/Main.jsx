
import { Routes, Route, } from "react-router-dom"
import "../assets/css/bootstrap.min.css"
import "../assets/css/dashboard.css"
import "../assets/css/mdb.min.css"
import "../assets/css/style.css"
import Dasboard from "./Dashboard"
import Appointments from "./Appointments"
import MedicalBills from "./MedicalBills"
import MedicalRecords from "./MedicalRecords"
import Medications from "./Medications"
import Profile from "./Profile"



const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Profile/>}></Route>
                <Route path="/appointment" element={<Appointments/>}></Route>
                <Route path="/medical-bills" element={<MedicalBills/>}></Route>
                <Route path="/medical-records" element={<MedicalRecords/>}></Route>
                <Route path="/medications" element={<Medications/>}></Route>
            </Routes>

           

        </>
    );
}

export default Main;