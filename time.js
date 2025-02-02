
setInterval(function(){
setUTCTime()
 }, 1000);

function setUTCTime() {
const time = utcTime = new Date().toUTCString()
document.getElementById('time').innerHTML = time;
}
		