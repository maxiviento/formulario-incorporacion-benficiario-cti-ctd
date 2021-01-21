import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscripcionCtiComponent } from './components/inscripcion-cti/inscripcion-cti.component'
import { BajaBenficiariosComponent } from './components/baja-benficiarios/baja-benficiarios.component'
import { DescargaODenunciaComponent } from './components/descarga-o-denuncia/descarga-o-denuncia.component'
import { RenunciaProgramaComponent } from './components/renuncia-programa/renuncia-programa.component'
import { ReconsideracionBeneficiarioComponent } from './components/reconsideracion-beneficiario/reconsideracion-beneficiario.component'
import { AutorizacionTutelarComponent } from './components/autorizacion-tutelar/autorizacion-tutelar.component'
import { IndiceComponent } from './components/indice/indice.component'

const routes: Routes = [
  {
    path: 'inscripcion-cti',
    component: InscripcionCtiComponent
  },
  {
    path: 'baja-beneficiarios',
    component: BajaBenficiariosComponent
  },
  {
    path: 'descarga-o-denuncia',
    component: DescargaODenunciaComponent
  },
  {
    path: 'renuncia-programa',
    component: RenunciaProgramaComponent
  },
  {
    path: 'reconsideracion-beneficiario',
    component: ReconsideracionBeneficiarioComponent
  },
  {
    path: 'autorizacion-tutelar',
    component: AutorizacionTutelarComponent
  },
  {
    path: '',
    component: IndiceComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }