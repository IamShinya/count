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
const form = document.querySelector('form');

//ユーザーから数値を取得し、その数からカウントアップ
btn2.addEventListener('click',function() {
  
  
  const numEx =/\d/;//数字であるか判定
  const tabEx =/\S/;//空白出ないかどうか判定＊検討中！
  const usrNumber = Number(usrCnt.value)
  const pulsNum = 1;
  let numResult = usrNumber + pulsNum;

  
  if(numEx.test(usrNumber)) {//数字であるか
    if(usrNumber <= 1000){//1000以下であるか
      const container = document.getElementById('container');

      if(document.querySelector('.newBtn') === null){//newBtnが有るかどうか
        const newBtn = document.createElement('button');
        newBtn.className = 'newBtn';
        newBtn.textContent = 'COUNT UP!!!';
        container.appendChild(newBtn);
        const resetBtn = document.createElement('button');
        resetBtn.className = 'resetBtn';
        resetBtn.textContent = 'RESET!!!';
        container.appendChild(resetBtn);
        form.textContent = '';
      }
      result2.textContent = usrCnt.value;
    }else{
      window.alert('１０００以下でお願いします！');
    }
  }else{
    window.alert('１～１０００までの数字で記入して下さい！！');
  }

  document.querySelector('.newBtn').addEventListener('click',function(){
    result2.textContent ++;
  },false);

  document.querySelector('.resetBtn').addEventListener('click',function(){
    location.reload();
  });

});


