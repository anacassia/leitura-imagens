

$("#dashboard #dashboard-content").hover(function () {
	$("#voltar, #tela3-conteudo, #pedestal, #main-title, #new-midiateca").toggleClass("grayscale");
});
$("#voltar").hover(function () {
	$("#pedestal, #info-desenho, #tela3-conteudo, #dashboard, #new-midiateca").toggleClass("grayscale");
});
$("#info-desenho b").hover(function () {
	$("#pedestal, #voltar, #tela3-conteudo, #dashboard, #new-midiateca").toggleClass("grayscale");
});
$("#new-midiateca").hover(function () {
	$("#pedestal, #info-desenho, #voltar, #tela3-conteudo, #dashboard, #info-nuvem b").toggleClass("grayscale");
});
$("#abc-bt, #imagem-bt, #texto-bt, #visual-bt, #texto-img-bt, #trabalhar-bt ").hover(function () {
	$("#info-desenho, #tela3-conteudo, #dashboard, #voltar, #new-midiateca").toggleClass("grayscale");
});
