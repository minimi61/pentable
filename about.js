const aboutClick = document.querySelector(".about");
const imgInDiv =  document.querySelector(".img-in-div");
const interiorImg = document.querySelector(".interior-img");

const aboutPageOpen = () => {
    const containsAbout = aboutClick.classList.contains('aboutPageBtn');
    
    if (!containsAbout) {
        aboutClick.classList.add('aboutPageBtn');

            imgInDiv.style.animation = 'fadeOut 0.6s';
            imgInDiv.style.webkitAnimation = 'fadeOut 0.6s';
            setTimeout(() => {
                interiorImg.style.display = 'none'
                imgInDiv.style.animation = 'fadeIn 0.5s';
                imgInDiv.style.webkitAnimation = 'fadeIn 0.5s';
                imgInDiv.classList.add('aboutPage')
            }, 500);
 
    }
        
    else {
        imgInDiv.style.animation = 'fadeOut 0.6s';
        imgInDiv.style.webkitAnimation = 'fadeOut 0.6s';
    
        setTimeout(() => {
            aboutClick.classList.remove('aboutPageBtn');
            imgInDiv.style.animation = 'fadeIn 0.5s';
            imgInDiv.style.webkitAnimation = 'fadeIn 0.5s';
            imgInDiv.classList.remove('aboutPage');
            interiorImg.style.display = 'block'
        }, 500);

    }
}
aboutClick.addEventListener("click", aboutPageOpen)

