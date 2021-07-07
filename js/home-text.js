var p = document.getElementById('type');
p.innerHTML = '';
var n = 0;
var str = ' We first solve your problem... then we write the < code />.';
var typeTimer = setInterval(function() {
  n = n + 1;
  p.innerHTML = ">_ " + str.slice(0, n);
  if (n === str.length) {
    clearInterval(typeTimer);
    p.innerHTML = ">_ " + str;
    n = 0;
    setInterval(function() {

      if (n === 0) {
        p.innerHTML = ">_ " + str + ""
        n = 1;
      } else {
        p.innerHTML = ">_ " + str
        n = 0;
      };
    }, 500);
  };
}, 60)