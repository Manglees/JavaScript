// Confirms,Boolean(готово)

// {
//     let question =[confirm('Ти робив домашку?'),confirm('Ну і як життя?'), confirm('Краще буде?')];
//     console.log(question)
// }

// Prompts(готово)

// {
//     let prompts = [prompt('Ведіть і\'я?'), prompt('Вкажіть Ваш вік?'), prompt('Яка у Вас погода?')];
//     prompts[4]= prompt('В тебе все норм?');
//     console.log(prompts);
// }

// Item access(готово)
// {
//     let name = ['Вася','Петя','Леха','Владик'];
//     let lenghtName = name.length;
//     let message =prompt(`В цьому рядку стільки значень: ${lenghtName}, введіть від 0 до цього значення`);
//     alert(name[message]);
// }

// Item change(готово)
// {
//     let numberMeaning = prompt('Введіть індекс масиву, числове значення');
//     let nameMeaning = prompt('Введіть, що хочете внести у масив');
//     let array = [];
//     array[numberMeaning] = nameMeaning;
//     console.log(array);
// }

// Таблиця множення(готово)

// {
//     const Calculator = [['0-0-0-0-0-0-0-0-0-0'],['1-2-3-4-5-6-7-8-9-10'],['2-4-6-8-10-12-14-16-18-20'],['3-6-9-12-15-18-21-24-27-30'],['4-8-12-16-20-24-28-32-36-40'],['5-10-15-20-25-30-35-40-45-50']];
//     let mnojenia = +prompt('Введіть число від 0 до 5');
//     alert(Calculator[mnojenia]);
// }

// Покращений калькулятор(готово)

// {
//    const calculator = [[0,0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
//    let mnojnik1 = +prompt('Введіть число, до п\'яти:');
//    let mnojnik2 = +prompt('Введіть число, на яке хочете помножити попереднє, до п\'яти:');
//    alert('Ваш результат:'+' '+ calculator[mnojnik1][mnojnik2]);
// }

//10) IndexOf Word(done)

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

//For Alert(готово)

// {
//     const names = ["John", "Paul", "George", "Ringo"];
//     for(let name of names){
//         alert(`Hello ${name}`)
//     }

// }

// //For Select Option(готово)

// const currencies =['BGR','USD', 'EUR','UAH']
// let str='<select>'
// for (let currency of currencies){
//     str+=`"<option>"${currency}"</option>"`
// }
// str+="</select>"
// document.write(str)

//For Table Horizontal(done)
// {
// const names = ['John', 'Paul', 'George', 'Ringo']
// let   str = "<table>"
// for (const name of names){
//     str+=`<tr><td>${name}</td></tr>`
// }
// str+= "</table>"
// document.write(str)
// }

//Function Capitalize(done)

// {
//     const capitalize = str => {
//         let result = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()
        
//         return result 
//    }
//    console.log(capitalize("cANBerRa"))
// }

//Map Capitalize(done)

// {
//     let question = prompt("Enter your text:");
//     const f = x => x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase();
//     question = question.split(' ').map(f).join(" ");
//     console.log(question);

// }


//Reverse(не готово)

// {
//     let question = prompt('Enter 5 values here:');
//     let arr1 = [];
//     arr1.push(question);
//     let arr2 = arr1.pop();
//     let arr3 = [];
//     arr3.push(arr2)
//     console.log(arr3);

// }

//Filter Lexics(не готово)

// {
//     let question = prompt('Enter the text wiht incorrect words to check it:').split(' ');
//     const unacceptableWords = ['блін','зараза','чьорт','фак'];
//     const f = x => {
//         for(const a of question){
//            question == unacceptableWords 
//         }
//         return(question)
//     }
// }

//Multiply table(готово)

// {
//     const multiplicationTable = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
//     multiplicationTable[1][2]
// }

//Multiply table slice( не готово)

// {
//     const multiplicationTable = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
//     multiplicationTable.slice(1);
//     let sliceMultiplicftionTable = [];
//     for (const num of multiplicationTable) {
//          sliceMultiplicftionTable = multiplicationTable.pop()
         
//     }
//     console.log(sliceMultiplicftionTable);
// }

//Array Equals(done)

// {
//     const arr1 = [1,2,3];
//     const arr2 = arr1;
//     arr1===arr2
// }

//Flat(готово)

// {
//     const multiplicationTable = [[0,1,2,3,4,5].slice(1),[0,2,4,6,8,10].slice(1),[0,3,6,9,12,15].slice(1),[0,4,8,12,16,20].slice(1),[0,5,10,15,20,25].slice(1)];
//     let fullArr = [...multiplicationTable[0],...multiplicationTable[1],...multiplicationTable[2],...multiplicationTable[3],...multiplicationTable[4],]   
// }