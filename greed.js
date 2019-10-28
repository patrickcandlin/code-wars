/*Greed is a dice game played with five six-sided dice. 
Your mission, should you choose to accept it, is to score a throw 
according to these rules. You will always be given 
an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point 

 A single die can only be counted once in each roll. 
 For example, a "5" can only count as part of a triplet 
 (contributing to the 500 points) or as a single 50 points,
  but not both in the same roll.
 */


function score( dice ) {
    // create an object to track the number of dice rolled
    const roll = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let score = 0;
    dice.map(die => roll[die] += 1)
    for(let i=1; i<=6; ++i ){
        if(roll[i] >= 3 && i != 1 && i != 5){
            score += i * 100
        }
    }
    if(roll[5] <= 2 ){
        score += 50 * roll[5]
    }if(roll[5] >=3){
        score += 500 + (50 * (roll[5] - 3))
    }if(roll[1] <= 2){
        score += 100 * roll[1]
    }if(roll[1] >= 3){
        score += 1000 + (100 * (roll[1] - 3))
    }

    return score

  }


    // console.log( score( [2, 3, 4, 6, 2] ) == 0,   "Should be 0 :-(" );
    // console.log( score( [4, 4, 4, 3, 3] ) == 400, "Should be 400" );
    // console.log( score( [2, 4, 4, 5, 4] ) == 450, "Should be 450" );
    // console.log( score( [ 3, 3, 3, 3, 3 ] ) == 300, "Should be 300" );
    console.log( score( [ 1, 1, 1, 1, 3 ] ) == 1100, "Should be 1100" );