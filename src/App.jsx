import TopBar from "./components/TopBar"
import Footer from "./components/footer"
import TopText from "./components/TopText";
import Form from "./components/Form";
import Body from "./components/Body";
import Whatsapp from "./components/Whatsapp";

import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <>

      <TopBar />
      <Whatsapp />

      <div className="bg text-light d-flex flex-sm-row flex-column justify-content-evenly align-items-center">
        <TopText />
        <Form />
      </div>

      <Body />

      <Footer />

    </>
  )
}

export default App
