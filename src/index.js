import React from "react";
import { render } from "react-dom";
import SideBar from "../SideBar";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import styles from "./css/style.css";
const links = [
  { name: "Home", linkdir: "/home" },
  { name: "About", linkdir: "/about" },
  { name: "Info", linkdir: "/info" }
];
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <aside className="primary-aside">
          <SideBar links={links}  />
        </aside>
        <Main />
      </div>
    );
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
