import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactEditPage } from './contact-edit';

@NgModule({
  declarations: [
    ContactEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactEditPage),
  ],
})
export class ContactEditPageModule {}
