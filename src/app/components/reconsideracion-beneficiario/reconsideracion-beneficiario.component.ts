import { Component, OnInit } from '@angular/core'
import { FormGroup, PatternValidator } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'

@Component({
  selector: 'app-reconsideracion-beneficiario',
  templateUrl: './reconsideracion-beneficiario.component.html',
  styleUrls: ['./reconsideracion-beneficiario.component.scss']
})
export class ReconsideracionBeneficiarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'FORMULARIO DE RECONSIDERACIÓN PARA QUIENES NO RESULTARON BENEFICIARIOS'
  form = new FormGroup({})
  options: FormlyFormOptions = {};
  model: any = {
  }

  fields: FormlyFieldConfig[] = [
    {
      className: 'datos-postulante',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Datos del postulante sorteado:</h2></div>',
    },


    // datos personales

    {
      key: 'Datos del postulante',
      type: 'no repeat',
      templateOptions: {
        required: true,
        addText: 'Ingresar datos del postulante',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Apellido/s',
            type: 'input',
            templateOptions: {
              required: true,
              label: 'Apellido/s',
              placeholder: 'Ingrese su/s Apellido/s'
            }
          },
          {
            key: 'Nombre/s',
            type: 'input',
            templateOptions: {
              required: true,
              label: 'Nombre/s',
              placeholder: 'Ingrese su/s Nombres'
            }
          },
          {
            key: 'DNI',
            type: 'input',
            templateOptions: {
              label: 'DNI',
              required: true,
              placeholder: 'Ingrese un DNI',
              pattern: '\\d{7,8}'
            }
          },
          {
            key: '¿Posee alguna discapacidad?',
            type: 'select',
            templateOptions: {
              label: '¿Posee alguna discapacidad?',
              options: [
                {value: 'Si', label: 'Si'},
                {value: 'No', label: 'No'},
              ]
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
            key: 'Celular',
            type: 'input',
            templateOptions: {
              label: 'Celular',
              pattern: '\\d{1,25}',
              placeholder: 'Ingrese un Celular',
            }
          },
          {
            key: 'Estado final en el que quedó después del sorteo',
            type: 'select',
            templateOptions: {
              label: 'Estado final en el que quedó después del sorteo',
              options: [
                {value: 'Empresa no apta', label: 'Empresa no apta'},
                {value: 'Rechazo formal', label: 'Rechazo formal'},
                {value: 'Otros. Especificar', label: 'Otros. Especificar'}
              ]
            }
          },
          {
            key: 'Otros',
            type: 'input',
            templateOptions: {
              label: 'Otros',
              placeholder: 'Ingrese otro estado final',
            }
          }
        ]
      },
    },

    //--------------------------------------------------------------------------------------------------------

    {
      className: 'datos-fundamento',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Describa el fundamento de su solicitud:</h2></div>',
    },


    // datos fundamento

    {
      key: 'Descripción fundamento de la solicitud',
      type: 'textarea',
      templateOptions: {
        label: 'Descripción fundamento de la solicitud',
        rows: 10,
        placeholder: 'Ingrese una descripción',
        required: true
      }
    },

    {
      className: 'info-anexo',
      template: '<p><b>Si anexa alguna documentación debe informarlo por CIDI</p></b>'
    },
  
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
