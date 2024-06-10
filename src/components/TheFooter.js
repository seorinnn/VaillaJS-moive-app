import { Component } from "../core/heropy";

export default class THeFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    this.el.innerHTML = `
      <div>
        <a href="https://github.com/seorinnn/VaillaJS-moive-app">
          Github Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/seorinnn">
          ${new Date().getFullYear()}
          Seorin
        </a>
      </div>
    `;
  }
}
