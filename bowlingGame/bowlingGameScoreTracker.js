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
  //   let frames=10;
  let frameCount=0;
  let currentFrame=[];


  return score;
};
getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
const getBestScore = (gameSets) =>{
  let bestScore=getScore([0]);
  return bestScore;
};
module.exports = {getScore,getBestScore};