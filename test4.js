class Switch {
    constructor() {
        this.value = false
    }
}

function runSwitch(sequence, repeats) {
    let arr = [...new Array(sequence)].map(()=> new Switch)
    let totalTrue = 0

    for (let i = 1; i <= repeats; i++) {
        for (let j = i - 1; j < arr.length; j = j + i) {
            if (arr[j].value) {
                arr[j].value = false
                totalTrue--
            } else {
                arr[j].value = true
                totalTrue++
            }
            
        }
    }
    return totalTrue, arr
}

console.log(runSwitch(5, 0)) // 0
console.log(runSwitch(5, 1)) // 5
console.log(runSwitch(5, 2)) // 3
console.log(runSwitch(5, 3)) // 2
console.log(runSwitch(5, 4)) // 3
console.log(runSwitch(5, 5)) // 2
console.log(runSwitch(100, 100)) // 10