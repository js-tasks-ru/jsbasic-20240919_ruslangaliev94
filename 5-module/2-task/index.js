function toggleText() {
  let toggleTextBtn = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');

  toggleTextBtn.addEventListener('click', event =>{
    if (text.hidden === false){
      text.hidden = true
    } else {
      text.hidden = false
    }
  })
}