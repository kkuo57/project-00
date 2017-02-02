/*var raceArray = ["", "", ""];
$(window).on("keypress", function handleKeypress(){
  for (i = 0; i < raceArray.length; i++){}
});*/
var playerone_count = 20;
var playertwo_count = 20

$(window).on("keyup", function handleKeyup(event){
  console.log(event.which)
  if (event.which === 65 ||  event.which === 83 ){
    $(".playerone").attr("style", "margin-left:" + playerone_count + "px;");
    playerone_count = playerone_count + 20;
  }
  if (event.which === 186 || event.which === 222 ){
    $(".playertwo").attr("style", "margin-left:" + playertwo_count + "px;");
    playertwo_count = playertwo_count + 20;  
  }

});