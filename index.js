function takeANumber(katzDeliLine){
  // katzDeliLine.push(name);
  // return `Welcome, ${katzDeliLine.slice(-1)}. You are number ${katzDeliLine.length} in line.`;
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${katzDeliLine}.`
  }
  
  
  
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }else{
    var arr = [];
    for(var i=0; i<katzDeliLine.length; i++){
      arr.push(` ${i+1}. ${katzDeliLine[i]}`);
      
    }
    return `The line is currently:${arr}`;
  }
  
}

