$(document).ready(function(){

	//recuperar a opcao
	op = retornaId(6);
	if ( op == "add" ) {

		console.log("Adicionando produto ao carrinho");
		
		//recuperar o id
		id = retornaId(5);

		produto = JSON.parse( localStorage.getItem("produto"+id) );

		if ( !produto ) {

			$.getJSON("json/produto.php?op=produto&id="+id, 
			() => $(".produto").html(`
				<img src='imagens/load.gif'> 
				Carregando produto...
			`)).done(dados => {
				cache = JSON.stringify(dados);
				localStorage.setItem("produto"+id,cache);
				produto = JSON.parse( cache );
			}).fail(() => $(".produto").html("Erro ao carregar produto"))
		}

		//carrinho
		carrinho = JSON.parse ( localStorage.getItem("carrinho"));
		if ( !carrinho ) {
			//iniciar carrinho
			carrinho = [];
		} 

		$.each(produto, ( key, val ) => {
			//verificar se já existe este item no carrinho
			c = buscaItem(carrinho, val.id);
			if ( c == 0 ){
				//guardar item no carrinho
				console.log("Item adicionado ao carrinho: "+val.nome);

				//criar um item produto para inserir no carrinho
				p = {
					id: val.id,
					nome: val.nome,
					foto: val.foto,
					valor: val.valor
				};
				//adicionar o p ao carrinho
				carrinho.push(p);
				localStorage.setItem("carrinho", JSON.stringify(carrinho));

			} else {
				//já tem o item no carrinho
				alert('O item já foi adicionado ao carrinho');
			}
		})

	}

	mostrarCarrinho();

})

//função para buscar item no carrinho
function buscaItem(carrinho, id){
	c = 0;
	$.each(carrinho, function (key, val){
		val.id == id ? c++ : c;
	})
	console.log(`items: ${ c }`);
	return c;
}

//função para mostrar o carrinho
function mostrarCarrinho(){
	$(".produto").html(`
		<img src="imagens/load.gif"> 
		Carregando carrinho de compras...
	`)

	//pegar o carrinho do cache
	carrinho = localStorage.getItem("carrinho");
	console.log(carrinho)

	if (carrinho === null){
		$(".produto").html(`
			Não existe nenhum item no seu carrinho!
		`)
	}else{
		carrinho = JSON.parse(carrinho);
		$(".produto").html(`
			<table>
				<thead>
					<td>Foto</td>
					<td>Nome</td>
					<td>Valor</td>
					<td>Excluir</td>
				</thead>
				<tbody>

				</tbody>
			
			</table>
			<p>
				<button type="button" class="btn red darken-4" onclick="limpar()">
					Limpar
				</button>
			</p>
		`);

		//mostrar as linhas dos produtos no tBody
		$.each(carrinho, (key, val) => {
			$("tbody").append(`
				<tr id="linha_${ key }">
					<td>
						<img src="${ val.foto }" width="100px">
					</td>
					<td>
						${ val.nome }
					</td>
					<td>
						${ val.valor }
					</td>
					<td>
						<button type="button" class="btn red darken-4" onclick="remover(${ key })">
							<i class="material-icons">remove_shopping_cart</i>
						</button>
					</td>
				</tr>
			`)
		})
		

	}
}

function remover(id){
	if( confirm("deseja mesmo excluir?") ){
		carrinho = JSON.parse(localStorage.getItem("carrinho"));
		carrinho.splice(id, 1);
		console.log(carrinho.length)
		if (carrinho.length > 0){
			carrinho = JSOM.stringify(carrinho);
			localStorage.setItem("carrinho", carrinho)
			$(`#linha_${ id }`).hide("slow");
		}else{
			carrinho = null;
			localStorage.setItem("carrinho", carrinho);
			mostrarCarrinho();
		}
		
	}
}

function limpar(){
	if (confirm("deseja mesmo limpar o carrinho?")){
		//limpa esta variavel do cache
		localStorage.clear("carrinho");
		
		mostrarCarrinho();
	}
}

// corrigir esta parte de limpar carrinho