//Number: odd(done)

// {
//     let question = +prompt('Please enter an even number:');
//     if(question%2===0){
//         alert('Thank you for the correct data')
//     }
//     else{
//         alert('H\'es not lying, the bastard')
//     }

// }

//String: lexics(готово)

// {
//     let question = prompt('Enter the text wiht incorrect words to check it:');
//     let result = [question.split(' ').includes('блін'), question.split(' ').indexOf('блін')]
//     if(result[0]==true){
//     alert(`У тексті, який Ви ввели є некоректне слово. Його позиція в рядку: ${result[1]+1}`);
//     }
//     else{
//         alert('Ваш текст чистий')
//     }

// }

// Boolean: if(готово)

// {
//     let gender = confirm('Натисніть ок, якщо ви чоловік');
//     if(gender==true){
//         alert('Тоді можете заходити');
//     }
//     else{
//         alert('Ви жінка, вам союди не можна');
//     }

// Ternary

// {
//     let gender = confirm('Натисніть ок, якщо ви чоловік') ? alert("Ви чоловік") : alert("Ви жінка") ;
// }

// //Boolean(готово)

// {
//      let question =[confirm('Ти робив домашку?'),confirm('Ну і як життя?'), confirm('Краще буде?')];
//      console.log(question)
// }

//Login and password(готово)

// {
//     const correctLogin = 'admin';
//     const correctPassword = 'qwerty';
//     if(prompt('Введіть у це поле свій логін:')==correctLogin){
//         alert('Ви ввели правильний логін, Вітаю!');
//          if(prompt('Введіть пароль:')==correctPassword){
//             alert('Ви ввели усі дані правильно, Вітаю!');
//         }
//         else{
//             alert('Ви ввели не правильний пароль')
//         }
//     }
//     else{
//         alert('Ви ввели не правильний логін(');
//     }
// }

//Login and password ternary(готово)

// {
    
//     let correctLogin = 'admin';
//     let correctPassword = 'qwerty';
//     (prompt('Введіть у це поле свій логін:')==correctLogin)? (alert('Вітаю, ви ввели правильний логін!'),(prompt('Введіть пароль:')==correctPassword)?alert('Ви ввели усі дані правильно, Вітаю!'):alert('Ви ввели не правильний пароль(')): alert('Упс, ви ввели щось не правильно(');
// }

//Scissors(не готово)

// {
//     let admin = prompt("Граємо в гру 'камінь-ножиці-бумага', Ваш вибір:");
//     if(admin=='камінь'){
//         admin=3
//     }
//     else{
//         if(admin=='ножиці'){
//             admin=6
//         }
//     }
//     if(admin=='бумага'){
//         admin=10
//     }
//    let rnd1 = Math.random()*10;
//    rnd = Math.round(rnd1);
//    (rnd<3)? alert('А я ставлю камінь'):(rnd<6)? alert('А я ставлю ножиці'):(rnd<10)? alert('А я ставлю папір'):alert('Error');
//    (admin>rnd)?alert('Ви виграли!'):(admin<rnd)?alert('Ви програли!'):(admin==rnd)?alert('Нічия'):''
// }
    
