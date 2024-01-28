import Header from "./components/Header";
import Addproblem from "./components/Addproblem";
import Syllabus from "./components/Syllabus";
import Testcases from "./components/Testcases"
import Editproblem from "./components/Editproblem";
import EditTestcases from "./components/EditTestcases";

import { 
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";



export default function App() {
  return (
    <Routes>
    <Route path="/view" element={<Header/>}/>
    <Route path="/add" element={<Addproblem/>} />
    <Route path="/edit" element={<Editproblem/>} />


    <Route path="/cases" element={ <EditTestcases/> }/>
    <Route path="/syll" element={ <Syllabus/> }/>
    <Route path="/test" element={ <Testcases /> }/>
    </Routes>
  );
}


