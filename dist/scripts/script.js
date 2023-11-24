const btn = document.getElementById('btn');

btn.addEventListener('click',function() {
  
  const result = document.getElementById('result');
  const pulsNum = 1;
  let numResult = Number(result.textContent) + pulsNum;
  if(numResult <= 10){
    result.textContent = numResult;
  }else{
    result.textContent = 'LIMIT!!';
  }
  

},false);
