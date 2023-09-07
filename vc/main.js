
let temp = 0;
let isStarted = false;

let breath = new Audio('./vc/assets/breath.wav');
    breath.loop = true;
    breath.volume = 0;

let leaves = new Audio('./vc/assets/leaves.mp3');
    leaves.loop = true;
    leaves.volume = 0;

let whisper = new Audio('./vc/assets/whisper.wav');
    whisper.loop = true;
    whisper.volume = 0;


const Start = () =>{
    isStarted = true;
    //document.getElementById('speaker').src = './vc/assets/speaker.png';
    document.getElementById('decibel').innerHTML = `0`
    breath.play();
    leaves.play();
    whisper.play();
}

document.addEventListener('wheel', (e)=>{
    if(!isStarted) return;

    if(e.deltaY < 0 && temp > 0){
        temp -= .01;
    }else if(e.deltaY > 0){
        temp += .01;
    }



    if(temp > 0 && temp < 1){
        breath.volume = temp;
    }
    else if(temp > 1 && temp < 2){
        breath.volume = 1 - temp / 2
        leaves.volume = temp / 2;
    }
    else if(temp > 2 && temp < 3){
        leaves.volume = 1 - temp / 3
        whisper.volume = temp / 3;
    }


    document.getElementById('decibel').innerHTML = `${Math.abs(Number(temp * 10).toFixed(0))}`
    console.log(temp.toFixed(2))
})