const width = window.innerWidth;
const Waffle = document.querySelector("#Waffle");
const Crème_Brûlée = document.querySelector("#Crème_Brûlée");
const Macaron = document.querySelector("#Macaron");
const Tiramisu = document.querySelector("#Tiramisu");
const Baklava = document.querySelector("#Baklava");
const Pie = document.querySelector("#Pie");
const Cake = document.querySelector("#Cake");
const Brownie = document.querySelector("#Brownie");
const Panna_Cotta = document.querySelector("#Panna_Cotta");
const buttons = document.querySelectorAll(".addToCart");

if (width >= 1440) {
    const img1 = document.createElement("IMG");
    img1.src = "assets/images/image-waffle-desktop.jpg";
    Waffle.insertAdjacentElement("afterbegin", img1);

    const img2 = document.createElement("IMG");
    img2.src = "assets/images/image-creme-brulee-desktop.jpg";
    Crème_Brûlée.insertAdjacentElement("afterbegin", img2);

    const img3 = document.createElement("IMG");
    img3.src = "assets/images/image-macaron-desktop.jpg";
    Macaron.insertAdjacentElement("afterbegin", img3);

    const img4 = document.createElement("IMG");
    img4.src = "assets/images/image-tiramisu-desktop.jpg";
    Tiramisu.insertAdjacentElement("afterbegin", img4);

    const img5 = document.createElement("IMG");
    img5.src = "assets/images/image-baklava-desktop.jpg";
    Baklava.insertAdjacentElement("afterbegin", img5);

    const img6 = document.createElement("IMG");
    img6.src = "assets/images/image-meringue-desktop.jpg";
    Pie.insertAdjacentElement("afterbegin", img6);

    const img7 = document.createElement("IMG");
    img7.src = "assets/images/image-cake-desktop.jpg";
    Cake.insertAdjacentElement("afterbegin", img7);

    const img8 = document.createElement("IMG");
    img8.src = "assets/images/image-brownie-desktop.jpg";
    Brownie.insertAdjacentElement("afterbegin", img8);

    const img9 = document.createElement("IMG");
    img9.src = "assets/images/image-panna-cotta-desktop.jpg";
    Panna_Cotta.insertAdjacentElement("afterbegin", img9);
}

const button1 = document.createElement("button");
const button2 = document.createElement("button");
var i = 1;

//need to enclose + and - sign in button
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.style.backgroundColor = "hsl(14, 86%, 42%)";
        const imgC1 = document.createElement("IMG");
        imgC1.src = "assets/images/icon-increment-quantity.svg";
        button1.append(imgC1);

        const imgC2 = document.createElement("IMG");
        imgC2.src = "assets/images/icon-decrement-quantity.svg";
        button2.append(imgC2);

        btn.textContent =`${button1} ${i} ${button2}`;

        button1.style.padding = "0";
        button2.style.padding = "0";
        button1.style.backgroundColor = "black";
        button2.style.backgroundColor = "black";
        imgC1.style.height = "0.5px";
        imgC1.style.width = "0.5px";
    });
  });