var liste = document.getElementsByClassName("liste");
        
for (let item of liste){
    console.log(item.innerHTML);
}

var pRouge = window.document.getElementById("rouge");
console.log(pRouge.innerHTML);


var paragraphes = document.getElementsByTagName("p");
for (let paragraphe of paragraphes)
    console.log(paragraphe.innerHTML);

function change(){
    var pRouge = window.document.getElementById("rouge");
    // Ajoute ou enleve une classe a l element
    pRouge.classList.toggle("blue");
}

function add(){
    let a = parseInt(document.getElementById("nbr1").value);
    let b = parseInt(document.getElementById("nbr2").value);
    let result = a + b;
    document.getElementById("result").innerHTML = result;
}