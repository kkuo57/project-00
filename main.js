/*var raceArray = ["", "", ""];
$(window).on("keypress", function handleKeypress(){
  for (i = 0; i < raceArray.length; i++){}
});*/
var playerone_count = 0;
var playertwo_count = 0;

$(window).on("keyup", function handleKeyup(event){
  console.log(event.which)
  if (event.which === 65 ||  event.which === 83 ){
    $(".playerone").attr("style", "margin-left:" + playerone_count + "px;");
    playerone_count = playerone_count + 20;
  }
  if (event.which === 75 || event.which === 76 ){
    $(".playertwo").attr("style", "margin-left:" + playertwo_count + "px;");
    playertwo_count = playertwo_count + 20;  
  }
  if (playerone_count === 1380){
  alert ("Player One Wins!")
  } else if (playertwo_count === 1380){
  alert ("Player Two Wins!")
  }
});