let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0];
let output = document.getElementById('Output');

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let day1 = birthDate.getDate();
    let month1 = birthDate.getMonth() + 1;
    let year1 = birthDate.getFullYear();

    let today = new Date();

    let day2 = today.getDate();
    let month2 = today.getMonth() + 1;
    let year2 = today.getFullYear();

    let day3, month3, year3;

    year3 = year2 - year1;

    if (month2 > month1) {
        month3 = month2 - month1;
    } else {
        year3--;
        month3 = 12 - month2 - month1;
    }

    if (day2 >= day1) {
        day3 = day2 - day1;
    } else {
        month3 = 11;
        year3--;
    }
    output.innerHTML = `You are ${year3} years, ${month3} months and ${day3} days old.`;
    output.style.display = 'block';
}
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
document.getElementById('date').addEventListener('click', function () {
    this.showPicker();
});
