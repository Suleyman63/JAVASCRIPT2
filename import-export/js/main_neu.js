import * as lib2 from "../modules/lib2.js";

function test4(){
    let p;

    for (let i = 0; i < 10; i ++){
        p = lib2.create('p');
        p.innerHTML = `Test ${ i + lib2.variable}`;
        lib2.el('#ausgabe2').append(p);
    };
};

function test5(){
    lib2.group('#ausgabe2 p').forEach((element)=>{
        element.className = 'blau';
    });
};
test4();
test5();
