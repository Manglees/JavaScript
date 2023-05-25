//1) Confirms,Boolean(готово)

// {
//     let question =[confirm('Ти робив домашку?'),confirm('Ну і як життя?'), confirm('Краще буде?')];
//     console.log(question)
// }

//2) Prompts(готово)

// {
//     let prompts = [prompt('Ведіть і\'я?'), prompt('Вкажіть Ваш вік?'), prompt('Яка у Вас погода?')];
//     prompts[4]= prompt('В тебе все норм?');
//     console.log(prompts);
// }

//3) Item access(готово)
// {
//     let name = ['Вася','Петя','Леха','Владик'];
//     let lenghtName = name.length;
//     let message =prompt(`В цьому рядку стільки значень: ${lenghtName}, введіть від 0 до цього значення`);
//     alert(name[message]);
// }

//4) Item change(готово)
// {
//     let numberMeaning = prompt('Введіть індекс масиву, числове значення');
//     let nameMeaning = prompt('Введіть, що хочете внести у масив');
//     let array = [];
//     array[numberMeaning] = nameMeaning;
//     console.log(array);
// }

//5) Таблиця множення(готово)

// {
//     const Calculator = [['0-0-0-0-0-0-0-0-0-0'],['1-2-3-4-5-6-7-8-9-10'],['2-4-6-8-10-12-14-16-18-20'],['3-6-9-12-15-18-21-24-27-30'],['4-8-12-16-20-24-28-32-36-40'],['5-10-15-20-25-30-35-40-45-50']];
//     let mnojenia = +prompt('Введіть число від 0 до 5');
//     alert(Calculator[mnojenia]);
// }

//6) Рік народження(готово) 

// {
//     let age = +prompt('Введіть ваш вік');
//     let dateOfBrith =(`${2023-age}`);
//     (age==0) ? alert("Ну і хамло") : alert(dateOfBrith);
// }

//7)Температура повітря в фаренгейтах(готово)

// {
//     let C = +prompt("Введть сюди температуру повітря у Вашій місцевості, у Цельсіях:");
//     let K = (`Ваша температура у Кельвінах: ${273+C}`);
//     alert(K);
// }

//8)Валюта, обмін(готово)

// {
//     const rate = 36.94;
//     let summa = +prompt('Вкажіть суму переводу, в грн:');
//     let obmin = +(`${summa/rate}`);
//     alert(obmin.toFixed(2) +' '+ "ваша сума в  доларах");
// }

//9) Привітвння(готово)

// {
//     let a = prompt('Як вас звати?');
//     alert(`${'Добрий день ' +a}`);
// }

//10) Метод split(готово)

// {
    
// let what = prompt('Введіть будь-яке речення');
// let words = what.split(' ');
// let slovo = prompt('Введіть слово із речення, яке хочете знайти');
// let result = words.indexOf(slovo);
//     if(result> -1){
// alert(`Ваше слово:  ${result + 1} в рядку`);
//     }
//     else{
//         alert('Такого слова у вашому реченні немає');
//     }
// }

//11) Покращений калькулятор(готово)

// {
//    const calculator = [[0,0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
//    let mnojnik1 = +prompt('Введіть число, до п\'яти:');
//    let mnojnik2 = +prompt('Введіть число, на яке хочете помножити попереднє, до п\'яти:');
//    alert('Ваш результат:'+' '+ calculator[mnojnik1][mnojnik2]);
// }

//12) Призвіще Ім'я По батькові(готово)

// {
//    let name = prompt('Введіть сюди своє ім\'я:');
//    let surname = prompt('Введіть сюди своє прізвище:');
//    let prizv = prompt('Введіть своє ім\'я по батькові:');
//    let nameZ = name.slice(0,1).toUpperCase();
//    let nameR = name.slice(1).toLowerCase();
//    let namePov = (nameZ+nameR);
//    let surnameZ = surname.slice(0,1).toUpperCase();
//    let surnameR = surname.slice(1).toLowerCase();
//    let surnamePov = (surnameZ+surnameR);
//    let prizvZ = prizv.slice(0,1).toUpperCase();
//    let prizvR = prizv.slice(1).toLowerCase();
//    let prizvPov =(prizvZ+prizvR);
//    alert(namePov+' '+surnamePov+' '+prizvPov);
   
// }

//13) Number: divide(готово)

// {
//     let math = +prompt('Введіть число,яке хочете округлити:');
//     let result =[Math.ceil(math),Math.floor(math),Math.round(math)];
//     alert('Ваше число округлене до більшого: '+ result[0]); 
//     alert('Воно ж округлене до меншого: '+ result[1]);
//     alert('Округлене по законам математики: '+ result[2]);
// }

//14) String: gopni4ek(готово)

// {
//     let str = prompt('Введіть сюди якесь речення:');
//     let result = str.split(' ').join(',блін, ');
//     alert(result);
// }

//15) String: capitalize(готово)

// {
//     let str = "cANBerRa";
//     let C = str.slice(0,1).toUpperCase();
//     let reshta = str.slice(1).toLowerCase(); 
//     let str2 = (C+reshta);
//     console.log(str2);
// }

//16) String: word count(готово)

// {
//     let what = prompt('Введіть будь ласка якесь речення:');
//     let slice = what.split(' ');
//     let index = (slice.length);
//     alert('У вашому реченні стільки слів: '+index);
// }

//17) Boolean: if(готово)

// {
//     let gender = confirm('Натисніть ок, якщо ви чоловік');
//     if(gender==true){
//         alert('Тоді можете заходити');
//     }
//     else{
//         alert('Ви жінка, вам союди не можна');
//     }

// }

//18) Ternary

// {
//     let gender = confirm('Натисніть ок, якщо ви чоловік') ? alert("Ви чоловік") : alert("Ви жінка") ;
// }

//19) 
