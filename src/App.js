import { Template } from "./components/MainComponents";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>
    </BrowserRouter>
  );
}

export default App;
