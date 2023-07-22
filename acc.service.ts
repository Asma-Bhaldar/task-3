import { Acco } from "../model/acc.model";
import { BehaviorSubject } from "rxjs";

export class AccoService{
    private  accoList = [
        new Acco('section1','Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas quisquam doloremque neque maxime voluptate.'),
        new Acco('section2','Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas quisquam doloremque neque maxime voluptate.'),
        new Acco('section3','Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas quisquam doloremque neque maxime voluptate.'),
         
      ] ;
      accordianSubject = new BehaviorSubject(this.accoList.slice())

    getaccoList()  {
        return this.accoList.slice()
    }

    addNewAccord(newAccord : any){
        this.accoList.push(newAccord);
        this.accordianSubject.next(this.accoList.slice())   
    }
}


  