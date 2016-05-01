chrome.storage.sync.get({
		bggecbgimage: false
		}, function(items) {

			if (items.bggecbgimage) {		
		
				var gamePrimaryDivs = document.getElementsByClassName("game-primary");
				for(var i = 0; i < gamePrimaryDivs.length; i++) {
					var item = gamePrimaryDivs.item(i)
					item.style["background-image"]='none';
					item.style["background-color"]='transparent';
				}
			}
	});