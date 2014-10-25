$(function() {
	$('h1').addClass('class',{
		xPos: 70,
		hatSize: 50
	});
    $('#example1').on('click', function(){
    	$('#example-code').addClass('this-should-be-classier');
    });
    $('#example2').on('click', function(){
    	$('img.make-classy').addClass('now-its-classy');
    	$('p.dull').text('So classy!');
    })
    $('#example3').on('click', function(){
    	$('#fanciest').addClass('the-classiest',{
    		fanciest: true,
    		hatSize: 150
    	})
    })

});