// Store a reference to the original jQuery .addClass()
var originalAddClass = jQuery.fn.addClass;

//make it classy
$.fn.addSomeClass = function(originalAddClass, options){
	//check to see if .addClass() passed in an argument
	if (typeof originalAddClass === "object"){
		options = originalAddClass
	}
	//define default settings
	var settings = $.extend({
		hat: 'tophat',
		xPos: 50,
		fanciest: false,
		monocle: false,
		bowtie: false,
		mustache: false,
		hatSize: 100,
		imageReplace: true,
		image: 'images/murray-classy-point.gif'
	}, options);
	//create a base hat
	var hat = $('<i class="accessories"></i>').css({
		backgroundSize:'contain',
		backgroundPosition: 'bottom',
		backgroundRepeat: 'no-repeat',
		pointerEvents:'none',
		position: 'absolute',
		top: 0,
		zIndex: 99999999999999,
		left: settings.xPos+'%'
	});

	//determine what kind of hat
	if (settings.hat === 'tophat'){
		hat.css({
			'background-image': 'url(images/topHat.png)',
			transform: 'translateY(-90%) translateX(-50%)',
			width: settings.hatSize*1.33,
			height: settings.hatSize
		});
	} else if (settings.hat === 'bowler'){
		//define unique bowler parameters
		hat.css({
			'background-image': 'url(images/bowler.png)',
			transform: 'translateY(-90%) translateX(-50%)',
			width: settings.hatSize*1.3,
			height: settings.hatSize*.65
		});
	};
	//make a monocle
	var monocle = $('<i class="accessories"></i>');
	if (settings.monocle === true || settings.fanciest === true){
		monocle.css({
			backgroundSize:'contain',
			backgroundPosition: 'bottom',
			backgroundRepeat: 'no-repeat',
			pointerEvents:'none',
			position: 'absolute',
			top: '20%',
			transform: 'translateX(-'+settings.hatSize*.65+'px)',
			left: settings.xPos+'%',
			width: settings.hatSize/2,
			height: settings.hatSize*0.91,
			zIndex: 1000000,
			'background-image': 'url(images/monocle.png)'
		});
	};
	//make a mustache
	var mustache = $('<i class="accessories"></i>');
	if (settings.mustache === true || settings.fanciest === true){
		mustache.css({
			backgroundSize:'contain',
			backgroundPosition: 'bottom',
			backgroundRepeat: 'no-repeat',
			pointerEvents:'none',
			position: 'absolute',
			top: '60%',
			transform: 'translateX(-50%) translateY(-50%)',
			left: settings.xPos+'%',
			width: settings.hatSize,
			height: settings.hatSize/2,
			zIndex: 1000001,
			'background-image': 'url(images/mustache.png)'
		});
	};
	//make a bowtie
	var bowtie = $('<i class="accessories"></i>');
	if (settings.bowtie === true || settings.fanciest === true){
		bowtie.css({
			backgroundSize:'contain',
			backgroundPosition: 'bottom',
			backgroundRepeat: 'no-repeat',
			pointerEvents:'none',
			position: 'absolute',
			bottom: 0,
			transform: 'translateX(-50%) translateY(50%)',
			left: settings.xPos+'%',
			width: settings.hatSize,
			height: settings.hatSize/2,
			zIndex: 1000002,
			'background-image': 'url(images/bowtie.png)'
		});
	};
	//check each element to see if it's already been made classy
	this.each(function(i, element){
		if($(element).is('[data-has-class]') !== true) {
			$(element).css({position: 'relative'}).attr('data-has-class', true).append(hat.clone(true), monocle.clone(true), bowtie.clone(true), mustache.clone(true));
		}
	})

	//option to turn off image source changing
	if (this.is('img') && settings.imageReplace == true){
		this.attr('src', settings.image);
	}

	return this
}

//add back the original functionality of .addClass()
jQuery.fn.addClass = function(){
    jQuery.fn.addSomeClass.apply(this, arguments);
    originalAddClass.apply(this, arguments);
}