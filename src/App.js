import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './components/Login';
import Desktop2 from './components/Desktop-2';
import Desktop3 from './components/Desktop-3';
import AddClinte from './components/AddClinte';
import Projects from './components/Projects';
import Projects2 from './components/Projects2';
import Projects3 from './components/Projects3';
import Overview from './components/Overview';
import Details from './components/Details';
import Tasks from './components/Tasks';
import Task from './components/Task';
import Task1 from './components/Task1';
import Sales from './components/Sales';
import Sales1 from './components/Sales1';
function App() {
  return (
     <>
      <BrowserRouter className='position-relative'>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/desktop-2' element={<Desktop2/>}/>
          <Route path='/desktop-3' element={<Desktop3/>}/>
          <Route path='/addclint' element={<AddClinte/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/projects2' element={<Projects2/>}/>
          <Route path='/sales' element={<Sales/>}/>
          <Route path='/sales1' element={<Sales1/>}/>
          <Route path='/projects3' element={<Projects3/>}>
             <Route path='overview' element={<Overview/>}/>
             <Route path='details' element={<Details/>}/>
             <Route path='tasks' element={<Tasks/>}/>
          </Route>
          <Route path='/task' element={<Task/>}>
          <Route path='task1' element={<Task1/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
     </>
  );
}

export default App;
