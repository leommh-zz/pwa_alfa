$(document).ready(function(){

	id = retornaId(5);

	produtos = localStorage.getItem("categoria"+id);

	if ( produtos ) {
		console.log("Produtos do Cache");
		dados = JSON.parse(produtos);
		console.log("Data: ", dados);
		preencherProdutos(dados);
		
	} else{
		console.log("Produtos do JSON");

		$.getJSON(`json/produto.php?op=categoria&id=${id}`, 
		() => $(".produto").html(`
			<img src='imagens/load.gif'> 
			Carregando produtos...
		`)).done(dados => {
			preencherProdutos(dados);
			cache = JSON.stringify(dados);
			console.log("Data: ", cache);
			localStorage.setItem("categoria"+id,cache);
		}).fail(() => $(".produto").html("Erro ao carregar produtos"));

	}

})