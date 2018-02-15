import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title= ' Details'
  subtitle = 'Data';
  selectedlist ="Selected Data";
  dl = [
  {id:1, name:"A" },
  {id:2, name:"B" },
  {id:3, name:"C" },
  {id:4, name:"D" },
  {id:5, name:"E" },
  
  ];
  
    selectedItems:any=[];
     selectlist(dl:any){
	  console.log(dl);
	  this.selectedItems.push(dl);
	  
  }
  
  removelist(dl:any){
    var b = (this.selectedItems.indexOf(dl));
    if (b > -1) {
      this.selectedItems.splice(b, 1);
  }

  //  this.selectedItems.splice(this.selectedItems.index(b ,1));
    //this.selectedItems.splice(this.selectedItems.indexOf());
    //this.selectedItems.findIndex(this.selectedItems);
    //this.selectedItems.splice(this.selectedItems.indexOf(dl));
	  //this.selectedItems.splice(this.selectedItems.indexOf(dl, 1));
	  
  }
}
