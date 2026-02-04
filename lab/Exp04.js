function SubmitButtonClick(){

    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;

    document.getElementById('nameError').innerHTML="";
    document.getElementById('emailError').innerHTML="";
    document.getElementById('passwordError').innerHTML="";

    let isvalid=true;

    if (name== ""){
        document.getElementById("nameError").innerHTML="name field is require ";
        invalid=false;
    }

    if (email== "@"){
        document.getElementById("emailError").innerHTML="email field require ";
        invalid=false;
    }
    if (password <=6){
        document.getElementById("passwordError").innerHTML=" email field is require";
        invalid=false;
    }

}