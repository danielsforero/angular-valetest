import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component,OnInit } from '@angular/core';
import { LookAndFeelModel } from 'src/core/models/urlToProgram.model';
import { LookAndFeelRepository } from 'src/core/repositories/lookAndFeel.repository';
import { applyTheme } from 'src/styleLoad';

@Component({
  selector: 'app-form-color',
  templateUrl: './form-color.component.html',
  styleUrls: ['./form-color.component.scss']
})
export class FormColorComponent implements OnInit {
  cols: number = 2;
  formData: any = {
    primaryColor: '',
    secundaryColor: '',
    tertiaryColor: ''
  };

  constructor(private breakpointObserver: BreakpointObserver, private lookAndFeelRepository: LookAndFeelRepository,) {}
  ngOnInit(): void {

    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.Handset]  || result.breakpoints[Breakpoints.Tablet]) {
          this.cols = 1;
        }
        if (result.breakpoints[Breakpoints.Web]) {
          this.cols = 2;
        }
      }
    });
    

    // Obtener datos del sessionStorage
    const storedData = sessionStorage.getItem('formData');
    if (storedData) {
      console.log('si hay storedData')
      console.log(storedData)
      this.formData = JSON.parse(storedData);
    }
    this.lookAndFeelRepository.getLookAndFeel().subscribe(data =>  {
      this.formData.primaryColor = data.lookAndFeel.primaryColor;
      this.formData.secondaryColor = data.lookAndFeel.secondaryColor;
      this.formData.tertiaryColor = data.lookAndFeel.tertiaryColor;
      console.log('rta es:');
      console.log(data)
      // applyTheme(data.lookAndFeel);
    });
    
  }
  saveData() {
    console.log(this.formData)
    // Convertir los datos del formulario a JSON
    const formDataJson = JSON.stringify(this.formData);
    console.log(formDataJson)
    
    // Guardar los datos en sessionStorage
    sessionStorage.setItem('formData', formDataJson);
    const modelo : LookAndFeelModel ={
      lookAndFeelId: 1,
      imageBackgroundLogin:'' ,
      primaryColor: this.formData.primaryColor,
      secondaryColor: this.formData.secundaryColor,
      tertiaryColor: this.formData.tertiaryColor,
      backgroudColor: '',
      fontFamilyName: '',
    } 
    applyTheme(modelo);

  }

  discart (){
    this.formData.primaryColor = '';
    this.formData.secundaryColor = '';
    this.formData.tertiaryColor = '';
  }
}
