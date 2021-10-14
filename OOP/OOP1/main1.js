let arr = ['cenk', 'alex', 'pepe', 'fabi'];
        console.log(arr[0]);


        let player1 = {
            name : 'mehmet',
            lastname : 'kilic',
            age : 33,
            goal : 7,
            evliMi : false,
            childs : ['sara', 'alev', 'merve'],
            fullname: function(){
                return this.name + ' ' +this.lastname;

            }
        };

        console.log(player1.name);
        console.log(player1.age);

        console.log(player1.childs[2]);

        console.log(player1.fullname());

        let variable1 = 'name';
        console.log(player1[variable1]);


        player1.age = 36;
        console.log(player1);

        player1.goal = 15;
        console.log(player1);


        let player2 = new Object();
        player2.name = 'ebru';
        player2.lastname = 'inan';
        player2.age = 23;
        player2.goal = 7;
        player2.evliMi = true;


        console.log(player2);


    /***************************************/

  