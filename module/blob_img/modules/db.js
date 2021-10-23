import {get,set,del} from 'https://cdn.jsdelivr.net/npm/idb-keyval@6/+esm';


const db ={
    myKey: "myBlobs",


    readDB: function(){
        return get(this.myKey)
    },

    writeDB: function(data){
        return set(this.myKey, data)
    },


    updateDB: async function(blob, titel){

        let tempData = await this.readDB()

            if(!tempData){
                tempData ={}
            }

            tempData.titel = titel;
            tempData.img = blob;
            this.writeDB(tempData)      
    },


    deleteDB: function(){
        del(this.myKey)
    }
};


export{
    db
};