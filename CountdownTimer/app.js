const birthday = '13 December 2022';
var theWeeks = document.getElementById('weeks')
var theDays = document.getElementById('days')
var theHours = document.getElementById('hours')
var theMinutes = document.getElementById('minutes')
var theSeconds = document.getElementById('seconds')



function countdown() {
  const birthdayDate = new Date(birthday).getTime();
  const currentDate = new Date ().getTime();
  const distance = birthdayDate - currentDate
  var days = Math.floor((distance / (1000 * 60 * 60 * 24)));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  theDays.textContent = days
  theHours.textContent = hours
  theMinutes.textContent = minutes
  theSeconds.textContent = seconds
  
  if (distance < 0) {
    clearInterval(x)
  }
}

countdown()

setInterval(countdown, 1000)