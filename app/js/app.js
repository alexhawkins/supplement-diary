'use strict';

// Declare app level module which depends on views, and components

(function() {
  angular.module('supplementDiary', [])
    .controller('SupplementDiaryController', function() {
      this.supplements = supplements;
      this.categories = categories;
      this.displayForm = false;
    })
    .directive('supplementCategories', function() {
      return {
        restrict: 'E', //because directive is its own element in app.html
        templateUrl: 'partials/supplement-categories.html',
      };
    })
    .directive('supplementImages', function() {
      return {
        restrict: 'E', //because directive is its own element in app.html
        templateUrl: 'partials/supplement-images.html',
      };
    })
    .directive('supplementInfo', function() {
      return {
        restrict: 'E', //because directive is its own element in app.html
        templateUrl: 'partials/supplement-info.html',
      };
    })
    .directive('supplementReviews', function() {
      return {
        restrict: 'E', //because directive is its own element in app.html
        templateUrl: 'partials/supplement-reviews.html',
      };
    })
    .directive('reviewForm', function() {
      return {
        restrict: 'E', //because directive is its own element in app.html
        templateUrl: 'partials/review-form.html',
        controller: function(){
          this.displayForm = false;
        },
        controllerAs: 'reviewFormCtrl'
      };
    })
  /*FAKE DATABASE*/

  var categories = ['fitness', 'sleep-aids', 'nootropic', 'memory', 'focus', 'detoxification', 'herbal', 'mood', 'energy', 'antioxidants', 'adaptogens', 'hormones', 'stress'];

  var supplements = [{
    name: 'L-Theanine',
    brand: 'Now Foods',
    dose: '200mg',
    asin: 'B000H7P9M0',
    review: 'I am very skeptical when it comes to homeopathy and supplements. Much, if not most, is purely hype, misinformation, and lies. In this case, this is the real deal. Theanine, is very useful for anyone with issues ranging from mild to annoying anxieties to sleep issues to stress during the day. This really does the job at "taking the cares away," but not like Valium does, where you can zombie out. The best way to describe it is as a nice, calming feeling. You can still get all your work done, but not worry about things, which helps keep your focus together. When it comes to sleep, this is a good way to lull you to slumber by much the same way, removing any anxieties or bothers. Well worth the try, and I always trust products from Now.',
    rating: 9,
    categories: {
      'sleep-aids': true,
      focus: true,
      stress: true
    }
  }, {
    name: 'SAM-e',
    brand: 'Jarrow Formulas',
    dose: '200mg',
    asin: 'B0013OVW0O',
    review: "I have been on Paxil for years and others b/f but now without insurance I studied this product and tried it after a week or two I feel better than I ever have I don't feel like some say euphoric but also my feeling aren't masked over to where I feel nothing, seems so far that things that would really bother me (while taking the prescribed drugs) I am much more calm about I don't seem to have to take as much as they say you may need to. I feel this is awesome and I am so glad I made this decision. I started with a higher dose and my poor belly was not happy but when I lowered to 200 I really feel great, hope the government doesn't find out about this you probably wont be able to get it anymore LOL",
    rating: 8,
    categories: {
      'mood': true,
      focus: true,
      stress: true,
      memory: true,
      energy: true
    }
  }, {
    name: 'L-Theanine',
    brand: 'Now Foods',
    dose: '200mg',
    asin: 'B000H7P9M0',
    review: "I am very skeptical when it comes to homeopathy and supplements. Much, if not most, is purely hype, misinformation, and lies. In this case, this is the real deal. Theanine, is very useful for anyone with issues ranging from mild to annoying anxieties to sleep issues to stress during the day. This really does the job at 'taking the cares away,' but not like Valium does, where you can zombie out. The best way to describe it is as a nice, calming feeling. You can still get all your work done, but not worry about things, which helps keep your focus together. When it comes to sleep, this is a good way to lull you to slumber by much the same way, removing any anxieties or bothers. Well worth the try, and I always trust products from Now.",
    rating: 5,
    categories: {
      'sleep-aids': true,
      focus: true,
      stress: true
    }
  }, {
    name: 'L-Theanine',
    brand: 'Now Foods',
    dose: '200mg',
    asin: 'B000H7P9M0',
    review: 'I am very skeptical when it comes to homeopathy and supplements. Much, if not most, is purely hype, misinformation, and lies. In this case, this is the real deal. Theanine, is very useful for anyone with issues ranging from mild to annoying anxieties to sleep issues to stress during the day. This really does the job at "taking the cares away," but not like Valium does, where you can zombie out. The best way to describe it is as a nice, calming feeling. You can still get all your work done, but not worry about things, which helps keep your focus together. When it comes to sleep, this is a good way to lull you to slumber by much the same way, removing any anxieties or bothers. Well worth the try, and I always trust products from Now.',
    rating: 5,
    categories: {
      'sleep-aids': true,
      focus: true,
      stress: true
    }
  }];

})();
