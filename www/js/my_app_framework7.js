/*global Framework7, Dom7 */
// fix for v1 lazy loading
var myApp = new Framework7({

        imagesLazyLoadThreshold: 99999999,
        imagesLazyLoadSequential: false,

    });


// intiation for fixing textarea resizable (CHANGED - added #)
var textarea_object = document.getElementById('chat_textarea_id');
myApp.resizableTextarea(textarea_object);

/* imported manually */


/* THIS WILL SEPARATE THE SWIPERS INTO THREE DIFFERENT ENTITIES */



/* TESTER */

//var swiper_tester = myApp.swiper('.tester_swiper_container', {
//    slidesPerView: 'auto',
//    spaceBetween: 3,
//    initialSlide: 1,
//    pagination: '.swiper-pagination'
/*  scrollbar: '.swiper-scrollbar' */
//});




// Export selectors engine
var $$ = Dom7;



    $$('.swipeout').on('swipeout:deleted', function () {
      myApp.alert('Item removed');
    });

    $$('.swipeout').on('swipeout', function (e) {
      console.log('Item opened on: ' + e.detail.progress + '%');
    });


// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

//Calendar
/*
var calendarDateFormat = myApp.calendar.create({
  inputEl: '#demo-calendar-date-format',
  dateFormat: 'DD, MM dd, yyyy'
});
*/
var myCalendar = myApp.calendar({
    input: '#calendar-input',
    dateFormat: 'M dd, yyyy',
    closeOnSelect: true
});

/* 2018-07-01 izvrisano za probu
// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    "use strict";
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
  "use strict";
  mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
  return;
}
*/

