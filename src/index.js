import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Login} from './Pages/Login';
import {Home} from './Pages/Home';
import {Opportunity} from './Pages/Opportunity';
import {Account} from './Pages/Account';
import {Presales} from './Pages/Presales';
import {Partners} from './Pages/Partners';
import {Resources} from './Pages/Resources';
import {Subscription} from './Pages/Subscription';
import Navbar from './Components/Home/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Router>
            <Navbar/>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/opportunity' element={<Opportunity/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/presales' element={<Presales/>}/>
            <Route path='/partners' element={<Partners/>}/>
            <Route path='/resources' element={<Resources/>}/>
            <Route path='/subscription' element={<Subscription/>}/>
          </Routes>
        </Router>
    </div>
   
);

