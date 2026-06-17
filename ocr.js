const Tesseract = require('tesseract.js');

Tesseract.recognize(
    'path_to_image.jpg',
    ['ara', 'eng'],
    {
        logger: m => console.log(m)
    }
).then(({ data: { text } }) => {
    console.log(text);
});
