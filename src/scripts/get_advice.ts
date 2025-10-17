import { adviceIdElement, adviceElement } from "./consts";
import writeElement from "./write_element";

export default async function getAdvice(url: string) {
  const response = await fetch(url);
  try {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();

    writeElement(adviceIdElement, result.slip.id);
    writeElement(adviceElement, result.slip.advice);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}