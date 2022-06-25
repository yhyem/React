import { atom } from "recoil";

export const todos = atom({
  key: "todoList",
  default: [
    {
      id: 0,
      text: "React 공부하기",
    },
    {
      id: 1,
      text: "CODELION 강의 수강",
    },
  ],
});