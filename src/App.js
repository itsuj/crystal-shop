import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Product from "./components/Product"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
     <Navbar />
     <MainSection />
     <Product />
     <Footer />
    </div>
  );
}

export default App;
