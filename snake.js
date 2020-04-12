
class Snake{
    constructor(){
      this.body = [];
      this.body[0] = createVector(0,0);
      this.xspeed = 1;
      this.yspeed = 0;
    }
    
    update(){
        for(let i =0;i< this.body.length;i++){
            if(this.body[i].x>60){
                this.body[i].x = 0;
              }
              else if(this.body[i].y>60){
                this.body[i].y = 0;
              }
              else if(this.body[i].x<0){
                  this.body[i].x = 60;
              }
              else if(this.body[i].y<0){
                this.body[i].y = 60;
            }
        }

    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xspeed;
    head.y += this.yspeed;
    this.body.push(head);

    //   this.body[0].x += this.xspeed;
    //   this.body[0].y += this.yspeed;
    }

    eat(){
        if(dist(this.body[0].x,this.body[0].y,food.x,food.y)<0.5){
            let head = this.body[this.body.length-1].copy();
            this.body.push(head);
            newLocation();
        }
    }

    gameStatus(){
        let head = createVector(this.body[0].x,this.body[0].y);
        for(let i = 3;i< this.body.length-1;i++){
            if(dist(this.body[i].x,this.body[i].y,head.x,head.y)==1){
                this.body.length = 0;
                this.body[0] = createVector(0,0);
            }
        }
    }
    change(x,y){
        this.xspeed = x;
        this.yspeed = y;
    }
    
    show()
    {
        for(let i = 0;i < this.body.length;i++){
            fill(255);
            rect(this.body[i].x,this.body[i].y,1,1);
        }

    }
  }