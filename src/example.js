require(['jpeg'], function(Jpeg) {

	var $ = function(id) {
		return document.getElementById(id);
	};

	$('file').onchange = function() {

		var reader = new Jpeg.JpegReader({
			workerUrl: 'src/jpeg.js'
		});
		reader.onload = function() {
			reader.loadPreview();

			['exif', 'iptc', 'gps'].forEach(function(type) {
				var dl = [];
				for (var tag in reader.metadata[type]) {
					dl.push('<dt>' + tag + '</dt><dd>' + reader.metadata[type][tag] + '</dd>');
				}
				$(type).innerHTML = dl.join('');
			});
		};

		reader.onerror = function(e) {
			console.log(e);
		};

		reader.onloadpreview = function(e) {
			$('preview').src = reader.preview;
		};

		reader.load(this.files[0]);

	};
	
});
