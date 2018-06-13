var PullsOutMenu = anime({						/*Отвечает за анимацию появления меню*/
  targets: '#header_menu',			
  translateX: -410,				
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
  elasticity: function(target, index, totalTargets) {
    return 200 + ((totalTargets - index) * 200);
  },
  easing: 'easeInOutQuint',
  direction: 'reverse',
  autoplay: false
});



var AnimationOfCross = anime.timeline({			/*Отвечает за анимацию формирования крестика в меню*/
  targets: '#menu_button_close',
  duration: 1000,
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


var PullsOutCardClick1 = anime({						/*Отвечает за анимацию 1 карточки*/
  targets: '#cube1',
  rotateY: 180,
  rotateX: 0,
  easing: 'easeInOutQuint',
  duration: 200,
  direction: 'reverse',
  autoplay: false
});

var PullsOutCardClick2 = anime({						/*Отвечает за анимацию 2 карточки*/
  targets: '#cube2',
  rotateY: 180,
  rotateX: 0,
  easing: 'easeInOutQuint',
  duration: 200,
  direction: 'reverse',
  autoplay: false
});




document.querySelector('#menu_button_open').onclick = function() { /*обработчик клика на бургер*/
  PullsOutMenu.play();			/*запускает анимацию выдвижения меню*/
  PullsOutMenu.reverse();		/*реверсирует анимацию*/

  HidesButtonInHead.play();	 	/*тот же функцианал только с бургером*/		
  HidesButtonInHead.reverse();	/*реверсирует анимацию*/

  AnimationOfCross.play();		/*тот же функцианал только с крестиком*/	
  AnimationOfCross.reverse();	/*реверсирует анимацию*/

  /*присваивает бургеру позицию:фиксед(иначе появляется горизонтальная прокрутка)*/
  $(".menu_button_open").addClass('menu_button_open_fixed')	
}


document.querySelector('#menu_button_close').onclick = function() {
  PullsOutMenu.play();			/*сделано для реверсии*/
  PullsOutMenu.reverse();

  HidesButtonInHead.play();		/*сделано для реверсии*/
  HidesButtonInHead.reverse();

  AnimationOfCross.play();		/*сделано для реверсии*/
  AnimationOfCross.reverse();

  /*функция которая убирает у бургера позицию:фиксед(Иначе бургер "прилипает" к контенту)*/
	function func() {
  		$(".menu_button_open").removeClass('menu_button_open_fixed');
	}
  setTimeout(func, 1030);	/*вызывает функцию func через 1030мс(Иначе появляется полоса прокрутки)*/
}


document.querySelector('#cube1').onclick = function() { /*обработчик клика карту*/
  PullsOutCardClick1.play();			/*запускает анимацию карточек*/
  PullsOutCardClick1.reverse();		/*реверсирует анимацию*/
}
document.querySelector('#cube2').onclick = function() { /*обработчик клика карту*/
  PullsOutCardClick2.play();			/*запускает анимацию карточек*/
  PullsOutCardClick2.reverse();		/*реверсирует анимацию*/
}