import { Component, OnInit } from '@angular/core'
import { FormGroup, PatternValidator } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'

@Component({
  selector: 'app-renuncia-programa',
  templateUrl: './renuncia-programa.component.html',
  styleUrls: ['./renuncia-programa.component.scss']
})
export class RenunciaProgramaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'RENUNCIA AL PROGRAMA'
  form = new FormGroup({})
  options: FormlyFormOptions = {};
  model: any = {
  }

  fields: FormlyFieldConfig[] = [
    {
      className: 'datos-beneficiario',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Datos del beneficiario que renuncia al programa:</h2></div>',
    },


    // datos personales

    {
      key: 'Datos del beneficiario',
      type: 'no repeat',
      templateOptions: {
        required: true,
        addText: 'Ingresar datos del beneficiario',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Apellido y Nombre',
            type: 'input',
            templateOptions: {
              label: 'Apellido y Nombre',
              placeholder: 'Ingrese su Apellido y Nombre'
            }
          },
          {
            key: 'CUIL',
            type: 'input',
            templateOptions: {
              label: 'CUIL',
              pattern: '\\d{11}',
              required: true,
              placeholder: 'Ingrese un CUIT'
            }
          },
          {
            key: 'DNI',
            type: 'input',
            templateOptions: {
              label: 'DNI',
              placeholder: 'Ingrese un DNI',
              pattern: '\\d{7,8}'
            }
          },
          {
            key: 'Teléfono',
            type: 'input',
            templateOptions: {
              label: 'Teléfono',
              pattern: '\\d{1,25}',
              placeholder: 'Ingrese un teléfono',
            }
          },
          {
            key: 'E-mail',
            type: 'input',
            templateOptions: {
              label: 'E-mail',
              placeholder: 'Ingrese un e-mail',
            }
          }
        ]
      },
    },

    //--------------------------------------------------------------------------------------------------------

    {
      className: 'datos-empresa',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Datos de la empresa en la que realiza el entrenamiento:</h2></div>',
    },


    // datos empresa

    {
      key: 'Datos de la empresa',
      type: 'no repeat',
      templateOptions: {
        required: true,
        addText: 'Ingresar datos de la empresa',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'CUIT',
            type: 'input',
            templateOptions: {
              label: 'CUIT',
              pattern: '\\d{11}',
              required: true,
              placeholder: 'Ingrese un CUIT'
            }
          },
          
          {
            key: 'Razón social',
            type: 'input',
            templateOptions: {
              label: 'Razón social',
              required: true,
              placeholder: 'Ingrese una razón social',
            }
          },
        ]
      },
    },

    //--------------------------------------------------------------------------------------------------------
    {
      className: 'datos-motivo',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Motivo de la renuncia</h2></div>'
    },
    {
      key: 'Motivo',
      type: 'select',
      templateOptions: {
        label: 'Motivo',
        required: true,
        options: [
          {value: 'La empresa cerró o quebró', label: 'La empresa cerró o quebró'},
          {value: 'Presenta Denuncia o Descargo', label: 'Presenta Denuncia o Descargo'},
          {value: 'Estudios', label: 'Estudios'},
          {value: 'Otro motivo', label: 'Otro motivo (detallar abajo)'},
        ]
      }
    },
    {
      key: 'Otro motivo',
      type: 'input',
      templateOptions: {
        label: 'Otro motivo',
        placeholder: 'Ingrese un motivo'
      }
    },
    {
      key: 'Fecha en que dejó de asistir a la empresa',
      type: 'input',
      templateOptions:{
        type: 'date',
        label: 'Fecha en que dejó de asistir a la empresa',
      }
    }

  ]



  createPdf() {

    if (this.form.valid) {
      let modelo = Object.entries(this.model);
      //
      var doc = new jsPDF('p', 'mm', 'a4');


      doc.setFont('helvetica')

      let m = 5;
      let y = 0;
      let x = 15;
      let i = 0; //
      //var arr:JSON[];

      for (let seccion of modelo) {

        let arr: any = seccion[1];

        y = y + 6;
        doc.setFontSize(16);
        doc.setTextColor(45);
        doc.text(seccion[0], x, m + y); //nombre seccion
        doc.line(x, m + y + 1, x + 180, m + y + 1);



        for (var j = 0; j < arr.length; j++) {

          //console.log(reg);
          var res = [];
          var z = 0;
          for (var clave in arr[j]) {
            if (y > 240 && x === 110) {
              doc.addPage();
              m = 5;
              y = 0;
              x = 15;
            }
            i++;
            if (i % 2 != 0) { x = 15; y = y + 12; }
            else { x = 110; }
            doc.setFontSize(10);
            doc.setDrawColor(100);

            res.push([clave, arr[j][clave]]);
            var registro: String[] = [clave, 'algo quee no se paso a string'];
            try {
              registro = res[z]; //paso los valores a string
            } catch (e) {
              console.log(e)
            }
            z++;
            doc.text(registro[1], x, m + y); //valor
            doc.line(x, m + y + 1, x + 90, m + y + 1); // linea horizontal
            doc.setFontSize(8);
            doc.setDrawColor(60);
            doc.text(clave, x, m + y + 5); //key
          }
        }
        i = 0;
        x = 15;
        y = y + 12;
      }
      let nombreArchivo = '00000000000';
      nombreArchivo = this.model['Datos del beneficiario'][0]['CUIL'];
      doc.output('dataurlnewwindow');
      doc.save('RenunciaPrograma' + nombreArchivo + '.pdf');


    } else (error) => {
      console.error('error:', error);
    }
    if (this.form.invalid) {
      alert("falta completar datos")
    }
  }
}
