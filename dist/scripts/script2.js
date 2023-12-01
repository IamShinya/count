const btn2 = document.querySelector('.btn2');
const usrCnt = document.querySelector('.usrCnt');
const result2 = document.querySelector('.result2');
const form = document.querySelector('form');

//ユーザーから数値を取得し、その数からカウントアップ
btn2.addEventListener('click',function() {

  const numEx =/\d/g;//数字であるか判定
  const usrNumber = Number(usrCnt.value);

  if(numEx.test(usrNumber)) {//数字であるか
    if(usrNumber <= 1000){//1000以下であるか

      if(document.querySelector('.newBtn') === null){//newBtnが有るかどうか
        const container = document.getElementById('container');
        const newBtn = document.createElement('button');
        newBtn.className = 'newBtn';
        newBtn.textContent = 'COUNT UP!!!';
        container.appendChild(newBtn);
        const resetBtn = document.createElement('button');
        resetBtn.className = 'resetBtn';
        resetBtn.textContent = 'RESET!!!';
        container.appendChild(resetBtn);
        form.textContent = '';
        if(usrCnt.value !== '' && usrCnt.value !== ' ' && usrCnt.value !== '　'){
          result2.textContent = usrCnt.value;
        }else{
          result2.textContent = 0;
        }
      }

      
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