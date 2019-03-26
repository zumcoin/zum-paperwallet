// Copyright (c) 2019, ZumCoin Development Team
//
// Please see the included LICENSE file for more information.

/* ---- super simple iframe busting ---- */
(function(window) {
  if (window.location !== window.top.location) {
    window.top.location = window.location;
  }
})(this);
