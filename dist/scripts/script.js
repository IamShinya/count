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

const btn2 = document.querySelector('.btn2');
const usrCnt = document.querySelector('.usrCnt');
const result2 = document.querySelector('.result2');

btn2.addEventListener('click',function() {
  const numEx =/\d/;
  const usrNumber = Number(usrCnt.value)
  if(numEx.test(usrNumber)) {
    if(usrNumber <= 1000){
      const container = document.getElementById('container');
      const newBtn = document.createElement('button');
      newBtn.textContent = 'COUNT UP!!!';
      container.appendChild(newBtn);
      console.log(newBtn);
      result2.textContent = usrCnt.value;
    }else{
      window.alert('１０００以下でお願いします！');
    }
    
  }else{
    window.alert('１～１０００までの数字で記入して下さい！！');
  }
  
});
