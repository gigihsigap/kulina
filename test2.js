function countingValleys(n, s) {
    let totalValley = 0
    let height = 0
    let flag = ''
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'U':
                height++
                break
            case 'D':
                height--
                break
        }
        if (height === 0) {
            if (flag === 'valley') {
                totalValley++
                flag = ''
            }
        } else if (height > 0) {
            flag = 'mountain'
        } else if (height < 0) {
            flag = 'valley'
        }
    }
    return totalValley
}

console.log(countingValleys(8,['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U'])) // 1
console.log(countingValleys(8,['D', 'D', 'U', 'U', 'U', 'U', 'D', 'D'])) // 1