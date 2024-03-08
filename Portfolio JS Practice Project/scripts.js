let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

if (dayNight && banner) {
    dayNight.addEventListener("click", () => {
        banner.classList.toggle("night");
    });
}

var typed = new Typed('#text', {
    strings: ['User.', 'Developer.','Analyst.','Coder.',],
    loop:true,
    typeSpeed: 50,
    backSpeed:50,
    backDelay:1000
  });


  const form = document.getElementById("form");
  const userName = document.getElementById("user");
  //12:23