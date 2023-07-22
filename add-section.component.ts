import { Component ,EventEmitter,Output,ViewChild} from '@angular/core';
import { Acco } from 'src/share/model/acc.model';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent {
  @ViewChild('addHeader') addHeader : any;
  @ViewChild('addContent') addContent : any;
  @Output() tellToParent = new EventEmitter()
  
  addSection(){
    //console.log('click trigger',this.addHeader.nativeElement.value)
  
    const newAcco = new Acco(
      this.addHeader.nativeElement.value,
      this.addContent.nativeElement.value)
    // console.log(newAcco)
    this.tellToParent.emit(newAcco)
  }
}
