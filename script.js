// connects "Age and day" button to "checking" function
document.getElementById('button').addEventListener('click', checking)
let userAge = 0
let weekDay = 0

function checking () {
  // Get userAge and converts it to an integer
  userAge = document.getElementById('input').value
  weekDay = document.getElementById('enter').value
  userAge = parseInt(userAge)

  // checking the user age and day to see if they have student pricing
  if ((weekDay === 'tuesday') || (weekDay === 'thursday') || (userAge >= 12 && userAge <= 21)) {
    document.getElementById('answer').innerHTML = 'You get student pricing!'
  } else {
    document.getElementById('answer').innerHTML = 'You get regular pricing'
  }
}
