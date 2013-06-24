// This file is part of RPG Ambience
// Copyright 2012-2013 Jakob Kallin
// License: GNU GPL (http://www.gnu.org/licenses/gpl-3.0.txt)

Ambience.TestBackend = function() {
};

Ambience.TestBackend.prototype = {
	nextId: 0,
	listAdventures: function() {
		return when.parallel([
			function() {
				return when.delay(100, 'Adventure one');
			},
			function() {
				return when.delay(200, 'Adventure two');
			}
		]);
	},
	downloadFile: function(id) {
		return when.delay(100, {
			id: id,
			contents: JSON.stringify({ id: id })
		});
	},
	uploadFile: function(file) {
		return when.delay(100);
	},
	selectImage: function() {
		var deferred = when.defer();
		
		setTimeout(function() {
			deferred.notify(1);
		}, 100);
		
		setTimeout(function() {
			var media = {
				id: 'image',
				url: 'image.svg',
				name: 'image',
				mimeType: 'image/svg+xml'
			};
			deferred.resolve(media);
		}, 200);

		return deferred.promise;
	}
};