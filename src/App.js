import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Services from "./components/Home/Services/Services";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={ <Home/>}/>
          <Route  path="/about" element={ <About/>}/>
          <Route  path="/services" element={ <Services/>}/>
          <Route  path="/products" element={ <Products/>}/>
          <Route  path="/contact" element={ <ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
