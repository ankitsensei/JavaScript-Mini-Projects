const scriptURL =
    'https://script.google.com/macros/s/AKfycbysHrxWGE7REzbkl8lbrj0UsU0ftrSitxbdRQ4G2xlgnQ9HPe3hStcdjalYMMBTiSq_Yw/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => console.log('Success!', response))
        .catch((error) => console.error('Error!', error.message));
});
