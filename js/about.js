const aboutClick = document.querySelector(".about");
const imgInDiv = document.querySelector(".img-in-div");
const interiorImg = document.querySelector(".interior-img");
const greeting = document.querySelector('.greeting')

const aboutPageOpen = () => {
    const containsAbout = aboutClick.classList.contains('pageBtn');
    
    if (!containsAbout) {
        aboutClick.classList.add('pageBtn');

            imgInDiv.style.animation = 'fadeOut 0.6s';
            imgInDiv.style.webkitAnimation = 'fadeOut 0.6s';
            setTimeout(() => {
                interiorImg.style.display = 'none'
                imgInDiv.style.animation = 'fadeIn 0.5s';
                imgInDiv.style.webkitAnimation = 'fadeIn 0.5s';
                imgInDiv.appendChild(greeting)
                imgInDiv.classList.add('aboutPage')
                greeting.style.display = 'block';
            }, 500);
 
    }
        
    else {
        imgInDiv.style.animation = 'fadeOut 0.6s';
        imgInDiv.style.webkitAnimation = 'fadeOut 0.6s';
    
        setTimeout(() => {
            aboutClick.classList.remove('pageBtn');
            imgInDiv.style.animation = 'fadeIn 0.5s';
            imgInDiv.style.webkitAnimation = 'fadeIn 0.5s';
            imgInDiv.classList.remove('aboutPage');
            greeting.style.display = 'none';
            interiorImg.style.display = 'block';
        }, 500);

    }
}
aboutClick.addEventListener("click", aboutPageOpen)

