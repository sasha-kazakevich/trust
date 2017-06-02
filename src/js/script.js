jQuery(document).ready(function($) {
    $('#youtube1').mediaelementplayer();
});

var coder = {
  init: function(){
    this.menu = document.getElementById('header-menu');
    this.burger = document.getElementById('burger-button');
    this.open = document.getElementById('open-menu');

    this.events.call(this);
  },
  events: function(){
    this.burger.addEventListener('click',function(){
      console.log(this.menu);
      this.menu.classList.toggle('open');
      this.open.classList.toggle('open-menu');
    }.bind(this));
    this.open.addEventListener('click',function(){
      this.menu.classList.toggle('open');
      this.open.classList.toggle('open-menu');
    }.bind(this))
  }
}

window.onload = coder.init();
