import { Component } from '@angular/core';
//import { PrimeNGConfig, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2023';
  
  /*
  menuMode = 'static';
  items: MenuItem[];
  constructor(private primengConfig: PrimeNGConfig) {
    this.items = [
      { label: 'Update', icon: 'pi pi-refresh', command: () => { this.update(); } },
      { label: 'Delete', icon: 'pi pi-times', command: () => { this.delete();} },
      { separator: true},
      { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
    ];
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = '14px';
  }

  save(s : string) {
    //this.messageService.add({severity:severity, summary:'Success', detail:'Data Saved'});
  }

  update() {
    //this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
    //this.messageService.add({severity:'success', summary:'Success', detail:'Data Deleted'});
  }*/
}
