var myElements=document.getElementsByClassName("column");
var i;
function listView() {
    for (i = 0; i < myElements.length; i++) {
        myElements[i].style.width="100%";
    }
}

function gridView() {
    for (i = 0; i < myElements.length; i++) {
        myElements[i].style.width="50%";
    }
}
function moreDetails() {
    var column1=document.getElementById("column1");
    window.location.href="outputDetails.html?column1"+column1;
  }
  function upload() {
      window.location.href="upload.html";
  }
  function preview_image(event) {
    var reader=new FileReader();
    reader.onload=function() {
      var output=document.getElementById('output_image');
      output.src=reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }
  function preview_sample(event) {
    var reader=new FileReader();
    reader.onload=function() {
      var output=document.getElementById('sample_image');
      output.src=reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }
  function edit() {
    var edit1=document.getElementById("edit1");
    window.location.href="edit_artist_detail.html?edit1"+edit1;
  }

function edit_text(params) {
  var name=document.getElementById("artist_title");
  name.contentEditable=true;
}