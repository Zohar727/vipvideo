/**
 * Created by silence.w on 2017-03-08.
 */
function click(e) {
    // chrome.tabs.executeScript(null,
    //     {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        //console.log(tabs[0].url);
        //alert(tabs[0].url);
        window.open('http://e.zohar.com.cn/vip_video/index.html'+"?"+tabs[0].url);
        //localStorage.url=tabs[0].url;
        // document.write(localStorage.url);
        // var newWindow = window.open('http://localhost:63342/vip_video/index.html');
        // newWindow.onload =  function () {
        //     newWindow.document.getElementById("video_src").value=tabs[0].url;
        //     newWindow.document.getElementById("video_btn").click();
        // }
    });
}
window.onload =function(){
    document.getElementById("start").addEventListener('click',click);
    var qrcode = new QRCode(document.getElementById("QRcode"), {
        width : 125,//设置宽高
        height : 125
    });
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        qrcode.makeCode('http://e.zohar.com.cn/vip_video/index.html'+"?"+tabs[0].url);
    });

}