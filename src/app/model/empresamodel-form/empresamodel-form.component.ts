import { Empresamodel } from './../empresamodel';
import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresamodelService } from 'src/app/service/empresamodel.service';






@Component({
  selector: 'app-empresamodel-form',
  templateUrl: './empresamodel-form.component.html',
  styleUrls: ['./empresamodel-form.component.css']
})

export class EmpresamodelFormComponent {

  empresamodel: Empresamodel;

  constructor(private route: ActivatedRoute, private router: Router, private empresamodelService: EmpresamodelService) {
    this.empresamodel = new Empresamodel();
  }


  onSubmit() {
    this.empresamodelService.save(this.empresamodel).subscribe(result => this.gotoUserList());
  }


  gotoUserList() {
    this.router.navigate(['/empresas']);
  }

}

