(()=>{
  const $hamburguerMenu = document.querySelector('.hamburguer-menu');
  const $navMirror = document.querySelector('.nav-mirror');

  $hamburguerMenu.addEventListener('click', function () {
    this.classList.toggle('-change');

    if($navMirror.style.display === 'block') {
      $navMirror.style.display = 'none';
    } else{
      $navMirror.style.display = 'block';
    }
  })
})()
