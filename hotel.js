$(document).ready(function(){
    //variables
    var inputValue;
    var outputValue;
    var outputDay;
    var outputMon;
    var outputMonth;
    var outputYear;

    // Define var
    var $htmlAndBody;
    var $scrollToTopButton;
    var $hamburger;
    var $hamburgerOpened;
    var $slideDown;
    var $webTemplates;
    var $drop1;
    var $Drop1;
    var $moreWebTemplates;
    var $drop2;
    var $Drop2;
    var $checkInInput;
    var $checkOutInput;
    var $display1;
    var $display2;
    var $month1;
    var $month2;
    var $datepicker;

    // Constant
    var scrollToTopSettings = {
        showPoint: 600,
        toggleAnimationDuration: 10,
        scrollAnimationDuration: 200,
    }

    /**
     * Init elements.
     */
    function initElements() {
        $htmlAndBody = $('html, body');
        $scrollToTopButton = $('.js-scroll-to-top');
        $hamburger = $(".hamburger");
        $hamburgerOpened = "hamburger-opened"
        $ham1 = $("#W1");
        $ham2 = $("#W2");
        $ham3 = $("#W3");
        $slideDown = $(".slide-down-bar");
        $webTemplates = $(".web-templates");
        $drop1 = $(".drop1");
        $Drop1 = $(".Drop1");
        $moreWebTemplates = $(".more-web-templates");
        $drop2 = $(".drop2");
        $Drop2 = $(".Drop2");
        $checkInInput = $(".checkInInput");
        $checkOutInput = $(".checkOutInput");
        $display1 = $(".display1");
        $display2 = $(".display2");
        $month1 = $(".month1");
        $month2 = $(".month2");
        $datepicker = $(".ui-datepicker");
    }

    /**
     * Scroll to top
     */
    function scrollToTop() {
        $htmlAndBody.animate({ scrollTop: 0 }, scrollToTopSettings.scrollAnimationDuration);
    }

    /**
     * Toggle scroll to top btn.
     */
    function toggleScrollToTopBtn() {
        if($(window).scrollTop() >= scrollToTopSettings.showPoint){
            $scrollToTopButton.show(scrollToTopSettings.toggleAnimationDuration);
        }else {
            $scrollToTopButton.hide(scrollToTopSettings.toggleAnimationDuration);
        }
    }

    /**
     * On window scroll.
     */
    function onWindowScroll() {
        toggleScrollToTopBtn();
    }

    /**
     * Init events.
     */
    function initEvents() {
        $scrollToTopButton.on('click', scrollToTop);
        $(window).on('scroll',onWindowScroll);
        $hamburger.click(toggleHamburgerClass);
        $hamburger.click(dropSlideDown);
    }

    /**
     * Init app.
     */
    function init() {
        initElements();
        initEvents();
        webTemplates();
        moreWebTemplates();
        datepickerThing();
    }

    // Init app
    init();

    /**
     * toggless class with animations to hamburger
     */
    function toggleHamburgerClass() {
        $hamburger.toggleClass($hamburgerOpened);
    }

    /**
     * drops slide-down-bar
     */
    function dropSlideDown() {
        $slideDown.slideToggle("slow");
    }

    /**
     * drop down menu will appear and dissapear depending on the cursor movement
     */
    function webTemplates() {
        $webTemplates.mouseenter(drop1Show);
        $webTemplates.mouseleave(drop1Hide);
        $drop1.mouseenter(drop1Show);
        $drop1.mouseleave(drop1Hide);
    }

    /**
     * drop down menu will appear
     */
    function drop1Show() {
        $drop1.css("display","inherit");
        $Drop1.css("display","inherit");
    }


    /**
     * drop down menu will dissapear
     */
    function drop1Hide() {
        $drop1.css("display","none");
        $Drop1.css("display","contents");
    }

    /**
     * drop down menu will appear and dissapear depending on the cursor movement
     */
    function moreWebTemplates() {
        $moreWebTemplates.mouseenter(drop2Show);
        $moreWebTemplates.mouseleave(drop2Hide);
        $drop2.mouseenter(drop2Show);
        $drop2.mouseleave(drop2Hide);
    }

    /**
     * drop down menu will appear
     */
    function drop2Show() {
        $drop2.css("display","inherit");
        $Drop2.css("display","inherit");
    }


    /**
     * drop down menu will dissapear
     */
    function drop2Hide() {
        $drop2.css("display","none");
        $Drop2.css("display","contents");
    }

    /**
     * datepickers
     */
    function datepickerThing(){
        datepickerStart($checkInInput, $display1, $month1);
        datepickerStart($checkOutInput, $display2, $month2);
    }

    /**
     * datepicker
     */
    function datepickerStart(Input, displayDay, displayMonth) {
        Input.datepicker({
            beforeShow: function(){
                setTimeout(function(){
                    $('.ui-datepicker').css('z-index', 99999999999999);
                }, 0);
            },
            showOtherMonths: true,
            minDate: new Date("2019/4/5"),
            maxDate: new Date("2020/4/5"),
            dateFormat: "d-M-yy",
            onClose: function() {
                input(Input);
                output();
                assignDay(displayDay);
                assignMonth(displayMonth);
            }
            });
    }

    /**
     * gives value to inputValue variable 
     */
    function input(Input) {
        if(Input.val() === ""){
        } else {
        inputValue = Input.val();
        Input.val("");
        }
    }

    /**
     * gives value to outputDay
     * gives value to outputMonth
     * gives value to outputYear
     */
    function output(){
        outputValue = inputValue.split("-");
        outputDay = outputValue[0];
        outputMonth = outputValue[1];
        outputYear = outputValue[2];
    }
    
    /**
     * displays days
     */
    function assignDay(displayDay){
        displayDay.text(outputDay);
    }

    /**
     * changes the text of months
     */
    function assignMonth(displayMonth) {
        displayMonth.text(outputMonth);
    }
});