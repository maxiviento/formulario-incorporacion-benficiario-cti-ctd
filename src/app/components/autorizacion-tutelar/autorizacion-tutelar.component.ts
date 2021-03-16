import { Component, OnInit } from '@angular/core'
import { FormGroup, PatternValidator } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'

@Component({
  selector: 'app-autorizacion-tutelar',
  templateUrl: './autorizacion-tutelar.component.html',
  styleUrls: ['./autorizacion-tutelar.component.scss']
})
export class AutorizacionTutelarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'AUTORIZACIÓN DEL PADRE, MADRE O TUTOR DE MENORES DE 18 AÑOS PARA DESARROLLAR TAREAS DE CAPACITACIÓN O PRÁCTICA LABORAL'
  form = new FormGroup({})
  options: FormlyFormOptions = {};
  model: any = {
  }

  fields: FormlyFieldConfig[] = [

    {
      key: 'Aclaración',
      type: 'no repeat',
      templateOptions: {
        required: true,
        addText: 'Ingresar aclaración',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Lugar',
            type: 'input',
            templateOptions: {
              label: 'Lugar',
              required: true,
              placeholder: 'Ingrese un lugar'
            }
          },
          {
            key: 'Fecha',
            type: 'input',
            templateOptions: {
              label: 'Fecha',
              required: true,
              type: 'date',
            }
          },
          {
            key: 'En el día de la fecha comparece propia voluntad',
            type: 'input',
            templateOptions: {
              label: 'En el día de la fecha comparece propia voluntad',
              placeholder: 'Ingrese el nombre del Padre, Madre o Tutor',
              required: true
            }
          },
          {
            key: 'DNI Padre, Madre o Tutor',
            type: 'input',
            templateOptions: {
              label: 'DNI Padre, Madre o Tutor',
              required: true,
              placeholder: 'Ingrese el DNI del Padre, Madre o Tutor',
              pattern: '\\d{7,8}'
            }
          },
          {
            key: 'quien en este acto AUTORIZA a su hijo/tutorado',
            type: 'input',
            templateOptions:{
              label: 'quien en este acto AUTORIZA a su hijo/tutorado',
              placeholder: 'Ingrese el nombre de su hijo/tutorado',
              required: true,
            }
          },
          {
            key: 'DNI hijo/tutorado',
            type: 'input',
            templateOptions: {
              label: 'DNI hijo/tutorado',
              required: true,
              placeholder: 'Ingrese el DNI del hijo/tutorado',
              pattern: '\\d{7,8}'
            }
          },
          {
            className: 'info-aclaracion',
            template: 'a participar de Programa PIL del Gobierno de la Provincia de Córdoba.<p>Leído, firma por ante mi previa lectura y ratificación. CONSTE.</p>'
          }
        ]
      },
    },

    //--------------------------------------------------------------------------------------------------------

    {
      className: 'datos-del-beneficiario',
      template: '<div><h1>FORMULARIO PARA DESIGNAR APODERADO A PADRE, MADRE O TUTOR DE MENORES DE 18 AÑOS PARA EL COBRO DEL BENEFICIO DEL PROGRAMA PRIMER PASO O PPP APRENDÍZ</h1></div>',
    },

    {
      key: 'Datos del beneficiarios',
      type: 'no repeat',
      templateOptions: {
        required: true,
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
              pattern: '\\d{7,8}',
              placeholder: 'Ingrese un DNI'
            }
          },
        ]
      }
    },

    //--------------------------------------------------------------------------------------------------------
    
    {
      className: 'datos-solicitados-por-el-banco',
      template: '<div><h2>DATOS SOLICITADOS POR EL BANCO PARA APODERAR. (Solo datos del apoderado mayor de edad)</div></h2>'
    },
    {
      key: 'Datos del apoderado',
      type: 'no repeat',
      templateOptions: {
        required: true,
        addText: 'Ingresar datos del apoderado'
      },
      fieldArray:{
        fieldGroup:[
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
            key: 'Sexo',
            type: 'select',
            templateOptions: {
              label: 'Sexo',
              options:[
                {value: 'Masculino', label: 'Masculino'},
                {value: 'Femenino', label: 'Femenino'},
              ]
            }
          },
          {
            key: 'Fecha de nacimiento',
            type: 'input',
            templateOptions: {
              type: 'date',
              label: 'Fecha de nacimiento'
            }
          },
          {
            key: 'Apellido y Nombre',
            type: 'input',
            templateOptions: {
              label: 'Apellido y Nombre (tal como figura en el DNI)',
              required: true,
              placeholder: 'Ingrese su Nombre y Apellido'
            }
          },
          {
            key: 'Tipo de documento',
            type: 'select',
            templateOptions: {
              label: 'Tipo de documento',
              required: true,
              options: [
                {value: 'DNI', label: 'DNI'},
                {value: 'LE', label: 'LE'},
                {value: 'LC', label: 'LC'},
                {value: 'Pasaporte', label: 'Pasaporte'},
              ]
            }
          },
          {
            key: 'Número de documento',
            type: 'input',
            templateOptions: {
              label: 'Número de documento',
              placeholder: 'Ingrese un numero de documento',
              required: true,
              pattern: '\\d{5,10}'
            }
          },
          {
            template: '<h3>Domicilio</h3'
          },
          {
            key: 'Calle',
            type: 'input',
            templateOptions: {
              label: 'Calle',
              placeholder: 'Ingrese una calle'
            }
          },
          {
            key: 'Número',
            type: 'input',
            templateOptions: {
              label: 'Número',
              placeholder: 'Ingrese un número',
              pattern: '\\d{1,10}',
            }
          },
          {
            key: 'Piso',
            type: 'input',
            templateOptions: {
              label: 'Piso',
              placeholder: 'Ingrese un piso',
              pattern: '\\d{1,10}',
            }
          },
          {
            key: 'Depto',
            type: 'input',
            templateOptions: {
              label: 'Depto',
              placeholder: 'Ingrese un departamento',
            }
          },
          {
            key: 'Barrio',
            type: 'input',
            templateOptions: {
              label: 'Barrio',
              placeholder: 'Ingrese un barrio',
            }
          },
          {
            key: 'Localidad',
            type: 'input',
            templateOptions: {
              label: 'Localidad',
              placeholder: 'Ingrese una localidad',
            }
          },
          {
            key: 'Código Postal',
            type: 'input',
            templateOptions: {
              label: 'Código Postal',
              placeholder: 'Igrese un CP',
              pattern: '\\d{1,10}',
            }
          },
          {
            key: 'Teléfono',
            type: 'input',
            templateOptions: {
              label: 'Teléfono',
              placeholder: 'Igrese un teléfono',
              pattern: '\\d{1,25}',
            }
          }
        ]
      }
    },
    {
      key: "text",
      type: "textarea",
      defaultValue:
        "fhskdjfhs dfk sdfhk sdfhk sdfkj skdfj skjd fksj dfksd fksjdfhks dfkjs dfksjd fksjdf hksdf hksdf ksdf hksdfh ksjdfh skjdfh skjdfh skjdfh skjdf hksjfdhksfd",

      templateOptions: {
        label: "Textarea with specified rows",
        placeholder: "This has 10 rows",
        rows: 10,
        disabled: true,
      }
    }
  ]



  createPdf() {

    if (this.form.valid) {
      let modelo = Object.entries(this.model);
      //
      var doc = new jsPDF('p', 'mm', 'a4');


      doc.setFont('helvetica')
      //doc.text('Quien suscribe la nota declara conocer las reglamentaciones vigentes del Programa y se comprometena  cumplimentar los requisitos estipulados en el mismo. Los datos contenidos en este formulario tienen carácter de declaración jurada y están protegidos por el secreto estadístico.',15,20)

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
      nombreArchivo = this.model['Aclaración'][0]['DNI Padre, Madre o Tutor'];
      doc.output('dataurlnewwindow');
      doc.save('AutorizacionTutelar' + nombreArchivo + '.pdf');


    } else (error) => {
      console.error('error:', error);
    }
    if (this.form.invalid) {
      alert("falta completar datos")
    }
  }
}
