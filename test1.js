// 1. Iterate array with for loop
// 2. If there is a new sock type, add new key to object data
// 3. Increment sock quantity by 1
// 4. Iterate object data with for in loop
// 5. If there is 2 quantity of a sock type, proceed to (6)
// 6. Reduce sock quantity to 0 / remove the key entirely
// 7. Add sock pair count by 1

// You don't need the first parameter at all!

function pairSocks(total, arr) {
    let numOfPair = 0
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        let type = String(arr[i])
        if (obj[type] === undefined) {
            obj[type] = 0
        }

        for (key in obj) {
            if (type === key) {
                obj[key]++
            }

            if (obj[key] === 2) {
                obj[key] = 0
                numOfPair++
            }
        }
    }

    return numOfPair
}

console.log(pairSocks(7, [1, 2, 1, 2, 1, 3, 2])) // 2
console.log(pairSocks(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) // 2