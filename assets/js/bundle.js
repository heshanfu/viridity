(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(require('./scripts/insertDate'))();
(require('./scripts/activePage'))();

},{"./scripts/activePage":2,"./scripts/insertDate":3}],2:[function(require,module,exports){
function activePage() {
  var currentPage = window.location.href;
  var isHome = window.location.pathname === '/';

  var links = document.querySelectorAll('.nav__link > a');
  links.forEach(function (link) {
    if (link["href"] === currentPage && !isHome) {
      link.parentElement.classList.add('nav__active');
    }
  });
}

module.exports = activePage;

},{}],3:[function(require,module,exports){
function insertDate() {
  var dateContainer = document.getElementById('dateContainer');
  var currentYear = new Date().getFullYear();

  dateContainer.innerText = currentYear;
};

module.exports = insertDate;
},{}]},{},[1]);
