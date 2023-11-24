const btn = document.getElementById('btn');

btn.addEventListener('click',function() {
  
  const result = document.getElementById('result');
  const pulsNum = 1;
  let numResult = Number(result.textContent) + pulsNum;
  result.textContent = numResult;

},false);
