import { Component, OnInit } from '@angular/core'
import { FormGroup, PatternValidator } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'

@Component({
  selector: 'app-baja-benficiarios',
  templateUrl: './baja-benficiarios.component.html',
  styleUrls: ['./baja-benficiarios.component.scss']
})
export class BajaBenficiariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'AVISO BAJA BENEFICIARIOS'
  form = new FormGroup({})
  options: FormlyFormOptions = {};
  model: any = {
  }

  fields: FormlyFieldConfig[] = [
    {
      className: 'datos-empresa',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Datos de la empresa solicitante:</h2></div>',
    },


    // datos personales

    {
      key: 'Datos de la empresa solicitante',
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
          {
            key: 'Teléfono',
            type: 'input',
            templateOptions: {
              label: 'Teléfono',
              pattern: '\\d{1,25}',
              placeholder: 'Ingrese un Teléfono fijo'
            }
          },
          {
            key: 'Celular',
            type: 'input',
            templateOptions: {
              label: 'Celular',
              pattern: '\\d{1,25}',
              placeholder: 'Ingrese un Teléfono celular'
            }
          }
        ]
      },
    },

    //--------------------------------------------------------------------------------------------------------

    {
      className: 'datos-del-beneficiario',
      template: '<div><h2>Datos del beneficiario que se quiere dar de baja</h2></div>',
    },

    {
      key: 'Datos del beneficiario que se quiere dar de baja',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar beneficiario',
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
            key: 'DNI',
            type: 'input',
            templateOptions: {
              label: 'DNI',
              required: true,
              pattern: '\\d{7,8}',
              placeholder: 'Ingrese un DNI'
            }
          },
          {
            key: 'CUIL',
            type: 'input',
            templateOptions: {
              label: 'CUIL',
              required: true,
              pattern: '\\d{11}'
            }
          },
        ]
      }
    },

    //--------------------------------------------------------------------------------------------------------

    {
      className: 'motivo-baja',
      template: '<div><h2>Motivo del pedido de baja</h2></div>'
    },

    {
      key: 'Motivo del pedido de baja',
      type: 'no repeat',
      templateOptions:{
        addText: 'Ingresar motivo'
      },
      fieldArray:{
        fieldGroup:[
          {
            key: 'Motivo',
            type: 'select',
            templateOptions:{
              label: 'Motivo',
              options: [
                {value: 'El beneficiario nunca se presentó al Entrenamiento', label: 'El beneficiario nunca se presentó al Entrenamiento'},
                {value: 'La empresa cerró o quebró', label: 'La empresa cerró o quebró'},
                {value: 'El beneficiario dejó de asistir o presentó la renuncia', label: 'El beneficiario dejó de asistir o presentó la renuncia'},
                {value: 'Otro motivo (Especificar la casual)', label: 'Otro motivo (Especificar la casual)'}
              ]
            }
          },
          {
            key: 'Otro motivo',
            type: 'input',
            templateOptions: {
              label: 'Otro motivo',
              placeholder: 'Ingrese un motivo en caso de haber seleccionado "Otro motivo"'
            }
          }
        ]
      }
    },

    //--------------------------------------------------------------------------------------------------------

    {
      className: 'fecha-baja',
      template: '<div><h2>Fecha en que se produjo la baja</h2></div>'
    },
    {
      key: 'Estado',
      type: 'select',
      templateOptions: {
        label: 'Estado',
        options:[
          {value: 'Desde la fecha (especificar abajo)', label: 'Desde la fecha (especificar abajo)'},
          {value: 'Nunca se presentó a trabajar', label: 'Nunca se presentó a trabajar'}
        ]
      }
    },
    {
      key: 'Fecha desde',
      type: 'input',
      templateOptions:{
        label: 'Fecha desde',
        type: 'date'
      }
    },
    {
      className: 'info-fecha',
      template: '<div><b>Se debe indicar la fecha en que se produjo la baja por parte de la empresa, o desde que el beneficiario dejó de asistir el entrenamiento.</b></div>'
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
      nombreArchivo = this.model['Datos de la empresa solicitante'][0]['CUIT'];
      doc.output('dataurlnewwindow');
      doc.save('AvisoBajaBeneficiario' + nombreArchivo + '.pdf');


    } else (error) => {
      console.error('error:', error);
    }
    if (this.form.invalid) {
      alert("falta completar datos")
    }
  }
}
