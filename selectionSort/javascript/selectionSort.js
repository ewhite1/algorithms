var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
 var length = array.length;
 for(var i = 0; i < length; i++){
     var min = indexOfMinimum(array,i);
    swap(array, i, min);
 }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

var array2 = [34, 67, 22, 45, 2, 16, 4, 10, 13, -6, 0];
selectionSort(array2);
println("Array after sorting:  " + array2);
