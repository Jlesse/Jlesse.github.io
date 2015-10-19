
    var $window = $(window);
    var width = $window.width();
    var height = $window.height();
    var leftShift = 0;
    var downShift = 0;
    // setInterval(function () {
    //     if ((width != $window.width()) || (height != $window.height())) {

    //             leftShift -= width - $window.width();

    //         width = $window.width();
    //         height = $window.height();

    //         $("#blogFoot").animate({right: leftShift+"px"});
    //     }
    // }, 300);
      setInterval(function () {
        if ((width != $window.width()) || (height != $window.height())) {
            if ($window.width() < width){
                downShift += 15;
            }
            else{
                downShift -=15;
            }

            leftShift -= width - $window.width();

            width = $window.width();
            height = $window.height();

            $("")
            $("#aboutMeFoot").animate({right: leftShift+"px",
                                       top: downShift+"px" });
        }
    }, 300);