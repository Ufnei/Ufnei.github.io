var PullsOutMenu = anime({						/*Отвечает за анимацию появления меню*/
  targets: '#header_menu',			
  translateX: -400,				
  easing: 'easeInOutQuint',
  duration: 500,
  direction: 'reverse',
  autoplay: false
});



var HidesButtonInHead = anime({					/*Отвечает за анимацию исчезновения бургера*/ 
  targets: '#menu_button_open div',
  translateX: 250,
  rotate: 180,
  duration: function(target) {
    return target.getAttribute('data-duration');
  },
  delay: function(target, index) {
    return index * 100;
  },
  easing: 'easeInOutQuint',
  direction: 'reverse',
  autoplay: false
});



var AnimationOfCross = anime.timeline({			/*Отвечает за анимацию формирования крестика в меню*/
  targets: '#menu_button_close',
  duration: 500,
  easing: 'easeOutExpo',
  direction: 'reverse',
  autoplay: false,
});

AnimationOfCross								/*Анимируем каждый "этаж" бургера*/
  .add({	
  	targets: '#menu_button_close .el1',
  	translateY: 25,
    rotate: 45,
    offset: 400
  })
  .add({
  	targets: '#menu_button_close .el2',
    translateX: 90,
    offset: 400
  })
  .add({
  	targets: '#menu_button_close .el3',
   	rotate: 135,
   	offset: 400

  });







document.querySelector('#menu_button_open').onclick = function() { /*обработчик клика на бургер*/
  PullsOutMenu.play();			/*запускает анимацию выдвижения меню*/
  PullsOutMenu.reverse();		/*реверсирует анимацию*/

  HidesButtonInHead.play();	 	/*тот же функцианал только с бургером*/		
  HidesButtonInHead.reverse();	/*реверсирует анимацию*/

  AnimationOfCross.play();		/*тот же функцианал только с крестиком*/	
  AnimationOfCross.reverse();	/*реверсирует анимацию*/

  /*присваивает бургеру позицию:фиксед(иначе появляется горизонтальная прокрутка)*/
}


document.querySelector('#menu_button_close').onclick = function() {
  PullsOutMenu.play();			/*сделано для реверсии*/
  PullsOutMenu.reverse();

  HidesButtonInHead.play();		/*сделано для реверсии*/
  HidesButtonInHead.reverse();

  AnimationOfCross.play();		/*сделано для реверсии*/
  AnimationOfCross.reverse();

}





$(document).ready(function() {  /*Отправка сообщений на почту*/

  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});








