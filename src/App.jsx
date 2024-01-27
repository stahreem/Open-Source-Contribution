import Header from "./components/Header";
import Addproblem from "./components/Addproblem";
import Syllabus from "./components/Syllabus";
import Testcases from "./components/Testcases"
import { 
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";



export default function App() {
  return (
    <Routes>
    <Route path="/view" element={<Header/>}/>
    <Route path="/add" element={<Addproblem/>} />
    <Route path="/syll" element={ <Syllabus/> }/>
    <Route path="/test" element={ <Testcases /> }/>
    </Routes>
  );
}


