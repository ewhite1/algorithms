//: Playground - noun: a place where people can play

import UIKit
import Foundation

//search thru a array of integers, first doing linear search

let numbers = [1, 2, 3, 4, 5, 6, 8, 9, 11 , 13, 16, 17, 20]
//a larger array example
var hundred = [Int]()
for i in 1...100 {
    hundred.append(i)
}
// end of large array

//linear search example
func linearSearch(searchValue: Int, array: [Int]) -> Bool {
    for num in array {
        if num == searchValue {
            return true
        }
    }
    return false
}



/// binary search, the manual way
func binarySearch(searchValue: Int, array: [Int]) -> Bool {
    var leftValue = 0
    var rightValue = array.count - 1
    
    while leftValue <= rightValue {
    
        let middle = (leftValue + rightValue) / 2
        let middleValue = array[middle]
        //this is to show how the indexing is working. Its not needed to run the code
        print("middleValue: \(middleValue), leftValue: \(leftValue), rightValue: \(rightValue), [\(array[leftValue]), \(array[rightValue])]")

        if middleValue == searchValue {
            return true
        }
        if searchValue < middleValue {
            rightValue = middle - 1
        }
        if searchValue > middle {
            leftValue = middle + 1
        }
    }
    
    return false
}


//the execution

//linear
print(linearSearch(5, array: numbers))
//binary manual
print(binarySearch(54, array: hundred))

