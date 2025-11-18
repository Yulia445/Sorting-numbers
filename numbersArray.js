let numArr = []
for(let i = 0 ; i < 10; i++) {
    numArr[i] = Math.round(Math.random() * 100 - 50)
}
console.log("Оригінал:", numArr)

function sorting(arr) {
    for(let j = 0; j < arr.length - 1; j++) {
        for(let i = j + 1; i < arr.length; i++) {
            if(arr[j] > arr[i]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
}

sorting(numArr)
console.log("Відсортований:", numArr)
