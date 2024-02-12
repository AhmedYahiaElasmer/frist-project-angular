import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  counter=0;
  imgSrc = ["assets/images/1.jpg", "assets/images/2.jpg", "assets/images/3.jpg", "assets/images/4.jpg", "assets/images/5.jpg", "assets/images/6.jpg"];
  interval:any;
  next(){
    this.counter=++this.counter;
    if(this.counter>=5){
      this.counter=5;
      console.log(this.counter);
      
    }

    
    
  }

  prev(){
    this.counter=--this.counter;
    if(this.counter<=0){
      this.counter=0;
      console.log(this.counter);
      
    }
    
  }

  slideshow(){
    this.interval=setInterval(()=>{
    
    this.counter=++this.counter;
    console.log(this.counter);
    if(this.counter>5){
      this.counter=0;
     
      
    }
  },1000)
    
  }
  stop(){
    
      
      clearInterval(this.interval);
      
      
  }

}
