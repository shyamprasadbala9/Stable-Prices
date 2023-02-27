/** 
	In a given array 
	-find the element of highest occurrence.
	-length of the shortest subarray that shares the degree
	
	N.B  - If the degree of two element is same and also if the length of subarray is same,
		   function  returns which occurs later in the array.
		   
	Time complexity for below function : O(n)  because it must iterate through all elements once 
	
**/


function degreeOfArray(arr){
	let resultIdx = sourceArray.reduce((pre, curr, currentIndex, array) => { 
		dd[curr] = dd[curr] ? dd[curr] + 1 : 1;
		if(pre==-1) {
			return currentIndex;
		}
		
	  
	  let previous = array[pre] ; 
	  let lowestIdxOfPrev =  array.indexOf(previous);  //gives first occurrence of the given element
	  let lowestIdxOfCurr= array.indexOf(curr);   //gives first occurrence of the given element
	  
	  //If the degree of two elements is same, working out the shortest length.
	  if(dd[curr]===dd[previous]) {
		 let currLength = array.lastIndexOf(curr)- lowestIdxOfCurr;
		 let prevLength = array.lastIndexOf(previous)- lowestIdxOfPrev;
		 return currLength<=prevLength ? lowestIdxOfCurr : lowestIdxOfPrev;   
	  }else 
		  return dd[curr]>dd[previous]? lowestIdxOfCurr:lowestIdxOfPrev;
	},-1)
	
	let lastIndex = sourceArray.lastIndexOf(sourceArray[resultIdx]) + 1;//Adding 1 because the index is zero based.
	let minSizeSubArray = lastIndex - resultIdx; 
	
	console.log("Element %s has highest occurrence(degree) with minimum length at %s", sourceArray[resultIdx],minSizeSubArray);
	console.log("Total occurrence(degree) of %s are %s",sourceArray[resultIdx], dd[sourceArray[resultIdx]]);
    console.log("Selected Subarray ", sourceArray.slice(resultIdx,lastIndex));
	
	return minSizeSubArray;
}

//StartUp-Main
const sourceArray = [1,1, 2,1,3, 4, 4,4,2,2,3,3];
let dd = {};
let minSizeSubArray = degreeOfArray(sourceArray);
console.log("Minimum size of subarray that have degree equal to degree of array is %s",minSizeSubArray);