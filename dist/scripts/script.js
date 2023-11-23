let btn = document.getElementById('btn');

btn.addEventListener('click',function(e) {
  
  let result = document.getElementById('result');
  result.textContent = counter();
  // let total = Number(result.textContent);
  // console.log(total += 1);
  
},false);


let counter = () => {
  let countUp = 0;
  countUp ++;
  return countUp;
};




