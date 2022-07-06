import './style.css';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';
import Services from './Services';




function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Home/>
      {/* <Contact /> */}
      <Services/>
      <Footer/>
      </>
    </div>
  );
}

export default App;
