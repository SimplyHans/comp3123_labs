
// #1
function capWords(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
console.log(capWords("the quick brown fox"))

// #2
function max(...nums){
    let maxValue = nums[0];
    for (let i = 1; i <= maxValue; i++) {
        if (nums[i] > maxValue) {
            maxValue = nums[i];
        }
    }
    return maxValue;
}
console.log(max (1,0,1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));

// #3
function right(str) {
    const lastThree = str.slice(-3);
    const rest = str.slice(0, -3);
    return lastThree + rest;
}
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

// #4
function angle_Type(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Angle out of range";
    }
}
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));

// #5
function array_max_sum(arr, k) {
    if (k > arr.length) {
        return null;
    }
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    let maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        if (windowSum > maxSum) {
            maxSum = windowSum;
        }
    }
    return maxSum;
}
console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));
