import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import { Geolocation, Position } from '@capacitor/geolocation';
import { Share } from '@capacitor/share';

import { Device, DeviceId } from '@capacitor/device';

import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  myImage = null;
  position: Position = null;
  deviceID: DeviceId = null;
  message: any = null;
  //nfcEnabled: any = null;


  constructor(
    public platform: Platform,
    private nfc: NFC,
    private ndef: Ndef) { }

  ngOnInit() {
    console.log('ng on Init - home.page.ts');
    this.getStatusDevice();
    console.log('nfc enabled: ', this.message);
  }

  async getStatusDevice() {
    await this.platform.ready();
    this.message = await this.nfc.enabled()
    //this.nfc.showSettings
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    this.myImage = image.webPath;
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();

    this.position = coordinates;
  }

  async getDeviceID() {
    const devID = await Device.getId();

    this.deviceID = devID;
  }


  async share() {
    await Share.share({
      title: 'Come and find me',
      text: `Here's my device ID:
        ${this.deviceID.uuid}`,
      url: 'http://thingsintouch.com/'
    });
  }

}
