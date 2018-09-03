var $li = $(".img-list").find('>li'), 
$links = $li.find('>a'),
$lightbox = $('.lightbox'),
$overlay = $('.overlay'),
$prev = $('.prev'),
$next  = $('.next'),
liIndex,
targetImg;

function replaceImg(src){
	$lightbox.find('img').attr("src", src);
}

function getHref(index){
	return $li.eq(index).find('>a').attr('href');
}
$links.click(function(event) {
	event.preventDefault();
	liIndex = $(this).parent().index();
	targetImg = $(this).attr('href');
	replaceImg(targetImg);
	$lightbox.fadeIn(500);
});

$overlay.click(function(event) {
	$lightbox.fadeOut('500');
});

$next.click(function(event) {
	if ((liIndex+1) < $li.length){
		targetImg = getHref(liIndex+1);
		liIndex++;
	}
	else{
		targetImg = getHref(0);
		liIndex = 0;
	}
	replaceImg(targetImg);
});


$prev.click(function(event) {
	if ((liIndex-1) >= 0){
		targetImg = getHref(liIndex-1);
		liIndex--;
	}
	else{
		targetImg = getHref($li.length-1);
		liIndex = $li.length-1;
	}
	replaceImg(targetImg);
});

