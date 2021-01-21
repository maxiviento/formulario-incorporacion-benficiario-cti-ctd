import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
@Component({
  selector: 'formly-repeat-section',
  template: `
  <div style="margin:30px 0;">

    <div *ngFor="let field of field.fieldGroup; let i = index;" class="row">
      <formly-field class="col" [field]="field"></formly-field>
      <div class="col-sm-2 d-flex align-items-center">
        <button mat-raised-button color="warn" type="button" (click)="remove(i)">Remover registro</button>
        <button mat-raised-button color="primary" type="button" (click)="add()">{{ to.addText }}</button>
      </div>
    </div>
    <button mat-raised-button color="accent" type="button" *ngIf="mostrar" (click)="oculta()" (click)="add()">{{ to.addText }}</button>
</div>

  `,
  styles: [
    `
    .row {
        padding: 1rem;
        margin: 1rem 0;
        background: #e8f1fd;
    }
    `
  ]
})
export class RepeatTypeComponent extends FieldArrayType {

  mostrar: boolean = true;

  oculta() {
    //alert('Hiciste clic en el boton, y ahora lo oculto');
    this.mostrar = false;
  }
}