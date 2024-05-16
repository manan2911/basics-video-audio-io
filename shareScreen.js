




const shareScreen=async()=>{

    const options={
        video:true,
        audio:false,
        surfaceSwitching:'include',//include or exclude not true or false
    }
    try
    {
    mediaStream = await navigator.mediaDevices.getDisplayMedia(options);}catch(err){
        console.log(err);
    }

    //we dont handle all button paths to do so you'de need to check the dom or best use a ui framework
    changeButtons(['green','green','blue','blue','green','green','green','green']);

}