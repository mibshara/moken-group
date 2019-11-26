/*jshint esversion: 6 */
$(document).ready(function () {

	if ($("body").hasClass("home")) {
    var controllerMenu = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: ".scroll-trigger",
      triggerHook: '0.1'
    })
    .setClassToggle('.block-top', 'top-line-white')
    .addTo(controllerMenu);  
  }
  // menu click humburger
  $(".hamburger-block").click( function() {
    $(".block-mnu").removeClass("mnu-hidden");
  });
  
  $(".mnu-closed").click( function() {
    $(".block-mnu").addClass("mnu-hidden");
  });

  $(".menu a").click( function() {
    $(".block-mnu").addClass("mnu-hidden");
  });
  $(".scroll-left").each(function(){var controller1=new ScrollMagic.Controller();var textAnimation_1=new TimelineMax().fromTo(this,1,{x:"0%"},{x:"250%",ease:Linear.easeNone})
  new ScrollMagic.Scene({triggerElement:this,triggerHook:0.5,duration:"200%"}).setTween(textAnimation_1).addTo(controller1)});$(".scroll-right").each(function(){var controller2=new ScrollMagic.Controller();var textAnimation_2=new TimelineMax().fromTo(this,1,{x:"0%"},{x:"-200%",ease:Linear.easeNone})
  new ScrollMagic.Scene({triggerElement:this,triggerHook:0.5,duration:"200%"}).setTween(textAnimation_2).addTo(controller2)});$(function(){var controller3=new ScrollMagic.Controller();var textAnimation_3=new TimelineMax().fromTo(".scroll-right-contact",1,{x:"120%"},{x:"0%",ease:Linear.easeNone})
  if(window.innerWidth>767){new ScrollMagic.Scene({triggerElement:"#contact",triggerHook:0.7,duration:"45%"}).setTween(textAnimation_3).addTo(controller3)}else{new ScrollMagic.Scene({triggerElement:"#contact",triggerHook:0.7,duration:"35%"}).setTween(textAnimation_3).addTo(controller3)}});
  
  AOS.init({
    offset: 10
  });
});