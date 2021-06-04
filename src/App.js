import React, { useState } from 'react'
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThridSection from './components/ThirdSection';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import FourthSection from './components/FourthSection';
import LastSection from './components/LastSection';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <FirstSection />
      <SecondSection />
      <ThridSection />
      <FourthSection />
      <LastSection />
      <Footer />
    </>
  );
}

export default App;
