/*
    MAIN.JS - Last updated: 25.07.19, 10.04.19, 06.10.16
*/
//-----------------------------------------------------------------
// ON LOAD
//-----------------------------------------------------------------

$(window).on('load', function() {
    // $('html').addClass('has-loaded');
    $('[data-masonry]').masonry();
});

//-----------------------------------------------------------------
// MODAL - 06.12.17
//-----------------------------------------------------------------

// https://github.com/1000hz/bootstrap-validator/issues/336
// PROBLEMS WITH MODAL - hot patch
$('#modal-enquiry').on('shown.bs.modal', function () {
    $(this).find('form').validator('destroy').validator()
});

var enquiry = getParameterByName('enquiry'); // true?

// https://v4-alpha.getbootstrap.com/components/modal/
// ?enquiry=true
if (enquiry) {
    $('#modal-enquiry').addClass('is-success');
    // launch modal manually
    $('#modal-enquiry').modal('show');
}

//==================================================
// GET QUERY STRING IN URL
// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
//==================================================

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//-----------------------------------------------------------------
// MATCH HEIGHT
//-----------------------------------------------------------------

$('[data-match-height]').matchHeight({
     byRow: false,
     property: 'height',
     target: null,
     remove: false,
     mq: "(min-width: 768px)"
 });

//-----------------------------------------------------------------
// HEADROOM.js
//-----------------------------------------------------------------

$(".global-header").headroom({
    // vertical offset in px before element is first unpinned
    offset : 52,
    // scroll tolerance in px before state changes
    tolerance : 0,
    // or you can specify tolerance individually for up/down scroll
    tolerance : {
        up : 5,
        down : 0
    },
    // css classes to apply
    classes : {
        // when element is initialised
        initial : "headroom",
        // when scrolling up
        pinned : "headroom--pinned",
        // when scrolling down
        unpinned : "headroom--unpinned",
        // when above offset
        top : "headroom--top",
        // when below offset
        notTop : "headroom--not-top",
        // when at bottom of scoll area
        bottom : "headroom--bottom",
        // when not at bottom of scroll area
        notBottom : "headroom--not-bottom"
    },
    // element to listen to scroll events on, defaults to `window`
    // scroller : someElement,
    // callback when pinned, `this` is headroom object
    onPin : function() {},
    // callback when unpinned, `this` is headroom object
    onUnpin : function() {},
    // callback when above offset, `this` is headroom object
    onTop : function() {},
    // callback when below offset, `this` is headroom object
    onNotTop : function() {},
    // callback when at bottom of page, `this` is headroom object
    onBottom : function() {},
    // callback when moving away from bottom of page, `this` is headroom object
    onNotBottom : function() {}
});

//==================================================
//
//==================================================