function square(num){
    return (num*num)
}
console.log(square(2));


const square2 = function(num){
    return (num*num)
}
console.log(square(4));



const square3=(num)=>{return (num*num)}
console.log(square3(8));





window.name = 'ali';

function tellName(){
    console.log(this);
    console.log(this.name);
}

tellName()




const person={
    name:'ali',
    tellName:function(){
        console.log(this);
        console.log(this.name);
    }
} 

person.tellName();






window.name = 'mehmet';

function tell(){
    console.log(this);
    console.log(this.name);
}

tell()




const insan={
    name:'ali',
    tell:() => {
        console.log(this);
        console.log(this.name);
    }
} 

insan.tell();





window.name = 'murat';
const birey = {
    name:'fatih',
    tellastname:function(){
        console.log(this);
        console.log(this.name);

        setTimeout(function() {
            console.log(this);
            console.log(this.name);
        },2000)
    }
}
birey.tellastname();




const myobj ={
    year:2009,
    showYear1:function(){
        console.log(this.year, this);
    },
    showYear2: () => console.log(this.year, this)
}

myobj.showYear1();
myobj.showYear2();


/***************** CALL ****************/

window.name = 'lale';
window.grade = 94;

const student ={
result: () => {
    return this.name +' '+this.grade
    }
}


const student1 ={
   name:'kemal',
   grade:77,
 }


 const student2 ={
    name:'ismail',
    grade:88,
  }

  console.log(student.result.call(student1));
  console.log(student.result.call(student2));