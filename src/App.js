import MainBody from "./Components/MainBody";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import React from "react";

function App() {
  return (
    <div className="App">
      <section className="mainStylingAll">
        <Header />
        <div className="mainBodyGrid">
          <MainBody />
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default App;
