const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

//ボタンをクリックする度に数字がカウントアップ
//上限に達したらテキスト変更か、ページリロード
btn.addEventListener('click',function() {
  const pulsNum = 1;
  let numResult = Number(result.textContent) + pulsNum;
  if(numResult <= 10){
    result.textContent = numResult;
  }else{
    if(window.confirm('カウントが上限に達しました！\n最初からカウントし直しますか？')){
      location.reload();
    }else{
      result.classList.add('limit');
      result.textContent = 'LIMIT!!';
    }
  }
  
},false);
