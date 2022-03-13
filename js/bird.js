const birdDom = $('.bird');
const birdHeight =parseFloat( birdDom.css('height'));
const birdWidth =parseFloat(birdDom.css('width')) ;
const birdTop =parseFloat(birdDom.css('top')) ;
const birdLeft =parseFloat(birdDom.css('left')) ;
const maxSpace = parseFloat($('.game').css('height')) - parseFloat($('.land').css('height'));
class Bird extends Rectangle {
    constructor(){
        super(birdWidth,birdHeight,birdLeft,birdTop,0,0,birdDom);
        this.g = 800;
        this.yLength = 0;
        this.wingStatu = 0;
        this.timer = 0;
        this.last = 0;
        this.render();
    }
    move (t) {
         this.ySpeed = this.ySpeed + this.g * t;
        this.yLength = this.ySpeed * t;
        this.top = this.top + this.yLength;
        if (this.recover) {
            this.recover()
        }
        this.startWing();
    }
    flayup () {
        this.ySpeed = -340;
    }
    recover () {
        if (this.top >= maxSpace - this.height) {
            this.top = maxSpace - this.height;
            // this.stopWing()
        }else if (this.top < 0) {
            this.top = 0;
        }
    }
    startWing () {
       if (this.timer) {
           return
       }else{
        this.timer = setInterval(() => {
            this.last = this.wingStatu;
            this.wingStatu++;
            if (this.wingStatu == 3) {
                this.wingStatu = 0;
            }
            this.render();
        }, 200)
       }
    }
    stopWing () {
        clearInterval(this.timer);
        this.render();
        this.timer = null;
    }
    render () {
        super.render();
        this.dom.removeClass(`swing${this.last}`);
        this.dom.addClass(`swing${this.wingStatu}`)
    }
}
