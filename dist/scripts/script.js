let btn = document.getElementById('btn');

btn.addEventListener('click',function(e) {
  let result = document.getElementById('result');
  let total = Number(result.textContent);
  console.log(total += 1);
  
},false);