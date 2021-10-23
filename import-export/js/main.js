 import { el, group, create,variable,obj} from '../modules/lib1.js';
 import * as lib2 from "../modules/lib2.js";




    function test1(){
            let p;

            for (let i = 0; i < 10; i ++){
                p = create('p');
                p.innerHTML = `Test ${ i + variable}`;
                el('#ausgabe1').append(p);
            };
        };

        function test2(){
            group('#ausgabe1 p').forEach((element)=>{
                element.className = 'rot';
            });
        };
        function test3(){
        console.log(obj.add());
        
        };



        test1();
        test2();
        test3();



    






