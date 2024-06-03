const scriptURL =
    'https://script.google.com/macros/s/AKfycbxRYk61o6MS1QYf_GxN55hL-_pj08t9foWaGLjDfpvo7u5LF-UONdlsAU9Y70RaOE1L8Q/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => console.log('Success!', response))
        .catch((error) => console.error('Error!', error.message));
});
