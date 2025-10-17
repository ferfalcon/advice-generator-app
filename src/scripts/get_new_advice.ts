import { url } from "./consts";
import getAdvice from "./get_advice";

export default function getNewAdvice(trigger: string) {
  const element = document.getElementById(trigger);
  if (element) {
    element.addEventListener("click", () => getAdvice(url));
  }
}