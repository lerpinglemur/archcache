/**
 * Item within the Cache.
 */
module.exports = class Item {

	/**
	 * @constructor
	 * @param {string} key 
	 * @param {*} data 
	 * @param {boolean} [dirty=true] 
	 */
	constructor( key, data, dirty=true ) {

		this.key = key;

		this.lastAccess = Date.now();

		this.dirty = dirty;
		if ( dirty ) this.lastSave = 0;
		else this.lastSave = this.lastAccess;

		this.data = data;

	}

	/**
	 * Updates the data stored and sets the last access time
	 * to the current time.
	 * @param {*} data - data stored.
	 */
	update( data ) {

		this.data = data;
		this.lastAccess = Date.now();
		this.dirty = true;

	}

	/**
	 * Mark the data as having been saved at the given time.
	 * @param {number} [time=0] unix timestamp of save time.
	 */
	markSaved( time=0 ) {
		this.lastSave = time || Date.now();
		this.dirty = false;
	}

}