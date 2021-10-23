import {
    get,
    set,
    del
} from 'https://cdn.jsdelivr.net/npm/idb-keyval@6/+esm';

function el(css){
    return document.querySelector(css);
};

function create(html){
    return document.createElement(html);
};

const names = [
    "Willi",
    "Susan",
    "Mike",
    "Stefan",
    "Frida",
    "Max",
    "George",
    "Dennis"
];

const db = {
    key : "hiscore",
    readDB:function(){         // Promise!!!
        return get(this.key);
    },
    writeDB:function(data){
        return set(this.key,data);
    },
    updateDB: async function(newMember){
            // 1. db auslesen
            let temp = await this.readDB();

            // 2. Prüfung war da was?
            if(!temp){
                temp = [];
            };
            // 3. neuen TN einfügen
            temp.push(newMember);
            // 4. das erweiterte temp Array in db speichern
            this.writeDB(temp);
    },
    deleteDB:function(){
        del(this.key);
    }

};



function newItem(){

    const newMember = {};
    // zufälliger Name
    const index = Math.floor(Math.random() * names.length);
    const name =names[index];

    // Zufällige Punkte
     const punkte = Math.ceil(Math.random() * 500) + 100;

    // id als timeStamp
    const id = Date.now(); 

    // Fake newMember einrichten
    newMember.name = name;
    newMember.punkte = punkte;
    newMember.id = id;

  

    //###################################################
    //########## newMember in DB schreiben ##############
    db.updateDB(newMember);
    //###################################################
    //##### Preview
    const pre =  el('#preview'); 
    pre.className  = 'preview';                      // Animation zuweisen
    pre.innerHTML = `${name} ${punkte}`;    // Preview Ausgabe
    
    setTimeout(() => {                               
       pre.className = null;                        // Animation entfernen
       pre.innerHTML = '&nbsp;';                    // Leerzeichen einsetzen - Text löschen
    },1500);

};

async function ausgabe(){
    let originalData = await db.readDB();

    // Wenn db leer, dann Abbruch
    if(!originalData){return;}
    //################################

    let data = sortArray(originalData);
    console.log(data)
    hiScoreGenerator(data);
};

function hiScoreGenerator(data){
    let div,button,span;
    let itemWrapper = create('div');
    itemWrapper.id = "itemWrapper";
    
    data.forEach((obj) => {
        div = create('div');
        div.className = 'item';

        //############################
        span = create('span');
        span.innerHTML = obj.name;
        span.className = 'name';
        div.append(span);

        //###########################
        span = create('span');
        span.innerHTML = obj.punkte;
        span.className = 'punkte';
        div.append(span);

        //##########################
        // delete button
        button = create('button');
        button.className = 'delete';
        button.innerHTML = 'X';
        button.setAttribute('data-id',obj.id);
        button.addEventListener('click',deleteItem);
        div.append(button);
        itemWrapper.append(div);

    });
    el('#ausgabe').innerHTML = '';
    el('#ausgabe').append(itemWrapper);

};
async function deleteItem(){
    // DB auslesen
    const data = await db.readDB();
    // 1. Object aus dem Array löschen

    // button data-id auslesen
    let id = parseInt(this.getAttribute('data-id'));
    // im Array nach dem Obj mit dieser ID suchen
    const index = data.findIndex((obj) => obj.id === id );
    // Eintrag aus dem Array löschen
    data.splice(index,1);
    // 2. DB update
    db.writeDB(data);
    // 3. item muss aus dem DOM gelöscht werden
    console.log(this.parentNode)
    el('#itemWrapper').removeChild(this.parentNode);

};

function sortArray(array){
  
    let copy = JSON.parse(JSON.stringify(array));
    copy.sort((a,b) => b.punkte - a.punkte );
    return copy;
};

function loeschen(){
    el('#ausgabe').innerHTML = '';
    db.deleteDB();
};

el('#save').addEventListener('click',newItem);
el('#read').addEventListener('click',ausgabe);
el('#delete').addEventListener('click',loeschen);
