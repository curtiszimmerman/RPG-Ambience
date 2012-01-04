Array.prototype.first = function(predicate) {
	for ( var i = 0; i < this.length; i++ ) {
		var value = this[i];
		if ( predicate(value) ) {
			return value;
		}
	}
	return null;
};

String.prototype.startsWith = function(prefix) {
	return this.indexOf(prefix) === 0;
};