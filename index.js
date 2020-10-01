$(document).ready(function() {
    
    
var menu = $('.menu');
var bgcont = $('.bgcont');
var bgtitles = $('.bgtitles');
var bg = $('.bg');
var nav = $('nav');
var socials = $('.socials');
var content = $('.content');
var darkmode = $('.darkmode'); 
var darkclick = 0;    
var logo = $('.logo');  
var menuclick = 0;    
var boxes = $('.content .box');  
var pages = $('.pages');  
var pageload = $('.pages .load');  
var body = $('body'); 
var rect1 = $('.rect1');   
var texts = $('.texts p'); 
var backlink = $('.backlink');    
  
    
    
    
//activate dark mode  
darkmode.on('click',function() {
    if(darkclick == 0) {
    bg.css('background','var(--dark)');
    bgcont.css('background','linear-gradient(to right, var(--trans-color) 0%, var(--trans-color) 50%, rgba(35, 37, 43,1) 50%, rgba(35, 37, 43,1) 100%)');
    bgcont.find('h1,h4').css('color','white');
    menu.find('p').css('color','#f1f1f1');
    menu.find('hr').css('background','#f1f1f1');
    socials.find('a').css('color','#f1f1f1');
    $(this).css('color','#f1f1f1');
    logo.find('a').css('color','white'); 
    logo.find('hr').css('background','white');     
    boxes.not('.box:nth-child(1)').css('background','var(--dark)');  
    pages.css('background','var(--dark)');    
    body.css('background','var(--dark)');  
    texts.css('color','#f1f1f1');    
    pages.find('h2, h6,p').css('color','white');   
    pages.find('hr').css('background','white');
    backlink.css('color','white');    
    content.css('background','var(--dark)');    
    darkclick = 1;    
    }   
    else {
    bg.css('background','none');
    bgcont.css('background','linear-gradient(to right, var(--trans-color) 0%, var(--trans-color) 50%, rgba(224,224,224,1) 50%, rgba(224,224,224,1) 100%)');
    bgcont.find('h1,h4').css('color','black');
    menu.find('p').css('color','black');
    menu.find('hr').css('background','black');
    socials.find('a').css('color','black');
    $(this).css('color','black');
    logo.find('a').css('color','black'); 
    logo.find('hr').css('background','black');
    boxes.not('.box:nth-child(1),.box:nth-child(4)').css('background','#f1f1f1');   boxes.eq(3).css('background','#e1e1e1'); 
    pages.css('background','#f1f1f1');    
    body.css('background','none');
    texts.css('color','black'); 
    pages.find('h2, h6,p').css('color','black');    
    pages.find('hr').css('background','black');
    backlink.css('color','black');  
    content.css('background','none');    
    darkclick = 0;    
    }
});  
//hover over menu  
menu.hover(function() {
    bgcont.css('width','87%');
}, function() {
    bgcont.css('width','93%');
});

//menu click    
menu.on('click', function(){
    if(menuclick == 0) {
    bgtitles.css('top','37%');
    bgtitles.fadeOut(300);
    setTimeout(function() {
    bgcont.css({'width':'0%'});   
    setTimeout(function() {
        bgcont.css({'opacity':'0','z-index':'-1'}); 
    },100);
    },200); 
    setTimeout(function() {
        content.fadeIn(300);
    },1000);
    setTimeout(function() {
        boxes.eq(0).css({'transform':'scale(1)','opacity':'1'});
    },1100);
    setTimeout(function() {
        boxes.eq(1).css({'transform':'scale(1)','opacity':'1'});
    },1200);
    setTimeout(function() {
        boxes.eq(2).css({'transform':'scale(1)','opacity':'1'});
    },1300);
    setTimeout(function() {
        boxes.eq(3).css({'transform':'scale(1)','opacity':'1'});
    },1400);  
    menuclick = 1;     
    }
    else {
    setTimeout(function() {
        boxes.eq(3).css({'transform':'scale(0.7)','opacity':'1'});
    },0);
    setTimeout(function() {
        boxes.eq(2).css({'transform':'scale(0.7)','opacity':'1'});
    },100);
    setTimeout(function() {
        boxes.eq(1).css({'transform':'scale(0.7)','opacity':'1'});
    },200);
    setTimeout(function() {
        boxes.eq(0).css({'transform':'scale(0.7)','opacity':'1'});
    },300);
    setTimeout(function() {
        content.fadeOut(300);
    },500);
    setTimeout(function() {
        bgcont.css({'opacity':'1','z-index':'1'});
    },700);
    setTimeout(function() {
        bgcont.css({'width':'93%'}); 
    },800);    
    setTimeout(function() {
        bgtitles.fadeIn(300);
        bgtitles.css('top','50%');
    },1200);    
    menuclick = 0; 
    }
});    

            
//menu link click    
$('.box h1').on('click', function() {
    $('.box').not($(this).parent()).css('opacity','0');
    $('.box').not($(this).parent()).css('display','none');
    $(this).parent().css('height','100%');
    if ($(window).width() < 700) {
        $(this).parent().css('width','100%');
        $(this).parent().css('height','250px');
        pages.css({'width':'100%','position':'relative','left':'auto','text-align':'center'});
        backlink.css('top','50px');
    }
    else {
        $(this).parent().css('width','20%');    
    }
    $(this).parent().find('.backlink').fadeIn(300);
    setTimeout(function() {
    pages.css('display','block');   
    },200);
    setTimeout(function() {
    pages.css('opacity','1');   
    },400);
    setTimeout(function() {
        pages.css('top','0px');
    },500); 
});    
//click on back link    
$('.backlink').on('click', function() {
    pages.css('top','-30px'); 
    setTimeout(function() {
        pages.css('opacity','0');
    },100);
    setTimeout(function() {
        pages.css('display','none');
    },400);
    setTimeout(function() {
    $('.box').css('opacity','1');
    $('.box').css('display','block');
    $('.box').css('height','50vh');
    $('.box').css('width','50%');
    $('.backlink').fadeOut(300);
    },600);
});       
       
    
//load pages on click  
$('.box:nth-of-type(1) h1').on('click', function() {
    pageload.load('projects.html');
});
$('.box:nth-of-type(2) h1').on('click', function() {
    pageload.load('about.html');
    rect1.css('background','#00b3ff');
}); 
$('.box:nth-of-type(3) h1').on('click', function() {
    pageload.load('services.html');
    rect1.css('background','#ff007b');
});     
$('.box:nth-of-type(4) h1').on('click', function() {
    pageload.load('experience.html');
    rect1.css('background','#ffb330');
});     
    
    
//move rect1 subtly on scroll
  
    
    
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});