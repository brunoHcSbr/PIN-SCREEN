function insert(num){
    const numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num;
   if(numero.length >= 6){
    document.getElementById('result').style = 'border: solid 1px red'
    document.getElementById('result').innerHTML=""
    alert("SENHA MUITO LONGA!!!")
   }
}
function clean(){
    document.getElementById('result').innerHTML = "";
    document.getElementById('result').style = "border:solid 1px black"
}
document.getElementById('add').addEventListener('click',quantidade);
function verificar(){
    const result= document.getElementById('result').innerHTML
    const senha="098765"
    if(result==senha){
      document.getElementById('result').innerHTML=""
      alert("SENHA CORRETA!!!");
      document.getElementById('result').style='border:solid 1px green'
      
    }
    else if(result.length<4){
      document.getElementById('result').innerHTML="";
      alert("SENHA MUITO CURTA!!!");
      document.getElementById('result').style='border:solid 1px yellow';
    }
    else if(result.length!=senha){
      document.getElementById('result').innerHTML="";
      alert("SENHA INCORRETA!!!");
      document.getElementById('result').style='border:solid 1px red';
    }
  }
