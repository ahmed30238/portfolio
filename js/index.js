// start of typer
// var typed = new Typed('#element', {
//     strings: ['Ahmed ELsyaad','Devoloper','Designer'],
//     typeSpeed: 50,
//     backSpeed:25,
//     backDelay:500,
//     startDelay:500,
//     loop:true,
//     // fadeOut: true,
//     cursorBlinking: true
//     });
// end of typer
var container = ``
var ItemsHagat = [
  {
    Name:'Flutter',
    desc:'I\'m highly skilled in Flutter, enabling me to develop cross-platform mobile apps with efficient, visually appealing user interfaces. My experience includes rapid prototyping, seamless integration of APIs, and optimizing performance to ensure robust and user-friendly applications.',
    icon:'fa-brands fa-flutter',
  },
  {
    Name:'Dart',
    desc:'I have strong expertise in Dart, which is the primary tool I rely on for developing Flutter applications.',
    icon:'fa-brands fa-dart-lang',
  },
  {
    Name:'Flutter',
    desc:'lorem',
    icon:'fa-phone',
  },
  {
    Name:'Flutter',
    desc:'lorem',
    icon:'fa-phone',
  },
  {
    Name:'Flutter',
    desc:'lorem',
    icon:'fa-phone',
  },
  {
    Name:'Flutter',
    desc:'lorem',
    icon:'fa-phone',
  },
]
for (let index = 0; index < ItemsHagat.length; index++) {
  container+='<div class="col-lg-4"><div class="item bg-white d-flex flex-column justify-content-center align-items-center"><div class="icon"><i class="fa '+ItemsHagat[index].icon+'"></i></div><h6>'+ItemsHagat[index].Name+'</h6><p>'+ItemsHagat[index].desc+'</p></div></div>'

}

console.log(container);

document.getElementById('ay7aga').innerHTML=container
// start of navbar
let section = document.querySelector('.about');
document.addEventListener('scroll',() =>{
    const header = document.querySelector('nav');
    if(window.scrollY >= section.offsetTop ){
        header.classList.add('scrolled')
    }else{
        header.classList.remove('scrolled')
    }
})    
// end of navbar
// start of progress

let progress = document.querySelectorAll('.progress div');

window.onscroll = function(){
    if (window.scrollY >= section.offsetTop - 200){
        progress.forEach((div) =>{
            div.style.width = div.dataset.width
        })
        
    }
}
// end of progress
// start of counter
var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - 400;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    counted = 1;
  }

});
// end of counter

// start custom typedjs 
jQuery(document).ready(function($) {
    var animationDelay = 2500,
      barAnimationDelay = 3800,
      barWaiting = barAnimationDelay - 3000, 
      lettersDelay = 50,
      typeLettersDelay = 150,
      selectionDuration = 500,
      typeAnimationDelay = selectionDuration + 800,
      revealDuration = 600,
      revealAnimationDelay = 1500;
  
    initHeadline();
  
  
    function initHeadline() {
      singleLetters($('.cd-headline.letters').find('b'));
      animateHeadline($('.cd-headline'));
    }
  
    function singleLetters($words) {
      $words.each(function() {
        var word = $(this),
          letters = word.text().split(''),
          selected = word.hasClass('is-visible');
        for (i in letters) {
          if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
          letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
        }
        var newLetters = letters.join('');
        word.html(newLetters).css('opacity', 1);
      });
    }
  
    function animateHeadline($headlines) {
      var duration = animationDelay;
      $headlines.each(function() {
        var headline = $(this);
  
        if (headline.hasClass('loading-bar')) {
          duration = barAnimationDelay;
          setTimeout(function() {
            headline.find('.cd-words-wrapper').addClass('is-loading')
          }, barWaiting);
        } else if (headline.hasClass('clip')) {
          var spanWrapper = headline.find('.cd-words-wrapper'),
            newWidth = spanWrapper.width() + 10
          spanWrapper.css('width', newWidth);
        } else if (!headline.hasClass('type')) {
          var words = headline.find('.cd-words-wrapper b'),
            width = 0;
          words.each(function() {
            var wordWidth = $(this).width();
            if (wordWidth > width) width = wordWidth;
          });
          headline.find('.cd-words-wrapper').css('width', width);
        };
  
        setTimeout(function() {
          hideWord(headline.find('.is-visible').eq(0))
        }, duration);
      });
    }
  
    function hideWord($word) {
      var nextWord = takeNext($word);
  
      if ($word.parents('.cd-headline').hasClass('type')) {
        var parentSpan = $word.parent('.cd-words-wrapper');
        parentSpan.addClass('selected').removeClass('waiting');
        setTimeout(function() {
          parentSpan.removeClass('selected');
          $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
        }, selectionDuration);
        setTimeout(function() {
          showWord(nextWord, typeLettersDelay)
        }, typeAnimationDelay);
  
      } else if ($word.parents('.cd-headline').hasClass('letters')) {
        var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
        hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
        showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);
  
      } else if ($word.parents('.cd-headline').hasClass('clip')) {
        $word.parents('.cd-words-wrapper').animate({
          width: '2px'
        }, revealDuration, function() {
          switchWord($word, nextWord);
          showWord(nextWord);
        });
  
      } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
        $word.parents('.cd-words-wrapper').removeClass('is-loading');
        switchWord($word, nextWord);
        setTimeout(function() {
          hideWord(nextWord)
        }, barAnimationDelay);
        setTimeout(function() {
          $word.parents('.cd-words-wrapper').addClass('is-loading')
        }, barWaiting);
  
      } else {
        switchWord($word, nextWord);
        setTimeout(function() {
          hideWord(nextWord)
        }, animationDelay);
      }
    }
  
    function showWord($word, $duration) {
      if ($word.parents('.cd-headline').hasClass('type')) {
        showLetter($word.find('i').eq(0), $word, false, $duration);
        $word.addClass('is-visible').removeClass('is-hidden');
  
      } else if ($word.parents('.cd-headline').hasClass('clip')) {
        $word.parents('.cd-words-wrapper').animate({
          'width': $word.width() + 10
        }, revealDuration, function() {
          setTimeout(function() {
            hideWord($word)
          }, revealAnimationDelay);
        });
      }
    }
  
    function hideLetter($letter, $word, $bool, $duration) {
      $letter.removeClass('in').addClass('out');
  
      if (!$letter.is(':last-child')) {
        setTimeout(function() {
          hideLetter($letter.next(), $word, $bool, $duration);
        }, $duration);
      } else if ($bool) {
        setTimeout(function() {
          hideWord(takeNext($word))
        }, animationDelay);
      }
  
      if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
        var nextWord = takeNext($word);
        switchWord($word, nextWord);
      }
    }
  
    function showLetter($letter, $word, $bool, $duration) {
      $letter.addClass('in').removeClass('out');
  
      if (!$letter.is(':last-child')) {
        setTimeout(function() {
          showLetter($letter.next(), $word, $bool, $duration);
        }, $duration);
      } else {
        if ($word.parents('.cd-headline').hasClass('type')) {
          setTimeout(function() {
            $word.parents('.cd-words-wrapper').addClass('waiting');
          }, 200);
        }
        if (!$bool) {
          setTimeout(function() {
            hideWord($word)
          }, animationDelay)
        }
      }
    }
  
    function takeNext($word) {
      return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }
  
    function takePrev($word) {
      return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
    }
  
    function switchWord($oldWord, $newWord) {
      $oldWord.removeClass('is-visible').addClass('is-hidden');
      $newWord.removeClass('is-hidden').addClass('is-visible');
    }
  });
//   End custom typedjs

