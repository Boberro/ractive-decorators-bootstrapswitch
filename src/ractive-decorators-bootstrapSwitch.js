/*

	ractive-decorators-bootstrapSwitch
	=====================================================

	Version <%= pkg.version %>.

	<< description goes here... >>

	==========================

	Troubleshooting: If you're using a module system in your app (AMD or
	something more nodey) then you may need to change the paths below,
	where it says `require( 'ractive' )` or `define([ 'ractive' ]...)`.

	==========================

	Usage: Include this file on your page below Ractive, e.g:

	    <script src='lib/ractive.js'></script>
	    <script src='lib/ractive-decorators-bootstrapSwitch.js'></script>

	Or, if you're using a module loader, require this module:

	    // requiring the plugin will 'activate' it - no need to use
	    // the return value
	    require( 'ractive-decorators-bootstrapSwitch' );

	<< more specific instructions for this plugin go here... >>

*/

(function ( global, factory ) {

    'use strict';

    // AMD environment
    if (typeof define === 'function' && define.amd) {
        define([ 'ractive', 'jquery' ], factory);
    }

    // Common JS (i.e. node/browserify)
    else if (typeof module !== 'undefined' && module.exports && typeof require === 'function') {
        factory(require('ractive'), require('jquery'));
    }

    // browser global
    else if (global.Ractive && global.jQuery) {
        factory(global.Ractive, global.jQuery);
    }

    else {
        throw new Error('Could not find Ractive or jQuery! It must be loaded before the ractive-decorators-bootstrapSwitch plugin');
    }

}( typeof window !== 'undefined' ? window : this, function ( Ractive, $ ) {

    'use strict';

    /* plugin code goes here */

    var bootstrapSwitchDecorator = function (node, options) {
        if (typeof options === 'undefined') {
            options = bootstrapSwitchDecorator.options;
        }
        $(node).bootstrapSwitch(options);

        return {
            teardown: function () {
                $(node).bootstrapSwitch('destroy');
            }
        };
    };

    bootstrapSwitchDecorator.options = {};

    Ractive.decorators.bootstrapSwitch = bootstrapSwitchDecorator;

}));
