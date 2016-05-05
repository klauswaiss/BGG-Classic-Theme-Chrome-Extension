chrome.storage.sync.get({
	showHeaderBackgroundImage: false
	}, function(items) {
		
		(items.showHeaderBackgroundImage) ? adjustWithBGImage() : adjustWithoutBGImage()
		makeTopDivVisible()
});

function adjustWithBGImage() {
	var gamePrimaryDivs = document.getElementsByClassName("game-header");
	for(var i = 0; i < gamePrimaryDivs.length; i++) {
		var item = gamePrimaryDivs.item(i)
			item.setAttribute('style', 'background-image: -webkit-linear-gradient(-360deg, #080912 60%, rgba(0, 0, 0, 0.55) 100%) !important');
	}
}

function adjustWithoutBGImage() {
	var gamePrimaryDivs = document.getElementsByClassName("game-primary");
			for(var i = 0; i < gamePrimaryDivs.length; i++) {
				var item = gamePrimaryDivs.item(i)
				item.style["background-image"]='none';
				item.style["background-color"]='transparent';	
			}
			
			var gameHeaderTitle = document.getElementsByClassName("game-header-title-info");
			for(var i = 0; i < gameHeaderTitle.length; i++) {
				var item = gameHeaderTitle.item(i)
				item.style["color"]='rgb(0, 0, 136)';
				item.style["font-weight"]='bold';
				item.style["font-size"]='22px';
			}
			
			var gameHeaderItems = document.getElementsByClassName("game-header");
			for(var i = 0; i < gameHeaderItems.length; i++) {
				var item = gameHeaderItems.item(i)
				item.style["color"]='black';
				item.style["background"]='transparent';
			}
			
			var credits = document.getElementsByClassName("credits");
			for(var i = 0; i < credits.length; i++) {
				var item = credits.item(i)
				item.style["border-top-color"]='rgb(128, 128, 128)';
				item.style["border-bottom-color"]='rgb(128, 128, 128)';
				item.style["background-color"]='rgb(229, 229, 229)';
			}
			
			var titleContainer = document.getElementsByClassName("game-header-title-container");
			for(var i = 0; i < titleContainer.length; i++) {
				var item = titleContainer.item(i)
				item.style["border-style"]='solid';
				item.style["border-width"]='2px';
				item.style["border-color"]='rgb(212, 218, 232)';
				item.style["background-color"]='rgb(236, 239, 246)';
			}

			var gameHeaderCollapsed = document.getElementsByClassName("game-header-credits hidden-game-header-collapsed");
			for(var i = 0; i < gameHeaderCollapsed.length; i++) {
				var item = gameHeaderCollapsed.item(i)
				item.style["margin-top"]='0px';
			}
			
			var primaryActionsGameHeaderCollapsed = document.getElementsByClassName("game-header-primary-actions hidden-game-header-collapsed");
			for(var i = 0; i < primaryActionsGameHeaderCollapsed.length; i++) {
				var item = primaryActionsGameHeaderCollapsed.item(i)
				item.style["background-color"]='white';
			}
			
			var gameHeaderBody = document.getElementsByClassName("game-header-body");
			for(var i = 0; i < gameHeaderBody.length; i++) {
				var item = gameHeaderBody.item(i)
				item.style["background-color"]='white';
			}
			
			var spanRatingStars = document.getElementsByClassName("rating-stars");
			for(var i = 0; i < spanRatingStars.length; i++) {
				var item = spanRatingStars.item(i)
				item.style["background-color"]='#dbe0e5';
			}
}

function makeTopDivVisible() {
	var gamePrimaryDivs = document.getElementsByClassName("game-primary");
	for(var i = 0; i < gamePrimaryDivs.length; i++) {
		var item = gamePrimaryDivs.item(i)
		item.style["visibility"]="visible";
	}
}