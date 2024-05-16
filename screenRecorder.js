
let mediaRecorder;
let recordedBlobs = [];  // array to hold ht eblobs for playback o

const startRecording=()=>{
    if(!stream){ // you can use mediaStream and then record and play the video 
        alert("No current feed");
        return ;
    }
    console.log("start Recording");
    mediaRecorder = new  MediaRecorder(stream); // make a media recorder from the constructor
    mediaRecorder.ondataavailable = e =>{
        //ondatavailable will run when the stream end or stopped or we specifically say so
        console.log("DATA is available for the media recorder!");
        recordedBlobs.push(e.data)
    }
    mediaRecorder.start();
    changeButtons(['green','green','blue','blue','green','blue','grey','blue']);
}
const stopRecording=()=>{

    if(!mediaRecorder){
        alert("please recoord before stopping!");
        return 
    }

    console.log("stop Recording");
    mediaRecorder.stop();
    console.log(recordedBlobs[0]);

    changeButtons(['green','green','blue','blue','green','green','blue','blue']);


    }
const playRecording=()=>{

    if(!recordedBlobs){
        alert("NO recording saved");
        return;
    }

    console.log("play Recording");
    const supperBuffer = new Blob(recordedBlobs);
    const recordedVideoElement  = document.querySelector('#other-video');
    recordedVideoElement.src = window.URL.createObjectURL(supperBuffer);
    recordedVideoElement.controls = true;
    recordedVideoElement.play();

    changeButtons(['green','green','blue','blue','green','green','green','blue']);

}
