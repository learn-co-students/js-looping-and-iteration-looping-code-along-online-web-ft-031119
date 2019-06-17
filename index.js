// Code your solutions in this file
function writeCards(array, name){
  for (let i = 0; i < array.length; i++) {
    array[i]= `Thank you, ${array[i]}, for the wonderful surprise gift!`;

  }

  return array;
}

function countdown(number){
  for (let countdown = number; countdown >= 0; countdown--) {
  console.log(countdown);
}


}
