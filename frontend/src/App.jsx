import NavBar from "./components/navbar.components"
import MainContent from "./components/main.components"
import ManageStudents from "./pages/ManageStudents";
import StudentList from "./pages/StudentList";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App =()=>{
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<MainContent/>}/>
          <Route path="/mng" element={<ManageStudents/>}/>
          <Route path="/std"  element={<StudentList/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App