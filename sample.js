
function genericOnClick(info, tab) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        window.open('http://e.zohar.com.cn/vip_video/index.html'+"?"+tabs[0].url);
    });
}

var title = "vip在线云解析 " ;
var context= "page"
chrome.contextMenus.create({"title": title, "contexts":[context],
    "onclick": genericOnClick});



