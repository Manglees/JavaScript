// Рік народження(готово) 

// {
//     let age = +prompt('Введіть ваш вік');
//     let dateOfBrith =(`${2023-age}`);
//     (age==0) ? alert("Ну і хамло") : alert(dateOfBrith);
// }

// Температура повітря в фаренгейтах(готово)

// {
//     let C = +prompt("Введть сюди температуру повітря у Вашій місцевості, у Цельсіях:");
//     let K = (`Ваша температура у Кельвінах: ${273+C}`);
//     alert(K);
// }

// Number: divide(готово)

// {
//     let math = +prompt('Введіть число,яке хочете округлити:');
//     let result =[Math.ceil(math),Math.floor(math),Math.round(math)];
//     alert('Ваше число округлене до більшого: '+ result[0]); 
//     alert('Воно ж округлене до меншого: '+ result[1]);
//     alert('Округлене по законам математики: '+ result[2]);
// }

// Валюта, обмін(готово)

// {
//     const rate = 36.94;
//     let summa = +prompt('Вкажіть суму переводу, в грн:');
//     let obmin = +(`${summa/rate}`);
//     alert(obmin.toFixed(2) +' '+ "ваша сума в  доларах");
// }

// RGB (готово)

// {
//    let red = prompt('Введіть значення для червоного кольору:');
//    let green = prompt('Введіть значення для зеленого кольору:');
//    let blue = prompt('Введіть значення для сиього кольору:');
//     alert(`Ваш сформований колір CSS: #${red}${green}${blue}`);
// }

//Number: flats

// {
//     // let numberAppartaments =+prompt('Введіть номер квартири:');
//     // const floor = 16;
//     // const appartamentsFloor = 4;
//     // const approach = 6;
//     // const total = (floor*appartamentsFloor*approach);
//     // alert((numberAppartaments<= 64)?`Під'їзд цієї квартири: 1 \nПоверх квартири: ${Math.ceil(numberAppartaments/appartamentsFloor)}` : (64<numberAppartaments<=128)?`Під'їзд цієї квартири: 2 \nПоверх квартири: ${Math.ceil(numberAppartaments/16-appartamentsFloor)}`: (128<numberAppartaments<=192)?`Під'їзд цієї квартири: 3 \nПоверх квартири: ${Math.ceil(numberAppartaments/32-appartamentsFloor)}`: (192<numberAppartaments<=256)?`Під'їзд цієї квартири: 4 \nПоверх квартири: ${Math.ceil(numberAppartaments/48-appartamentsFloor)}`:(256<numberAppartaments<=320)?`Під'їзд цієї квартири: 5 \nПоверх квартири: ${Math.ceil(numberAppartaments/64-appartamentsFloor)}`:(320<numberAppartaments<=384)`Під'їзд цієї квартири: 6 \nПоверх квартири: ${Math.ceil(numberAppartaments/80-appartamentsFloor)}`); 
// }

// {

// Number flats(Артем)

//     let number=+prompt('Vvedit nomer kvarturu') 
//     const poverhu=9
//     const kvartnapov=4
//     const pod=5
//      if ( number<37) {
//      alert(`Номер підїзду: ${Math.ceil(number/(poverhu*kvartnapov))} \nPoverh: ${Math.ceil(number/kvartnapov)}`)
//      } else if(number<73) {
//          alert(`Номер підїзду: ${Math.ceil(number/(poverhu*kvartnapov))} \nPoverh: ${Math.ceil(number/kvartnapov-9)}`) 
//      } else if(number<109) {
//          alert(`Номер підїзду: ${Math.ceil(number/(poverhu*kvartnapov))} \nPoverh: ${Math.ceil(number/kvartnapov-18)}`)
//      } else if(number<145){
//          alert(`Номер підїзду: ${Math.ceil(number/(poverhu*kvartnapov))} \nPoverh: ${Math.ceil(number/kvartnapov-27)}`)
//      }else if(number<181) {
//          alert(`Номер підїзду: ${Math.ceil(number/(poverhu*kvartnapov))} \nPoverh: ${Math.ceil(number/kvartnapov-36)}`)
//      }else if(number>180){
         
//      }
// }

//Індивідуальне завдання
// {
// const random = Math.ceil(Math.random()*15);
// let pRompt;
// while ((pRompt = +prompt('Введіть число від 0 до 15:'))!==random) {
//     alert(`Ви ввели число ${pRompt}. Ви не вгадали!`)
// }
// alert(`Ваше число: ${pRompt}. Вітаю, ви вгадали число!`)
// }

