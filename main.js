var title = $(".title")
var turn = "x"
var squares = []
function winnner(){
for (var i = 1 ; i<10 ; i++){
   squares[i]  = $("#item" + i).text()
}
if (squares[1]==squares[2] && squares[2] == squares[3] && squares[1] != ""){
    console.log("done")
    alert("You Win")
    for (var i = 1 ; i<10;i++){
        $("#item" + i).text("")
    }
}
else if (squares[4]==squares[5] && squares[5] == squares[6] && squares[5] != ""){
    alert("You Win")
    for (var i = 1 ; i<10;i++){
        $("#item" + i).text("")
    }

}
else if (squares[7]==squares[8] && squares[8] == squares[9] && squares[7] != ""){
    alert("You Win")
    for (var i = 1 ; i<10;i++){
        $("#item" + i).text("")
    }

}
else if (squares[1]==squares[4] && squares[4] == squares[7] && squares[1] != ""){
    alert("You Win")
    for (var i = 1 ; i<10;i++){
        $("#item" + i).text("")
    }

}
else if (squares[2]==squares[5] && squares[5] == squares[8] && squares[5] != ""){
    alert("You Win")
    for (var i = 1 ; i<10;i++){
        $("#item" + i).text("")
    }

}
else if (squares[3]==squares[6] && squares[6] == squares[9] && squares[3] != ""){
    alert("You Win")
    for (var i = 1 ; i<10;i++){
        $("#item" + i).text("")
    }

}
else if (squares[1]==squares[5] && squares[5] == squares[9] && squares[5] != ""){
    alert("You Win")
    for (var i = 1 ; i<10;i++){
        $("#item" + i).text("")
    }

}
else if (squares[3]==squares[5] && squares[5] == squares[7] && squares[5] != ""){
    alert("You Win")
    for (var i = 1 ; i<10;i++){
        $("#item" + i).text("")
    }
    

}

}
function game(id){
    var element = $("#"+id)
    if (turn === "x" && element.text() == ""){
        element.text("x")
        turn = "o"
        title.text("o")
    }
    else if (turn === "o" && element.text() == ""){
        element.text("o")
        turn = "x"
        title.text("x")
    }
    setTimeout(() => {
        winnner()
    }, 1000);
   
}