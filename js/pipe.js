
class Pipe extends Rectangle {
    constructor(height, top, speed, dom) {
        super(52, height, parseFloat( $('.game').css('width')), top, speed, 0, dom);
        this.useless = false;
    }
    recover () {
        if (this.left < -this.width) {
            this.useless = true;
            this.dom.remove();
        }
    }
   
}

class PipePair  {
    constructor (speed){
        this.distance = 150;
        this.minHeight = 80; 
        this.maxHeihgt = maxSpace - this.distance - this.minHeight;
        this.hUp = this.getHeight( this.minHeight,this.maxHeihgt);
        this.hDown = maxSpace-this.distance- this.hUp;
        this.divup = document.createElement('div');
        this.divup.className = 'pipe pipeUp';
        this.divdown = document.createElement('div');
        this.divdown.className = 'pipe pipeDown';
        this.UpPipe = new Pipe(this.hUp,0,speed,$(this.divup));
        this.DownPipe = new Pipe(this.hDown,maxSpace-this.hDown,speed,$(this.divdown));
        $('.game').append(this.divup);
        $('.game').append(this.divdown)
    }
    getHeight (min,max) {
        return Math.floor(Math.random()*(max-min)+min);
    }
    move (t) {
        this.UpPipe.move(t);
        this.DownPipe.move(t);
       
    }


}

class createPair {
    constructor(speed) {
        this.pairs = [];
        this.timer = null;
        this.speed = speed;
        this.tick = 1500;
        this.create();

    }
    create() {
        if (this.timer){
            return
        }else{
            this.timer = setInterval(() => {
                this.pairs.push( new PipePair(this.speed));
                for (let i = 0; i < this.pairs.length;i++){
                    if(this.pairs[i].UpPipe.useless){
                        this.pairs.splice(i, 1);
                        i--;                  
                    }
                }
            }, this.tick);
        }
    }
    stop () {
        clearInterval(this.timer);
        this.timer = null;
    }
}