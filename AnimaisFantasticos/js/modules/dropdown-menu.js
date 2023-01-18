export default function initDropdownMenu(){
  const dropdown = document.querySelectorAll('[data-dropdown');
  dropdown.forEach((item) =>{
    ['touchstart', 'click'].forEach((userEvent) =>{
      item.addEventListener(userEvent, handleClick)
    })
  })

  function handleClick(event){
    event.preventDefault()
    this.classList.toggle('active')
  }
}