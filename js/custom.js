jQuery( document ).ready( function () {
    function scrollNav() {
        $( '.de-modules a' ).click( function () {
            //Toggle Class

            //Animate
            $( 'html, body' ).stop().animate( {
                scrollTop: $( $( this ).attr( 'href' ) ).offset().top - 0
            }, 1000 );
            return false;
        } );
        $( '.scrollTop a' ).scrollTop();
    }
    scrollNav();

    $( 'body' ).append( '<div id="toTop" class="btn btn-info"><span class="glyphicon glyphicon-chevron-up"></span> Back to Top</div>' );
    $( window ).scroll( function () {
        if ( $( this ).scrollTop() >= 300 ) {
            $( '#toTop' ).fadeIn();
        } else {
            $( '#toTop' ).fadeOut();
        }
    } );
    $( '#toTop' ).click( function () {
        $( "html, body" ).animate( { scrollTop: 0 }, 600 );
        return false;
    } );

//    popup for video
    $( '.popup-youtube, .popup-vimeo, .popup-gmaps' ).magnificPopup( {
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    } );

    $( '#foo' ).magnificPopup( {
        delegate: 'a',
        type: 'inline',
        callbacks: {
            open: function () {

                // https://github.com/dimsemenov/Magnific-Popup/issues/125
                $( 'html' ).css( 'margin-right', 0 );

                // Play video on open:
                $( this.content ).find( 'video' )[0].play();

            },
            close: function () {

                // Reset video on close:
                $( this.content ).find( 'video' )[0].load();

            }
        }
    } );



} );