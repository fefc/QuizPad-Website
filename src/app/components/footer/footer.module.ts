import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { FooterComponentRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    IonicModule,
    FooterComponentRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [FooterComponent],
  exports: [
    FooterComponent
  ]
})
export class FooterComponentModule {}
