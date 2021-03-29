import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'

@Component({
  selector: 'app-emprendedores',
  templateUrl: './emprendedores.component.html',
  styleUrls: ['./emprendedores.component.scss']
})
export class EmprendedoresComponent {

  title = 'PROGRAMA COMERCIO ELECTRÓNICO CAPACITACIÓN PARA EMPRENDEDORES'
  form = new FormGroup({})
  options: FormlyFormOptions = {};
  model: any = {
  }
  fields: FormlyFieldConfig[] = [
    {
      className: 'datos-solicitante',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Datos del emprendedor:</h2></div>',
    },
    
    
    // Emprendedor
    
    {
      key: 'Emprendedor',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar sus datos',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Direcciñon de correo electrónico',
            type: 'input',
            templateOptions: {
              label: 'Direcciñon de correo electrónico',
              placeholder: 'Ingrese Email',
              required: true,
            },
          },
          {
            key: 'Nombre completo',
            type: 'input',
            templateOptions: {
              label: 'Nombre completo',
              placeholder: 'Ingrese su nombre completo',
              required: true,
            },
          },
          {
            key: 'Apellido',
            type: 'input',
            templateOptions: {
              label: 'Apellido',
              placeholder: 'Ingrese su apellido',
              required: true,
            },
          },
          {
            key: 'CUIT',
            type: 'input',
            templateOptions: {
              label: 'CUIT',
              placeholder: 'Su CUIT',
              required: true,
              pattern: '\\d{11}',
              maxLength: 11,
              minLength: 11
            },
          },
          {
            key: 'Condición impositiva',
            type: 'input',
            templateOptions: {
              label: 'Condición impositiva',
              placeholder: 'Su condición impositiva',
            },
          },
          {
            key: 'Edad',
            type: 'input',
            templateOptions: {
              label: 'Edad',
              maxLength: 3,
              minLength: 1,
              pattern: '\\d{1,3}',
              placeholder: 'Ingrese una edad'
            }
          },
          {
            key: 'Teléfono celular',
            type: 'input',
            templateOptions: {
              label: 'Teléfono celular (sin 0 ni 15)',
              placeholder: 'Ingrese su teléfono celular',
              pattern: '\\d{1,25}',
            },
          },
          {
            key: 'Dirección',
            type: 'input',
            templateOptions: {
              label: 'Dirección',
              placeholder: 'Direccion',
            },
          },
          
          {
            key: 'Departamento',
            type: 'select',
            templateOptions: {
              label: 'Departamento',
              placeholder: 'Placeholder',
              description: 'Departamento',
              required: true,
              options: [
                { value: 'CAPITAL', label:'CAPITAL'  },
                { value: 'CALAMUCHITA', label:'CALAMUCHITA'  },
                { value: 'COLON', label:'COLON'  },
                { value: 'CRUZ DEL EJE', label:'CRUZ DEL EJE'  },
                { value: 'GENERAL ROCA', label:'GENERAL ROCA'  },
                { value: 'GRAL SAN MARTIN', label:'GRAL SAN MARTIN'  },
                { value: 'ISCHILIN', label:'ISCHILIN'  },
                { value: 'JUAREZ CELMAN', label:'JUAREZ CELMAN'  },
                { value: 'MARCOS JUAREZ', label:'MARCOS JUAREZ'  },
                { value: 'MINAS', label:'MINAS'  },
                { value: 'POCHO', label:'POCHO'  },
                { value: 'PUNILLA', label:'PUNILLA'  },
                { value: 'RIO CUARTO', label:'RIO CUARTO'  },
                { value: 'RIO PRIMERO', label:'RIO PRIMERO'  },
                { value: 'RIO SECO', label:'RIO SECO'  },
                { value: 'RIO SEGUNDO', label:'RIO SEGUNDO'  },
                { value: 'ROQUE SAENZ PEÑA', label:'ROQUE SAENZ PEÑA'  },
                { value: 'SAN ALBERTO', label:'SAN ALBERTO'  },
                { value: 'SAN JAVIER', label:'SAN JAVIER'  },
                { value: 'SAN JUSTO', label:'SAN JUSTO'  },
                { value: 'SANTA MARIA', label:'SANTA MARIA'  },
                { value: 'SOBREMONTE', label:'SOBREMONTE'  },
                { value: 'TERCERO ARRIBA', label:'TERCERO ARRIBA'  },
                { value: 'TOTORAL', label:'TOTORAL'  },
                { value: 'TULUMBA', label:'TULUMBA'  },
                { value: 'UNION', label:'UNION'  },
              ],
            },
          },
          {
            key: '¿Con qué género te identificas?',
            type: 'select',
            templateOptions: {
              label: '¿Con qué género te identificas?',
              placeholder: 'Ingrese un género',
              options: [
                { value: 'MASCULINO', label: 'MASCULINO' },
                { value: 'FEMENINO', label: 'FEMENINO' },
                { value: 'OTRO', label: 'OTRO' },]
            }
          },
          {
            key: 'Nivel educativo alcanzado',
            type: 'select',
            templateOptions: {
              label: 'Nivel alcanzado',
              placeholder: 'Nivel educacion',
              options: [
                { value: "primario inc", label: 'Primario Incompleto'  },
                { value: "primario comp", label: 'Primario Completo'  },
                { value: "secundario inc", label: 'Secundario Incompleto'  },
                { value: "secundario comp", label: 'Secundario Completo'  },
                { value: "terciario inc", label: 'Terciario Incompleto'  },
                { value: "terciario comp", label: 'Terciario Completo'  },
                { value: "universitario inc", label: 'Universitario Incompleto'  },
                { value: "Universitario comp", label: 'Universitario Completo'  },
              ],
            },
          },
        ]
      }
    },

 //--------------------------------------------------------------------------------------------------------

  {
    className: 'datos-emprendimiento',
    template: '<div><h2>Datos del Emprendimiento:</h2></div>',
  },

  {
    key: 'Emprendimiento',
    type: 'no repeat',
    templateOptions: {
      addText: 'Ingresar datos del Emprendimiento',
    },
    fieldArray: {
      fieldGroup: [
        {
          key: 'Nombre del Emprendimiento',
          type: 'input',
          templateOptions: {
            label: 'Nombre del Emprendimiento',
            placeholder: 'Ingrese el nombre de su emprendimiento'
          }
        },
        {
          key: 'Ubicación del Emprendimiento',
          type: 'input',
          templateOptions: {
            label: 'Ubicación del Emprendimiento',
            placeholder: 'Ingrese una unbicación',
          },
        },
        {
          key: 'Cantidad de personas que forman parte del Emprendimiento',
          type: 'input',
          templateOptions: {
            label: 'Cantidad de personas que forman parte del Emprendimiento',
            placeholder: 'Ingrese una cantidad',
            required: true,
            pattern: "\\d{1,5}",
            maxLength: 5,
          },
        },
        {
          key: 'Sitio web y/o redes sociales del Emprendimiento',
          type: 'input',
          templateOptions: {
            label: 'Sitio web y/o redes sociales del Emprendimiento',
            placeholder: 'Ingrese algun sitio web o red social',
          },
        },
        {
          key: 'Rubro al que pertenece el Emprendimiento',
          type: 'select',
          templateOptions: {
            label: 'Rubro al que pertenece el Emprendimiento',
            options:[
              {value: 'Industria', label: 'Industria'},
              {value: 'Servicios', label: 'Servicios'},
              {value: 'Tecnología', label: 'Tecnología'},
              {value: 'Otros', label: 'Otros'},
            ]
          },
        },
        {
          key: 'Describi brevemente qué productos o servicios ofrece el Emprendimiento',
          type: 'input',
          templateOptions: {
            label: 'Describi brevemente qué productos o servicios ofrece el Emprendimiento',
            placeholder: 'Ingrese una descripción',
          },
        },
        {
          key: '¿Cuáles son tus espectativas con respecto a la Capacitación en Comercio Electrónico?',
          type: 'input',
          templateOptions: {
            label: '¿Cuáles son tus espectativas con respecto a la Capacitación en Comercio Electrónico?',
            placeholder: 'Ingrese alguna espectativa',
          },
        },
      ]
    }
  },
]


  

createPdf(){
    if (this.form.valid) {
      let modelo = Object.entries(this.model);
      //
      var doc = new jsPDF('p', 'mm', 'a4');
      var img = new Image();
      img.src = 'assets/cabecera.jpg';
      doc.addImage(img, 'jpg', 0, 0);

      doc.setFont('helvetica')

      let m = 30;
      let y = 5;
      let x = 15;
      let i = 0; //
      let ll = 90;
      //var arr:JSON[];
      //console.log(this.form)

      for (let seccion of modelo) {
        
        if(Array.isArray(seccion[1]) != true){
          seccion[1] = [[seccion[1]]]
        }
        //console.log(seccion)
        let arr: any = seccion[1];
        if (y > 240 ) {
          doc.addPage();
          doc.addImage(img, 'jpg', 0, 0);
          m = 30;
          y = 5;
          x = 15;
        }

        y = y + 6;
        doc.setFontSize(16);
        doc.setTextColor(45);
        doc.text(seccion[0], x, m + y); //nombre seccion
        doc.line(x, m + y + 1, x + 180, m + y + 1);
        //console.log(arr)
        for (var j = 0; j < arr.length; j++) {

          var res = [];
          var z = 0;

          for (var clave in arr[j]) {
            i++;
            res.push([clave, arr[j][clave]]);
            
            var registro: String[] = [clave, 'algo quee no se paso a string'];
            try {
              registro = res[z]; //paso los valores a string
            } catch (e) {
              console.log(e)
            }
            z++;
            var texto = ''
            //RESUELVO SI EL TEXTO ES LARGO O CORTO O SI ES DE UNA COLUMNA U OTRA
            //console.log(registro[1])
            texto = registro[1].toString()

            var text_arr_aux = new Array
            text_arr_aux = []
            text_arr_aux = texto.split("",texto.length)
            var text_arr = new Array
            text_arr = []
            var texto_aux = ""
            for(var jj = 0; jj < text_arr_aux.length; jj++){
              texto_aux = texto_aux + text_arr_aux[jj]
              if(jj%90==0 && jj != 0){
                text_arr.push(texto_aux)
                texto_aux = ""
              }
            }
            text_arr.push(texto_aux)
            
            
            if (texto.length > 40) {x = 15; y = y + 12; i++; ll=180}
            else { if (i % 2 != 0 || ll==180 ) { x = 15; y = y + 12; ll=90 }
                  else { x = 110; ll=90 } }
            //ACA PREGUNTO SI ESTOY SALIENDOME DE LA HOJA
            if (y > 240) {
              doc.addPage();
              doc.addImage(img, 'jpg', 0, 0);
              m = 30;
              y = 5;
              x = 15;
            }
            
            doc.setFontSize(10);
            doc.setDrawColor(100);
            for (var ia = 0; ia < text_arr.length; ia++) {                
              doc.text(text_arr[ia], x, m + y); //valor
              if (y > 240) {
                doc.addPage();
                doc.addImage(img, 'jpg', 0, 0);
                m = 30;
                y = 5;
                x = 15;
              }             
              y = y + 5
            }
            y = y - 5
            
            doc.line(x, m + y + 1, x + ll, m + y + 1); // linea horizontal
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
    nombreArchivo = this.model['Emprendedor'][0]['CUIT'];
      doc.output('dataurlnewwindow');
      doc.save('solicitudCapacitacion' + nombreArchivo + '.pdf');


    } else (error) => {
        console.error('error:', error);
      } 
      if (this.form.invalid) {
        alert("falta completar datos")
      }
  }
}
