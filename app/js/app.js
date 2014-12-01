'use strict';

// Declare app level module which depends on views, and components

(function() {
angular.module('supplementDiary', [])
  .controller('SupplementDiaryController', function() {
    this.supplements = supplements;
    this.categories = categories;
    this.displayForm = false;
  })
})();