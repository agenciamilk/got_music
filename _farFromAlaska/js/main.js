function getName(filename){
  var arr = filename.split(/\\/g);
  return arr.pop();
};

document.querySelector('.photo-upload').addEventListener('change',function(){
  var filename = document.querySelector('.photo-upload').value;
  if(filename){
    document.querySelector('.photo-name').innerHTML = getName(filename);
  }else{
    document.querySelector('.photo-name').innerHTML = getName("jpg e png");
  }
});

document.querySelector('.video-upload').addEventListener('change',function(){
  var filename = document.querySelector('.video-upload').value;
  if(filename){
    document.querySelector('.video-name').innerHTML = getName(filename);
  }else{
    document.querySelector('.video-name').innerHTML = getName("mp4 e ogg");
  }
});
