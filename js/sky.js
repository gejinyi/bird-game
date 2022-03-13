let skyDom = $('.sky');
let skyWidth = parseFloat(skyDom.css('width'))
let skyHeight = parseFloat(skyDom.css('height')) 


class Sky extends Rectangle {
    constructor() {
        super(skyWidth, skyHeight, 0, 0, -50, 0, skyDom);
    }
   recover () {
    if (this.left <= -this.width / 2){
        this.left = 0;
    }
   }
} 

// let sky = new Sky();
// setInterval(() => {
//     sky.move(0.2)
// }, 100);