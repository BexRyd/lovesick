import React from "react";
import "./App.css";
import Profile from "./components/profile";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
