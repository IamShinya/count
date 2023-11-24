const btn = document.getElementById('btn');
const result = document.getElementById('result');








btn.addEventListener('click',function() {
  
  // const result = document.getElementById('result');
  const pulsNum = 1;
  let numResult = Number(result.textContent) + pulsNum;
  if(numResult <= 10){
    result.textContent = numResult;
  }else{
    result.textContent = 'LIMIT!!';
    window.alert('カウントが上限に達しました！');
  }
},false);
