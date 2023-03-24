import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";
import { Resume } from "./components/Resume";
import { Aboutme} from "./components/Aboutme";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Andro Rezkalla</title>
    </Helmet>
      <NavBar />
      <Banner />
      <Skills />
      <Resume />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Aboutme />
      <Footer />
    </div>
  );
}

export default App;
