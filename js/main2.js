function leapyear (x//変数名はわかりやすいように) {
  if (x % 4 == 0 && x % 100 != 0 || x % 400 == 0){
    return "閏年です";
    //基本は関数作るときはreturn

  }//ifそれ以外はelseつかう
  return console.log("閏年ではありません");

}
  
console.log(leapyear(2020));
console.log(leapyear(2021));
 