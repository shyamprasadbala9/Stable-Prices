/** 
	From given data,
		-get the maximum profit at the year end 
	Time Complexity for below function : O(2^n) 
	This  is the upperbound limit.
	
**/

/**
Eliminate the stocks which would be in loss 
& also one which cannot be invested because of higher price
**/
function getProfitableStocks(currentValue, futureValue,savings){
	let profitableStocks =[];
	currentValue.forEach((val, idx) => {
			//Remove those whose current value is greater than savings.
			if(val<=savings){
				let diff = futureValue[idx]- val;
				//only include profitable stock
				if(diff>0){
					let obj = {
							currentValue : val, 
							futureValue :futureValue[idx], 
							difference:diff
						}
						profitableStocks.push(obj);
				}
			}
    });
    return profitableStocks;
}

function selectStock(saving, currentValue, futureValue){
	var maxProfit=0;
	let profitableStocks = getProfitableStocks(currentValue,futureValue,saving);
	

	function getMaximumProfit(current, savings, accumalator){
		var sum;
		accumalator = accumalator || [];
		
		//sum of current value 
		sum = accumalator.reduce(function (a, b) {
			return a + b.currentValue;
		}, 0);
		
		//make sure only combinations with value less than savings is considered
		if (sum <= savings) { 
			var temp  = accumalator.reduce(function (a, b) {
				return a + b.difference;
			}, 0);
			//replace profit with temp, if it is greater.
			if(temp > maxProfit){
				maxProfit=temp;
				console.log("accumalator - %s", accumalator.map(u => u.difference).join("+"));  
			}
		} else { 
			//if sum is already greater than savings, move to next.
			return;
		}
		
		for (var i = 0; i < current.length; i++) {
			n = current[i];
			remaining = current.slice(i + 1);
			getMaximumProfit(remaining, savings, accumalator.concat([n])); //recursive call
		}
	}	
	getMaximumProfit(profitableStocks,saving);
	console.log("Maximum profit earned at the year end  %s",maxProfit);
	return maxProfit;
}

//StartUp-Main
let A=[175, 133, 109, 210, 97];
let B=[200, 125, 128, 228,133];
let savings =250;
let maximumProfit = selectStock(savings,A,B);