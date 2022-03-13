const gameDom = $('.game');
const gameWidth = parseFloat( gameDom.css('width'));

class Game {
    constructor () {
        this.sky = new Sky();
        this.land = new Land(-100);
        this.bird = new Bird();
        this.pipepair = new createPair(-100);
        this.tick = 16; //移动时间间隔，毫秒
        this.timer = null;
        this.over = null;
        this.hash = false;
        this.regEvent();
    }
    isHash (rec1,rec2) {
        let rec1X = rec1.left + rec1.width/2;
        let rec1Y = rec1.top + rec1.height/2;
        let rec2X = rec2.left + rec2.width/2;
        let rec2Y = rec2.top + rec2.height/2;
        let xdis = Math.abs(rec1X - rec2X);
        let ydis = Math.abs(rec1Y - rec2Y);
        if (xdis <= (rec1.width + rec2.width)/2 && ydis <= (rec1.height + rec2.height)/2) {
            this.hash = true;
        } 
    }
    regEvent () {
        window.onkeydown = (e) => {
            
            if (e.key === 'Enter') {
                if (this.timer) {
                    this.stopGame()
                }else{
                    this.startGame()
                }
            }else if (e.key === ' ') {
                this.bird.flayup()
            }
        }
    }
    startGame () {
        if (this.over) {
            window.location.reload();
        }
        if (this.timer) {
            return;
        }else{
            this.timer = setInterval(() => {
                this.bird.move(this.tick/1000);
                this.sky.move(this.tick/1000);
                this.land.move(this.tick/1000);
                this.pipepair.pairs.forEach(pair => {
                    pair.move(this.tick/1000);
                });
                this.isover();
            },this.tick)
        }
        
    }
    stopGame () {
        clearInterval(this.timer);
        this.bird.stopWing()
        this.timer = null;
    }
    isover () {     
        for (let i =0;i < this.pipepair.pairs.length;i++) {
            let pair =this.pipepair.pairs[i];
            this.isHash(this.bird,pair.UpPipe);
            this.isHash(this.bird,pair.DownPipe);
        }
        this.isHash(this.bird,this.land);
        if (this.hash) {
            this.stopGame();
            this.over = true;
        }
    }
}

let g =new Game();
