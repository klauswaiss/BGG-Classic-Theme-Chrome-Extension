chrome.storage.sync.get({
	showHeaderBackgroundImage: false
	}, function(items) {
		(items.showHeaderBackgroundImage) ? adjustWithBGImage() : adjustWithoutBGImage()		
		makeTopDivVisible();
});

function adjustWithBGImage() {
	adjustStylingWithQuerySelector(".game-header-title-info a", "color: white !important");
	adjustStylingWithQuerySelector(".game-header-credits a", "color: white !important");
	adjustStylingWithQuerySelector(".rating-overall-callout-container a", "color: white !important");
	adjustStylingWithQuerySelector(".game-header-classifications a", "color: white !important");
}

function adjustWithoutBGImage() {
	adjustStylingForClass("game-primary", "background-image: none; background-color: transparent");
	adjustStylingForClass("game-header-title-info", "color: rgb(0, 0, 136); font-weight: bold; font-size: 22px");
	adjustStylingForClass("game-header", "color: black; background: transparent");
	adjustStylingForClass("credits", "border-top-color: rgb(128, 128, 128); border-bottom-color: rgb(128, 128, 128); background-color: rgb(229, 229, 229);");
	adjustStylingForClass("game-header-title-container", "border-style: solid; border-width: 2px; border-color: rgb(212, 218, 232); background-color: rgb(236, 239, 246);");
	adjustStylingForClass("game-header-credits hidden-game-header-collapsed", "margin-top: 0px;");
	adjustStylingForClass("game-header-primary-actions hidden-game-header-collapsed", "background-color: white;");
	adjustStylingForClass("game-header-body", "background-color: white;");
	adjustStylingForClass("rating-stars", "background-color: #dbe0e5;");
}

function makeTopDivVisible() {
	var gamePrimaryDivs = document.getElementsByClassName("game-primary");
	for(var i = 0; i < gamePrimaryDivs.length; i++) {
		var item = gamePrimaryDivs.item(i)
		item.style["visibility"]="visible";
	}
}

function adjustStylingWithQuerySelector(querySelector, stylingAttributes) {
	var elements = document.querySelectorAll(querySelector);
	for(var i = 0; i < elements.length; i++) {
		var element = elements.item(i);
		element.setAttribute("style", stylingAttributes);
	}
}

function adjustStylingForClass(className, stylingAttributes) {
	var elements = document.getElementsByClassName(className);
	for(var i = 0; i < elements.length; i++) {
		var element = elements.item(i);
		element.setAttribute("style", stylingAttributes);
	}
}