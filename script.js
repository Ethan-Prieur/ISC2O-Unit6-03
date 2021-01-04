document.getElementById('btn').addEventListener('click', myFunction)
function myFunction () {
  let age = document.getElementById('box').value
  age = parseInt(age)
if (age >=17) {
  alert("you can see an R rated movie alone");
} else if(age >=13) {
  alert("you can see a pg 13 movie alone")
} else if (age >=5) {
  alert("you can see a G or PG movie alone")
} else {
  alert("Sorry you're too young for these things")
}
}
