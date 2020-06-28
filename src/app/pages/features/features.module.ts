import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { FeaturesPageRoutingModule } from './features-routing.module';

import { FeaturesPage } from './features.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FeaturesPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [FeaturesPage]
})
export class FeaturesPageModule {}
