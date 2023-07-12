//1) Literals(готово)

// {
    // const srsXb41 ={
    //     brand: 'Sony', 
    //     power: '50W',
    //     yearOfrelease: '2019',
    //     price:'150$'
    // }
// }

//2) Literals expand(готово)

// {
   
    // const srsXb41 ={
    //     brand: 'Sony', 
    //     power: '50W',
    //     yearOfrelease: '2019',
    //     price:'150$',
    //     userRating: prompt('Введіть оцінку колонки:'),
    //     userResponse: prompt('Введіть відгук про колонку:')
    // } 
// }

//3) Literals copy(готово)

// {
//     const srsXb41 ={
//         brand: 'Sony', 
//         power: '50W',
//         yearOfrelease: '2019',
//         price:'150$',
//         userRating: prompt('Введіть оцінку колонки:'),
//         userResponse: prompt('Введіть відгук про колонку:'),
//     };
    
//     const obj = {
//         ...srsXb41,
//         question : prompt('Введіть, що хочете:'),
//     };
//     console.log(obj);
// }

//4)Destruct array

// {
//      let arr = [1,2,3,4,5, "a", "b", "c"];
//      let [odd1, even1, odd2, even2, odd3,...rest]=arr;
// }

//5)Destruct string

// {
    // let arr = [1, "abc"];
    // let[number1,[s1,s2,s3]]=arr;
    // console.log(number1, s1, s2, s3)
// }

//6) Destruct 3(готово)

// {
    
//     let arr = [1,2,3,4, 5,6,7,10];
//     let[l,v,...rest]=arr;
//     let Lenght1 = arr.length;
//     const result = {
//         a: l,
//         b: v,
//         Lenght: Lenght1
//     }
//     console.log(result);
    
// }

//7) Destruct 2(готово, костиляга)
// {
//     let obj = {name: 'Ivan',
//            surname: 'Petrov',
//            children: [{name: 'Maria'}, {name: 'Nikolay'}]};
//     const{children}=obj;
//     const[name1,name2]=[children[0],children[1]];
//     console.log(name1,name2);

// }

//8) Html tree(готово, як зміг)

// {
//     var body = {
//         tagName : 'body',
//         children :  [
//             {
//                 tagName : 'div',
//                 children:[
//                     {
//                      tagName : 'span',
//                      children : ['Enter a data please:'],             
//                     },
//                     {
//                         tagName : '<br>'
//                     },
//                     {
//                         tagName : 'input',
//                         children :['name'],
//                         attrs : {
//                             type : 'text'
//                         } 
//                     },
//                     {
//                         tagName : 'input',
//                         children :['surname'],
//                         attrs : {
//                             type : 'text'
//                         } 
//                     }
//                 ]
//             },
//             {
//                 tagName : 'div',
//                 children : [
//                     {
//                     tagName : 'button',
//                     children : ['OK'],
//                     attrs : 'id',
//                     children : ['ok'],
//                     },
//                     {
//                     tagName : 'button',
//                     children : ['Cancel'],
//                     attrs : 'id',
//                     children : ['cancel'],            
//                     }
//                 ]
//             }
//         ]
//     }

//}

//9) Currency drop down(готово)


// {
//     fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//      .then(data => {
//         let str =`<select>` 
//         for(let item in data.rates){
//             str+=`<option>${item}</option>`
//         }
//         str+=`</select>`
//             document.write(str) 
//          })
// }
