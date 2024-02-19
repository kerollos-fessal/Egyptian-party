let foundTop;
$(document).ready(function () {

  //navbar section

$(".openNav").on("click", function(){
    openSideNav()
});

$(".closebtn").on("click", function(){
    closeSideNav()
});

function openSideNav(){
    document.getElementById('leftMenu').style.width = '250px';
    document.getElementById('home-content').style.marginLeft = '250px';

};


function closeSideNav(){
    document.getElementById('leftMenu').style.width = '0';
    document.getElementById('home-content').style.marginLeft = '0';
};

function findTopOffset(top){
  if(top == undefined){
    return height =0;
  }else{
    let height = $(`#${top}`).offset().top - $('#leftMenu').scrollTop();
    console.log();
    return height;
  }
};


//scrolling behavior

$('.contactSection').on('click', function(){
    foundTop =  findTopOffset('contact-us');
    $('html, body').animate({
        scrollTop: foundTop,
    }, 2000);
});


$('.countSection').on('click', function(){
  foundTop =  findTopOffset('count');
  $('html, body').animate({
      scrollTop: foundTop,
  }, 2000);
});


$('.durationSection').on('click', function(){
  foundTop =  findTopOffset('sliderDown');
  $('html, body').animate({
      scrollTop: foundTop,
  }, 2000);
});


$('.homeSection').on('click', function(){
  foundTop =  findTopOffset('Home');
  $('html, body').animate({
      scrollTop: foundTop,
  }, 2000);
});

$('.closebtn').on('click', function(){
  foundTop =  findTopOffset();
  $('html, body').animate({
      scrollTop: foundTop,
  }, 0);
});



//Acordion section
$("#flip1").click(function(){
    $("#panel1").slideToggle(500);
    $("#panel2").slideUp(500);
    $("#panel3").slideUp(500);
    $("#panel4").slideUp(500);
  });
  $("#flip2").click(function(){
    $("#panel1").slideUp(500);
    $("#panel2").slideToggle(500);
    $("#panel3").slideUp(500);
    $("#panel4").slideUp(500);
  });
  $("#flip3").click(function(){
    $("#panel1").slideUp(500);
    $("#panel2").slideUp(500);
    $("#panel3").slideToggle(500);
    $("#panel4").slideUp(500);
  });
  $("#flip4").click(function(){
    $("#panel1").slideUp(500);
    $("#panel2").slideUp(500);
    $("#panel3").slideUp(500);
    $("#panel4").slideToggle(500);
  });


//duration section

const displayElement = document.getElementById("count");
const endDate = new Date().getTime() + 863.689 * 24 * 60 * 60 * 1000;
function countdown(endDate) {
  let countdownInterval = setInterval(function () {
    let now = new Date().getTime();
    let distance = endDate - now;
    if (distance < 0) {
      clearInterval(countdownInterval);
      displayElement.style.display = "none";
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = `<span>-${days} D</span>`;
    document.getElementById("hours").innerHTML = `<span>${hours} h</span>`;
    document.getElementById("minutes").innerHTML = `<span>${minutes} m</span>`;
    document.getElementById("seconds").innerHTML = `<span>${seconds} s</span>`;

  }, 1000);
}
countdown(endDate);

});
