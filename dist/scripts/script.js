const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click',function() {
  const pulsNum = 1;
  let numResult = Number(result.textContent) + pulsNum;
  if(numResult <= 10){
    result.textContent = numResult;
  }else{
    result.classList.add('limit');
    result.textContent = 'LIMIT!!';
    window.alert('カウントが上限に達しました！');
  }
  
},false);
