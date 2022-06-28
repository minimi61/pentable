const contactClick = document.querySelector(".contact");
const contactInfo = document.querySelector('.contact-info')

const contactPageOpen = () => {
    const containsContactBtn = contactClick.classList.contains('pageBtn');
    
    if (!containsContactBtn) {
        contactClick.classList.add('pageBtn');

        imgInDiv.style.animation = 'fadeOut 0.6s';
        imgInDiv.style.webkitAnimation = 'fadeOut 0.6s';
        setTimeout(() => {
            interiorImg.style.display = 'none'
            imgInDiv.style.animation = 'fadeIn 0.5s';
            imgInDiv.style.webkitAnimation = 'fadeIn 0.5s';
            imgInDiv.appendChild(contactInfo)
            imgInDiv.classList.add('contactPage');
            contactInfo.style.display = 'block'
        }, 500);
    }
    
    else {
        imgInDiv.style.animation = 'fadeOut 0.6s';
        imgInDiv.style.webkitAnimation = 'fadeOut 0.6s';
    
        setTimeout(() => {
            contactClick.classList.remove('pageBtn');
            imgInDiv.style.animation = 'fadeIn 0.5s';
            imgInDiv.style.webkitAnimation = 'fadeIn 0.5s';
            imgInDiv.classList.remove('contactPage');
            interiorImg.style.display = 'block';
            contactInfo.style.display = 'none'
        }, 500);
    
    }

}
contactClick.addEventListener("click", contactPageOpen)
