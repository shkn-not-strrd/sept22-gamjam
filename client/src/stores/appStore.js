import { atom } from "recoil";

export const loggedInStatus = atom({
  key: "isLoggedIn",
  default: false,
});
