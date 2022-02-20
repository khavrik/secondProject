import React from "react";
import Header from "./components/Header/Header";
import Content from './components/Content/Content';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="container">
      <Header/>
      <NavBar/>
      <Content/>
    </div>
  );
}

export default App;
