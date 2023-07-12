// Привітвння(готово)

// {
//     let a = prompt('Як вас звати?');
//     alert(`${'Добрий день ' +a}`);
// }

// String: gopni4ek(готово)

// {
//     let str = prompt('Введіть сюди якесь речення:').split(' ').join(',блін, ');
//     alert(str);
// }

// String: capitalize(готово)

// {
//     let str = "cANBerRa";
//     str = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
//     alert(str);
// }

// String: word count(готово)

// {
//     let what = prompt('Введіть будь ласка якесь речення:');
//     let slice = what.split(' ');
//     let index = (slice.length);
//     alert('У вашому реченні стільки слів: '+index);
// }

// Призвіще Ім'я По батькові(готово)

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

//String: beer(готово)

// {
//     let str = 'Було жарко.Василь пив пиво і куштував креветки';
//     let str1 = (str.slice(0,21)+' чай ');
//     let str2 = str.slice(27);
//     let result = str1+str2;
//     console.log(result);
// }
// String: no tag(готово)

// {   
//     let str = "какой-то текст в котором есть один тэг <br /> и всякое другое";
//     index = str.indexOf('<br />');
//     str = str.slice(0,`${index}`) + str.slice(`${index+6}`)
//     console.log(str);

// }

//String: big tag(готово)

// {
//     let str = "какой-то текст в котором есть один тэг <br /> и всякое другое";
//     index = str.indexOf('<br />');
//     str = str.slice(0,`${index}`) + str.slice(`${index}`,`${index+6}`).toUpperCase() + str.slice(`${index+6}`);
//     console.log(str);
// }

//String: new line(не дороблно)

// {
//     let question = prompt("Введіть будь яке речення, можливо вірш.На позначення переносу рядка використовуйте символ: '</br>'");
//     question = question.indexOf('</br>')
// }