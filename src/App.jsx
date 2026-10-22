import Home from "./pages/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from "./component/NavBar"
import UpdateDoctor from "./pages/updateDoctor"
import PageNotFound from "./pages/PageNotFound"
import "./App.css"
import AddDoctor from "./pages/AddDoctor"
import Login from "./pages/Login"
import ProductedRoute from "./component/ProductedRoute"

function App() {
  
  return (
    <>
      
      <BrowserRouter>
      <NavBar/>
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path = "/adddoctor" element={<ProductedRoute><AddDoctor/></ProductedRoute>}/>
        <Route path="/updateDoctor/:id" element={<UpdateDoctor/>}/>
        <Route path="*" element={<PageNotFound/>}  />
        <Route path="/login" element={<Login/>}  />
        
      </Routes>     
      </BrowserRouter>
        
          
       {/* <Doctorcard name="Dr. Revathi" salary="500000" gender="Female" age="30" specialization="psychiatry"/> 
       <Doctorcard name="Dr. Jagadeesh" salary="600000" gender="Male" age="35" specialization="Cardiology"/>
      <Doctorcard name="Dr. Bhanu" salary="700000" gender="Female" age="40" specialization="Neurology"/>  */}
    {/* <AddDoctor/> */}
    </>
)
}
export default App;