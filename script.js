jQuery(document).ready(function(){
	console.log(navigator.userAgent);
	var ancho = jQuery(window).width();
	var imgworkshop = "";
	var imgretroescavadora = "";
	var imgtailorMeasure = "";
	if(ancho >= 1200){
		imgworkshop = "imagenes/workshop2.jpg";
		imgretroescavadora = "imagenes/retroescavadora.jpg";
		imgtailorMeasure = "imagenes/tailor-measure.jpg";
	}
	else if(ancho >= 992){
		imgworkshop = "imagenes/workshop2lg.jpg";
		imgretroescavadora = "imagenes/retroescavadoralg.jpg";
		imgtailorMeasure = "imagenes/tailor-measurelg.jpg";
	}
	else if(ancho >= 768){
		imgworkshop = "imagenes/workshop2md.jpg";
		imgretroescavadora = "imagenes/retroescavadoramd.jpg";
		imgtailorMeasure = "imagenes/tailor-measuremd.jpg";
	}
	else if(ancho >= 576){
		imgworkshop = "imagenes/workshop2sm.jpg";
		imgretroescavadora = "imagenes/retroescavadorasm.jpg";
		imgtailorMeasure = "imagenes/tailor-measuresm.jpg";
	}
	else{
		imgworkshop = "imagenes/workshop2sm.jpg";
		imgretroescavadora = "imagenes/retroescavadoraxs.jpg";
		imgtailorMeasure = "imagenes/tailor-measurexs.jpg";
	}
	jQuery("#workshop").append('<img class="csf-img-qs" src="'+imgworkshop+'">');
	jQuery("#retroescavadora").append('<img class="csf-img-finan" src="'+imgretroescavadora+'">');
	jQuery("#tailor-ms").append('<img class="csf-img-finan2" src="'+imgtailorMeasure +'">');
});

