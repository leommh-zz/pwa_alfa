self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("subsubmarino")
        .then( cache => {
            cache.addAll([
                "index.php",
                "css/materialize.min.css",
                "css/style.css",
                "js/jquery-3.1.1.min.js",
                "js/materialize.min.js",
                "js/home.js",
                "js/categoria.js",
                "js/carrinho.js",
                "js/produto.js",
                "js/funcoes.js",
                "imagens/icon.png",
                "imagens/logo.png"
            ])
        })
    )
})