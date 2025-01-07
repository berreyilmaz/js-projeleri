class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Bir Tanecik Aşkım", "Gülçin Ergül","askgulcinergul.jpg","askgulcinergul.mp3"),    
    new Music("Aşk Sakızı", "Hepsi","asksakizi.jpeg","asksakizi.mp3"),    
    new Music("Baş Harfi Ben", "Kenan Doğulu","basharfkenandogulu.jpeg","basharfkenandogulu.mp3")    
];
