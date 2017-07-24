function add(){
    var inputValue = document.getElementById('inputValue').value;
    var newLi = document.createElement('LI');
    var tagInput = document.createTextNode(inputValue);
    newLi.appendChild(tagInput);
    document.getElementById('list').appendChild(newLi);
}

function remove(){
   document.getElementById("list").innerHTML = ""
}
