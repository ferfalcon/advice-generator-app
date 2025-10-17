function writeElement(elementId: string, text: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerText = text;
  }
}

async function getData() {
  const url = "https://api.adviceslip.com/advice";
  const response = await fetch(url);

  try {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    writeElement("adviceId", result.slip.id)
    writeElement("advice", result.slip.advice)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}  

getData()