import Shape from './Shape';

class Rect  extends Shape{
  constructor(color,width, height) {
    super(color)
    this.width= width;
    this.height= height;
    
  }
  
  draw() {
    console.log(this.color,this.width,this.height)
  }
}
 //export default Rect
