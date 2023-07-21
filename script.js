let time = new Date().toDateString()
let timeArr = time.split(' ')
console.log(timeArr);

let day = timeArr[0]
let month = timeArr[1]
let date = timeArr[2]
let year = timeArr[3]

document.getElementById('date').innerHTML = date
document.getElementById('day').innerHTML = day
document.getElementById('month').innerHTML = month
document.getElementById('year').innerHTML = year
