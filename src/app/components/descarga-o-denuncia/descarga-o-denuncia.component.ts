import { Component, OnInit } from '@angular/core'
import { FormGroup, PatternValidator } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'

@Component({
  selector: 'app-descarga-o-denuncia',
  templateUrl: './descarga-o-denuncia.component.html',
  styleUrls: ['./descarga-o-denuncia.component.scss']
})
export class DescargaODenunciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'FORMULARIO DE DESCARGOS Y/O DENUNCIA'
  form = new FormGroup({})
  options: FormlyFormOptions = {};
  model: any = {
  }

  fields: FormlyFieldConfig[] = [
    {
      className: 'datos-solicitante',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Datos para identificar su solicitud:</h2></div>',
    },


    // datos personales

    {
      key: 'Datos del solicitante',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar datos del solicitante',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Apellido/s',
            type: 'input',
            templateOptions: {
              label: 'Apellido/s',
              required: true,
              placeholder: 'Ingrese su/s apellido/s'
            }
          },
          {
            key: 'Nombre/s',
            type: 'input',
            templateOptions: {
              label: 'Nombre/s',
              required: true,
              placeholder: 'Ingrese su/s nombre/s'
            }
          },
          {
            key: 'DNI',
            type: 'input',
            templateOptions: {
              label: 'DNI',
              required: true,
              pattern: '\\d{7,8}',
              placeholder: 'Ingrese un DNI',
            }
          },
          {
            key: 'Teléfono',
            type: 'input',
            templateOptions: {
              label: 'Teléfono',
              placeholder: 'Ingrese un teléfono',
              pattern: '\\d{1,25}'
            }
          }
        ]
      },
    },

    //--------------------------------------------------------------------------------------------------------

    {
      className: 'descripcion-fundamento',
      template: '<div><h2>Describa el fundamento de su solicitud</h2></div>',
    },

    {
      key: 'Descripción del fundamento de la solicitud',
      type: 'no repeat',
      templateOptions: {
        addText: 'Agregar descripción',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Descripción',
            type: 'textarea',
            templateOptions: {
              label: 'Descripción',
              placeholder: 'Ingrese una descripción',
              rows: 10,
              required: true
            }
          },
          {
            className: 'info-documentacion',
            template: '<p><b>Si anexa alguna documentación informar a travez de CIDI</b></p>'
          }
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
      nombreArchivo = this.model['Datos del solicitante'][0]['DNI'];
      doc.output('dataurlnewwindow');
      doc.save('InformeDescargaODenuncia' + nombreArchivo + '.pdf');


    } else (error) => {
      console.error('error:', error);
    }
    if (this.form.invalid) {
      alert("falta completar datos")
    }
  }
}
