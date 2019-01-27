var colorPick = document.getElementById('colorPicker');
var colorValue = colorPicker.value;
// Choose color for the first time
colorPick.addEventListener('change', function(e) {
    colorValue = e.target.value;
});

var table = document.getElementById('table');
var documentBody = document.body;
var tableBody = document.createElement('tbody');
var height = document.getElementById('inputHeight');
var weight = document.getElementById('inputWidth');

// make a grid depend on the height and weight input by create one <tr> each time
//  will for loop run  and append <td>s to <tr> #nestedloop and add EventListener
// to <td>s to choose the color of each element and finally append <tr>s to the body of the table and
// append the body to table then append the table to document body.
function makeGrid() {
    for (var r = 1; r <= height.value; r++) {
        var tr = document.createElement('tr');
        for (var y = 1; y <= weight.value; y++) {
            var td = document.createElement('td');
            tr.appendChild(td);
            tr.addEventListener('click', function(e) {
                e.target.style.backgroundColor = colorValue;
            });
        }
        tableBody.appendChild(tr);
    }
    table.appendChild(tableBody);
    documentBody.appendChild(table);
};
// for the second submit
var create = false;
const submitB = document.getElementById('sizePicker');
submitB.addEventListener('submit', function(e) {
    e.preventDefault();

    if (create === false) {
        makeGrid();
        create = true;
    } else {
        for (var x = table.rows.length - 1; x >= 0; x--) {
            table.deleteRow(x);
        }
        makeGrid();
    }
});
