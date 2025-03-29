


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



    function countdown(targetDate) {
        function updateCountdown() {
          const now = new Date();
          const timeDifference = targetDate - now;
          
          if (timeDifference <= 0) {
            clearInterval(interval);
            document.getElementById("days").innerText = "0";
            document.getElementById("hours").innerText = "0";
            document.getElementById("minutes").innerText = "0";
            document.getElementById("seconds").innerText = "0";
            return;
          }
          
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
          
          document.getElementById("days").innerText = days;
          document.getElementById("hours").innerText = hours;
          document.getElementById("minutes").innerText = minutes;
          document.getElementById("seconds").innerText = seconds;
        }
        
        const interval = setInterval(updateCountdown, 1000);
        updateCountdown();
      }
      
      // Sana va vaqtni belgilash (masalan, 2025-yil 4-aprel, 15:30)
      const targetDate = new Date("2025-04-05T11:00:00");
      countdown(targetDate);





}