class dustBin {
    constructor(boxX,boxY) {
      this.left = Bodies.rectangle(boxX,boxY,24,100,{isStatic:true});
      this.base = Bodies.rectangle(boxX+110,boxY+40,200,20,{isStatic:true});
      this.right = Bodies.rectangle(boxX+200,boxY,100,20,{isStatic:true});
  
      World.add(world, this.left);
      World.add(world, this.base);
      World.add(world, this.right);
  
    }
    display(){
      var apos =this.left.position;
      var bpos =this.base.position;
      var cpos =this.right.position;
  
      push()
      fill('red')
      rect(apos.x,apos.y,20,100)
      rect(bpos.x,bpos.y,200,20)
      rect(cpos.x,cpos.y,20,100)
      pop();
    }
  }