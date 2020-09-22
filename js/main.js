// 1) На странице сделать поле ввода текста (textarea), а также кнопку Go. В поле вводим любой произвольный текст, разделенный пробелами. При нажатии на кнопку Go должно появится необходимое количество полей ввода, при этом каждое поле ввода будет заполнено одним словом из текста. 
// 2) Найти самое длинное слово, вывести его в консоль. 
// 3) С помощью имеющихся слов создать предложение ровно в 30 символов.


let btnGoEl = document.querySelector('.go-btn');
let mainE1 = document.querySelector('.main');

const textGo = () => {
  let textEl = document.getElementById('textform');
  let words = [];
  if ( mainE1.innerHTML != '') {
    while (mainE1.firstChild) {
      mainE1.removeChild(mainE1.firstChild);
    }
  }
  let wordNumb = 0;
  words[wordNumb] = '';
  for ( i = 0; i < textEl.value.length; i++) {
    if (textEl.value[i] != ' ') {
      words[wordNumb] = `${words[wordNumb]}${textEl.value[i]}`;
    } else {
      wordNumb = wordNumb + 1;
      words[wordNumb] = '';
    }
  }
  const findLongestWord = () => {
    let haveLong = 0;
    let longestWord = '';
    for ( let k = 0; k < words.length; k++) {
      if (words[k].length > haveLong) {
        haveLong = words[k].length;
        longestWord = words[k];
      }
    }
    console.log(`Самое длинное слово: ${longestWord} с количеством символов: ${haveLong}`);
  };

  findLongestWord();

  for (var i = 0; i < words.length; i++) {
    if (words[i] != '') {
      
      mainE1.innerHTML = mainE1.innerHTML + `<input type="text" class="inpt" value=${words[i]}>`;
    }
  }
  console.log(words);

};
btnGoEl.addEventListener('click', textGo);

