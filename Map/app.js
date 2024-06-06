const arr = [1,2,3,4,5,6,7,8,9,10];

const doubles = arr.map(function (num) {
    return num * 2
});

const objs = [
    {
        title: 'コナン',
        kind: 'サスペンス'
    },
    {
        title: 'キャプテン翼',
        kind: 'スポーツ'
    }
];

const titles = objs.map(function(obj) {
    return obj.title;
});

