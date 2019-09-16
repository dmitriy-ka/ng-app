import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() {}

  hello(text?) {
    console.log(`============ APPSERVICE HELLO ${text}`);
  }
}
