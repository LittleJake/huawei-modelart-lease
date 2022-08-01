// ==UserScript==
// @name         华为ModelArt自动续期
// @namespace    http://tampermonkey.net/
// @version      1.0
// @namespace https://greasyfork.org/users/773473
// @license      Apache2.0
// @description  华为ModelArt自动续期，适用于北京4免费节点。
// @author       LittleJake
// @match        https://authoring-modelarts-cnnorth4.huaweicloud.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=huaweicloud.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function(){
        document.querySelector('#lease-dur button').click();
        document.querySelector('.MuiDialogActions-root button').click();
        console.log("已续期")
    }, 60*1000*10);
})();
