$.ajax('./db/dinosaurs.json').done(function(data) {
	var dinoArray = data.dinosaurs;
	makeDom(dinoArray);
}).fail(function(error){
	console.log("You've made a huge mistake", error);
});

function makeDom(myArrayToPrint) {
	var myDomString = "";
	var counter = 0;
	for (var i = 0; i < myArrayToPrint.length; i++) {
		if (counter % 3 === 0) {
			myDomString += `<div class="row">`;
		}
		myDomString += `<div class="dinoCard col-sm-3">`;
		myDomString += `<header><h1>${myArrayToPrint[i].type}</h1></header>`;
		myDomString += `<section>`;
		myDomString += `<img src="${myArrayToPrint[i].img}">`;
		myDomString += `<p class="bio">${myArrayToPrint[i].bio}</p>`;
		myDomString += `</section>`;
		myDomString += `<footer>${myArrayToPrint[i].info}</footer>`;
		myDomString += `</div>`;
		
		counter++;
		if (counter % 3 === 0) {
			myDomString += `</div>`;
		}
	}
	$("#dinosaurs").append(myDomString);
}

$("#dinosaurs").on("click", ".dinoCard", function(e){
	$(".dinoCard").removeClass("dottedBorder");
	$(this).addClass("dottedBorder");
	$("#textbox").val("").focus();
});

$("#textbox").keyup(mirrorText);

function mirrorText(e) {
	var selectedCard = $(".dottedBorder");
	var bio = $(".dottedBorder").find("p.bio");
	var bioTyped = $("#textbox").val();
	bio.html(bioTyped);

	if (e.keyCode == 13) {
		$("#textbox").val("");
	}
}















