// const isNumb
const getFrameSum = (frame) =>{
  return frame.reduce((acc,score)=>{
    acc+=score;
    return acc;
  });
};

// console.log(getFrameSum([1,2,3]));
const getScore = (rolls) =>{
  if(!Array.isArray(rolls)){
    return new Error('Input should be an array');
  }
  //   if(!(rolls.length === 20 || rolls.length ===21)){
  //     return new Error('Size of input array should be 20 or 21');
  //   }

  
  let score=0;
  let frameScore=0;
  let frameTracker=0;
  //   let frames=10;

  for(let i=0;i<rolls.length;i++){
    let roll=rolls[i];
    
    if(frameScore!=10 && frameTracker!=2){
      frameScore+=roll;
      frameTracker+=1;
      console.log(frameScore);
    }
    if(frameScore===10){
      if(frameTracker!=2){
        score+=frameScore+rolls[i+1]+rolls[i+2]; 
        // console.log(score);
        frameTracker=0;
        frameScore=0;
      }
      else{
        score+=frameScore+rolls[i+1];
        frameTracker=0;
        frameScore=0;
      }
    }
    if(frameTracker===2){
      score+=frameScore;
      frameTracker=0;
      frameScore=0;
    }
  }


  return score;
};
console.log(getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
const getBestScore = (gameSets) =>{
  let bestScore=getScore([0]);
  return bestScore;
};
module.exports = {getScore,getBestScore};