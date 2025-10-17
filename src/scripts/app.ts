const url = "https://api.adviceslip.com/advice";
const adviceIdElement = "adviceId";
const adviceElement = "advice";
const newAdviceTrigger = "getNewAdvice";

function writeElement(elementId: string, text: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerText = text;
  }
}

function getNewAdvice(trigger: string) {
  const element = document.getElementById(trigger);
  if (element) {
    element.addEventListener("click", () => getData(url));
  }
}

async function getData(url: string) {
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

getData(url);
getNewAdvice(newAdviceTrigger);
