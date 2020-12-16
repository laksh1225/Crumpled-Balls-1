class Paper {
constructor(x,y,r){
    var options = {
        'restitution' : 0.8,
        'friction' : 0.3,
        'density' : 1.2
    }
    this.body = Bodies.circle(this.x, this.y, this.r/2 , options);

    World.add( world , this.body)
}

    display(){
    var paper_pos = this.body.position;
    
    push();
    translate(paper_pos.x, paper_pos.y);
    rectMode(CENTER);
    fill(255);
    ellipse(0, 0, this.r, this.r);
    pop();
    
}
}