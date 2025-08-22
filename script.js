var dice1;
var dice2;
var score1 = [];
var score2 = [];
var sum1 = 0;
var sum2 = 0;

function roll(){
    
    dice1 = Math.floor(Math.random()*6)+1;
    score1.push(dice1);
    dice2 = Math.floor(Math.random()*6)+1;
    score2.push(dice2);
    document.querySelectorAll("#p1score")[0].innerHTML = score1;
    document.querySelectorAll("#p2score")[0].innerHTML = score2;
    // for (let i = 0; i < score1.length; i++) {
    //     sum1 += score1[i];
    // }
    // for (let i = 0; i < score2.length; i++) {
    //     sum2 += score2[i];
    // }
    if (dice1 === 1){
        document.querySelectorAll("#img1")[0].src = "./img/1.png";
    }
    else if (dice1 === 2){
      document.querySelectorAll("#img1")[0].src = "./img/2.png";  
    }
    else if (dice1 === 3){
        document.querySelectorAll("#img1")[0].src = "./img/3.png";
    }
    else if (dice1 === 4){
        document.querySelectorAll("#img1")[0].src = "./img/4.png";
    }
    else if (dice1 === 5){
        document.querySelectorAll("#img1")[0].src = "./img/5.png";
    }
    else if (dice1 === 6){
        document.querySelectorAll("#img1")[0].src = "./img/6.png";
    }
    if (dice2 === 1){
        document.querySelectorAll("#img2")[0].src = "./img/1.png";
    }
    else if (dice2 === 2){
      document.querySelectorAll("#img2")[0].src = "./img/2.png";  
    }
    else if (dice2 === 3){
        document.querySelectorAll("#img2")[0].src = "./img/3.png";
    }
    else if (dice2 === 4){
        document.querySelectorAll("#img2")[0].src = "./img/4.png";
    }
    else if (dice2 === 5){
        document.querySelectorAll("#img2")[0].src = "./img/5.png";
    }
    else if (dice2 === 6){
        document.querySelectorAll("#img2")[0].src = "./img/6.png";
    }
    
    sum1 += dice1;
    sum2 += dice2;
    document.querySelectorAll("#tot1")[0].innerHTML = sum1;
    document.querySelectorAll("#tot2")[0].innerHTML = sum2;
    if(sum1 >= 30 && sum2 >= 30){
        document.querySelectorAll("#img1")[0].src = "./img/tie.jpg";
        document.querySelectorAll("#img2")[0].src = "./img/tie.jpg";
        document.querySelectorAll("#win")[0].innerHTML = "It's a tie!!";
    }
    else if(sum1 >= 30){
        document.querySelectorAll("#img1")[0].src = "./img/goku2.gif";
        document.querySelectorAll("#win")[0].innerHTML = "Player 1 wins!";
    } else if(sum2 >= 30){
        document.querySelectorAll("#img2")[0].src = "./img/goku2.gif";
        document.querySelectorAll("#win")[0].innerHTML = "Player 2 wins!";
    }
       
}



