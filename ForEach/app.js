const arr = [1,2,3,4,5,6,7,8,9,10];

function print(num) {
    console.log(num);
}

print(arr[0]);

// arr.forEach(print);

arr.forEach(function(num) {
    console.log(num)
});

const objs = [
    {
        title: 'コナン',
        kind: 'アニメ'
    },
    {
        title: 'サッカー',
        kind: 'スポーツ'
    }
];

objs.forEach(function(obj) {
    console.log(`${obj.title}は${obj.kind}です`);
});