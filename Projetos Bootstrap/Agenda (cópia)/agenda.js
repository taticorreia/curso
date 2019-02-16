
function myFunction() {
    var cell1 = document.getElementById('rg').value;
    var cell2 = document.getElementById('nome').value;
    var cell3 = document.getElementById('hora').value;



    


    var table = document.getElementById('mytable');
    var row = table.insertRow(0);
    var celula1 = row.insertCell(0);
    var celula2 = row.insertCell(1);
    var celula3 = row.insertCell(2);
    


    celula1.innerHTML = cell1;
    celula2.innerHTML = cell2;
    celula3.innerHTML = cell3;
    celula4.innerHTML = '<span>karaio</span>'

    
}




