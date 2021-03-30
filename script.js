 ludoGame = () => {
    const play1 = Math.floor(Math.random() * 6)+1;
    const playDice =  `images/dice${play1}.png`;
    document.getElementById('check1').setAttribute(
        'src',playDice
    )
    
    const play2 = Math.floor(Math.random() * 6)+1;
    const play2Dice =  `images/dice${play2}.png`;
    document.getElementById('check2').setAttribute(
        'src',play2Dice
    )
       if (play1 > play2) {
           var dTitle=  document.getElementById('diceTitle');
             dTitle.innerHTML='Player1 won:)';

       }else if (play1 < play2) {
        var dTitle=  document.getElementById('diceTitle');
        dTitle.innerHTML='Player2 won:)';
           
       }else{
           var dTitle=  document.getElementById('diceTitle');
           dTitle.innerHTML='DRAW';
       }

 }