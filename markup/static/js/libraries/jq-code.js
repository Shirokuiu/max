$(function () {
  var contactLink = $('.contact__link');
  var contactPopup = $('.contact__popup');
  var contactPopupFormItems = $('.contact__popup-form-items');
  var mainNav = $('.main-nav');
  var logo = $('.logo');
  var pageFooter = $('.page-footer');
  var mainNavItem = mainNav.find('.main-nav__item');

  contactLink.on('click', function () {
    contactPopup.addClass('contact__popup--vissible');

    mainNav.addClass('main-nav--contactsOpen');
    logo.addClass('logo--contactsOpen');
    pageFooter.addClass('page-footer--contactsOpen');

    if (mainNavItem.hasClass('main-nav__item--active')) {
      mainNavItem.removeClass('main-nav__item--active');
    }
  });
  
  var mainNavItemHoverProject = $('.main-nav__item--hoverProject');
  
  mainNavItem.on('mouseover', function () {
    if ($(this).hasClass('main-nav__item--active')) {
        return false;
    } else if ($(this).hasClass('main-nav__item--project') && $(this).hasClass('main-nav__item--active')) {
        return false;
    } else if ($(this).parents().find('.main-nav').hasClass('main-nav--contactsOpen')) {
        return false;       
    } else if ($(this).hasClass('main-nav__item--project')) {
        $('.main-nav__item--home').addClass('main-nav__item--hoverProject');
        console.log('Ok');         
    } else if ($(this).hasClass('main-nav__item--home')) {
        $('.main-nav__item--project').addClass('main-nav__item--hoverHome');
        console.log('Ok');         
    }
  });
  
  mainNavItem.on('mouseout', function () {
    if ($(this).hasClass('main-nav__item--active')) {
        return false;
    } else if ($(this).hasClass('main-nav__item--project') && $(this).hasClass('main-nav__item--active')) {
        return false;
    } else if ($(this).hasClass('main-nav__item--project')) {
        $('.main-nav__item--home').removeClass('main-nav__item--hoverProject');
        console.log('Ok');         
    } else if ($(this).hasClass('main-nav__item--home')) {
        $('.main-nav__item--project').removeClass('main-nav__item--hoverHome');
        console.log('Ok');         
    }
  });

  contactPopupFormItems.on('focusin', function () {
    $(this).addClass('contact__popup-form-items--focus');
  });

  contactPopupFormItems.on('focusout', function () {
    $(this).removeClass('contact__popup-form-items--focus');
  });

  $('.contact__popup-close').on('click', function () {
    if (contactPopup.hasClass('contact__popup--vissible')) {
      contactPopup.removeClass('contact__popup--vissible');

      mainNav.removeClass('main-nav--contactsOpen');
      logo.removeClass('logo--contactsOpen');
      pageFooter.removeClass('page-footer--contactsOpen');
      
      if (mainNav.hasClass('main-nav--innerPage')) {
        $('.main-nav__item--project').addClass('main-nav__item--active');
      } else {
        mainNav.find('.main-nav__item--home').addClass('main-nav__item--active');
      }
    }
  });

  mainNavItem.on('click', function () {
    if ($(this).hasClass('main-nav__item--home') && contactPopup.hasClass('contact__popup--vissible')) {
      $(this).addClass('main-nav__item--active');
      mainNav.removeClass('main-nav--contactsOpen');
      logo.removeClass('logo--contactsOpen');
      pageFooter.removeClass('page-footer--contactsOpen');
      contactPopup.removeClass('contact__popup--vissible');
    }
  });
  
  $('.project-slider__nav-control').draggable({
    axis: 'x',
    containment: '.project-slider__nav',
    scroll: false
  });
  
  $('.project-slider__nav').mousemove(function() {
    var pos = $('.project-slider__nav-control').css('left');
    var num = parseInt(pos);
    
    console.log(num);
    if (num >= 10 && num < 20) {
      $('.project-slider__slide--zandwoord').removeClass('project-slider__slide--active');
      $('.project-slider__slide--everest').addClass('project-slider__slide--active');
    } else if (num < 10) {
      $('.project-slider__slide--zandwoord').addClass('project-slider__slide--active');
      $('.project-slider__slide--everest').removeClass('project-slider__slide--active');
    } else if (num >= 20) {
      /*for (i = 0, len = 1000; i < len; i++) {
        $('.project-slider__slide--zandwoord').css({
          'transform': 'translateX(' + -i + 'px)'
        });
        $('.project-slider__slide--everest').css({
          'transform': 'translateX(' + -i + 'px)'
        });
        }*/
      }
  });
  
  $('.project-slider__slide').mouseover(function () {
    if ($(this).hasClass('project-slider__slide--active')) {
      return false;
    } else {
      $(this).addClass('project-slider__slide--mouseHover');
    }
  });
  
  $('.project-slider__slide').mouseleave(function () {
    if ($(this).hasClass('project-slider__slide--active')) {
      return false;
    } else {
      $(this).removeClass('project-slider__slide--mouseHover');
    }
  });
  
  var blockDescription = $('.block-description');
  var parallax = $('.parallax');
  
  $(window).on('mousemove', function (e) {
    var w = $(window).width();
    var h = $(window).height();
    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;
    
    parallax.each(function(i, el) {
      var offset = parseInt($(el).data('offset'));
      var translate = 'translate3d('+ Math.round(offsetX * offset) + 'px,' + Math.round(offsetY * offset) + 'px, 0px';
      
      $(el).css({
        'transform': translate
      });
    });
  });
  
  $('.project-slider').slick({
    arrows: false,
    dots: true
  });
});
