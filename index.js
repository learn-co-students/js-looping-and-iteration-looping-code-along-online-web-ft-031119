const array = [];

function writeCards(names, occasion) {
  for (let i = 0; i < names.length; i++) {
    let phrase = `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`
    array.push(phrase);
  }

  return array
}

function countdown(count) {
  while (count >= 0) {
    console.log(count);
    count--;
  }
}
