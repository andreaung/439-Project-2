/*draw-stuff.js
Team AS - Andrea Ung andreaung@csu.fullerton.edu; Sarah Nuno saritanu@csu.fullerton.edu
File Description: Created a Crule150() function inorder to go through the grid and 
				  check three cells (previous, current, next) at a time if they match any of the rules.
		          At the end of the function the gathered information is than displayed.
*/

function Rule150() {

	//intitializing a 41x20 grid
    var colSize = 20;
    var rowSize = 41;

	//intitializing a new array
    var cells = new Array();
	
	//string to hold the rules
    var CellRule150 = new String();
	
	//rule #150
	var ruleSet =[1,0,0,1,0,1,1,0];
	
	//creating various elements
    var canvas = document.getElementById("canvas");
    var rlt = document.getElementById("result");
    var tbl = document.createElement("table");
    var tbody = document.createElement("tbody");
    var dcF = document.createDocumentFragment();

	//how think each cell will appear
	var cellSize = 10;
	
	//initilazes all the cells to 0 at the start
    for(var col = 0; col < colSize; col++) {
        cells[col] = new Array((colSize+1)); 
        for(var row = 0; row < (rowSize+1); row++) {
            cells[col][row] = "0";
        }
    }
    
	//turns the top row's center cell on
    var centerSeed = Math.floor((rowSize+2)/2);
    cells[0][centerSeed] = "1";
 
	
	//checking for rule 150
        for(var col = 1; col < colSize; col++) {
            for (var row = 1; row < rowSize; row++) {
				//string of left, middle, and right cell
                CellRule150 = "" + cells[col-1][row-1] + cells[col-1][row] + cells[col-1][row+1];
				
				var case1 = "111";
				var case2 = "110";
				var case3 = "101";
				var case4 = "100";
				var case5 = "011";
				var case6 = "010";
				var case7 = "001";
				var case8 = "000";
				
				//switch statement to check the rules
                switch(CellRule150) {
					//satisfies the '111' pattern
                    case case1: 
						cells[col][row] = ruleSet[0];
						break;
					//satisfies the '110' pattern
                    case case2: 
						cells[col][row] = ruleSet[1];
						break;
					//satisfies the '101' pattern
                    case case3: 
						cells[col][row] = ruleSet[2];
						break;
					//satisfies the '100' pattern
                    case case4: 
						cells[col][row] = ruleSet[3];
						break;
					//satisfies the '011' pattern
                    case case5: 
						cells[col][row] = ruleSet[4];
						break;
					//satisfies the '010' pattern
                    case case6: 
						cells[col][row] = ruleSet[5];
						break;
					//satisfies the '001' pattern
                    case case7: 
						cells[col][row] = ruleSet[6];
						break;
					//satisfies the '000' pattern
                    case case8: 
						cells[col][row] = ruleSet[7];
						break;
                }
            }
        }
		
		//creating a new array called cells that saves the state of each cell
        for(var col = 0; col < colSize; col++) {
            cells[col].pop();
            cells[col].shift();
        }

        if(rlt != undefined) {
            canvas.removeChild(rlt);
        }

        tbl.id = "result";
        tbl.style.border = 0 + "px";
        tbl.style.padding = 0 + "px";
        tbl.style.borderCollapse = "collapse";
        tbl.style.width  = rowSize * cellSize + "px";
        tbl.style.height = colSize * cellSize + "px";

	//displaying the rule 150
        for(var col = 0; col < colSize; col++) {
            var tr = document.createElement("tr");
            tr.style.padding = 0 + "px";
            for(var row = 0; row < (rowSize-1); row++) {
                var singleCell = document.createElement("td");
                singleCell.style.padding = 0 + "px";
                singleCell.style.width  = cellSize + "px";
                singleCell.style.height = cellSize + "px";
                singleCell.style.backgroundColor = (cells[col][row] == "0") ? "white" : "black";
                tr.appendChild(singleCell);
            }
            tbody.appendChild(tr);
        }
        tbl.appendChild(tbody);
        dcF.appendChild(tbl);
		//updates the cell to the canvas grid
        canvas.appendChild(dcF);
}

//created TM function to try to highlight each cell to display tape head
function TM()
{
	
	//intitializing a 41x20 grid
	var rowSize = 41;
    var colSize = 20;
	
	var cells = new Array();
    var TMachine = new String();
	var ruleSet = [1,0,0,1,0,1,1,0];
	
	var canvas2 = document.getElementById("canvas");
    var result2 = document.getElementById("result");
    var table2 = document.createElement("table");
    var tbody2 = document.createElement("tbody");
    var dcFlg2 = document.createDocumentFragment();

	//how think each cell will appear
	var cellSize = 10;

	//initilazes all the cells to 0 at the start
    for(var col = 0; col < colSize; col++) {
        cells[col] = new Array((colSize+1)); 
        for(var row = 0; row < (rowSize+1); row++) {
            cells[col][row] = "0";
        }
    }
    
    //turns the top r's center cell on
    var centerSeed = Math.floor((rowSize+2)/2);
    cells[0][centerSeed] = "1";
	
	//checking for rule 150

        for(var col = 1; col < colSize; col++) {
            for (var row = 1; row < rowSize; row++) {
				//var t2 = document.createElement("t2");
                //t2.style.backgroundcolor = (cells[col][r] == "0") ? "yellow" : "yellow";
				//canvas2.appendChild(t2);
				
                TMachine = "" + cells[col-1][row-1] + cells[col-1][row] + cells[col-1][row+1];
                
				var case1 = "111";
				var case2 = "110";
				var case3 = "101";
				var case4 = "100";
				var case5 = "011";
				var case6 = "010";
				var case7 = "001";
				var case8 = "000";
				
				//switch statement to check the rules
                switch(TMachine) {
					//satisfies the '111' pattern
                    case case1: 
						cells[col][row] = ruleSet[0];
						break;
					//satisfies the '110' pattern
                    case case2: 
						cells[col][row] = ruleSet[1];
						break;
					//satisfies the '101' pattern
                    case case3: 
						cells[col][row] = ruleSet[2];
						break;
					//satisfies the '100' pattern
                    case case4: 
						cells[col][row] = ruleSet[3];
						break;
					//satisfies the '011' pattern
                    case case5: 
						cells[col][row] = ruleSet[4];
						break;
					//satisfies the '010' pattern
                    case case6: 
						cells[col][row] = ruleSet[5];
						break;
					//satisfies the '001' pattern
                    case case7: 
						cells[col][row] = ruleSet[6];
						break;
					//satisfies the '000' pattern
                    case case8: 
						cells[col][row] = ruleSet[7];
						break;
                }
            }
        }
		
		//creating a new array called cells that saves the state of each cell
        for(var col = 0; col < colSize; col++) {
            cells[col].pop();
            cells[col].shift();
        }

        //if(result2 != undefined) {
          //  canvas2.removeChild(result2);
        //}

        table2.id = "result";
        table2.style.border = 0 + "px";
        table2.style.padding = 0 + "px";
        table2.style.bordercollapse = "collapse";
        table2.style.width  = rowSize * cellSize + "px";
        table2.style.height = colSize * cellSize + "px";
	
	for(var col = 0; col < colSize; col++) {
            var tr2 = document.createElement("tr");
            tr2.style.padding = 0 + "px";
            for(var row = 0; row < (rowSize-1); row++) 
			{
                var cell2 = document.createElement("td");
                cell2.style.padding = 0 + "px";
                cell2.style.width  = cellSize + "px";
                cell2.style.height = cellSize + "px";
                cell2.style.backgroundcolor = (cells[col][row] == "0") ? "yellow" : "yellow";
                tr2.appendChild(cell2);
            }
            tbody2.appendChild(tr2);
        }
        table2.appendChild(tbody2);
        dcFlg2.appendChild(table2);
        canvas2.appendChild(dcFlg2);
}






