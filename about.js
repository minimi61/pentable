const aboutClick = document.querySelector(".about");
const img = document.querySelector("img");
// const interiorImg = document.querySelector("interior-img");
// console.log(img);

const aboutPageOpen = () => {
    const aboutPageApply = aboutClick.classList.toggle("aboutPage");
    // const imgRemove = aboutClick.classList.remove("interior-img");
    // console.log(imgRemove)
}

aboutClick.addEventListener("click", aboutPageOpen)


