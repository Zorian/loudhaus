(function(){
  var wrap=document.createElement('div');
  wrap.innerHTML=
    '<button class="burger" id="burger" type="button" aria-label="Open menu" aria-expanded="false">'+
      '<span></span><span></span><span></span>'+
    '</button>'+
    '<div class="overlay" id="overlay" role="dialog" aria-modal="true" aria-label="Menu" hidden>'+
      '<button class="close" id="closeMenu" type="button" aria-label="Close menu">&times;</button>'+
      '<nav class="menu-nav">'+
        '<a href="who.html">Who</a>'+
        '<a href="work.html">Work</a>'+
        '<a href="contact.html">Contact</a>'+
      '</nav>'+
      '<a class="menu-home" href="index.html">Loud Haus.</a>'+
    '</div>';
  while(wrap.firstChild) document.body.appendChild(wrap.firstChild);

  var burger=document.getElementById('burger'),
      overlay=document.getElementById('overlay'),
      closeBtn=document.getElementById('closeMenu'),
      links=overlay.querySelectorAll('a'),
      lastFocus=null;

  var here=(location.pathname.split('/').pop()||'index.html');
  Array.prototype.forEach.call(links,function(a){
    if(a.getAttribute('href')===here) a.setAttribute('aria-current','page');
  });

  function open(){
    lastFocus=document.activeElement;
    overlay.hidden=false;
    requestAnimationFrame(function(){ overlay.classList.add('on'); });
    burger.setAttribute('aria-expanded','true');
    document.body.style.overflow='hidden';
    closeBtn.focus();
  }
  function close(){
    overlay.classList.remove('on');
    burger.setAttribute('aria-expanded','false');
    document.body.style.overflow='';
    setTimeout(function(){ overlay.hidden=true; },320);
    if(lastFocus) lastFocus.focus();
  }
  burger.addEventListener('click',open);
  closeBtn.addEventListener('click',close);
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && !overlay.hidden) close();
    if(e.key==='Tab' && !overlay.hidden){
      var f=[closeBtn].concat(Array.prototype.slice.call(overlay.querySelectorAll('a')));
      var first=f[0], lastEl=f[f.length-1];
      if(e.shiftKey && document.activeElement===first){ e.preventDefault(); lastEl.focus(); }
      else if(!e.shiftKey && document.activeElement===lastEl){ e.preventDefault(); first.focus(); }
    }
  });
})();
