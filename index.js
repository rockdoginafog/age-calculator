const form = document.querySelector('.form')
const formBtn = document.querySelector('.arrow-btn')
const yearsOutput = document.querySelector('.years-output')
const yearsInput = document.querySelector('.year')
const monthsOutput = document.querySelector('.months-output')
const monthsInput = document.querySelector('.month')
const daysOutput = document.querySelector('.days-output')
const daysInput = document.querySelector('.day')
const errorDay = document.querySelector('.error-day')
const errorMonth = document.querySelector('.error-month')
const errorYear = document.querySelector('.error-year')
const dayText = document.querySelector('.p-day')
const monthText = document.querySelector('.p-month')
const yearText = document.querySelector('.p-year')

daysInput.addEventListener("input", function() {
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
    }
    });

monthsInput.addEventListener("input", function() {
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
    }
    });

yearsInput.addEventListener("input", function() {
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
    }
    });


formBtn.addEventListener('click', () =>{
    let setDay = daysInput.value
    let setMonth = monthsInput.value - 1
    let setYear = yearsInput.value
    let now = new Date()
    let newDate = new Date(setYear, setMonth, setDay)
    const ageInMilliseconds = now - newDate
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const years = Math.floor(ageInMilliseconds / millisecondsInYear);
    const remainingMilliseconds = ageInMilliseconds % millisecondsInYear;
    const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30.44;
    const months = Math.floor(remainingMilliseconds / millisecondsInMonth);
    const remainingDays = Math.floor((remainingMilliseconds % millisecondsInMonth) / (1000 * 60 * 60 * 24));

    if(daysInput.value == 0 || daysInput.value > 31){
        dayText.classList.add('red')
        daysInput.classList.add('red')
        errorDay.classList.remove('hidden')
        errorDay.classList.add('red')
    }
    else{
        dayText.classList.remove('red')
        daysInput.classList.remove('red')
        errorDay.classList.add('hidden')
        daysOutput.innerHTML = remainingDays
    }
    if(monthsInput.value == 0 || monthsInput.value > 12){
        monthText.classList.add('red')
        monthsInput.classList.add('red')
        errorMonth.classList.remove('hidden')
        errorMonth.classList.add('red')
    }
    else{
        monthText.classList.remove('red')
        monthsInput.classList.remove('red')
        errorMonth.classList.add('hidden')
        monthsOutput.innerHTML = months
    }
    if(yearsInput.value == 0 || yearsInput.value > 2023){
        yearText.classList.add('red')
        yearsInput.classList.add('red')
        errorYear.classList.remove('hidden')
        errorYear.classList.add('red')
    }
    else{
        yearText.classList.remove('red')
        yearsInput.classList.remove('red')
        errorYear.classList.add('hidden')
        yearsOutput.innerHTML = years
    }
})