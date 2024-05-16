
const videoEl = document.querySelector('#my-video');

let stream = null //Init stram variable so we can use it anywhere

let mediaStream = null //Init stran var for our screen sharing 

const constraints = {
    audio:true,
    video: true,
}

// note - constraints = An obhect specifying the types of media to request, alog with any requirments for each type
// it is parameter, it is an object with two  members : video and audio (the media types we requested)


const getMicAndCamera = async()=>{
    try{
    stream = await navigator.mediaDevices.getUserMedia(constraints);

    console.log(stream);
    changeButtons(['green','blue','blue','blue','blue','grey','grey','blue']);

    }
    catch(err){
        //user denied acces to constraints
        console.log("userd denied  permission ");
        console.log(err);
    }
}

const showMyFeed = e => {

    if(!stream){
        alert("stream still processing ....")
        return;
    }

    console.log ("show my feed is working good")
    console.log(stream);
    videoEl.srcObject = stream;// this will set tour MediaSteam (stream to our <video >)

    const tracks = stream.getTracks();
    console.log(tracks);
    changeButtons(['green','green','blue','blue','blue','grey','grey','blue']);

}

const stopMyFeed =e =>{
    //videoEl.srcObject = null;

    //stream = null;
    const tracks = stream.getTracks();
    tracks.forEach(track => {
    console.log(track);
    track.stop();  //dissassociates the track form the source 
       
    });

    changeButtons(['blue','grey','grey','grey','grey','grey','grey','grey']);

}


document.querySelector('#share').addEventListener('click',e=>getMicAndCamera(e))

document.querySelector("#show-video").addEventListener('click',e=>showMyFeed(e))

document.querySelector('#stop-video').addEventListener('click',e=>stopMyFeed(e))

document.querySelector('#change-size').addEventListener('click',e=>changeVideoSize(e))

document.querySelector('#start-record').addEventListener('click',e=>startRecording(e))

document.querySelector('#stop-record').addEventListener('click',e=>stopRecording(e))

document.querySelector('#play-record').addEventListener('click',e=>playRecording(e))

document.querySelector('#share-screen').addEventListener('click',e=>shareScreen(e))

document.querySelector('#audio-input').addEventListener('change',e => changeAudioInput(e))

document.querySelector('#audio-output').addEventListener('change',e => changeAudioOutput(e))
document.querySelector('#video-input').addEventListener('change',e => changeVideoInput(e))