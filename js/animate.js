$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0.3,
		duration: '30%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);
    // pin again
	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#project05',
		triggerHook: 0.5
	})
	.setPin('#intro', {pushFollowers: false})
    .addTo(controller);
    
    
$('.project').each(function(){
        console.log(this);
    	// build a scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: this,
        reverse: false,
		triggerHook: 0.8
	})
	.setClassToggle(this, 'fade-in') // add class to project01
	.addIndicators({
		name: 'fade scene',
		colorTrigger: 'black',
		colorStart: '#75C695'
	}) // this requires a plugin
	.addTo(controller);

});
    
})