const form = document.getElementById('my-form'); //Puxa informações do form

function validaNome(nomeCompleto){ //Verifica se o nome digitado é completo
  const nomeComoArray = nomeCompleto.split(' ') //Com o split passando caractere como espaço, garante q tenha 2 arrays nessa nomeComoArray.
  return nomeComoArray.length >= 2; // só retorna se o array for maior ou igual a 2.
}

form.addEventListener('submit', function(e){ // faz com que a pagina não seja atualizada após clicar no botão enviar.
  let formEValido = false;
  e.preventDefault(); // <<<< faz com que a pagina não seja atualizada após clicar no botão enviar.

  const nomeUsuario = document.getElementById('event-name');
  const emailUsuario = document.getElementById('event-email');
  const senhaUsuario = document.getElementById('event-password');
  const mensagemSucesso = `Cadastro realizado com sucesso, muito obrigado ${nomeUsuario.value}`

    formEValido = validaNome(nomeUsuario.value)
  if(formEValido){
    alert(mensagemSucesso)
    nomeUsuario.value = '';
    emailUsuario.value = '';
    senhaUsuario.value = '';
  }
  else{
    alert("Nome inválido - Verifique se você digitou seu nome completo.")
  }
});

