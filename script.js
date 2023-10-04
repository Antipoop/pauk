const clicks = () => {
    $("button").click(function() {
        $('html,body').animate({
            scrollTop: $("#us").offset().top},
            'slow');
    });
};