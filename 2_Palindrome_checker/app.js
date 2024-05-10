const input = document.getElementById('input');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const reset = document.getElementById('reset');

function reverseCheck(str) {
    const reversedWord = str.split('').reverse().join('');
    return reversedWord;
}

btn.addEventListener('click', function (event) {
    event.preventDefault;
    const value = input.value;
    const reverse = reverseCheck(value);
    const isPalindrome = value === reverse;
    result.textContent = isPalindrome
        ? "It's a Palindrome!"
        : 'Not a Palindrome.';
});

reset.addEventListener('click', function () {
    window.location.reload();
});
