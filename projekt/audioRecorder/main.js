import {el,hotButtons,render} from "./modules/lib.js";
import {db} from "./modules/db.js"



(function(){

    let flag =false;

    // user muss die verwendung des mikrofon erlauben
   function mikrofon(){

       return new Promise(resolve => {

        resolve(navigator.mediaDevices.getUserMedia({

                audio:true,
                video:false
            }));
        });
    }; // ende mikrofon


   async function initMediaRecorder(){

        // array für unsere audiodaten
        // hier werden chunks gespeichert -- daten brocken
        let audioData = [];

        // hier sollte sich ein fenster im browser öfnnen
        // in dem die verwendung des mikrofons gestattet abgelehnt werden kann
        let mediaStreamObj = await mikrofon();

        // sobald daten vom mikrofon verfügbar
        // speichern wir diese audio daten als blob in das array audioData
        // speichern wird diese audio daten als blob in das array audioData
        let mediaRecorder = new MediaRecorder(mediaStreamObj)
        
        mediaRecorder.ondataavailable = function(e){
            audioData.push(e.data)
        }


        // button werden initialieiert
        el('#btnStart').addEventListener('click',function(){
            if(!flag){
                hotButtons(this)
                mediaRecorder.start();
                flag=1;
            };         
        });


        el('#btnStop').addEventListener('click',function(){

            if(flag===1){
                hotButtons(this)
                mediaRecorder.stop();
                flag=2;
                };          
        });
        // button fertig

        
        // wen medirecord gestopt wird
        // wird der onstop event gefreuert
        mediaRecorder.onstop = function(){

            // aus dem array audioData - mit den Audio Daten
            // wird ein blob gespeichert
            let audioBlob = new Blob(audioData)

            initAudioPlayer(audioBlob)

            // eski kayitlari siler
            audioData = [];

            hotButtons()
            flag=false;
        }
   }

   function initAudioPlayer(blob){
       
        el('#play').onclick = function(){
                playActiveFile(blob)
        
        }

        el('#store').onclick = function(){
            let title = prompt('titel bitte hier eingeben')
            db.updateDB(blob,title)
        }
   }


   function playActiveFile(blob){

    let audioObj = new Audio()
    let audioUrl = URL.createObjectURL(blob)
    audioObj.src = audioUrl;
    audioObj.play()

    render(audioObj);

   };


   initMediaRecorder();


   el('#play-store').addEventListener('click', async function(){

    let mySong = await db.readDB()
    if(mySong){
        playActiveFile(mySong.song)
        };
    });


})();



