function al(args){
  return document.querySelector(args);
}

function hide(args){
  args.style.display = "none";
}

function show(args){
  args.style.display = "block";
}

function getName(filename){
  var arr = filename.split(/\\/g);
  return arr.pop();
};

al('.photo-upload').addEventListener('change',function(){
  var filename = al('.photo-upload').value;
  if(filename){
    hide(al('.label-video'));
    al('.photo-name').innerHTML = getName(filename);
  }else{
    show(al('.label-video'));
    al('.photo-name').innerHTML = getName("jpg e png");
  }
});

al('.video-upload').addEventListener('change',function(){
  var filename = al('.video-upload').value;
  if(filename){
    hide(al('.label-photo'));
    al('.video-name').innerHTML = getName(filename);
  }else{
    show(al('.label-photo'));
    al('.video-name').innerHTML = getName("mp4 e ogg");
  }
});

var allRadios = document.getElementsByName('q6_linkInterno');
var booRadio;
var x = 0;
for(x = 0; x < allRadios.length; x++){

    allRadios[x].onclick = function() {
        if(booRadio == this){
            this.checked = false;
            booRadio = null;
            show(al('.call2action'));
        }else{
            booRadio = this;
            hide(al('.call2action'));
            al('.call2action input').value = "";
        }
    };
}