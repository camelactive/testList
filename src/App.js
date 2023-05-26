import './App.css';
import AsideMenu from './components/AsideMenu/AsideMenu';
import HeaderProject from './components/HeaderProject/HeaderProject';
import MainLayout from './components/Layouts/MainLayout';
import ListTodo from './components/ListTodo/ListTodo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path='/' index element={<ListTodo/>}></Route>
          </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
