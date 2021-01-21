import { Component, OnInit } from '@angular/core'
import { FormGroup, PatternValidator } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'


@Component({
  selector: 'app-cambio-empresa',
  templateUrl: './cambio-empresa.component.html',
  styleUrls: ['./cambio-empresa.component.scss']
})
export class CambioEmpresaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'FORMULARIO de Cambio de Empresa'
  form = new FormGroup({})
  options: FormlyFormOptions = {};
  model: any = {
  }

  fields: FormlyFieldConfig[] = [
    {
      className: 'datos-personales',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Datos personales:</h2></div>',
    },


    // datos personales

    {
      key: 'Datos personales',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar datos personales',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Apellido y Nombre',
            type: 'input',
            templateOptions: {
              label: 'Apellido y Nombre:',
              required: true,
              placeholder: 'Ingrese su/s nombre/s y apellido/s'
            }
          },
          
          {
            key: 'DNI',
            type: 'input',
            templateOptions: {
              label: 'DNI',
              pattern: '\\d{7,8}',
              placeholder: 'Ingrese un DNI',
            }
          },
          {
            key: 'CUIL',
            type: 'input',
            templateOptions: {
              label: 'CUIL',
              pattern: '\\d{11}',
              required: true,
              placeholder: 'Ingrese un CUIL',
            }
          },
          {
            key: 'Motivo del cambio de empresa',
            type: 'select',
            templateOptions:{
              label: 'Motivo del cambio de empresa',
              options:[
                {value: 'La empresa me despidió o me dió de baja', label: 'La empresa me despidió o me dió de baja'},
                {value: 'La empresa cerró o quebró', label: 'La empresa cerró o quebró'},
                {value: 'Presenté una denuncia por problemas laborales', label: 'Presenté una denuncia por problemas laborales'},
                {value: 'Otro motivo', label: 'Otro motivo'},
              ]
            }
          },
          {
            key: 'Otro motivo',
            type: 'input',
            templateOptions:{
              label: 'En caso de haber seleccionado otro motivo llenar este campo',
              placeholder: 'Ingrese un motivo'
            }
          }
        ],
      },
    },

    //--------------------------------------------------------------------------------------------------------

    {
      className: 'datos-a-completar-por-la-empresa',
      template: '<div><h2>Datos que debe completar la Nueva Empresa</h2></div>',
    },

    {
      key: 'Datos de la Nueva Empresa',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar datos de la Nueva Empresa',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'CUIT',
            type: 'input',
            templateOptions: {
              label: 'CUIT',
              pattern: '\\d{11}',
              placeholder: 'Ingrese un CUIT'
            }
          },
          {
            key: 'Razón social',
            type: 'input',
            templateOptions: {
              label: 'Razón social',
              placeholder: 'Ingrese una razón social'
            }
          },
          {
            key: 'Domicilio Legal',
            type: 'input',
            templateOptions: {
              label: 'Domicilio Legal',
              placeholder: 'Ingrese un Domicilio Legal'
            }
          },
          {
            key: 'Número del domicilio legal',
            type: 'input',
            templateOptions: {
              label: 'Número',
              pattern: '\\d{1,25}',
              placeholder: 'Ingrese una número'
            }
          },
          {
            key: 'Localidad del domicilio legal',
            type: 'input',
            templateOptions:{
              label: 'Localidad',
              placeholder: 'Ingrese una localidad'
            }
          },
          {
            key: 'CP del domicilio legal',
            type: 'input',
            templateOptions: {
              label: 'C.P.',
              placeholder: 'Ingrese un Código Postal',
              pattern: '\\d{1,25}'
            }
          },
          {
            key: 'Email del domicilio legal',
            type: 'input',
            templateOptions: {
              label: 'E-mail',
              placeholder: 'Ingrese un e-mail',
            }
          },
          {
            key: 'Teléfono del domicilio legal',
            type: 'input',
            templateOptions: {
              label: 'Teléfono',
              placeholder: 'Ingrese un Teléfono',
              pattern: '\\d{1,25}'
            }
          },
          {
            key: 'Celular del domicilio legal',
            type: 'input',
            templateOptions: {
              label: 'Celular',
              placeholder: 'Ingrese un Celular',
              pattern: '\\d{1,25}'
            }
          },
          {
            className: 'domicilio-practica',
            template: '<div><h3>Domicilio de práctica</h3></div>'
          },
          {
            key: 'Responsable de contacto',
            type: 'input',
            templateOptions: {
              label: 'Responsable de contacto',
              placeholder: 'Ingresar un responsable de contacto'
            }
          },
          {
            key: 'Localidad del domicilio de práctica',
            type: 'input',
            templateOptions:{
              label: 'Localidad',
              placeholder: 'Ingrese una localidad'
            }
          },
          {
            key: 'CP del domicilio de práctica',
            type: 'input',
            templateOptions: {
              label: 'C.P.',
              placeholder: 'Ingrese un Código Postal',
              pattern: '\\d{1,25}'
            }
          },
          {
            key: 'Email del domicilio de práctica',
            type: 'input',
            templateOptions: {
              label: 'E-mail',
              placeholder: 'Ingrese un e-mail',
            }
          },
          {
            key: 'Teléfono del domicilio de práctica',
            type: 'input',
            templateOptions: {
              label: 'Teléfono',
              placeholder: 'Ingrese un Teléfono',
              pattern: '\\d{1,25}'
            }
          },
          {
            key: 'Celular del domicilio de práctica',
            type: 'input',
            templateOptions: {
              label: 'Celular',
              placeholder: 'Ingrese un Celular',
              pattern: '\\d{1,25}'
            }
          },
          {
            key: 'Cantidad de empleados permanentes a la fecha del tramite',
            type: 'input',
            templateOptions: {
              label: 'Cantidad de empleados permanentes a la fecha del tramite',
              placeholder: 'Ingrese una cantidad',
              pattern: '\\d{1,25}'
            }
          }
        ]
      }
    },

    //--------------------------------------------------------------------------------------------------------

    {
      className: 'datos-dias-y-horarios',
      template: '<div><h2>Días y horarios de práctica</h2></div>',
    },
    {
      className: 'info-completar',
      template: '<div><h3>(Completar 20 horas semanales)</h3></div>'
    },
    {
      key: 'Días y Horarios',
      type: 'repeat',
      templateOptions: {
        addText: 'Ingresar Un día y un horario',
      },
      fieldArray: {
        fieldGroup: [  
          {
            key: 'Día',
            type: 'select',
            templateOptions:{
              label: 'Día',
              options:[
                {value: 'Lunes', label: 'Lunes'},
                {value: 'Martes', label: 'Martes'},
                {value: 'Miércoles', label: 'Miércoles'},
                {value: 'Jueves', label: 'Jueves'},
                {value: 'Viernes', label: 'Viernes'},
                {value: 'Sábado', label: 'Sábado'},
                {value: 'Domingo', label: 'Domingo'},
              ],
              required: true
            }
          },
          {
            key: 'Turno',
            type: 'select',
            templateOptions:{
              label: 'Turno',
              options:[
                {value: 'Mañana', label: 'Mañana'},
                {value: 'Tarde', label: 'Tarde'},
              ],
              required: true
            },
          },
          {
            key: 'Horario desde',
            type: 'input',
            templateOptions:{
              label: 'Horario desde (hs)',
              placeholder: 'Ingrese una hora',
              pattern: '\\d{1,2}',
              required: true
            }
          },
          {
            key: 'Horario hasta',
            type: 'input',
            templateOptions:{
              label: 'Horario hasta (hs)',
              placeholder: 'Ingrese una hora',
              pattern: '\\d{1,2}',
              required: true
            }
          }
        ]
      },
    },
    //-------------------------------------------------------------------------------------------------------

    {
      className: 'modalidad-de-incorporación',
      template: '<div><h2>Modalidad en la que va a incorporar al beneficiario</h2></div>',
    },
    {
      key: 'Modalidad',
      type: 'select',
      templateOptions: {
        label: 'Modalidad',
        options:[
          {label: 'Entrenamiento', value: 'Entrenamiento'},
          {label: 'CTI (Se formaliza un Contrato laboral por Tiempo Indeterminado con el beneficiario reglamentado por la legislación vigente)', value: 'CTI (Se formaliza un Contrato laboral por Tiempo Indeterminado con el beneficiario reglamentado por la legislación vigente)'}
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
      nombreArchivo = this.model['Datos personales'][0]['CUIL'];
      doc.output('dataurlnewwindow');
      doc.save('InscripcionCapacitador' + nombreArchivo + '.pdf');


    } else (error) => {
      console.error('error:', error);
    }
    if (this.form.invalid) {
      alert("falta completar datos")
    }
  }
}
