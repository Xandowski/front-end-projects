(()=>{
  const $hamburguerMenu = document.querySelector('.hamburguer-menu');
  const $navMirror = document.querySelector('.nav-mirror');

  $hamburguerMenu.addEventListener('click', function () {
    this.classList.toggle('-change');

    if($navMirror.className === 'nav-mirror') {
      $navMirror.className += ' -responsive';
    } else{
      $navMirror.className = 'nav-mirror';
    }
  })
})()
