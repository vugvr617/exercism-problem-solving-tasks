// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

 export class Size {
    constructor(width = 80,height = 60){
    this.width = width;
    this.height = height;
    }
  }
  
   Size.prototype.resize = function(newWidth, newHeight){
    this.width = newWidth;
    this.height = newHeight;
  }
  
  export class Position {
    constructor(x = 0,y = 0){
      this.x = x;
      this.y = y;
    }
  }
  
  Position.prototype.move = function(newX, newY){
    this.x = newX;
    this.y = newY;
  }
  
  export class ProgramWindow {
    screenSize = new Size(800,600);
    size = new Size();
    position = new Position();
  
    move(newPosition){
    const maxX = this.screenSize.width - this.size.width;
      const maxY = this.screenSize.height - this.size.height;
      
      const newX = Math.max(0, Math.min(newPosition.x, maxX))
      const newY = Math.max(0, Math.min(newPosition.y, maxY))
      this.position.move(newX, newY);
    }
  }
  
  ProgramWindow.prototype.resize = function (newSize) {
      const maxWidth = this.screenSize.width - this.position.x
      const maxHeight = this.screenSize.height - this.position.y
      const newWidth = Math.max(1, Math.min(newSize.width, maxWidth))
      const newHeight = Math.max(1, Math.min(newSize.height, maxHeight))
      this.size.resize(newWidth, newHeight)
  }
  
  export const changeWindow = (window) => {
    window.resize(new Size(400, 300));
    window.move(new Position(100, 150));
    return window;
  };