"use strict";

module.exports = (Franz) => {
  function getMessages() {
    let direct = 0;
    let indirect = 0;
    
    /*
    const badgeDiv = document.querySelector('body');
    if (badgeDiv) {
      const count = parseInt(badgeDiv.innerText);
      direct = isNaN(count) ? 0 : count;
    }
    */

    Franz.setBadge(direct, indirect);
  }

  Franz.loop(getMessages);
}