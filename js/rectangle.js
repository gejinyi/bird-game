// 表白
// 按顺序向十个小姐姐表白,回复时间随机
// let result = [];
// let biaobai = () => {
//     let godess = null;
//     let agree = false;
//     for ( let i = 1;i <= 20; i++) {
//         let p = Math.random();
//         setTimeout(()=>{
//             if(p < 0.8){
//                 console.log(`小姐姐${i}拒绝了瑞瑞的表白`);
//                 agree = false;
//             }else{
//                 console.log(`小姐姐${i}同意了瑞瑞的表白`);
//                 agree = true;
//                if(godess) {
//                 console.log(`瑞瑞解释：刚才朋友用我手机乱发的`)
//                }else{
//                    godess = `小姐姐${i}`;
//                }
//             }
//             result.push(agree);
//         },Math.floor(Math.random()*3000))
       
//     }
// }
// biaobai();

class Rectangle {
    constructor (width, height, left, top, xSpeed, ySpeed, dom) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.top =  top;
        this.dom = dom;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.render();
    }
    //右边，下边为正
    move (t) {
        let xLength = this.xSpeed * t;
        let yLength = this.ySpeed * t;
        this.left = this.left + xLength;
        this.top = this.top + yLength;
        if (this.recover) {
            this.recover()
        }
        this.render();
    }
    render () {
        this.dom.css('width',`${this.width}px`)
        this.dom.css('height',`${this.height}px`);
        this.dom.css('left',`${this.left}px`);
        this.dom.css('top',`${this.top}px`);

    }
}

