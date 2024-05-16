const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();

console.log(supportedConstraints)


const changeVideoSize = ()=>{

    stream.getVideoTracks().forEach(track => {
        //track is a video tracj  we can get its capabilities like we did below in the comments: const  capabilities = track.getCapabilities() console.log(capabilities);  
        
        const capabilities = track.getCapabilities();
        const height  = document.querySelector('#vid-height').value
        const width  = document.querySelector('#vid-width').cvalue

        vConstraints = {
            height :{exact : height <capabilities.height.max ? height:capabilities.height.max},
            width: {exact : width <capabilities.width.max ? width:capabilities.width.max}
            // aspectRatio : 10,
            // frameRate: 5,
        }
        track.applyConstraints(vConstraints);
    });
    // stream.getTracks().forEach(track => {
    //     const  capabilities = track.getCapabilities();
    //     console.log(capabilities);   
    // });
}