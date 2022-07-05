const btn = document.querySelector('#btn');
const windowWidth = document.documentElement.clientWidth;
const windowHeight = document.documentElement.clientHeight;

btn.addEventListener("click", () => {
    alert(`Ширина экрана: ${windowWidth}px. 
Высота экрана: ${windowHeight}px.`);
})