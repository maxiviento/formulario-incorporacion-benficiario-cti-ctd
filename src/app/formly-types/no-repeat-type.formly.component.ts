import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
@Component({
  selector: 'formly-no-repeat-section',
  template: `
  <div style="margin:30px 0;">
  <button mat-raised-button color="accent" type="button" *ngIf="mostrar" (click)="oculta()" (click)="add()">{{ to.addText }}</button>
</div>
    <div *ngFor="let field of field.fieldGroup; let i = index;" class="row">
      <formly-field class="col" [field]="field"></formly-field>
      <div class="col-sm-2 d-flex align-items-center">
      </div>
    </div>

  `,
  styles: [
    `
    .datos-solicitante {color: red;}

    .row {
        padding: 1rem;
        margin: 1rem 0;
        background: #e8f1fd;
    }
    `
  ]
})
export class NoRepeatTypeComponent extends FieldArrayType {

  mostrar: boolean = true;

  oculta() {
    //alert('Hiciste clic en el boton, y ahora lo oculto');
    this.mostrar = false;
  }
}