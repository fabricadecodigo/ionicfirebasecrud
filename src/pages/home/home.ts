import { ContactProvider } from './../../providers/contact/contact';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contacts: Observable<any>;

  constructor(public navCtrl: NavController, private provider: ContactProvider,
    private toast: ToastController) {

    this.contacts = this.provider.getAll();
  }

  newContact() {
    this.navCtrl.push('ContactEditPage');
  }

  editContact(contact: any) {
    this.navCtrl.push('ContactEditPage', { contact: contact });
  }

  removeContact(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
        });
    }
  }
}
