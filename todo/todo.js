let input = prompt('モードを入力してください(new, list, delete, q)')
const list = ['起きる', '寝る'];

// list,new,delete,quitでモードを作る
while (input !== 'q') {
    if (input == 'list') {
        console.log('一覧表示');
        for (let i = 0; i < list.length; i++) {
            console.log(`${i}:${list[i]}`);
        }
    }

    if (input == 'new') {
        let add = prompt('todoを追加');
        list.push(add);
    }

    if (input == 'delete') {
        let del = parseInt(prompt('削除するindexを選択'));
        console.log(list.length);
        if (del >= list.length - 1) {
            console.log('対象は存在しません');
            del = parseInt(prompt('入力しなおしてください'));
        }

        if (!Number.isNaN(del)) {
            list.splice(del, 1);
            console.log(`${del}を削除しました`)
        } else {
            del = parseInt(prompt('数値を入力してください'));
        }
    }
    input = prompt('次は何をする？');
}

console.log('終了');

