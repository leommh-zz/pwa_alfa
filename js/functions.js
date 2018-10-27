$(document).ready(function(){

    // Load Screen Start
    $(".load").fadeOut("slow", function(){
        $(".load").hide();
    })

    // Import all categories 
    $.getJSON("json/category.php", () => (
        $("#msg").html(`   
            <p>
                <img src="imagens/load.gif">
                Carregando Categorias...
            </p>
            
        `)
    )).done(data => (
        //success
        $.each(data, (key, val) => {

            $("#mobile-demo, #menu").prepend(`
                <li>
                    <a key="${key}" href="category/${val.id}">
                        ${val.category}
                    </a>
                </li>
            `)

            $("#msg").html('')
        })
    )).fail(() => {
        //fail
        $("#msg").html('')
        console.log('fail')
    })
})



