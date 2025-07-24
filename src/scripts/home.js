export default function loadHome() {
  const content = document.getElementById("content");
  content.textContent = ""; // leeren

  const headline = document.createElement("h1");
  headline.textContent = "Willkommen im besten Restaurant der Stadt!";
  content.appendChild(headline);

  const para = document.createElement("p");
  para.textContent = "Unser Essen ist legendär. Komm und überzeug dich!";
  content.appendChild(para);

  const lorem = document.createElement("div");
  lorem.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ipsa, reprehenderit velit voluptates voluptatem alias. Libero esse rem modi ipsam! Id nam cum quas repellat natus.";
  content.appendChild(lorem);
}
