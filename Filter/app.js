const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

arr.filter(num => {
    return num % 2 === 0;
});

const objs = [
    {
        title: 'コナン',
        kind: 'サスペンス',
        score: 90
    },
    {
        title: 'キャプテン翼',
        kind: 'スポーツ',
        score: 50
    }
];

// mapと組み合わせて、80以上のタイトルを持ってくることができる
const goodTitle = objs.filter(obj => obj.score >= 80).map(obj => obj.title);
