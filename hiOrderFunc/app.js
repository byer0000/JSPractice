function callTwice(func) {
    func();
    func();
}

let rollDie = function () {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll)
}

callTwice(rollDie);

// 関数から関数を返す
function makeRandomFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log('おめでとう');
        }
    } else {
        return function() {
            alert('ウィルス感染');
            alert('閉じないで');
        }
    }
}

function BetweenFunc(min, max) {
    return function(num){
        return num >= min && num <= max;
    }
}

function isBetween(num) {
    return num >= 50 && num <= 100;
}

function isBetween(num) {
    return num >= 1 && num <= 10;
}

const myMath = {
    PI: 3.14,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    },
    // 省略記法
    circle(num) {
        return num * this.PI;
    }
}