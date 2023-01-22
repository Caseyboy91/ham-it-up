import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HamItUp from './HamItUp';
import Homepage from './pages/Homepage'


const App = ()=> {
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/show/:id" element={<HamItUp />}></Route>
    </Routes>
  </Router>
  )

}
export default App;


