import { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Routes , Route } from 'react-router-dom'

import Menubar from './components/Menubar';
import Home from './components/Homes/Home'
import About from './components/Abouts/About';
import Skill from './components/SkillAll/Skill';
import Contact from './components/Contact';
import Visitorlist from './components/Visitorlist';
import CreateVisitor from './components/CreateVisitor';
import EditVisitor from './components/EditVisitor';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Menubar/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/skill' element={<Skill/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/visitor-list' element={<Visitorlist/>} />
            <Route path='/create-visitor' element={<CreateVisitor/>} />
            <Route path='/edit-visitor/:id' element={<EditVisitor/>} />
          </Routes>
        </div>
        <Footer/>
      </>
    );
  }
}
export default App;
