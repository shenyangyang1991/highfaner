(function(w, $) {
  var ele = $.documentElement,
    evt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var cw = ele.clientWidth;
      if (!cw)
        cw = $.body.clientWidth;
      if (!cw) return;
      ele.style.fontSize = 100 * (cw / 750) + 'px';
    };
  if (!$.addEventListener) return;
  w.addEventListener(evt, recalc, false);
  recalc();
// $.addEventListener('DOMContentLoaded', recalc, false);
})(window, document);
