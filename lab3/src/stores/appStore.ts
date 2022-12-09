import { observable, action, makeObservable } from "mobx";

class AppStore {
  @observable
  themeIsBlack: boolean = localStorage.getItem("themeIsBlack") === "true";

  constructor() {
    makeObservable(this);
  }
  @action
  changeTheme = () => {
    this.themeIsBlack = !this.themeIsBlack;
    localStorage.setItem("themeIsBlack", String(this.themeIsBlack));
  };
}
const appStore = new AppStore();

export default appStore;
