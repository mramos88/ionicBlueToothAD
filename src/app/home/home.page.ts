import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private bt :BluetoothSerial) {}
  public dis;
  public async onClick() {
    try{
      await this.bt.isEnabled();
      alert("Esta enabled");
      this.listaDisp();
    } catch (e) {
      alert(e);
    }
  }
  public async listaDisp() {
    this.dis = await this.bt.list();
    
  }
  public conectar(address) {
    this.bt.connect(address).subscribe(res => {
      this.bt.write("texto");
      this.bt.disconnect();
    }, error => {
        alert(error);
    });
  }

  
}
