let landDom = $('.land');
let landHeight =parseFloat( landDom.css('height'));
let landWidth =parseFloat(landDom.css('width')) ;
let landTop =parseFloat(landDom.css('top')) ;


class Land extends Rectangle {
    constructor(speed) {
        super(landWidth, landHeight, 0, landTop, speed, 0, landDom);
    }
    recover () {
        if (this.left <= -this.width / 2){
            this.left = 0;
        }
       }
}