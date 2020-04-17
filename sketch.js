function numToBin(number) {
  var bin = "";

  while(number > 0) {
    bin = number%2 + bin;
    number = Math.floor(number/2);
  }

  return bin;

}

document.getElementById("demo").innerHTML = numToBin(76); //indsæt vilkårlig tal for at teste det :3