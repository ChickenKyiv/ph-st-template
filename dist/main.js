!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";window.addEventListener("DOMContentLoaded",function(){var t=function(){var t=["Playfair+Display:400,400italic,700,700italic:latin","Montserrat:700,400:latin"];return{load:function(){WebFont.load({google:{families:t}})}}}();!function(){var t=$(".js-slider");t.on("init",function(t){$(".cover__slider__dots").wrap('<div class="cover__slider__dots_container"></div>')}),t.slick()}();var e=function(){var t=$(".js-round-chart");return{init:function(){for(var e=2*parseInt(t.find("circle").attr("r"),10)*Math.PI,n=t.length,o=0;o<n;o++){var i=e*(1-parseInt(t.eq(o).attr("data-chart-value"),10)/100);t.eq(o).css("stroke-dashoffset",i)}}}}(),n={bind:function(){$(".js-show-more-works").on("click",function(t){t.preventDefault(),$(this).fadeOut(400,function(){$(".state-hidden-works-row").fadeIn()})})}},o={init:function(){!function(){var t=$(".js-filtering-button");t.on("click",function(e){e.preventDefault(),t.removeClass("button--black").addClass("button--gray"),$(this).addClass("button--black")})}();var t={animationDuration:.5,filter:"all",callbacks:{onFilteringStart:function(){},onFilteringEnd:function(){},onShufflingStart:function(){},onShufflingEnd:function(){},onSortingStart:function(){},onSortingEnd:function(){}},delay:0,delayMode:"progressive",easing:"ease-out",filterOutCss:{opacity:0,transform:"scale(0.75)"},filterInCss:{opacity:1,transform:"scale(1)"},layout:"sameSize",selector:".filtr-container",setupControls:!0};$(".filtr-container").filterizr(t).filterizr("setOptions",t)}},i=function(){var t=$(".js-scroll-fullscreen");return{bindScrollFullscreen:function(){t.on("click",function(t){t.preventDefault(),$("html,body").animate({scrollTop:window.innerHeight+window.scrollY},700)})}}}(),r=function(){var t=$(".js-content-trigger"),e=$(".js-content-box");return{bind:function(){t.on("click",function(n){n.preventDefault();var o=$(this).attr("data-content-index");t.removeClass("state-active"),$(this).addClass("state-active"),e.slideUp(400),setTimeout(function(){$('.js-content-box[data-content-index="'+o+'"]').slideDown(400)},200)})}}}(),s={toggle:function(t){t.toggleClass("state-visible")},collapseAll:function(){$(".js-dropdown").removeClass("state-visible")},bindCollapsingAll:function(){$(document).on("click",function(t){s.collapseAll()})},bindOpeners:function(){$(".js-dropdown-opener").off().on("click",function(t){t.preventDefault(),t.stopPropagation();var e=$(this).attr("data-dropdown-target"),n=$("[data-dropdown-name="+e+"]");s.toggle(n)})},init:function(){this.bindCollapsingAll(),this.bindOpeners()}},l={DOM:{overlay:document.querySelector(".js-overlay"),menu:document.querySelectorAll(".js-menu"),body:document.querySelector("body")},bind:function(){var t=this;function e(t){try{var e=$(t).parents(".js-cover").offset();$("html,body").animate({scrollTop:e},400)}catch(t){console.log(t)}}for(var n=document.querySelectorAll(".js-open-menu"),o=0;o<n.length;o++)n[o].addEventListener("click",function(n){n.preventDefault(),e(this);var o=$(this).attr("data-menu-index"),i=$('.js-menu[data-menu-index="'+o+'"]');$(t.DOM.overlay).addClass("state-visible"),$(t.DOM.body).addClass("state-fixed"),i.addClass("state-opened")});var i=document.querySelectorAll(".js-close-menu");for(o=0;o<i.length;o++)i[o].addEventListener("click",function(e){e.preventDefault(),$(t.DOM.overlay).removeClass("state-visible"),$(t.DOM.body).removeClass("state-fixed"),$(t.DOM.menu).removeClass("state-opened")})},init:function(){this.bind()}},a={OPENING_DURATION:300,DOM:{$popups:$(".popup"),$openers:$(".js-open-popup"),$ovelay:$(".js-overlay"),$closers:$(".js-close-all-popups"),$body:$("body")},toggleOverlay:function(){this.DOM.$ovelay.toggleClass("state-visible")},toggleBodyFix:function(){this.DOM.$body.toggleClass("state-fixed-body")},open:function(t){$('[data-popup-name="'+t+'"]').fadeIn(this.OPENING_DURATION).addClass("state-visible"),this.toggleOverlay(),this.toggleBodyFix()},closeOpened:function(){var t=this;t.DOM.$popups.fadeOut(t.OPENING_DURATION),setTimeout(function(){t.DOM.$popups.removeClass("state-visible")},t.OPENING_DURATION),this.toggleOverlay(),this.toggleBodyFix()},bindOverlay:function(){var t=this;t.DOM.$ovelay.on("click",function(e){e.preventDefault(),t.closeOpened()})},bindOpeners:function(t){var e=this;(t||e.DOM.$openers).on("click",function(t){t.preventDefault(),t.stopPropagation();var n=$(this).attr("data-popup-target");e.open(n)})},bindClosers:function(){var t=this;t.DOM.$closers.on("click",function(e){e.preventDefault(),t.closeOpened()})},init:function(){this.bindOverlay(),this.bindOpeners(),this.bindClosers()}},c={DOM:{$covers:$(".js-cover")},setIntroHeight:function(){$(window).outerWidth()<=1024?this.DOM.$covers.css("min-height",$(window).outerHeight()):this.DOM.$covers.css("min-height","100vh")},bind:function(){var t=this;window.addEventListener("orientationchange",function(){t.setIntroHeight()})},init:function(){this.bind()}};c.DOM.$covers.length&&(c.setIntroHeight(),c.init());var u=function(){var t={$linksBox:$(".js-navigation-links"),$toggler:$(".js-open-navigation-links"),overlay:document.querySelector(".js-overlay")};function e(){t.$toggler.removeClass("state-opened"),t.$linksBox.slideUp(),$(t.overlay).removeClass("state-visible")}return{bind:function(){t.$toggler.on("click",function(e){e.preventDefault(),t.$toggler.toggleClass("state-opened"),t.$linksBox.slideToggle(),$(t.overlay).toggleClass("state-visible")}),$(".js-navigation-link").on("click",function(t){t.preventDefault(),e();var n=$(this).attr("href"),o=$("."+n).offset().top-44;$("html,body").animate({scrollTop:o},300)}),$(".js-close-navigation").on("click",function(t){t.preventDefault(),e()})}}}();a.init(),l.init(),s.init(),t.load(),i.bindScrollFullscreen(),r.bind(),e.init(),u.bind(),n.bind(),$(".filtr-container").length>0&&o.init()})}]);