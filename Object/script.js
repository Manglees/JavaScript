//1) Literals(готово)

// {
//     const srsXb41 ={
//         brand: 'Sony', 
//         power: '50W',
//         yearOfrelease: '2019',
//         price:'150$'
//     }
// }

//2) Literals expand(готово)

// {
   
//     const srsXb41 ={
//         brand: 'Sony', 
//         power: '50W',
//         yearOfrelease: '2019',
//         price:'150$',
//         userRating: prompt('Введіть оцінку колонки:'),
//         userResponse: prompt('Введіть відгук про колонку:')
//     } 
// }

//3)Destruct array

// {
//      let arr = [1,2,3,4,5, "a", "b", "c"];
//      let [odd1, even1, odd2, even2, odd3,...rest]=arr;
// }

//4)Destruct string

// {
//     let arr = [1, "abc"];
//     let[number1,[s1,s2,s3]]=arr;
// }

//4) Destruct 3(не дороблено)

{
    let arr = [1,2,3,4, 5,6,7,10];
    let[l,v,...rest]=arr;
    let Lenght1 = arr.length;
    let result = {
        [l]: a,
        [v]: b,
        [Lenght1]:Lenght
    }
    
    
}