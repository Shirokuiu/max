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

      mainNav.find('.main-nav__item--home').addClass('main-nav__item--active');
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
});

//# sourceMappingURL=main.js.map
