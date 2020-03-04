import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Passeiomodel } from '../model/passeiomodel';
import { PasseiomodelService } from '../service/service-passeio/passeiomodel-service.service';



@Component({
  selector: 'app-passeiomodel-form',
  templateUrl: './passeiomodel-form.component.html',
  styleUrls: ['./passeiomodel-form.component.css']
})

export class PasseiomodelFormComponent {

  passeiomodel: Passeiomodel;

  constructor(private route: ActivatedRoute, private router: Router, private passeiomodelService: PasseiomodelService) {
    this.passeiomodel = new Passeiomodel();
  }


  onSubmit() {
    this.passeiomodelService.save(this.passeiomodel).subscribe(result => this.gotoUserList());
  }


  gotoUserList() {
    this.router.navigate(['/passeios']);
  }

}




 


 

 

 
 

