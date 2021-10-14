const data =[
    {name:'ali', surname:'yalin', age:25},
    {name:'veli', surname:'er', age:35},
    {name:'ahmet', surname:'dag', age:45},
    {name:'akif', surname:'mert', age:15}
]


/***************** callback ************************/

// function getData(){
//     setTimeout(() => {
//     data.map((index,element) => {
//         console.log(index,element);
        
//     })
// },1000)

// }


// function createData(newData,callback){
//     setTimeout(()=>{
//         data.push(newData)
//         callback()
//     },3000);
// }
// createData({name:'mahmut',surname:'kar',age:38},getData)
// console.log(data);


/**************************** promise *********************************/

// function getData(){
//     setTimeout(() => {
//     data.map((index,element) => {
//         console.log(index,element);
//     })
// },1000)

// }

// function createData(post){
//     return new Promise((resolve, reject) => {
        
//         data.push(post)
//         const error=false
//         if(!error){
//             resolve()
//         }else{
//             reject('error')
//         }
//     });
// }

// createData({name:'mahmut',surname:'kar',age:38})
// .then(getData()).catch(error => console.log(error))



/*********************** async ***************************/
function getData(){
    setTimeout(() => {
    data.map((index,element) => {
        console.log(index,element);
    })
},1000)

}

function createData(post){
    return new Promise((resolve, reject) => {
        
        data.push(post)
        const error=false
        if(!error){
            resolve()
        }else{
            reject('error')
        }
    });
}

async function init(){
    await createData({name:'mahmut',surname:'kar',age:38})
    getData()
}
init()