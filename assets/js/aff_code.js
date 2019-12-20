$(document).ready(function(){
	$("#afficheMasque").click(function() {
		if ($("#cod1").css('display') == "none" ) {
			$("#cod1").slideDown(400);
			$("#cod2").slideDown(400);
			$("#cod3").slideDown(400);
			$("#cod4").slideDown(400);
			$("#cod5").slideDown(400);
			$("#cod6").slideDown(400);
			$("#cod7").slideDown(400);
			$("#cod8").slideDown(400);
			$("#cod9").slideDown(400);
			$("#cod10").slideDown(400);
			$("#cod11").slideDown(400);
			$("#cod12").slideDown(400);
			$("#cod13").slideDown(400);
			$("#cod14").slideDown(400);
			$("#cod15").slideDown(400);
			$("#cod16").slideDown(400);
			$("#cod17").slideDown(400);
			$("#cod18").slideDown(400);
			$("#cod19").slideDown(400);
			$("#cod20").slideDown(400);
			$('#afficheMasque').html("Masquer le code Python");
			
		} else {
			$("#cod1").hide(400);
			$("#cod2").hide(400);
			$("#cod3").hide(400);
			$("#cod4").hide(400);
			$("#cod5").hide(400);
			$("#cod6").hide(400);
			$("#cod7").hide(400);
			$("#cod8").hide(400);
			$("#cod9").hide(400);
			$("#cod10").hide(400);
			$("#cod11").hide(400);
			$("#cod12").hide(400);
			$("#cod13").hide(400);
			$("#cod14").hide(400);
			$("#cod15").hide(400);
			$("#cod16").hide(400);
			$("#cod17").hide(400);
			$("#cod18").hide(400);
			$("#cod19").hide(400);
			$("#cod20").hide(400);
			$('#afficheMasque').html("Afficher le code Python");
		}
	});	


	
});