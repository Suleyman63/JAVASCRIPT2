

function el(css) {
    return document.querySelector(css);
};

function group(css) {
    return document.querySelectorAll(css);
};

function create(html) {
    return document.createElement(html);
};


function hotButtons(HTMLElement) {

    group('#gui-buttons button').forEach((val) => {
        val.className = 'passiv';
    });

    if (HTMLElement) {
        HTMLElement.className = 'aktiv';
    };

};



let animate = null; // rendert die Sound - Viz



function render(audioData) {


    //  const canvas =el("#canvas");
    const canvas = document.querySelector('canvas');

    // const audioData = audioData;


    const ctx = canvas.getContext("2d");
    ///////////////////////////////////////////

    // context = context || new AudioContext();
    //  src = src || context.createMediaElementSource(audioData);
    let context = new AudioContext(); // (Interface) Audio-processing graph
    let src = context.createMediaElementSource(audioData); // Give the audio context an audio source,
    // to which can then be played and manipulated
    const analyser = context.createAnalyser(); // Create an analyser for the audio context

    src.connect(analyser); // Connects the audio context source to the analyser
    analyser.connect(context.destination); // End destination of an audio graph in a given context
    // Sends sound to the speakers or headphones


    /////////////// ANALYSER FFTSIZE ////////////////////////
    // analyser.fftSize = 32;
    // analyser.fftSize = 64;
    // analyser.fftSize = 128;
    // analyser.fftSize = 256;
    analyser.fftSize = 512;
    // analyser.fftSize = 1024;
    // analyser.fftSize = 2048;
    // analyser.fftSize = 4096;
    // analyser.fftSize = 8192;
    //analyser.fftSize = 16384;
    // analyser.fftSize = 32768;

    // (FFT) is an algorithm that samples a signal over a period of time
    // and divides it into its frequency components (single sinusoidal oscillations).
    // It separates the mixed signals and shows what frequency is a violent vibration.

    // (FFTSize) represents the window size in samples that is used when performing a FFT

    // Lower the size, the less bars (but wider in size)
    ///////////////////////////////////////////////////////////


    const bufferLength = analyser.frequencyBinCount; // (read-only property)
    // Unsigned integer, half of fftSize (so in this case, bufferLength = 8192)
    // Equates to number of data values you have to play with for the visualization

    // The FFT size defines the number of bins used for dividing the window into equal strips, or bins.
    // Hence, a bin is a spectrum sample, and defines the frequency resolution of the window.

    const dataArray = new Uint8Array(bufferLength); // Converts to 8-bit unsigned integer array
    // At this point dataArray is an array with length of bufferLength but no values
    // console.log('DATA-ARRAY: ', dataArray) // Check out this array of frequency values!

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    // console.log('WIDTH: ', WIDTH, 'HEIGHT: ', HEIGHT)

    const barWidth = (WIDTH / bufferLength) * 13;
    // console.log('BARWIDTH: ', barWidth)

    console.log('TOTAL WIDTH: ', (117 * 10) + (118 * barWidth)) // (total space between bars)+(total width of all bars)

    let barHeight;
    let x = 0;

    function renderFrame() {

        animate = requestAnimationFrame(renderFrame);


        // Wenn das aktuelle AudioFile abgelaufen ist
        // Wird der renderFrame durch return und cancelAnimationFrame(animate) abgestellt
        // Canvas wird weiss
        // audio Objext reset
        //  Button flag wieder auf 0 -- reset
        // Abbruch der Funktion
        if (audioData.currentTime >= audioData.duration) {
            // console.log()
            ctx.fillStyle = "rgba(255,255,255,1)"; // Clears canvas
            ctx.fillRect(0, 0, WIDTH, HEIGHT); // 
            cancelAnimationFrame(animate);
            hotButtons(false);
            //  flag = 0;
            animate = false;

            return
        }

        x = 0;

        analyser.getByteFrequencyData(dataArray); // Copies the frequency data into dataArray
        // Results in a normalized array of values between 0 and 255
        // Before this step, dataArray's values are all zeros (but with length of 8192)

        ctx.fillStyle = "rgba(255,255,255,0.1)"; // Clears canvas before rendering bars (black with opacity 0.2)
        ctx.fillRect(0, 0, WIDTH, HEIGHT); // Fade effect, set opacity to 1 for sharper rendering of bars

        let r, g, b;
        let bars = 118 // Set total number of bars you want per frame

        for (let i = 0; i < bars; i++) {
            // barHeight = (dataArray[i] * 2.5);
            barHeight = (dataArray[i] * 0.4);

            if (dataArray[i] > 210) { // pink
                r = 250
                g = 0
                b = 255
            } else if (dataArray[i] > 200) { // yellow
                r = 250
                g = 255
                b = 0
            } else if (dataArray[i] > 190) { // yellow/green
                r = 204
                g = 255
                b = 0
            } else if (dataArray[i] > 180) { // blue/green
                r = 0
                g = 219
                b = 131
            } else { // light blue
                r = 0
                g = 199
                b = 255
            }

            ctx.fillStyle = `rgb(${r},${g},${b})`;
            ctx.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);
            // (x, y, i, j)
            // (x, y) Represents start point
            // (i, j) Represents end point

            x += barWidth + 10 // Gives 10px space between each bar
        }
    }


    if (!animate) {
        renderFrame();
    }

};



export {
    el,
    group,
    create,
    hotButtons,
    render,
   
}