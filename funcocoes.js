
  var botao = window.document.getElementById("btn")

  var nome = window.document.getElementsByName("name")

  var venc = window.document.getElementsByName("vancimento")

  var time = new Date()
  time.getDay();

  

  function testecpf() {

    if (dados.cpf.value.length == 11) {
 
      

}

else {

  alert('CPF INVÁLIDO!')


}
  }
function testedate(){


if (venc <= time) {



}

else {

  alert('Data Inválida')

}



}

if (nome == null && venc == null) {

alert('Campos não preenchidos')

}

else {

  document.getElementById('btn').type = 'submit';


}
 

