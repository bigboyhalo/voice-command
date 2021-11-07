x=0;
y=0;
draw_apple="";
apple="";
speak_data="";
tonumber=0;

function preload(){
    apple=loadImage("apple.png");
}

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
 document.getElementById("status").innerHTML="system is listening please speak";
 recognition.start();
 canvas.clear();
}

function setup(){
    canvas=createCanvas(900,600);
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="speech has been reognised as "+content;
    tonumber=Number(content);
    if (Number.isInteger(tonumber)) {
        document.getElementById("status").innerHTML="started drawing apples";
        draw_apple="set"
    }

    else{
      document.getElementById("status").innerHTML="can't recognis the number";
    }
}

function draw(){
    if (draw_apple=="set") {
        for(var i=1;i<=tonumber;i++){
         x=Math.floor(Math.random()*800);
         y=Math.floor(Math.random()*500);
         image(apple,x,y,70,70);
        }
            
        }
        document.getElementById("status").innerHTML=tonumber+" apples drawn";
        draw_apple="";
    }
