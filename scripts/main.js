class Main {

    constructor() {
        this.header = document.querySelector('.header');
        this.last = new LastSlider('.swiper');
        this._observers = [];
        this._init();
    }

    _init() {
        new MobileMenu;
        Pace.on('done', this._scrollInit.bind(this));
    }

    destroy() {
        this._observers.forEach(so => so.destroy());
    }

    _scrollInit() {
        this._observers.push(
            new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {onec: false}),
            new ScrollObserver('.swiper', this._toggleSlideAnimation.bind(this), {onec: false}),
            new ScrollObserver('.cover-slide', this._inviewAnimation),
            new ScrollObserver('.appear', this._inviewAnimation),
            new ScrollObserver('.tween-animate-title', this._textAnimation)
        )
        console.log(this._observers);
    }

    _toggleSlideAnimation(el, inview) {
        if(inview) {
            this.last.start();
        } else {
            this.last.stop();
        }
    }

    _textAnimation(el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    _navAnimation(el, inview) {
        if(inview) {
            this.header.classList.remove('triggered');
        } else {
            this.header.classList.add('triggered');
        }
    }

    _inviewAnimation(el, inview) {
        if(inview) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }
}
const main = new Main;




// document.addEventListener('DOMContentLoaded', function () {


//     const _textAnimation = function (el, isIntersecting) {
//         if(isIntersecting) {
//             const ta = new TweenTextAnimation(el);
//             ta.animate();
//         }
//     }

//     const so = new ScrollObserver('.tween-animate-title', _textAnimation);

//     const header = document.querySelector('.header');
//     const _navAnimation = function (el,inview) {
//         if(inview) {
//             header.classList.remove('triggered');
//         } else {
//             header.classList.add('triggered');
//         }
//     }

//     const so2 = new ScrollObserver('.nav-trigger' , _navAnimation,{ once: false});
        
//     new MobileMenu();

//     const _inviewAnimation = function (el, inview) {
//         if(inview) {
//             el.classList.add('inview');
//         } else {
//             el.classList.remove('inview');
//         }
//     }

//     const so3 = new ScrollObserver('.cover-slide', _inviewAnimation);

//     const slider = new LastSlider('.swiper');
//     slider.start();
// });

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,
//     effect: 'fade',
  
   
//   });

