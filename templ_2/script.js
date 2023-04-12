'use strict';

import Base from 'js_core/base-controller';

export default class FirstScreenVideo extends Base {
    
    _init() {
        this.$wrappers = $('[data-js-slider="artist__slider"]');
        
        let default_options = {
            infinite: true,
            variableWidth: true,
            focusOnSelect: true,
            cssEase: 'cubic-bezier(0.5,0,1,0.1)',
            speed: 500,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="prev">\n' +
                '<svg width="8" height="14" viewBox="0 0 8 14" fill="" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M5.98432 7.17279L6.17652 6.98115L5.98368 6.79016L0.511389 1.37022L0.511432 1.36799L0.427173 1.28637C0.296439 1.15974 0.259457 1.02411 0.272046 0.894732C0.2855 0.756462 0.358431 0.608612 0.477291 0.487723C0.596084 0.366901 0.743868 0.290236 0.884408 0.273323C1.01623 0.257461 1.15467 0.291539 1.28528 0.417616L7.63534 6.69178C7.69765 6.75594 7.73585 6.86043 7.72964 6.98678C7.72342 7.11356 7.67324 7.23223 7.59891 7.30839L1.285 13.5826C1.15442 13.7085 1.01605 13.7425 0.884318 13.7267C0.743771 13.7098 0.595997 13.6331 0.47722 13.5123C0.358377 13.3914 0.285459 13.2436 0.272014 13.1053C0.259433 12.9759 0.296424 12.8403 0.427169 12.7136L0.427189 12.7136L0.429944 12.7109L5.98432 7.17279Z" fill="" stroke="" stroke-width="0.53943"/>\n' +
                '</svg>\n' +
                '</button>',
            nextArrow: '<button class="next">\n' +
                '<svg width="8" height="14" viewBox="0 0 8 14" fill="" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M5.98432 7.17279L6.17652 6.98115L5.98368 6.79016L0.511389 1.37022L0.511432 1.36799L0.427173 1.28637C0.296439 1.15974 0.259457 1.02411 0.272046 0.894732C0.2855 0.756462 0.358431 0.608612 0.477291 0.487723C0.596084 0.366901 0.743868 0.290236 0.884408 0.273323C1.01623 0.257461 1.15467 0.291539 1.28528 0.417616L7.63534 6.69178C7.69765 6.75594 7.73585 6.86043 7.72964 6.98678C7.72342 7.11356 7.67324 7.23223 7.59891 7.30839L1.285 13.5826C1.15442 13.7085 1.01605 13.7425 0.884318 13.7267C0.743771 13.7098 0.595997 13.6331 0.47722 13.5123C0.358377 13.3914 0.285459 13.2436 0.272014 13.1053C0.259433 12.9759 0.296424 12.8403 0.427169 12.7136L0.427189 12.7136L0.429944 12.7109L5.98432 7.17279Z" fill="" stroke="" stroke-width="0.53943"/>\n' +
                '</svg>\n' +
                '</button>',
            lazyLoad: 'progressive',
        };
        
        this.options = $.extend(default_options, this.options, true);
        
        return !! this.$wrappers.length;
    }
    
    /**
     * Бинд событий
     *
     * @returns {boolean}
     * @private
     */
    _bind() {
        
        this._bindTo($(window), 'resize load orientationchange', () => {
            this.initSlick();
            
            let box = $('.artist-video__slide'),
                btn = $('[data-js="show-more-artist"]');
            
            if (window.innerWidth < 768) {
                for (let i = 3; i < box.length; i++) {
                    box[i].style.display = 'none';
                }
                
                let countD = 3;
                this._bindTo(btn, 'click', () => {
                    let box = $('.artist-video__slide');
                    countD += 2;
                    if (countD <= box.length) {
                        for (let i = 0; i <= countD; i++) {
                            box[i].style.display = 'block';
                        }
                    }
                    
                    if (countD >= box.length - 1) {
                        btn.hide();
                    }
                });
            }
        });
        
        return true;
    }
    
    initSlick() {
        
        this.$wrappers.each((i, el) => {
            let $wrapper = $(el);
            
            if (window.innerWidth < 768) {
                if ($wrapper.is('.slick-initialized')) {
                    $wrapper.slick('unslick');
                }
            } else {
                if ( ! $wrapper.is('.slick-initialized')) {
                    $wrapper.slick(this.options);
                }
            }
        });
    }
}
