import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import { Geolocation, Position } from '@capacitor/geolocation';
import { Share } from '@capacitor/share';

import { Device, DeviceId } from '@capacitor/device';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myImage = null;
  position: Position = null;
  deviceID: DeviceId = null;


  constructor() {}

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
