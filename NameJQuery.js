$(document).ready(()=>{
    const regix =/^[A-Z][a-zA-Z]{0,10}([-|']{0,1}[a-z]{2,10})?([\s][a-zA-Z]{0,10}([-|']{0,1}[a-z]{2,10})?)?$/;
    
    $("#myButton").click(()=>{
        const str=$('#basic-url').val();  
          
        if(str.trim()===""){
            alert("Please enter Name");
          }
        if(regix.test(str)){

            $('#basic-url').css("border-color","green");
            $('#mySpan').text("Name Valide");
            $('#mySpan').css("color","green");  

        }else{

            $('#basic-url').css("border-color","red");
            $('#mySpan').text("Name Invalide");  
            $('#mySpan').css("color","red"); 

        }
        
    });
    
});


