import { Component } from "./core/heropy.js";
import TheHeader from "./components/TheHeader.js";
import THeFooter from "./components/TheFooter.js";

export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el;
    const theFooter = new THeFooter().el;
    const routerView = document.createElement("router-view");
    this.el.append(theHeader, routerView, theFooter);
  }
}
