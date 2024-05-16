
const audioInputEl = document.querySelector('#audio-input');


const audioOutputEl = document.querySelector('#audio-output');

const videoInputEl = document.querySelector('#video-input');

const getDevices = async() =>{
    try{  
    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices);
    
    devices.forEach(d =>{
        const option = document.createElement('option');
        option.value = d.deviceId;
        option.text = d.label;

        if(d.kind==='audioinput'){
            audioInputEl.appendChild(option) // add option tag we just created to the right select
        }else if (d.kind === 'audiooutput'){
            audioOutputEl.appendChild(option)
        }else{
            videoInputEl.appendChild(option)
        }
    })

    }
    catch(err)
    {
        console.log(err)
    }

}


const changeAudioInput =async(e)=>{
    const deviceId = e.target.value;

    const newConstraints = {
        audio:{deviceId:{exact:deviceId}},
        video:true,
    }
    try {
        stream = await navigator.mediaDevices.getUserMedia(newConstraints);
        console.log(stream);
        const tracks = stream.getAudioTracks();
        console.log(tracks);    
    } catch (error) {
        
        console.log(error);
    }

}

const changeAudioOutput=async(e)=>{

    videoEl.setSinkId(e.target.value);
    console.log("changed audio device ")

}

const changeVideoInput=async(e)=>{
    const deviceId = e.target.value;

    const newConstraints = {
        audio:true,
        video:{deviceId:{exact:deviceId}},
    }
    try {
        stream = await navigator.mediaDevices.getUserMedia(newConstraints);
        console.log(stream);
        const tracks = stream.getVideoTracks();
        console.log(tracks);    
    } catch (error) {
        
        console.log(error);
    }

}
getDevices();