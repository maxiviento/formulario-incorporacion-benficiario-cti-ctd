import { Component, OnInit } from '@angular/core'
import { FormGroup, PatternValidator } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'


@Component({
  selector: 'app-capacitacion-pil',
  templateUrl: './capacitacion-pil.component.html',
  styleUrls: ['./capacitacion-pil.component.scss'],
})


export class CapacitacionPilComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'FORMULARIO INSCRIPCION DE EMPLEADOS A CURSOS PIL'
  form = new FormGroup({})
  options: FormlyFormOptions = {};
  model: any = {
  }

  fields: FormlyFieldConfig[] = [
    {
      className: 'datos-empresa',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Datos de la empresa:</h2></div>',
    },


    // datos personales

    {
      key: 'Datos de la empresa',
      type: 'no repeat',
      templateOptions: {
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
      className: 'datos-del-los-empleados',
      template: '<div><h2>Datos del/los empleados</h2></div>',
    },

    {
      key: 'Datos del/los empleados',
      type: 'repeat',
      templateOptions: {
        addText: 'Agregar empleado',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Apellido y Nombre',
            type: 'input',
            templateOptions: {
              label: 'Apellido y Nombre',
              placeholder: 'Ingrese un apellido y un nombre'
            }
          },
          {
            key: 'CUIL',
            type: 'input',
            templateOptions: {
              label: 'CUIL',
              pattern: '\\d{11}',
              placeholder: 'Ingrese un CUIL del empleado'
            }
          },
          {
            key: 'Capacitación',
            type: 'select',
            templateOptions: {
              label: 'Capacitacion',
              options:[
                {value: 'cap1', label: 'cap2'},
                {value: 'cap2', label: 'cap2'},
                
              ]
            }
          },
        ]
      }
    },

    //--------------------------------------------------------------------------------------------------------

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
      nombreArchivo = this.model['Datos de la empresa'][0]['CUIT'];
      doc.output('dataurlnewwindow');
      doc.save('IncorporacionBeneficiario' + nombreArchivo + '.pdf');


    } else (error) => {
      console.error('error:', error);
    }
    if (this.form.invalid) {
      alert("falta completar datos")
    }
  }
}
