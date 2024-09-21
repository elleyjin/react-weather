import Navbar from "./Navbar";
import Header from "./Header";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Navbar />
      <Header />
      <Forecast />
      {/* </header> */}
      <Footer />
    </div>
  );
}

export default App;
