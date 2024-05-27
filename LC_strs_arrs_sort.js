  // 1. Sentence Smash (8 kyu)

  // Напишите функцию, которая принимает массив слов и возвращет предложение

  // Пример:
  // ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
 
  let words = ['hello', 'world', 'this', 'is', 'great'];
   
  function smash(words) {
    // Ваш код
    return words.join(' ');
  }
  
  console.log(smash(words));
  
  


  // 2. Sum of Minimums! (7 kyu)

  //  Дан двумерный массив (вложенный) размером m * n, ваша задача найти сумму
  // минимальных значений каждого массива.

  // Пример:
  // [ [ 1, 2, 3, 4, 5 ]        #  Минимальное значение - 1
  // , [ 5, 6, 7, 8, 9 ]        #  Минимальное значение - 5
  // , [ 20, 21, 34, 56, 100 ]  #  Минимальное значение - 20
  // ]
  
  // Функция должна вернуть 26 потому что сумма минимальных значений - 1 + 5 + 20 = 26.
const testArr = [ [ 1, 2, 3, 4, 5 ],[ 5, 6, 7, 8, 9 ] , [ 20, 21, 34, 56, 100 ]]
  // Примечание: В массиве всегда положительные, не нулевые, не пустые значения.

  function sumOfMinimums(arr) {
    // Ваш код
    
    
    let mins = [];
    for(let i = 0; i < arr.length; i++) {
        let min = Math.min(...arr[i]);
        mins.push(min);
    }
    return mins.reduce((acc, el) => acc+= el);
  };
  
  console.log(sumOfMinimums(testArr));
  
  


  // 3. Stop gninnipS My sdroW! (6 kyu)

  // Напишите функцию, которая принимает строку из одного или нескольких слов
  // и возращает ту же строку, но все слова содержащие 5 или более букв, меняются местами
  // (как в названии задачи).
  // Передаваемые строки будут состоять только из букв и пробелов.
  // Пробелы будут включены только в том случае, если присутствует более одного слова.

  // Пример:
  // "Hey fellow warriors"  --> "Hey wollef sroirraw"
  // "This is a test        --> "This is a test"
  // "This is another test" --> "This is rehtona test"
let str1 = "Hey fellow warriors";
let str2 = "This is a test";
  function spinWords(string) {
    // Ваш код
    
    let arr = string.split(' ');
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length >= 5) {
          arr[i] = arr[i].split('');  
          arr[i] = arr[i].reverse().join('');
        } 
    }
 
    return arr.join(' ');
  };
  console.log(spinWords(str1));
  console.log(spinWords(str2));
 
 
 
 
  // 4. Sort by Last Char (7 kyu)

  // Учитывая данную строку, нужно вернуть массив слов, отсортированный в алфавитном
  // порядке по последнему символу каждого слова.
  // Если у двух слов одна и та же последняя буква, возрвращаемый массив должен отображать
  // их в том порядке, в котором они появляются в данной строке.

  //   Пример:
  // "man i need a taxi up to ubud"  -->  ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
  // 'what time are we climbing up the volcano'  -->  ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
  // 'take me to semynak'  -->  ['take', 'me', 'semynak', 'to']
let str1 = "man i need a taxi up to ubud";
let str2 = 'what time are we climbing up the volcano';
  function last(x) { 
    // Ваш код
    let arr = x.split(',');
    return arr.sort((a,b) => a[a.length - 1] > b[b.length - 1]);
  }
  console.log(last(str1));
  console.log(last(str2));
  
  
  
  

  // 5. Isograms (7 kyu)

  //  Изограмма - это слово, в котором нет повторяющихся букв, как последовательных, так и
  //  не последовательных. Реализуйте функцию, которая определяет, является ли строка
  //  (содержащая только буквы), изограммой.
  //  Не обращайте внимания на регистр букв!
  //  В данном случае пустая строка - изограмма.

  // Пример:
  // "Dermatoglyphics" --> true
  // "aba" --> false
  // "moOse" --> false (ignore letter case)

  function isIsogram(str) {
    // Ваш код
  }
  
  


  // 6. Likes Vs Dislikes (7 kyu)

  //  На youtube есть кнопки 'нравится' и 'не нравится'.
  //  Они настроены таким образом, что видео не может нравиться и не нравиться одновременно.
  //  Нажатие кнопки которая уже активна, отменяет нажатие.
  //  Если вы нажмете кнопку "Нравится" после нажатия кнопки "не нравится",
  //  кнопка "нравится" перезапишет предыдущее состояние "Не нравится".
  //  То же самое верно и в обратном случае.
  //  Создайте функцию, которая принимает список входных данных кнопок и возращает
  //  финальное значение.

  //  Пример:
  //  likeOrDislike([`Dislike`]) => `Dislike`
  //  likeOrDislike([`Like`,`Like`]) => `Nothing`
  //  likeOrDislike([`Dislike`,`Like`]) => `Like`
  //  likeOrDislike([`Like`,`Dislike`,`Dislike`]) => `Nothing`

  //  Примечание:
  //  Если ни одна кнопка в данный момент не активна, ничего не возвращайте (Nothing).
  //  Если список пуст, ничего не возвращайте (Nothing).

  function likeOrDislike(buttons) {
    // Ваш код
  }




  // 7. Sort the odd. (6 kyu)

  // Вам будет предоставлен массив чисел.
  // Необходимо отсортировать нечетные числа в порядке возрастания,
  // оставив четные числа на их первоначальных позициях.

  // Пример:
  // [7, 1]  =>  [1, 7]
  // [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
  // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

  function sortArray(array) {
    // Ваш код
  }




  // 8. Create Phone Number (6 kyu)

  // Напишите функцию, которая принимает массив из 10 чисел (от 0 до 9)
  // И возвращает строку из этих чисел в виде телефонного номера.

  // Пример:
  // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"

  // Для выполнения этой задачи возвращаемый формат должен быть правильным.
  // Не забудьте поставить пробел после закрывающих скобок!

  function createPhoneNumber(numbers) {
    // Ваш код
  }