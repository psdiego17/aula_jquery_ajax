//alert('Chamando o main.js');

function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            //alert(response.bairro);

            //document.getElementById("logradouro").innerHTML = response.logradouro;

            //Utilizando o Ajax
            $("#logradouro").html("Logradouro: "+response.logradouro);
            $("#bairro").html("Bairro: "+response.bairro);
            $("#localidade").html("Cidade: "+response.localidade);
            $("#uf").html("UF: "+response.uf);
        }
    })
}

