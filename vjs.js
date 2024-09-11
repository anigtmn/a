!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("video.js")):"function"==typeof define&&define.amd?define(["video.js"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).videojsSeekButtons=t(e.videojs)}(this,(function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(e);function n(e,t){return n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(e,t)}var r=o.default.getComponent("Button"),i={forwardIndex:1,backIndex:1},s=function(e){var t=this;this.ready((function(){!function(e,t){e.addClass("vjs-seek-buttons"),t.forward&&t.forward>0&&(e.controlBar.seekForward=e.controlBar.addChild("seekButton",{direction:"forward",seconds:t.forward},t.forwardIndex)),t.back&&t.back>0&&(e.controlBar.seekBack=e.controlBar.addChild("seekButton",{direction:"back",seconds:t.back},t.backIndex))}(t,o.default.mergeOptions(i,e))}))};s.VERSION="3.0.1";var a=function(e){var t,o;function r(t,o){var n;return"forward"===(n=e.call(this,t,o)||this).options_.direction?n.controlText(n.localize("Seek forward {{seconds}} seconds").replace("{{seconds}}",n.options_.seconds)):"back"===n.options_.direction&&n.controlText(n.localize("Seek back {{seconds}} seconds").replace("{{seconds}}",n.options_.seconds)),n}o=e,(t=r).prototype=Object.create(o.prototype),t.prototype.constructor=t,n(t,o);var i=r.prototype;return i.buildCSSClass=function(){return"vjs-seek-button skip-"+this.options_.direction+" skip-"+this.options_.seconds+" "+e.prototype.buildCSSClass.call(this)},i.handleClick=function(){var e=this.player_.currentTime();if("forward"===this.options_.direction){var t=this.player_.duration();this.player_.liveTracker&&this.player_.liveTracker.isLive()&&(t=this.player_.liveTracker.seekableEnd()),this.player_.currentTime(Math.min(e+this.options_.seconds,t))}else"back"===this.options_.direction&&this.player_.currentTime(Math.max(0,e-this.options_.seconds))},r}(r);return o.default.registerComponent("SeekButton",a),o.default.registerPlugin("seekButtons",s),s}));
!function(e,r){if("function"==typeof define&&define.amd)define(["video.js"],r);else if("undefined"!=typeof exports)r(require("video.js"));else{r(e.videojs),e.videojsMarkers={}}}(this,function(e){"use strict";var r,h=(r=e)&&r.__esModule?r:{default:r};var x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b={markerStyle:{width:"7px","border-radius":"30%","background-color":"#008EE3"},markerTip:{display:!0,text:function(e){return e.text},time:function(e){return e.time}},breakOverlay:{display:!1,displayTime:3,text:function(e){return"Break overlay: "+e.overlayText},style:{width:"100%",height:"20%","background-color":"rgba(0,0,0,0.7)",color:"white","font-size":"17px"}},onMarkerClick:function(e){},onMarkerReached:function(e,r){},markers:[]};function T(e){var r,t={top:0,bottom:0,left:0,width:0,height:0,right:0};try{r=e.getBoundingClientRect()}catch(e){r=t}return r}var g=-1;h.default.registerPlugin("markers",function(n){if(!h.default.mergeOptions){var o=function(e){return!!e&&"object"===(void 0===e?"undefined":x(e))&&"[object Object]"===toString.call(e)&&e.constructor===Object};h.default.mergeOptions=function i(e,r){var a={};return[e,r].forEach(function(t){t&&Object.keys(t).forEach(function(e){var r=t[e];o(r)?(o(a[e])||(a[e]={}),a[e]=i(a[e],r)):a[e]=r})}),a}}h.default.dom.createEl||(h.default.dom.createEl=function(e,r,t){var i=h.default.Player.prototype.dom.createEl(e,r);return t&&Object.keys(t).forEach(function(e){i.setAttribute(e,t[e])}),i});var l=h.default.mergeOptions(b,n),u={},d=[],c=g,s=this,f=null,a=null,m=g;function r(){d.sort(function(e,r){return l.markerTip.time(e)-l.markerTip.time(r)})}function t(e){e.forEach(function(e){var t,i,a,r;e.key=(t=(new Date).getTime(),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?r:3&r|8).toString(16)})),s.el().querySelector(".vjs-progress-holder").appendChild((i=e,r=h.default.dom.createEl("div",{},{"data-marker-key":i.key,"data-marker-time":l.markerTip.time(i)}),y(i,r),r.addEventListener("click",function(e){var r=!1;if("function"==typeof l.onMarkerClick&&(r=!1===l.onMarkerClick(i)),!r){var t=this.getAttribute("data-marker-key");s.currentTime(l.markerTip.time(u[t]))}}),l.markerTip.display&&((a=r).addEventListener("mouseover",function(){var e=u[a.getAttribute("data-marker-key")];if(f){l.markerTip.html?f.querySelector(".vjs-tip-inner").innerHTML=l.markerTip.html(e):f.querySelector(".vjs-tip-inner").innerText=l.markerTip.text(e),f.style.left=v(e)+"%";var r=T(f),t=T(a);f.style.marginLeft=-parseFloat(r.width/2)+parseFloat(t.width/4)+"px",f.style.visibility="visible"}}),a.addEventListener("mouseout",function(){f&&(f.style.visibility="hidden")})),r)),u[e.key]=e,d.push(e)}),r()}function v(e){return l.markerTip.time(e)/s.duration()*100}function y(e,r){r.className="vjs-marker "+(e.class||""),Object.keys(l.markerStyle).forEach(function(e){r.style[e]=l.markerStyle[e]});var t=e.time/s.duration();if((t<0||1<t)&&(r.style.display="none"),r.style.left=v(e)+"%",e.duration)r.style.width=e.duration/s.duration()*100+"%",r.style.marginLeft="0px";else{var i=T(r);r.style.marginLeft=i.width/2+"px"}}function i(e){a&&(m=g,a.style.visibility="hidden"),c=g;var i=[];e.forEach(function(e){var r=d[e];if(r){delete u[r.key],i.push(e);var t=s.el().querySelector(".vjs-marker[data-marker-key='"+r.key+"']");t&&t.parentNode.removeChild(t)}}),i.reverse(),i.forEach(function(e){d.splice(e,1)}),r()}function e(){if(l.breakOverlay.display&&!(c<0)){var e=s.currentTime(),r=d[c],t=l.markerTip.time(r);t<=e&&e<=t+l.breakOverlay.displayTime?(m!==c&&(m=c,a&&(a.querySelector(".vjs-break-overlay-text").innerHTML=l.breakOverlay.text(r))),a&&(a.style.visibility="visible")):(m=g,a&&(a.style.visibility="hidden"))}}function k(){!function(){if(d.length){var e=function(e){return e<d.length-1?l.markerTip.time(d[e+1]):s.duration()},r=s.currentTime(),t=g;if(c!==g){var i=e(c);if(r>=l.markerTip.time(d[c])&&r<i)return;if(c===d.length-1&&r===s.duration())return}if(r<l.markerTip.time(d[0]))t=g;else for(var a=0;a<d.length;a++)if(i=e(a),r>=l.markerTip.time(d[a])&&r<i){t=a;break}t!==c&&(t!==g&&n.onMarkerReached&&n.onMarkerReached(d[t],t),c=t)}}(),e(),n.onTimeUpdateAfterMarkerUpdate&&n.onTimeUpdateAfterMarkerUpdate()}function p(){l.markerTip.display&&(f=h.default.dom.createEl("div",{className:"vjs-tip",innerHTML:"<div class='vjs-tip-arrow'></div><div class='vjs-tip-inner'></div>"}),s.el().querySelector(".vjs-progress-holder").appendChild(f)),s.markers.removeAll(),t(l.markers),l.breakOverlay.display&&(a=h.default.dom.createEl("div",{className:"vjs-break-overlay",innerHTML:"<div class='vjs-break-overlay-text'></div>"}),Object.keys(l.breakOverlay.style).forEach(function(e){a&&(a.style[e]=l.breakOverlay.style[e])}),s.el().appendChild(a),m=g),k(),s.on("timeupdate",k),s.off("loadedmetadata")}s.on("loadedmetadata",function(){p()}),s.markers={getMarkers:function(){return d},next:function(){for(var e=s.currentTime(),r=0;r<d.length;r++){var t=l.markerTip.time(d[r]);if(e<t){s.currentTime(t);break}}},prev:function(){for(var e=s.currentTime(),r=d.length-1;0<=r;r--){var t=l.markerTip.time(d[r]);if(t+.5<e)return void s.currentTime(t)}},add:function(e){t(e)},remove:function(e){i(e)},removeAll:function(){for(var e=[],r=0;r<d.length;r++)e.push(r);i(e)},updateTime:function(e){var i;i=e,d.forEach(function(e){var r=s.el().querySelector(".vjs-marker[data-marker-key='"+e.key+"']"),t=l.markerTip.time(e);(i||r.getAttribute("data-marker-time")!==t)&&(y(e,r),r.setAttribute("data-marker-time",t))}),r()},reset:function(e){s.markers.removeAll(),t(e)},destroy:function(){s.markers.removeAll(),a&&a.remove(),f&&f.remove(),s.off("timeupdate",e),delete s.markers}}})});
let data, decryptSrc = null, lines = {}, track;
const iOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || ["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document),
notLetterRegex = /^[^A-Za-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]+$/g,
letters = {
"a":"а","b":"б","c":"ц","d":"д","e":"э","f":"ф","g":"г","h":"х","i":"и","j":"ж","k":"к","l":"л","m":"м","n":"н","o":"о","p":"р","q":"к","r":"р","s":"с","t":"т","u":"у","v":"в","w":"в","x":"кс","y":"я","z":"з",
"ya":"яа","ye":"еэ","yi":"еи","yo":"ёо","yu":"юу","cha":"ча","che":"чэ","chi":"чи","cho":"чо","chu":"чу","sha":"ша","she":"шэ","shi":"ши","sho":"шо","shu":"шу","tsa":"ца","tse":"цэ","tsi":"ци","tso":"цо","tsu":"цу"
}, noCC = "・", urlParams = new URLSearchParams(window.location.search);
function startData(e) {
    data = e;
    if (e.encrypted) {
        let s = localStorage.getItem("decryptSrc");
        if (s) {
            eval(s);
            decryptSrc(data.sources);
        } else decryptInit();
    } else startPlayer();
}
function updateControls(c) { data.controls = c; }
function startPlayer() { initPlayer(); }
function initPlayer() {
    data.controls = JSON.parse(urlParams.get("controls") || "[true,true,true,true,true]");
    if (iOS) data.controls[0] = true;
    const player = videojs("player", { playbackRates: [0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3], autoplay: data.controls[0], muted: data.controls[0] }), playerEl = player.children_[0];
    playerEl.onratechange = () => { localStorage.setItem("playerRate", playerEl.playbackRate); };
    player.on("volumechange", () => { localStorage.setItem("playerVolume", player.volume()); });
    player.seekButtons({ forward: 10, back: 10 });
    player.src({ type: "application/x-mpegURL", src: data.sources[0].file });
    track = data.tracks.find(e => e.default);
    if (!track && data.tracks.length > 0) track = data.tracks[0];
    const langDatas = [["ab","abkhaz"],["ace","acehnese"],["ach","acholi"],["aa","afar"],["af","afrikaans"],["sq","albanian"],["alz","alur"],["am","amharic"],["ar","arabic"],["hy","armenian"],["as","assamese"],["av","avar"],["awa","awadhi"],["ay","aymara"],["az","azerbaijani"],["ban","balinese"],["bal","baluchi"],["bm","bambara"],["bci","baoulé"],["ba","bashkir"],["eu","basque"],["btx","batak karo"],["bts","batak simalungun"],["bbc","batak toba"],["be","belarusian"],["bem","bemba"],["bn","bengali"],["bew","betawi"],["bho","bhojpuri"],["bik","bikol"],["bs","bosnian"],["br","breton"],["bg","bulgarian"],["bua","buryat"],["yue","cantonese"],["ca","catalan"],["ceb","cebuano"],["ch","chamorro"],["ce","chechen"],["ny","chichewa"],["zh-CN","chinese (simplified)"],["zh-TW","chinese (traditional)"],["chk","chuukese"],["cv","chuvash"],["co","corsican"],["crh","crimean tatar"],["hr","croatian"],["cs","czech"],["da","danish"],["fa-AF","dari"],["dv","dhivehi"],["din","dinka"],["doi","dogri"],["dov","dombe"],["nl","dutch"],["dyu","dyula"],["dz","dzongkha"],["en","english"],["eo","esperanto"],["et","estonian"],["ee","ewe"],["fo","faroese"],["fj","fijian"],["tl","filipino"],["fi","finnish"],["fon","fon"],["fr","french"],["fy","frisian"],["fur","friulian"],["ff","fulani"],["gaa","ga"],["gl","galician"],["ka","georgian"],["de","german"],["el","greek"],["gn","guarani"],["gu","gujarati"],["ht","haitian creole"],["cnh","hakha chin"],["ha","hausa"],["haw","hawaiian"],["iw","hebrew"],["hil","hiligaynon"],["hi","hindi"],["hmn","hmong"],["hu","hungarian"],["hrx","hunsrik"],["iba","iban"],["is","icelandic"],["ig","igbo"],["ilo","ilocano"],["id","indonesian"],["ga","irish"],["it","italian"],["jam","jamaican patois"],["ja","japanese"],["jw","javanese"],["kac","jingpo"],["kl","kalaallisut"],["kn","kannada"],["kr","kanuri"],["pam","kapampangan"],["kk","kazakh"],["kha","khasi"],["km","khmer"],["cgg","kiga"],["kg","kikongo"],["rw","kinyarwanda"],["ktu","kituba"],["trp","kokborok"],["kv","komi"],["gom","konkani"],["ko","korean"],["kri","krio"],["ku","kurdish (kurmanji)"],["ckb","kurdish (sorani)"],["ky","kyrgyz"],["lo","lao"],["ltg","latgalian"],["la","latin"],["lv","latvian"],["lij","ligurian"],["li","limburgish"],["ln","lingala"],["lt","lithuanian"],["lmo","lombard"],["lg","luganda"],["luo","luo"],["lb","luxembourgish"],["mk","macedonian"],["mad","madurese"],["mai","maithili"],["mak","makassar"],["mg","malagasy"],["ms","malay"],["ms-Arab","malay (jawi)"],["ml","malayalam"],["mt","maltese"],["mam","mam"],["gv","manx"],["mi","maori"],["mr","marathi"],["mh","marshallese"],["mwr","marwadi"],["mfe","mauritian creole"],["chm","meadow mari"],["mni-Mtei","meiteilon (manipuri)"],["min","minang"],["lus","mizo"],["mn","mongolian"],["my","myanmar (burmese)"],["nhe","nahuatl (eastern huasteca)"],["ndc-ZW","ndau"],["nr","ndebele (south)"],["new","nepalbhasa (newari)"],["ne","nepali"],["bm-Nkoo","nko"],["no","norwegian"],["nus","nuer"],["oc","occitan"],["or","odia (oriya)"],["om","oromo"],["os","ossetian"],["pag","pangasinan"],["pap","papiamento"],["ps","pashto"],["fa","persian"],["pl","polish"],["pt","portuguese (brazil)"],["pt-PT","portuguese (portugal)"],["pa","punjabi (gurmukhi)"],["pa-Arab","punjabi (shahmukhi)"],["qu","quechua"],["kek","qʼeqchiʼ"],["rom","romani"],["ro","romanian"],["rn","rundi"],["ru","russian"],["se","sami (north)"],["sm","samoan"],["sg","sango"],["sa","sanskrit"],["sat-Latn","santali"],["gd","scots gaelic"],["nso","sepedi"],["sr","serbian"],["st","sesotho"],["crs","seychellois creole"],["shn","shan"],["sn","shona"],["scn","sicilian"],["szl","silesian"],["sd","sindhi"],["si","sinhala"],["sk","slovak"],["sl","slovenian"],["so","somali"],["es","spanish"],["su","sundanese"],["sus","susu"],["sw","swahili"],["ss","swati"],["sv","swedish"],["ty","tahitian"],["tg","tajik"],["ber-Latn","tamazight"],["ber","tamazight (tifinagh)"],["ta","tamil"],["tt","tatar"],["te","telugu"],["tet","tetum"],["th","thai"],["bo","tibetan"],["ti","tigrinya"],["tiv","tiv"],["tpi","tok pisin"],["to","tongan"],["ts","tsonga"],["tn","tswana"],["tcy","tulu"],["tum","tumbuka"],["tr","turkish"],["tk","turkmen"],["tyv","tuvan"],["ak","twi"],["udm","udmurt"],["uk","ukrainian"],["ur","urdu"],["ug","uyghur"],["uz","uzbek"],["ve","venda"],["vec","venetian"],["vi","vietnamese"],["war","waray"],["cy","welsh"],["wo","wolof"],["xh","xhosa"],["sah","yakut"],["yi","yiddish"],["yo","yoruba"],["yua","yucatec maya"],["zap","zapotec"],["zu","zulu"]];
    data.tracks.forEach(e => {
        let l = e.label.toLowerCase().trim(), lang = l == 'ga' ? 'gaa' :
            l.includes('batak') ? (l.includes('karo') ? 'btx' : l.includes('toba') ? 'bbc' : 'bts') :
            l.includes('chinese') ? (l.includes('simp') ? 'zh-CN' : 'zh-TW') :
            l.includes('kurdish') ? (l.includes('sora') ? 'ckb' : 'ku') :
            l.includes('malay') ? (l.includes('jawi') ? 'ms-Arab' : l.includes('alam') ? 'ml' : 'ms') :
            l.includes('portuguese') ? (l.includes('braz') ? 'pt' : 'pt-PT') :
            l.includes('punjabi') ? (l.includes('shah') ? 'pa-Arab' : 'pa') :
            l.includes('romani') ? (l.includes('ian') ? 'ro' : 'rom') :
            l.includes('tamazight') ? (l.includes('tifi') ? 'ber' : 'ber-Latn') :
            l.includes('tatar') ? (l.includes('crim') ? 'crh' : 'tt') : '';
        if (lang == '') {
            l = l.split(" ")[0];
            l = langDatas.findIndex(a => a[1].includes(l));
            lang = l < 0 ? 'auto' : langDatas[l][0];
        }
        player.addRemoteTextTrack({ kind: "captions", label: e.label, src: e.file, language: lang, default: e == track, mode: e == track ? "showing" : "hidden" }, false);
    });
    player.textTracks().on("change", () => track = player.textTracks().tracks_.find(e => e.kind === "captions" && e.mode === "showing"));
    player.ready(() => {
        let cues = [];
        if (data.intro && (data.intro.start != 0 || data.intro.end != 0)) {
            cues.push({ time: data.intro.start, text: "Intro Start" });
            cues.push({ time: data.intro.end, text: "Intro End" });
        }
        if (data.outro && (data.outro.start != 0 || data.outro.end != 0)) {
            cues.push({ time: data.outro.start, text: "Outro Start" });
            cues.push({ time: data.outro.end, text: "Outro End" });
        }
        player.markers({ markers: cues });
        player.playbackRate(parseFloat(localStorage.getItem("playerRate") || "1"));
        player.volume(parseFloat(localStorage.getItem("playerVolume") || "1"));
        player.on("timeupdate", () => {
            if (data.controls[2]) {
                let t = player.currentTime();
                if (data.intro && data.intro.start <= t && t < data.intro.end)
                    player.currentTime(data.intro.end);
                if (data.outro && data.outro.start <= t && t < data.outro.end)
                    player.currentTime(data.outro.end);
            }
        });
        player.on("ended", () => {
            if (data.controls[1])
                window.parent.window.addEp(1);
        });
        const parent = document.getElementsByClassName("vjs-text-track-display")[0];
        new MutationObserver(() => updateTracks(parent.firstElementChild)).observe(parent, { subtree: true, childList: true });
    });
}
function decryptInit() {
    fetch("https://api.codetabs.com/v1/proxy?quest=https://rapid-cloud.co/js/player/prod/e6-player-v2.min.js?v=" + Math.round(new Date().getTime() / 1000)).then(e => e.text()).then(e => {
        let s = /=\w+=>\{.{1,1000}for\(let.{1,1000}switch.{1,1000}return \w+\(\w+,\w+\);\};/g.exec(e)[0].split("=>");
        s = "decryptSrc=" + s[s.length - 2].split("=").slice(-1)[0] + "=>" + s[s.length - 1].replaceAll(/function[^\}]+}/g, "");
        let arr = [...s.matchAll(/(\['\w+'\]\()|(\[\w+\(.{1,20}\)\]\()/g)];
        s = s.replace(arr[0][0], "['slice'](").replace(arr[1][0], "['replace'](").replace(arr[2][0], "['substring'](");
        s = s.substring(0, s.lastIndexOf("return") + 7) + "decryptSrc2" + s.substring(s.lastIndexOf("(")) + ";";
        let s2 = s.substring(s.indexOf('<') + 1);
        s2 = "," + s2.substring(0, s2.indexOf(';')) + "=";
        arr = [...e.matchAll(/(\w+=0x\w+[,;]){3,100}/g)].map(e => "," + e[0].substring(0, e[0].length - 1));
        s2 = arr.filter(e => e.includes(s2)).slice(-1)[0].substring(1);
        s = s.replace("=>{", "=>{let " + s2 + ";") + ";";
        localStorage.setItem("decryptSrc", s);
        eval(s);
        decryptSrc(data.sources);
    }).catch(e => decryptInit());
}
function decryptSrc2(s, key) {
    try {
        data.sources = JSON.parse(CryptoJS.AES.decrypt(s, key).toString(CryptoJS.enc.Utf8));
        startPlayer();
    } catch (err) { decryptInit(); }
    return [];
}
function updateTracks(parent) {
    if (parent && data.controls[3]) {
        parent.setAttribute("style", "");
        [...parent.children].forEach(e => {
            if (e.getAttribute("style")) {
                e.setAttribute("style", "");
                translate(e.firstElementChild);
            }
        });
    }
}
function translate(cc) {
    let line = cc.innerHTML.replaceAll(/<[^>]*>/g, "").split("\n");
    line = data.controls[4] ? line.map(e => e.trim()).join(" ").trim() : line.map(e => e.replaceAll(/\[.*?\]/g, "").replaceAll(/-[- ]/g, "").trim()).join(" ").trim();
    cc.style.display = "inline";
    if (line == "") {
        cc.style.display = "none";
    } else if (line in letters) {
        translateShow(cc, letters[line]);
    } else if (/^[a-z][a-z]$/g.test(line)) {
        translateShow(cc, letters[line[0]] + letters[line[1]]);
    } else if (line in lines) {
        translateShow(cc, lines[line]);
    } else if (notLetterRegex.test(line) || line.startsWith(noCC) && line.endsWith(noCC) || Object.values(lines).includes(line)) {
        translateShow(cc, line);
    } else {
        cc.style.display = "none";
        googleTranslate(line, translated => {
            cc.style.display = "inline";
            translateShow(cc, translated);
            if (!(translated.startsWith(noCC) && translated.endsWith(noCC))) lines[line] = translated;
        });
    }
}
function translateShow(cc, line) {
    if (cc.innerHTML.includes("\n")) {
        let i = Math.floor(line.length / 2);
        i += /[ \.,?!""-]/.exec(line.substring(i)).index;
        line = line.substring(0, i + 1).trim() + "\n" + line.substring(i + 1).trim();
    }
    cc.innerHTML = line;
}
function googleTranslate(str, callback) { fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${track.language}&tl=mn&dt=t&q=${encodeURIComponent(str)}`).then(e => e.json()).then(e => callback(e[0].map(e => e[0].trim()).join(" "))).catch(e => callback(noCC + str + noCC)); }