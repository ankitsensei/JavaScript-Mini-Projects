const scriptURL =
    'https://script.google.com/macros/s/AKfycbzoOCCCSfNWWkD0tHXXf2arhmqYnkHqF19tQcCX31W1yeBEg05CmTbqF2MvBh7ToGYC/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => console.log('Success!', response))
        .catch((error) => console.error('Error!', error.message));
});
