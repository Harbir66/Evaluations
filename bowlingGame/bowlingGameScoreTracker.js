const getFrameSum = (frame) =>{
  return frame.reduce((acc,score)=>{
    acc+=score;
    return acc;
  });
};

const isValidRolls = (rolls) =>{
  return rolls.every(roll => {
    return typeof roll === 'number';
  });
};
// console.log(getFrameSum([1,2,3]));
const getScore = (rolls) =>{
  if(!Array.isArray(rolls)){
    throw new Error('Input should be an array');
  }
  if(!isValidRolls(rolls)){
    throw new Error('Rolls must be numeric value');
  }
  let frames=[];
  let index=0;
  for(index=0;index<rolls.length;index+=2){
    let tempArray=[];
    tempArray.push(rolls[index]);
    if(tempArray[0]===10){
      index-=1;
    }
    tempArray.push(rolls[index+1]);
    if(getFrameSum(tempArray)>=10){
      tempArray.push(rolls[index+2]);
    }
    console.log(tempArray);
    frames.push(tempArray);
  }
  frames.length=10;

  let score=0;
  frames.forEach(frame =>{
    score+=getFrameSum(frame);
  });
  return score;
};

const games=[
  [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
  [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [10,10,10,10,10,10,10,10,10,10,10,10]
];
// console.log(getScore([3,6, 3, 6, 3, 6,3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
console.log(getScore(games[0]));
const getBestScore = (games) =>{
  return games.reduce((maxScore,game)=>{
    maxScore=Math.max(maxScore,getScore(game));
    return maxScore;
  },-1);
};
// console.log(getBestScore(games));
module.exports = {getScore,getBestScore};