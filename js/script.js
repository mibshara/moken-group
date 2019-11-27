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
  eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('d $6=$(\'c, g\');$(\'.h-i a[4*="#"], .7 a[4*="#"]\').3(1(e){e.9();$6.b({f:$($.n(p,\'4\')).j().q},o)});$(".k-2").3(1(){$(".2-0").l("0-5")});$(".0-m").3(1(){$(".2-0").8("0-5")});$(".7 a").3(1(){$(".2-0").8("0-5")});',27,27,'mnu|function|block|click|href|hidden|page|menu|addClass|preventDefault||animate|html|var||scrollTop|body|nmu|list|offset|hamburger|removeClass|closed|attr|400|this|top'.split('|'),0,{}))

  $(".scroll-left").each(function(){var controller1=new ScrollMagic.Controller();var textAnimation_1=new TimelineMax().fromTo(this,1,{x:"0%"},{x:"250%",ease:Linear.easeNone})
  new ScrollMagic.Scene({triggerElement:this,triggerHook:0.5,duration:"200%"}).setTween(textAnimation_1).addTo(controller1)});$(".scroll-right").each(function(){var controller2=new ScrollMagic.Controller();var textAnimation_2=new TimelineMax().fromTo(this,1,{x:"0%"},{x:"-200%",ease:Linear.easeNone})
  new ScrollMagic.Scene({triggerElement:this,triggerHook:0.5,duration:"200%"}).setTween(textAnimation_2).addTo(controller2)});
    
  AOS.init({
    offset: 10
  });
});