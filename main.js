Webcam.set({
    width:200,height:200,image_format:"png",png_quality:90
});
var webcam = document.getElementById("webcam");
Webcam.attach(webcam);
function takepicture(){
    Webcam.snap(function(img_variable)
    {
        document.getElementById("snapshot").innerHTML="<img src='"+img_variable+"' id='snapshot_img'>"
    }
    );
}
console.log(ml5.version);
var model=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/roq5pOh45/model.json',confirm)

function confirm(){
    console.log("loaded teachable machine")
}

function analyzepicture(){
    var snap=document.getElementById("snapshot_img");
    model.classify(snap,result);
}
function result(error,results){
if(error){
    console.error(error);
}
else{
console.log(results);
document.getElementById("object").innerHTML=results[0].label;
document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2)*100+"%";
}
}