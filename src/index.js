import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import reportWebVitals from './reportWebVitals';
import {Route,BrowserRouter as Router,Routes,Link} from 'react-router-dom'
import Register from '../src/components/register'
import Login from '../src/components/login'
import PasswordPage from '../src/components/PasswordPage';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
const routing=(
  <Router>
    <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link to="/" className="navbar-brand"><b>Hospital Management System</b></Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav ms-auto">
                <button type="button" className="btn btn-light m-1">
                <li className="nav-item">
                  <Link to ="/"><i class="bi bi-house-door"></i><b>Home</b></Link>
                </li>
                </button>
                <button type="button" className="btn btn-light m-1">
                <li className="nav-item">
                  <Link to ="/register" ><i class="bi bi-person"></i><b>Register</b></Link>
                </li>
                </button>
                <button type="button" className="btn btn-light m-1">
                <li className="nav-item">
                  <Link to ="/Login"><i class="bi bi-person-check"></i><b>Login</b></Link>
                </li>
                </button>
              </ul>
              </div>
            </nav>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/passwordPage" element={<PasswordPage/>}/>
       
        </Routes>
      </div>
    </Router>
)
ReactDOM.render(routing,document.getElementById('root'))
reportWebVitals();

