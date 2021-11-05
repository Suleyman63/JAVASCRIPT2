(function(){

    function el(css){
        return document.querySelector(css)

    }

    function create(html){
        return document.createElement(html)

    }


        let canvas = el('#canvas')
        let ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;      
        
    
        let analyser;
        let circles = [];


function Circle(x,y,r,col,w,h) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 1 + 1;
    this.w=canvas.width;
    this.h=canvas.height;
    this.col = colors(); 
    this.draw = function() {
    ctx.save();
    ctx.beginPath();
    ctx.globalAlpha = Math.random()/0.1+0.1;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.col;
    ctx.fill();
    ctx.restore();   
    }
}


function createAudio() {
    let audio = create('audio');
    audio.src = 'music.mp3';
    audio.controls = 'true';
    document.body.appendChild(audio);
    audio.style.width = canvas.width + 'px';


    let audioContext = new AudioContext();
    analyser = audioContext.createAnalyser();
    let source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    audio.play();
}



function animate() {
    requestAnimationFrame(animate);
    let freq = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(freq);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 1; i < circles.length; i++) {
        circles[i].r = freq[i] * 0.2;
        circles[i].y = circles[i].y > canvas.height ? 0 : circles[i].y + 1;
        circles[i].draw();
    }
    
    for (let i = 1; i < freq.length; i += 10){
        ctx.fillStyle = colors();
        ctx.fillRect(i + 600, canvas.height - freq[i] + 1.5, 10, canvas.height);
        ctx.strokeRect(i + 600, canvas.height - freq[i] + 1.5, 10, canvas.height);
    }
}


function colors(){
        let r = Math.floor(Math.random() * 250);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        
        return `rgb(${r},${g},${b})`;
    
    };


function init() {    
    createAudio();
    
    for (let i = 0; i < 1000; i++) {
        circles[i] = new Circle();
        circles[i].draw();
    }
    animate();
    
};


init()


}())

