
var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
    

}
recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
    if (Content =="take my selfie"){
        console.log("taking selfie")
        speak();
    }
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data="Taking your selfie in 5 seconds";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);

setTimeout(function()
{
    take_snapshot();
    save();

},5000);

}
document.getElementById("camera");
Webcam.set({
    image_format:'jpeg',
 hight:250,
 width:360,
 jpeg_quality:90,

});
