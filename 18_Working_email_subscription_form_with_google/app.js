const scriptURL =
    'https://script.google.com/macros/s/AKfycbyvsztGkM3bAGZh77L7wA2IPtpaYrVVWQLIlApKihuTZICmfU3bYKtV3pWWidiOHbk/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const body = { email: formData.get('email') };
    fetch(scriptURL, { method: 'POST', body: body })
        .then((response) => response.text())
        .then((response) => console.log('success', response))
        .catch((error) => console.error('Error!', error.message));
});
