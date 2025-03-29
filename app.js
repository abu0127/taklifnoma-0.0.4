


const sections = document.querySelectorAll('.section')
const calendar = document.querySelector('.calendar')

const about_txt ="Hurmatli aziz birodarim sizni 5 aprel kuni bo'lib otadigan nikox tuyimiz munosabati bilan soat 11:00 da yoziladigan valima dasturxonimizga taklif etamiz ~ "


function main() {
   
    function writeTxt(txt, target, time) {
        let writing = document.querySelector(target);
        writing.textContent = '';

        txt.split('').forEach((character, index) => {
            let span = document.createElement('span');
            span.textContent = character;
            span.style.opacity = 0;
            span.style.transition = 'opacity 1s ease'
            writing.appendChild(span);

            setTimeout(() => span.style.opacity = 1, time * index)
        })
    }

    writeTxt(about_txt ,'.about' ,20)


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