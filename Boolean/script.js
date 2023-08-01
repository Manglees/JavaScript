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

//String: lexics(done)

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

// Boolean: if(done)

// {
//     let gender = confirm('Натисніть ок, якщо ви чоловік');
//     if(gender==true){
//         alert('Тоді можете заходити');
//     }
//     else{
//         alert('Ви жінка, вам союди не можна');
//     }

// Ternary(done)

// {
//     let gender = confirm('Натисніть ок, якщо ви чоловік') ? alert("Ви чоловік") : alert("Ви жінка") ;
// }

// //Boolean(done)

// {
//      let question =[confirm('Ти робив домашку?'),confirm('Ну і як життя?'), confirm('Краще буде?')];
//      console.log(question)
// }

//Login and password(done)

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

//Login and password ternary(done)

// {
    
//     let correctLogin = 'admin';
//     let correctPassword = 'qwerty';
//     (prompt('Введіть у це поле свій логін:')==correctLogin)? (alert('Вітаю, ви ввели правильний логін!'),(prompt('Введіть пароль:')==correctPassword)?alert('Ви ввели усі дані правильно, Вітаю!'):alert('Ви ввели не правильний пароль(')): alert('Упс, ви ввели щось не правильно(');
// }

// Scissors(done)

// {
//     let admin = prompt("Граємо в гру 'камінь-ножиці-бумага', Ваш вибір:");
//    let rnd = Math.random()*2;
//    rnd = Math.round(rnd);
//    if(rnd == 0){
//     alert('А я ставлю камінь')
//     rnd = 'камінь'
//    }
//    else if(rnd == 1){
//     alert('А я ставлю ножиці')
//     rnd = 'ножиці'
//    }
//    else if(rnd = 2){
//     alert('А я ставлю бумагу')
//     rnd = 'бумага'
//    }
//    if (admin == rnd) {
//     alert('Ну, нічия ')
//    }
//    else if((admin == 'камінь')&&(rnd == 'ножиці')){
//     alert('Ти виграв')
//    }
//    else if((admin == 'ножиці')&&(rnd == 'камінь')){
//     alert('Виграв я, Ураа')
//    }
//    else if((admin == 'ножиці')&&(rnd == 'бумага')){
//     alert('Ти виграв')
//    }
//    else if((admin == 'бумага')&&(rnd == 'ножиці')){
//     alert('Виграв я, Ураа')
//    }
//    else if((admin == 'бумага')&&(rnd == 'камінь')){
//     alert('Ти виграв')
//    }
//    else if((admin == 'камінь')&&(rnd == 'бумага')){
//     alert('Виграв я, Ураа')
//    }
// }

// Scissors ternary( не готово)

// {
//     let admin = prompt("Граємо в гру 'камінь-ножиці-бумага', Ваш вибір:");
//     let rnd = Math.random()*2;
//     rnd = Math.round(rnd);
//     (admin == rnd)? alert('Ну, нічия '):(rnd == 0)?alert('А я ставлю камінь') (rnd = 'камінь'):(rnd == 1)?alert('А я ставлю ножиці') (rnd = 'ножиці'):(rnd == 2)?alert('А я ставлю бумагу')(rnd = 'ножиці'):alert('Error.');
//     ((admin == 'камінь')&&(rnd == 'ножиці'))?alert('Ти виграв'):((admin == 'ножиці')&&(rnd == 'камінь'))?alert('Виграв я, Ураа'):((admin == 'ножиці')&&(rnd == 'бумага'))?alert('Ти виграв'):((admin == 'бумага')&&(rnd == 'ножиці'))?alert('Виграв я, Ураа'):((admin == 'бумага')&&(rnd == 'камінь'))?alert('Ти виграв'):((admin == 'камінь')&&(rnd == 'бумага'))?alert('Виграв я, Ураа'):alert('Error.')


// }

// Additional task(done)

// {
// let nameTask = prompt('Enter the name of your homework:');
//     if(nameTask === 'Number: odd'){
//     alert("Run this task: 'Number: odd'");
                
//         let question = +prompt('Please enter an even number:');
//         if(question%2===0){
//              alert('Thank you for the correct data');
//         }
//         else{
//             alert('H\'es not lying, the bastard')
//         }
        
        
//     }
//     else if(nameTask === 'String: lexics' ){
//     alert("Run this task: 'String: lexics'");
        
//         let question = prompt('Enter the text wiht incorrect words to check it:');
//         let result = [question.split(' ').includes('блін'), question.split(' ').indexOf('блін')]
//         if(result[0]==true){
//             alert(`У тексті, який Ви ввели є некоректне слово. Його позиція в рядку: ${result[1]+1}`);
//         }
//         else{
//             alert('Ваш текст чистий')
//         }
        
        
//     }
//     else if(nameTask === 'Boolean: if'){
//     alert("Run this task: 'Boolean: if'");
        
//         let gender = confirm('Натисніть ок, якщо ви чоловік');
//         if(gender==true){
//             alert('Тоді можете заходити');
//         }
//         else{
//             alert('Ви жінка, вам союди не можна');
//         }
//     }
//     else if(nameTask === 'Ternary'){
//     alert("Run this task: 'Ternary'");

//         let gender = confirm('Натисніть ок, якщо ви чоловік') ? alert("Ви чоловік") : alert("Ви жінка") ;
        
//     }
//     else if(nameTask === 'Boolean' ){
//     alert("Run this task: 'Boolean'");
        
//         let question =[confirm('Ти робив домашку?'),confirm('Ну і як життя?'), confirm('Краще буде?')];
//         console.log(question)
       
//     }
//     else if(nameTask === 'Login and password' ){
//     alert("Run this task: 'Login and password'");
        
//         const correctLogin = 'admin';
//         const correctPassword = 'qwerty';
//         if(prompt('Введіть у це поле свій логін:')==correctLogin){
//             alert('Ви ввели правильний логін, Вітаю!');
//         if(prompt('Введіть пароль:')==correctPassword){
//             alert('Ви ввели усі дані правильно, Вітаю!');
//             }
//         else{
//             alert('Ви ввели не правильний пароль')
//             }
//         }
//         else{
//             alert('Ви ввели не правильний логін(');
//         }
        
//     }
//     else if(nameTask === 'Login and password ternary' ){
//     alert("Run this task: 'Login and password ternary'");
        
//         let correctLogin = 'admin';
//         let correctPassword = 'qwerty';
//         (prompt('Введіть у це поле свій логін:')==correctLogin)? (alert('Вітаю, ви ввели правильний логін!'),(prompt('Введіть пароль:')==correctPassword)?alert('Ви ввели усі дані правильно, Вітаю!'):alert('Ви ввели не правильний пароль(')): alert('Упс, ви ввели щось не правильно(');
        
//     }
//     else if(nameTask === 'Scissors'){
//     alert("Run this task: 'Scissors'");

        
//         let admin = prompt("Граємо в гру 'камінь-ножиці-бумага', Ваш вибір:");
//         let rnd = Math.random()*2;
//         rnd = Math.round(rnd);
//         if(rnd == 0){
//             alert('А я ставлю камінь')
//         rnd = 'камінь'
//         }
//         else if(rnd == 1){
//             alert('А я ставлю ножиці')
//         rnd = 'ножиці'
//         }
//         else if(rnd = 2){
//             alert('А я ставлю бумагу')
//         rnd = 'бумага'
//         }
//         if (admin == rnd) {
//             alert('Ну, нічия ')
//         }
//            else if((admin == 'камінь')&&(rnd == 'ножиці')){
//                 alert('Ти виграв')
//            }
//            else if((admin == 'ножиці')&&(rnd == 'камінь')){
//                 alert('Виграв я, Ураа')
//            }
//            else if((admin == 'ножиці')&&(rnd == 'бумага')){
//                 alert('Ти виграв')
//            }
//            else if((admin == 'бумага')&&(rnd == 'ножиці')){
//                 alert('Виграв я, Ураа')
//            }
//            else if((admin == 'бумага')&&(rnd == 'камінь')){
//                 alert('Ти виграв')
//            }
//            else if((admin == 'камінь')&&(rnd == 'бумага')){
//                 alert('Виграв я, Ураа')
//            }
//             }   
//     else if(nameTask === 'Prompt: or' ){
//     alert("Run this task: 'Prompt: or'");

//         let age = +prompt('Введіть ваш вік');
//         let dateOfBrith =(2023-age);
//         if(age == 0||undefined ){
//             alert('Input error...')
//         }
//         else{
//             alert(`Ваш день народження: ${dateOfBrith} рік`)
//         }
//         }
//         else{
//             alert('Oops, you entered the wrong task name.\n Try again by reloading the page')
//     }
// }
    
// Prompt: or(done)

// { 
//     let age = +prompt('Введіть ваш вік');
//     let dateOfBrith =(2023-age);
//     if(age == 0||undefined ){
//         alert('Input error...')
//     }
//     else{
//         alert(`Ваш день народження: ${dateOfBrith} рік`)
//     }
    
// }
