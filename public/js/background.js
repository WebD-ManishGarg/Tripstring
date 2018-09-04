var counter = 0;
function changeBG(){
    var imgs = [
        "url(/img/bg1.jpg)",
        "url(/img/bg2.jpg)",
        "url(/img/bg3.jpg)",
        "url(/img/bg4.jpg)",
        "url(/img/bg5.jpg)",
        "url(/img/bg6.jpg)",
        "url(/img/bg7.jpg)",
        "url(/img/bg8.jpg)"
      ]

    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}

  setInterval(changeBG, 5000);
