const date = new Date();
const currentYear = date.getFullYear();
const today = date.getDate();
const currentMonth = date.getMonth() + 1;

const inputSubmit = document.querySelector('.submit')
const label = document.querySelectorAll('.label')
const dayInput = document.querySelector('#day-input')
const monthInput = document.querySelector('#month-input')
const yearInput = document.querySelector('#year-input')
const dayValue = document.querySelector('.day-value')
const monthValue = document.querySelector('.month-value')
const yearValue = document.querySelector('.year-value')
const errorMessage = document.querySelectorAll('.error')
const months = [31,28,31,30,31,30,31,31,30,31,30,31];

inputSubmit.addEventListener('click', function () {
    event.preventDefault()

    if ((monthInput.value == 02 | monthInput.value == 04 | monthInput.value == 06 | monthInput.value == 09 | monthInput.value == 11) && dayInput.value > 30) {
        errorMessage[0].innerHTML = 'Must be a valid date'
        label[0].style.color = 'hsl(0, 100%, 67%)'
        label[1].style.color = 'hsl(0, 100%, 67%)'
        label[2].style.color = 'hsl(0, 100%, 67%)'
        monthInput.style.border = '2px solid hsl(0, 100%, 67%)'
        dayInput.style.border = '2px solid hsl(0, 100%, 67%)' 
        yearInput.style.border = '2px solid hsl(0, 100%, 67%)'  
        monthValue.innerHTML = "--"
        dayValue.innerHTML = "--"
        yearValue.innerHTML = "--"
        return
    } else {
        errorMessage[0].innerHTML = ''
        monthInput.style.border = '2px solid hsl(0, 0%, 86%)'
        dayInput.style.border = '2px solid hsl(0, 0%, 86%)' 
        yearInput.style.border = '2px solid hsl(0, 0%, 86%)'
        label[0].style.color = 'hsl(0, 1%, 44%)'
        label[1].style.color = 'hsl(0, 1%, 44%)'
        label[2].style.color = 'hsl(0, 1%, 44%)'  
    }

    if (yearInput.value > currentYear | yearInput.value < 1920) {
        errorMessage[2].innerHTML = 'Must be a valid year'
        label[2].style.color = 'hsl(0, 100%, 67%)'
        yearInput.style.border = '2px solid hsl(0, 100%, 67%)'  
        monthValue.innerHTML = "--"
        dayValue.innerHTML = "--"
        yearValue.innerHTML = "--"
        return
    } else {
        errorMessage[2].innerHTML = ''
        yearInput.style.border = '2px solid hsl(0, 0%, 86%)'
        label[2].style.color = 'hsl(0, 1%, 44%)'  
    }

    if (monthInput.value > currentMonth && yearInput.value == currentYear) {
        errorMessage[1].innerHTML = 'Must be a valid month'
        label[1].style.color = 'hsl(0, 100%, 67%)'
        monthInput.style.border = '2px solid hsl(0, 100%, 67%)'
        monthValue.innerHTML = "--"
        dayValue.innerHTML = "--"
        yearValue.innerHTML = "--"
        return
    } else {
        monthInput.style.border = '2px solid hsl(0, 0%, 86%)'
        errorMessage[1].innerHTML = ''
        label[1].style.color = 'hsl(0, 1%, 44%)'  
    }

    if (dayInput.value > today && dayInput.value > 31 && monthInput.value == currentMonth && yearInput.value == currentYear) {
        errorMessage[0].innerHTML = 'Not born yet'
        label[0].style.color = 'hsl(0, 100%, 67%)'
        monthInput.style.border = '2px solid hsl(0, 100%, 67%)'
        dayInput.style.border = '2px solid hsl(0, 100%, 67%)' 
        yearInput.style.border = '2px solid hsl(0, 100%, 67%)'  
        monthValue.innerHTML = "--"
        dayValue.innerHTML = "--"
        yearValue.innerHTML = "--"
        return
    } else {
        errorMessage[0].innerHTML = ''
        monthInput.style.border = '2px solid hsl(0, 0%, 86%)'
        dayInput.style.border = '2px solid hsl(0, 0%, 86%)' 
        yearInput.style.border = '2px solid hsl(0, 0%, 86%)'  
        label[0].style.color = 'hsl(0, 1%, 44%)' 
    }

    if (monthInput.value >= 13 | monthInput.value == '') {
        errorMessage[1].innerHTML = 'Must be a valid month'
        label[1].style.color = 'hsl(0, 100%, 67%)'
        monthInput.style.border = '2px solid hsl(0, 100%, 67%)'
        monthValue.innerHTML = "--"
        dayValue.innerHTML = "--"
        yearValue.innerHTML = "--"
        return
    } else {
        errorMessage[1].innerHTML = ''
        monthInput.style.border = '2px solid hsl(0, 0%, 86%)'
        label[1].style.color = 'hsl(0, 1%, 44%)' 
    }

    if (dayInput.value < 01) {
        errorMessage[0].innerHTML = 'Must be a valid day'
        label[0].style.color = 'hsl(0, 100%, 67%)'
        dayInput.style.border = '2px solid hsl(0, 100%, 67%)' 
        monthValue.innerHTML = "--"
        dayValue.innerHTML = "--"
        yearValue.innerHTML = "--"
        return
    } else {
        errorMessage[0].innerHTML = ''
        dayInput.style.border = '2px solid hsl(0, 0%, 86%)' 
        label[0].style.color = 'hsl(0, 1%, 44%)'
    }

    if (dayInput.value >= 32) {
        errorMessage[0].innerHTML = 'Must be a valid day'
        dayInput.style.border = '2px solid hsl(0, 100%, 67%)'
        label[0].style.color = 'hsl(0, 100%, 67%)' 
        monthValue.innerHTML = "--"
        dayValue.innerHTML = "--"
        yearValue.innerHTML = "--"
        return
    } else {
        errorMessage[0].innerHTML = ''
        dayInput.style.border = '2px solid hsl(0, 0%, 86%)'
        label[0].style.color = 'hsl(0, 1%, 44%)' 
    }

    yearValue.innerHTML = currentYear - yearInput.value/1

    if (currentMonth >= monthInput.value) {
        monthValue.innerHTML = currentMonth - monthInput.value
    } else {
        yearValue.value--;
        monthValue.innerHTML = 12 + currentMonth - monthInput.value
    }

    if (today >= dayInput.value) {
        dayValue.innerHTML = today/1 - dayInput.value/1
    } else {
        monthValue.value--;
        let Day = months[currentMonth - 2]
        dayValue.innerHTML = Day + today - dayInput.value/1;
        if (monthValue.value < 0) {
            monthValue = 11;
            yearValue.value--;
        }
    }
    

})