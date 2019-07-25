/*
    LIGHTBOX.JS - Last updated: 25.07.19, 30.05.18 (inspire)
*/
//-----------------------------------------------------------------
// LAUNCH GALLERY
//-----------------------------------------------------------------

function launchGallery() {
    $('[data-lightbox-group]').each(function() {
        var $this = $(this);
        // var groupTitle = $this.attr('data-lightbox-group');

        $this.magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            //removalDelay: 160,
            //preloader: false,
            //fixedContentPos: false,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                markup: '<div class="mfp-figure">'+
                            '<div class="mfp-close"></div>'+
                            '<div class="mfp-img"></div>'+ // `.mfp-img` div will be replaced with img tag,
                            '<div class="mfp-bottom-bar">'+
                              '<div class="mfp-title"></div>'+
                              '<div class="mfp-counter"></div>'+
                            '</div>'+
                          '</div>', // Popup HTML markup.

                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',

                titleSrc: function(item) {
                    var elString = '<div class="mb-4">';

                    if (item.el.attr('data-link')) {
                        elString += '<a class="d-block mb-1" target="_blank" style="font-size: 20px; font-weight: 600; color: #222222" href="'+ item.el.attr('data-link')+'">';
                        elString += 'READ MORE ';
                        elString += '<i class="fa fa-angle-right"></i>';
                        elString += '</a>';
                    }

                    if (item.el.attr('title')) {
                        elString += '<p class="text-muted">'+item.el.attr('title')+'</p>';
                    }

                    elString += '</div>';
                    return elString;
                }
            },
            //
            callbacks: {

                // Triggers each time when content of popup changes
                // console.log('Parsing:', template, values, item);
                markupParse: function(template, values, item) {
                    var dataLink = item.el.attr('data-link');

                    // if data-link attr is provided, allow image to open URL to it
                    if (dataLink) {
                        item.img.on('click', function(e) {
                            e.stopPropagation();
                            window.open(dataLink, '_blank');
                        })
                    }
                },

                // elementParse: function(item) {
                    // var iframe = item.src.indexOf('youtube') != -1 ||
                    //                item.src.indexOf('vimeo') != -1 ||
                    //                item.src.indexOf('maps') != -1;

                    // if (iframe) {
                    //     item.type = 'iframe';
                    // }
                // }
            }
        })
    })
}

launchGallery();

//==================================================
//
//==================================================