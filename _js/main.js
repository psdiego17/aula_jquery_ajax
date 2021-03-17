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
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo-cep").html("CEP: "+ response.cep);

        }
    })
}

