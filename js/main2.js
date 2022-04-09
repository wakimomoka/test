function leapyear (x) {
  if (x % 4 == 0 && x % 100 != 0 || x % 400 == 0){
  return true;
  }
  return false;
}
  
console.log(leapyear(2020));
console.log(leapyear(2021));
 