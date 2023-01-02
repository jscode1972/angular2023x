import { Injectable } from '@angular/core';

// 改成服務有個好處, 統一管理參數, 其他元件不須引用那麼遠 from '../../../src/environments/comm'; 
//import { frameworks, stackblitz } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  constructor() { }
}
