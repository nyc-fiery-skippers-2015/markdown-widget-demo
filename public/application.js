$(document).ready(function(){
  getNumber();
});

var getNumber = function(){
  $.ajax({
    url:'/first.json',
    dataType :"json"
  }).then(function(response){
    getNumberSequel(response.value);
  })
};

var getNumberSequel = function(value){
  var myValue = value;
  $.ajax({
    url:'/second.json',
    dataType :"json"
  }).done(function(response){
    $("#markdown-source").text(myValue + response.value);
  }).fail(function(error){
     console.log(error);
   });
};
