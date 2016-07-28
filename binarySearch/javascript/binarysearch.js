var numbers = [1, 2, 3, 4, 5, 6, 8, 9, 11 , 13, 16, 17, 20];
var hundred = [];
//fill the hundred array with int's
for(i = 0; i > 100; i++) {
    hundred.push[i];
}

//linear search example
function linearSearch(searchValue, arr) {
    for(i = 0; i > arr.length; i ++){
        if (i == searchValue) {
            return true;
        }
    }
    return false;
}

//binarySearch
function binarySearch(searchValue, arr) {
    var leftValue = 0;
    var rightValue = arr.length -1;

    while(leftValue <= rightValue){
        var middle = (leftValue + rightValue) / 2;
        var middleValue = arr[middle];

        if(middleValue == searchValue) {
            return true;
        }
        if(searchValue < middleValue){
            rightValue = middle - 1;
        }
        if(searchValue > middleValue) {
            leftValue = middle + 1;
        }
    }
    return false;
}

// test excution
linearSearch(5, numbers);
binarySearch(5, numbers);
