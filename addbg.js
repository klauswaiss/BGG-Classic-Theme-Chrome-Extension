
chrome.storage.sync.get({
bggecbgimage: false
}, function(items) {
	document.getElementsByClassName('img-responsive')[0].style.visibility='hidden';
// document.getElementById('bggecbgimage').checked = items.bggecbgimage;
});