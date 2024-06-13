const anime = {
    title: 'コナン',
    janre: 'ミステリー',
    introduction: function() {
        return `${this.title} ${this.janre}`;
    },
    // dilay: function() {
    //     setTimeout(function() {
    //         console.log(this);
    //         console.log(this.introduction());
    //     }, 2000);
    // }
    dilay: function() {
        setTimeout(() => {
            console.log(this.introduction());
        }, 2000);
    }
}



// アロー関数と他のthisは違う