//ativar links do menu

const links = document.querySelectorAll('.header-menu a')
links.forEach((link) =>{
  const url = location.href;
  const href = link.href;

  if (url.includes(href)){
    link.classList.add("ativo")
  }
})

// ativar itens do orçamento

const parametros = new URLSearchParams(location.search)

parametros.forEach((parametro) =>{
  const elemento = document.getElementById(parametro)
  if(elemento){
    elemento.checked = true
  }
})

//perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');
const ativaClass = 'ativa';

function activeAccordion(){
  const pergunta = event.currentTarget
  const controls = pergunta.getAttribute("aria-controls")
  const resposta = document.getElementById(controls)
  
  resposta.classList.toggle(ativaClass)
  const ativo = resposta.classList.contains(ativaClass)
  pergunta.setAttribute("aria-expanded", ativo)
}   

perguntas.forEach((item) =>{
  item.addEventListener('click', activeAccordion);
})

//Galeria de Bicicleta

const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarImagem(event){
  const img = event.currentTarget
  const midia = matchMedia('(min-width: 1000px)').matches
  const midia1 = matchMedia('(min-width: 800px)').matches
  if(midia || !midia1){
    galeriaContainer.prepend(img)
  }
  
}

galeria.forEach((img) => {
  img.addEventListener("click", trocarImagem)
})