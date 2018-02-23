jQuery( document ).ready( function () {
    function scrollNav() {
        $( '.de-modules a' ).click( function () {
            //Toggle Class
            $( ".active" ).removeClass( "active" );
            $( this ).closest( 'li' ).addClass( "active" );
            var theClass = $( this ).attr( "class" );
            $( '.' + theClass ).parent( 'li' ).addClass( 'active' );
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
} );