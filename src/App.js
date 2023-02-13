import React from 'react';
import Navbar from './components/routes/navigation/navbar.component';
import Hero from './components/Hero/hero.component'
import About from './components/routes/About/about.component'
import Contact from './components/routes/Contact/contact.component';
import Collection from './components/routes/Collection/collection.component';
import Bespoke from './components/routes/Bespoke/bespoke.component';
import Trade from './components/routes/Trade/trade.component';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Navbar />}>
          <Route index element= {<Hero />}/>
          <Route path='collection/*' element={<Collection />}/>
          <Route path='bespoke' element={<Bespoke />}/>
          <Route path='trade' element={<Trade />}/>
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
        </Route>
      </Routes>
    </div>
    
  );
}

export default App;
