const projectClick = document.querySelector(".project");
const blogClick = document.querySelector(".blog");
const estimateClick = document.querySelector(".estimate");

const menuButtons = document.querySelectorAll('.menu-buttons button');

for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener("click", (e) => {
        if (e.target.classList.contains('pageBtn')) {
            menuButtons[i].classList.remove('pageBtn')
            e.target.classList.add('pageBtn')
        }
        // for (let j = 0; j < menuButtons.length; j++){
        //     console.log(imgInDiv,e)
        //     // imgInDiv[j].classList.remove('pageBtn');
        // }
    })
}

// menuButtons.map((item) => item.classList.remove('pageBtn'));
// e.target.classList.add('pageBtn')
// if (e.target.classList[1] === 'pageBtn') {