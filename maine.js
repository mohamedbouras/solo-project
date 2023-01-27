$("#btn").click(function(event){
    event.preventDefault();
    var x=$("#pas").val()
if(x.length>8 && /[a-z]/.test(x)&&/[1-9]/.test(x)&&/[A-Z]/.test(x)){
    alert( "Weclome To X O GAME")
    window.location.replace("index.html")
}
else{alert("the password should contain uppercase and lowercase letters and its length should be more then 8")}})


