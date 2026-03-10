$(function() {
  var $menuButton = $(".header__menu-button");
  var $gnav = $(".gnav");

  $menuButton.on("click", function() {
    $menuButton.toggleClass("header__menu-button--open");
    $gnav.toggleClass("gnav--open");
  });
});
