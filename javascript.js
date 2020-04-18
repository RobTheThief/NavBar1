window.onscroll = function() {scrolling()};
    var buttonState = 0;
    var menuButton = document.getElementById("menuBtn");

    //Menu Button
    function menuBtn() {
      if (buttonState == 0){
        dropdownContainer.classList.add("visible");
        menuButton.classList.add("menuClicked");
        buttonState = 1;
      }else{
        buttonState = 0;
        dropdownContainer.classList.remove("visible");
        menuButton.classList.remove("menuClicked");
      }
    }
    //Closes hamburger menu
    function hamburgler() {
      if (buttonState == 1){
        buttonState = 0;
        dropdownContainer.classList.remove("visible");
        menuButton.classList.remove("menuClicked");
      }
    }

    function scrolling() {
      hamburgler();
    }
