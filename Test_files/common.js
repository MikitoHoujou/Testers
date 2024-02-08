// メガメニュー
jQuery(function () {
  jQuery('.gnav > .mega').hover(function(){
      jQuery(this).children('.sub_nav').stop().slideToggle();
      jQuery('body').toggleClass('overlay');
  });
});

// スマホメニュー
jQuery(function(){
	jQuery('.btn_menu').on('click', function() {
		jQuery('#sp_header nav').slideToggle();
		jQuery('.btn_menu').toggleClass('open');
		jQuery('body').toggleClass('overlay');
	});
});
jQuery(function(){
	jQuery('.trigger').on('click', function() {
		jQuery(this).next().slideToggle();
		jQuery(this).toggleClass('open');
	});
});

// PCヘッダー用Search
jQuery(function(){
	jQuery(".btn_search").on("click", function() {
		jQuery('.header_search').toggleClass('open');
	});
});

// スムーススクロール
  jQuery('a[href^="#"]').click(function(){
    var speed = 500;
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    jQuery("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

// PC/SP画像切り替え
jQuery(function($) {
	var $elem = $(".img_replace");
	var sp = "_sp.";
	var pc = "_pc.";
	var replaceWidth = 767;

	function imageReplace() {
		var windowWidth = parseInt(window.innerWidth);
		$elem.each(function() {
			var $this = $(this);
			if (windowWidth >= replaceWidth) {
				$this.attr("src", $this.attr("src").replace(sp, pc));
			} else {
				$this.attr("src", $this.attr("src").replace(pc, sp));
			}
		});
	}
	imageReplace();
});

//TOPに戻る
jQuery(function(){
  var pagetop = jQuery('#page_top');
  pagetop.hide();
  jQuery(window).scroll(function () {
     if (jQuery(this).scrollTop() > 500) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     jQuery('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});