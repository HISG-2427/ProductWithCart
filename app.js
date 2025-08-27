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
const btn = document.getElementsByClassName(".addToCart");

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
btn.onclick = function () {
    btn.style.backgroundColor = "hsl(14, 86%, 42%)";
}