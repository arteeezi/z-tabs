'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
    var zTabs = function () {
        function zTabs(selector) {
            var _this = this;

            _classCallCheck(this, zTabs);

            this.tabsContainer = document.querySelector(selector);
            this.tabsWrapper = document.querySelector('.z-tabs-wrapper');
            this.tabs = document.querySelectorAll('.z-tab');
            this.tabsContent = document.querySelectorAll('.z-tabs-content');

            this.tabsContent.forEach(function (item) {
                item.classList.add('fade');
            });

            this.showTabContent(0);

            this.tabsWrapper.addEventListener('click', function (event) {
                var target = event.target;
                if (target && target.classList.contains('z-tab')) {
                    for (var i = 0; i < _this.tabs.length; i++) {

                        if (target === _this.tabs[i]) {

                            _this.showTabContent(i);
                            return false;
                        }
                    }
                }
            });
        }

        _createClass(zTabs, [{
            key: 'showTabContent',
            value: function showTabContent(item) {

                for (var i = 0; i < this.tabsContent.length; i++) {
                    this.tabsContent[i].classList.add('hide');
                }
                if (this.tabsContent[item].classList.contains('hide')) {

                    this.tabsContent[item].classList.remove('hide');
                }
            }
        }]);

        return zTabs;
    }();
    window.zTabs = zTabs;
})();