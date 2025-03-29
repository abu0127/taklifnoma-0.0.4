
const home_foto = document.querySelector('.home-foto');
const greeting = document.querySelector('.greeting');
const about = document.querySelector('.about');
const names = document.querySelector('.name-con');
const sections = document.querySelectorAll('.section')
const calendar = document.querySelector('.calendar')

function main() {
   


    window.addEventListener("scroll", function () {
        let scrollpos = window.scrollY;

        sections.forEach((section, index) => {
            let sectionTop = section.offsetTop -600;
            let sectionHeight = section.offsetHeight;

            if (scrollpos >= sectionTop && scrollpos < sectionTop + sectionHeight) {

                
                if (index === 1) {
                    
                    setTimeout(() => {
                        calendar.classList.add('txt_animation')
                    }, 700)
                
                }

            }
        })

        
    });









}