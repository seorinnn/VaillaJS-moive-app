import { Component } from "../core/heropy";
import movieStore, { searchMovies } from "../store/movie";

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: "button",
    });
    movieStore.subscribe("pageMax", () => {
      //객체 구조분해 할당
      const { page, pageMax } = movieStore.state;
      pageMax > page
        ? this.el.classList.remove("hide") //가져올 페이지가 더 있을 때
        : this.el.classList.add("hide"); //가져올 페이지가 없을 때
    });
  }
  render() {
    this.el.classList.add("btn", "view-more", "hide");
    this.el.textContent = "View more..";

    this.el.addEventListener("click", async () => {
      this.el.classList.add("hide");
      await searchMovies(movieStore.state.page + 1);
    });
  }
}
