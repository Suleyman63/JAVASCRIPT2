function el(css){
    return document.querySelector(css)
}

const namen= ["Agathe","Klaus","Christa","Kevin","Alexander",
                "Emma","Susan","Peter","Maximillian"];


const Storage = {
    key:"hiscore",
    read:function(){
        //speicher auslesen
        let temp=localStorage.getItem(this.key)

        // prüfung ist etwas im speichern
        if(temp){
            return JSON.parse(temp)
        }else{
            return []
        }
    },
    write:function(data){
        localStorage.setItem(this.key,data)
    },
    update:function(person){
        //auslesen des speichern
        // entweder leeres array oder
        // schon gescpeicherte personen
        let tempArr = this.read();
         // neue person wird in das array gehängt
        tempArr.push(person);
        // das aktualiserte array wird in den speicher gescrieben
        this.write(JSON.stringify(tempArr))

    },
    deleteStorage:function(){
        localStorage.removeItem(this.key)
    }
}



// save function
function eingabe(){
    // person object anlegen
    // {id:2333232312,name:"klaus",punkte:233}

    const id= Date.now()
    const index = Math.floor(Math.random()*namen.length);
    const name = namen[index]
    const punkte = Math.floor(Math.random()*500)+200

    const person = {
        id:id,
        name:name,
        punkte:punkte
    }
    //console.log(person);
    Storage.update(person);
}


// read function
function ausgabe(){
    el('#ausgabe').innerHTML='';
    const temp=Storage.read()
    console.log(temp);

    if(temp.length===0){
        el('#ausgabe').innerHTML='ist leer'
        return;
    }
    let ausgabe='';

    let sorted = sortiereArray(temp)
    sorted.forEach((person) => {
        ausgabe += `<span class = 'name'>
        ${person.name}</span> 
        ${person.punkte}'<br>'`

    })
    el('#ausgabe').innerHTML =ausgabe;
}

// buyukten kucuge siraladik
function sortiereArray(arr){
    let sorted =JSON.parse(JSON.stringify(arr));
    sorted.sort((a,b)=>b.punkte -a.punkte);
    return sorted;
}


// delete function
function deleteAll(){
    el('#ausgabe').innerHTML='';
    Storage.deleteStorage()
};


el('#save').addEventListener('click',eingabe);
el('#read').addEventListener('click',ausgabe);
el('#delete').addEventListener('click',deleteAll);







