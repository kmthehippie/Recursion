import {array, fibs, callFibs} from "./fibs.js"

const merge = (leftArr, rightArr) => {
    const output = [];
    let leftInd = 0;
    let rightInd = 0;

    while(leftInd < leftArr.length && rightInd < rightArr.length){
        let leftEl = leftArr[leftInd];
        let rightEl = rightArr[rightInd];

        if(leftEl < rightEl) {
            output.push(leftEl)
            leftInd++
        } else {
            output.push(rightEl)
            rightInd++
        }

    }
    return [...output,...leftArr.slice(leftInd),...rightArr.slice(rightInd)]

}

const mergeSort = arr => {
    if (arr.length <= 1){
        return arr
    }
    const middleInd = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, middleInd)
    const rightArr = arr.slice(middleInd)

    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    )
}

const sample = [1,3,5,23,57,90,32,5,3,4,654,23,465]

console.log(mergeSort(sample))
callFibs(8)
console.log(array)