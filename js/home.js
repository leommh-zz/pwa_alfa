$(document).ready(function(){

	//produtos do cache
	produtos = localStorage.getItem("produtos");

	$.getJSON("json/produto.php", () => {
		$(".produto").html("<img src='imagens/load.gif'> Carregando produtos");
	}).done(dados => {
		//jogar os dados no .produto
		preencherProdutos(dados);
		cache = JSON.stringify(dados);
		localStorage.setItem("produtos",dados);
	}).fail(() => {
		console.log("Carregando produtos do Cache");
		dados = JSON.parse(produtos);
		preencherProdutos(dados);
	})

})

function fechar(){
	$("#app").fadeOut("slow", () => {
		$("#app").hide();
	})
}

//verificar se o navegador da suporte a service worker
if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("sw.js")
	.then(() => console.log("Service Worker registrado!"))
	.catch(() => console.log("Service Worker não foi registrado!"))
} else {
	console.log("este não navegador não suporta Service Worker.")
}