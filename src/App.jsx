import Header from "./components/Header";
import Addproblem from "./components/Addproblem";
import { 
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";



export default function App() {
  return (
    <Routes>
    <Route path="/view" element={<Header/>}/>
    <Route path="/add" element={<Addproblem/>} />
    </Routes>
  );
}


