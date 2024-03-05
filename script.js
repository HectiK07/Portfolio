

const scroll = new LocomotiveScroll ({
    el: document.querySelector("#main"), 
    smooth: true
});

function myFunction(x) {
    x.classList.toggle("change");
  }

  // drop down menu for mobile

const menu = document.querySelector(".container");
let dropdown = document.querySelector(".dropdown");

menu.addEventListener("click", () => {
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
      } else {
        dropdown.classList.add('hidden');
      }
    });


    let firstpageAnim = () => {
      var tl = gsap.timeline();

      tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
      })
      
      .from(".hero_footer", {
        y: '-10',
        opacity: 0,
        delay: -1.5,
        duration: 1.5,
        ease: Expo.easeInOut
      })
      
      .to(".boundingelem", {
        y: '0',
        delay: -1,
        duration: 2,
        ease: Expo.easeInOut,
        stagger: 0.3
      })

    }

    firstpageAnim();


    let amazon = document.querySelector(".project_1");
    let profile = document.querySelector(".project_3");
    let amazonn = document.querySelector(".project_5");
    let currCon = document.querySelector(".project_2");
    let ttt = document.querySelector(".project_4");
    let rps = document.querySelector(".project_6");
    
  

    amazon.addEventListener("click", () => {
      window.open('https://hectik07.github.io/Amazon.com/')
    });
    profile.addEventListener("click", () => {
      window.open('https://hectik07.github.io/Profile-Card-CSS/')
    });
    amazonn.addEventListener("click", () => {
      window.open('https://hectik07.github.io/Apple-Vision-Pro/')
    });
    currCon.addEventListener("click", () => {
      window.open('https://hectik07.github.io/Currency-Converter/')
    });
    rps.addEventListener("click", () => {
      window.open('https://hectik07.github.io/Rock-Paper-Scissors-Game/')
    });
    ttt.addEventListener("click", () => {
      window.open('https://hectik07.github.io/Tic-Tac-Toe-Game/')
    });
