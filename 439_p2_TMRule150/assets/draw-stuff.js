/*draw-stuff.js
Team AS - Andrea Ung andreaung@csu.fullerton.edu; Sarah Nuno saritanu@csu.fullerton.edu
File Description: created a eca() function inorder to go through the grid and check three cells (previous, current, next)
at a time if they match any of the rules. At the end of the function the gathered information is than displayed.
*/

function eca() {

	//intitializing a 41x20 grid
    var colSize = 20;
    var rowSize = 41;

    var cells = new Array();
    var ECA_rule = new String();
	var ruleArray =[1,0,0,1,0,1,1,0];

    var canvas = document.getElementById("canvas");
    var result = document.getElementById("result");
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    var dcFlg = document.createDocumentFragment();

	var cellSize = 10;

    for(var col = 0; col < colSize; col++) {
        cells[col] = new Array((colSize+1)); // ((colSize-1) + 2)
        for(var row = 0; row < (rowSize+1); row++) {
            cells[col][row] = "0";
        }
    }
    
        var seedPosition = Math.floor((rowSize+2)/2);
        cells[0][seedPosition] = "1";
 
	
	//checking for rule 150

        for(var col = 1; col < colSize; col++) {
            for (var row = 1; row < rowSize; row++) {
                ECA_rule = "" + cells[col-1][row-1] + cells[col-1][row] + cells[col-1][row+1];
                switch(ECA_rule) {
                    case "111": cells[col][row] = ruleArray[0];break;
                    case "110": cells[col][row] = ruleArray[1];break;
                    case "101": cells[col][row] = ruleArray[2];break;
                    case "100": cells[col][row] = ruleArray[3];break;
                    case "011": cells[col][row] = ruleArray[4];break;
                    case "010": cells[col][row] = ruleArray[5];break;
                    case "001": cells[col][row] = ruleArray[6];break;
                    case "000": cells[col][row] = ruleArray[7];break;
                    default   : console.log("Default.");break;
                }
            }
        }
		
		//creating a new array called cells that saves the state of each cell
        for(var col = 0; col < colSize; col++) {
            cells[col].pop();
            cells[col].shift();
        }

        if(result != undefined) {
            canvas.removeChild(result);
        }

        table.id = "result";
        table.style.border = 0 + "px";
        table.style.padding = 0 + "px";
        table.style.borderCollapse = "collapse";
        table.style.width  = rowSize * cellSize + "px";
        table.style.height = colSize * cellSize + "px";

	//displaying the rule 150
        for(var col = 0; col < colSize; col++) {
            var tr = document.createElement("tr");
            tr.style.padding = 0 + "px";
            for(var row = 0; row < (rowSize-1); row++) {
                var cell = document.createElement("td");
                cell.style.padding = 0 + "px";
                cell.style.width  = cellSize + "px";
                cell.style.height = cellSize + "px";
                cell.style.backgroundColor = (cells[col][row] == "0") ? "white" : "black";
                tr.appendChild(cell);
            }
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        dcFlg.appendChild(table);
        canvas.appendChild(dcFlg);

}


