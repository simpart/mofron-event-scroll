const Common = require('mofron-event-common');
const comutl = mofron.util.common;

/**
 * @file mofron-event-scroll/index.js
 * @brief scroll event
 * @license MIT
 */
module.exports = class extends Common {
    /**
     * initialize event
     * 
     * @param (mixed) short-form parameter
     *                key-value: event config
     * @short
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname('Scroll');
            this.type('scroll');
            
	    if (undefined !== prm) {
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
