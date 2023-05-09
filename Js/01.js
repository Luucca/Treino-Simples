var button = document.querySelector('.button')

button.addEventListener('click', mostrar )

function mostrar(){

 var input = document.querySelector('.number')
 var número = Number(input.value);

 var text = document.querySelector('.text')

 var valor = Math.floor(Math.random()* 10)

  if(número == valor){
    text.innerHTML=`Você Acertou!`
  }else{
    if(número < 0 || número > 10){
      alert('Número invalido! Tente um número de 0 a 10!')
      text.innerHTML='Tente de novo!'
      input.value = null
    
    }else if(número != valor){
       text.innerHTML=`Você errou! O número erá ${valor}.`
       

    }
    
  }
}