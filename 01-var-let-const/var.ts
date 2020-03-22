var a = 1;
function funcao() {
  console.log(a);

  const b = 2;

  if(true) {
    var c = 3;
    console.log(b);
  }

  console.log(c);
}

funcao();