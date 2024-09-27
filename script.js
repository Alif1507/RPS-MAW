let score = JSON.parse (localStorage.getItem 
  ('score')) ||  {
      wins: 0,
      loses: 0,
      ties: 0
    }

    scoreElement ();
 

  let isAutoPlaying = false;
  let intervalId;

  function autoPlay() {
    if (!isAutoPlaying) {
      
     intervalId =  setInterval(function () {
      const playerMove = pickComputerMove();
      playGame(playerMove)
      
    }, 2000)
    isAutoPlaying = true;  
    } else {
      clearInterval(intervalId)
      isAutoPlaying = false;
    }

    nameAutoplay()
    
  }

  function nameAutoplay() {
   const autoElt = document.querySelector('.auto')

   if (autoElt.innerHTML === 'Auto play') {
    autoElt.innerHTML = 'Stop play'
   } else {autoElt.innerHTML = 'Auto play'}
    
  }

  
  

  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    } 

    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.loses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }

    localStorage.setItem ('score',JSON.stringify (score))

    scoreElement ();

    document.querySelector('.hasil').innerHTML = result;

    document.querySelector('.pilihan')
    .innerHTML = `You
    <img class="gambar" src="img/${playerMove}-emoji.png" alt="">
    Computer
    <img class="gambar" src="img/${computerMove}-emoji.png" alt="">`

    
  }

  function scoreElement () {
    document.querySelector('.WLT').innerHTML =
     `Wins: ${score.wins} loses: ${score.loses} ties: ${score.ties}`
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
  }