# jpeg.js

Read JPEG files on the client as a [RequireJS](http://requirejs.org) module. Jpeg.js lets you:

- **read EXIF, IPTC and GPS metadata.** Currently basic tags are extracted, but more on the way.
- **show a preview of the image.** The EXIF thumbnail is used if available in order to reduce loading time.
- **Avoid blocking the main thread.** Where ppssible, workers are used to avoid locking UI (typically after selecting files).