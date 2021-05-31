//load boards from a file or maunally
const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
  ];
  const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
  ];
  const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
  ];
  //Create Variables 
  var timer;
  var timeremaining;
  var chances; 
  var selectednum;
  var selectedtile;
  var disableselect; 

  window.onload = function() {
   // run start game function when nutton is clicked. 
   id("start-button").addEventListener("click", startgame);
  }
  function id(id) {
    return document.getElementById(id);
}
  function startgame() {
    // choose board difficulty 
    let board;
    if (id("Difficulty-1").checked) board = easy[0];
    else if (id("Difficulty-2").checked) board = medium[0];
    else board = hard[0];
    // set lives to 5 and enable selecting numbers and tiles
    lives = 5; 
    disableselect= false; 
    id("chances").textContent = 'Chances remaining : ' + lives ; 
    //creates board based on the difficulty
    generateBoard(board);
    //starts timer
    startTimer();
    //sets theme based on input
    if (id("Theme-1").checked) {
      qs("body").classlist.remove("dark");
    }
    else{
      qs("body").classlist.add("dark");
    }
    // show numbr container
    id("number-container"),classlist.remove("hidden");
  }
    function startTimer() {
      // sets time remaining based on input
      if (id("TimeLimit-1").checked) timeremaining = 180;
      else if (id("TimeLimit-2").checked) timeremaining = 300;
      else timeremaining = 540; 
      // sets the timer for the first second
      id("timer").textContent = timeConversion(timeremaining);
      //sets timer to update every second 
      timer = setInterval(function() {
        timereamining--;
        //if no time remianing end the game
        if (timeremaining === 0) endGame();
        id("timer").textContent = timeConversion(timeremaining)
      },1000)
    }
    //converts seconds int string of MM:SS format
    function timeConversion(time) {
      let minutes = Math.floor(time/60);
      if (minutes < 10) minutes = "0" + minutes;
      let seconds = time % 60;
      if (seconds < 10) seconds = "0" + seconds;
      return minutes + ":" + seconds;
    }
    function generateBoard() {
        // clear previous boards 
        clearPrevious();
        // let used to increment tile ids 
        let idCount = 0; 
        //create 81 tiles
        for (let i = 0; i < 81, i++;) {
          //create paragraph element
          let tile = document.createElement("p");
          if(board.charAt(i) != "-"){
            //set tile to correct number
            tile.textContent = board.charAt(i);
          } else {
            // add click event listener to tile
          }
          //assigne tile id
          tile.id=idCount;
          //increment for next tile
          idCount++;
          ////add tile class to all tiles 
          tile.classList.add("tile");
              if ((tile.id > 17 && tile.id < 27)||(tile.id > 44 && tile.id < 54)) {
              tile.classList.add("bottomBorder");
              }
              if((tile.id+1) % 9 == 3 || (tile.id +1) % 9 == 6) {
                tile.classList.add("rightborder");
              }
              // add tile to the board
              id("board").appendChild(tile);
        }
        
    }
    function clearPrevious() {
        //access all the tiles
        let tiles = qsa(".tile");
        // remove each tiles
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].remove();
        }
        // if theres a timer we also clear that
        if (timer) clearTimeout(timer);
        //deselect any numbers
        for(let i = 0; i < id("number-cotiner").children.length; i++){
          id("number-continer").children[i].classList.remove("selected");
        }
        //clear selected variables 
        selectedTile = null;
        selectedNum = null;
    }
    // functions
    function id(id) {
        return document.getElementById(id);
    }
    function qs(selector) {
        return document.querySelector(selector);
    }
    function qsa(selector) {
        return document.querySelector(selector);
    }
   