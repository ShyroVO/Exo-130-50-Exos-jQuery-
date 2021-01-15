$('#submit1').click(function (){
    if( $('input[name=exo1]').prop('checked') ){
        $('#screen1').innerHTML = "Bien reçut";
    }
})
