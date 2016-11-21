$(document).on('ready', function() {
// Write your Pizza Builder JavaScript in this file.
$('.crust-gluten-free').removeClass('crust-gluten-free')
$('.btn-crust').removeClass('active')
$('.sauce-white').removeClass('sauce-white')
$('.btn-sauce').removeClass('active')
var strong = parseInt($('strong').text().replace("$",""))-8;
$('strong').text("$"+strong);
$('li:contains("white")').toggle();
$('li:contains("5")').toggle();

function changeActive(param) {
	if ($('.btn-' + param).hasClass("active")===true) {
		$('.btn-' + param).removeClass("active");
	}else {
		$('.btn-' + param).addClass("active");
    }
}
function sumItemsPrice(param) {
	if ($('.btn-' + param).hasClass("active")===true) {
		strong +=1;
		updatePrice();
	}else {
		strong -=1;
		updatePrice();
	}
}
function sumTypesPrice(param) {
	if  ($('.btn-' + param).hasClass("active")===true) {
		if (param ==="crust") {
			strong +=5;
		}else {
			strong +=3;
		}
	}else if (param==="crust") {
		strong -=5;
	      }else {
	      	strong -=3;
	      }
	updatePrice();
	
}

function updatePrice() {
	$('strong').text("$"+strong);
}
$('.btn-pepperonni').on('click',function() {
	$('[class ~=pep]').toggle();
	changeActive("pepperonni");
	sumItemsPrice("pepperonni");
    $('li:contains("pepperonni")').toggle()
});

$('.btn-mushrooms').on('click', function() {
	$('[class~=mushroom').toggle();
	changeActive("mushrooms");
	sumItemsPrice("mushrooms");
	$('li:contains("mushrooms")').toggle()
})
$('.btn-green-peppers').on('click', function() {
	$('[class~=green-pepper]').toggle();
	changeActive("green-peppers");
	sumItemsPrice("green-peppers");
	$('li:contains("green")').toggle()
})

$('.btn-crust').on('click', function() {
	if ($('.crust').hasClass("crust-gluten-free")===false) {
	$('.crust').addClass("crust-gluten-free");
	}else {
	$('.crust').removeClass("crust-gluten-free");		
	}
	changeActive("crust");
	sumTypesPrice("crust");
	$('li:contains("5")').toggle()
})
$('.btn-sauce').on('click', function() {
	if ($('.sauce').hasClass("sauce-white")===false) {
	$('.sauce').addClass("sauce-white");
	}else {
	$('.sauce').removeClass("sauce-white");		
	}
	changeActive("sauce");
	sumTypesPrice("sauce");
	$('li:contains("white")').toggle()
})

});
