import $ from 'jquery';

import _ from 'lodash';

console.log("Hello World!");

$(".letter").click(function (event) {
  var target = $(event.target);
  target.addClass("red");
});
