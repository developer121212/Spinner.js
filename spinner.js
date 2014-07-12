/*
* Spinner.js
* Easly add a loader to your page elements
*
* @author Raffaele Izzia izziaraffaele@gmail.com
*
*/
(function( $ ){
    var config;

    var configDefault = {
        backdrop_color : 'rgba(255, 255, 255, 0.80)',
        loader : null,
        zindex : '1018',
        start : true
    };

    var oldPosition, scope, loader, container, spinner, spinnerImage;

    var methods = {
        init : function( config ){
            // extends default configuration
            config = $.extend( {}, configDefault, config );

            if( !config.loader )
            {
                return console.error( 'Cannot initialize spinner.js without a loader image' );
            }

            // the element where the plugin was initialized
            scope  = $(this);
            $scope = scope[0];

            // the loader element
            loader = document.createElement('div');
            loader.className = 'spinnered';

            loader.style.display = 'none';
            loader.style.position = 'absolute';
            loader.style.backgroundColor = config.backdrop_color;
            loader.style.width         = '100%';
            loader.style.height        = '100%';

            loader.style.top = '0px';
            loader.style.left = '0px';

            loader.style.zIndex = config.zindex;

            // the loader container element
            container = document.createElement('div');
            container.className = 'spinnered-container';

            container.style.width = '100%';
            container.style.height = '100%';
            container.style.display = 'table';

            // the spinner element
            spinner = document.createElement('div');
            spinner.className = 'spinner-element';

            spinner.style.display = 'table-cell';
            spinner.style.width = '100%';
            spinner.style.height = '100%';
            spinner.style.verticalAlign = 'middle';

            spinnerImage = document.createElement('img');
            spinnerImage.className = 'spinner-image';

            spinnerImage.src = config.loader;
            spinnerImage.style.margin = '0 auto';
            spinnerImage.style.display = 'block';

            spinner.appendChild( spinnerImage );
            container.appendChild( spinner )
            loader.appendChild( container );

            if( config.start )
            {
                methods.start.call( this );
            }
        },
        start : function(){
            oldPosition = $scope.style.position;
            $scope.style.position = 'relative';

            scope.prepend( loader );
            $(spinner).css('vertical-align', 'center');
            $( loader ).fadeIn('fast');
        },
        stop : function(){
            scope.find( '.spinnered' ).remove();
            $scope.style.position = oldPosition;
        }
    };

    $.fn.spinner = function(methodOrOptions) {
        if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on spinner.js' );
        }
    };
})( jQuery );
