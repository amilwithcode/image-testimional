const imgContainer = document.querySelector(".image-container");

const prevBtn = document.getElementById("prev");

const nextBtn = document.getElementById("next");

let x = 0;
let timer;
prevBtn.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer)
    updateGalery()
});

function updateGalery() {
    imgContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x - 45
        updateGalery()
    }, 3000)
};

updateGalery();

nextBtn.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer)
    updateGalery()
});
