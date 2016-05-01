// Saves options to chrome.storage
function save_options() {
  var bgimage = document.getElementById('bggecbgimage').checked;
  chrome.storage.sync.set({
    bggecbgimage: bgimage
  }, function() {
	  
  });
}

function restore_options() {
  chrome.storage.sync.get({
    bggecbgimage: false
  }, function(items) {
    document.getElementById('bggecbgimage').checked = items.bggecbgimage;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('bggecbgimage').addEventListener('change', save_options);