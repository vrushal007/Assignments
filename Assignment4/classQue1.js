let nums = [21, 15, 28, 59, 47, 8, 9]
let ans = nums.filter((i) => i * i < 100 || i * i > 200)
    .reduce((total, curr) => {
        return total + curr;
    }, 0)
console.log(ans)