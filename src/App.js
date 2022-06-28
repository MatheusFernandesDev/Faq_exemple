import { Template } from "./components/MainComponents";

import { BrowserRouter } from "react-router-dom";

import Footer from "./components/partials/Footer";

import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Routes />
        <Footer />
      </Template>
    </BrowserRouter>
  );
}

export default App;
