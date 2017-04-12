import { Component } from '@angular/core';

import { Menu } from '../Menu/menu';
import { Scan } from '../Scan/scan';

@Component({
  selector: 'page-tap',
  templateUrl: 'tab.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Scan;
  tab2Root: any = Menu;

  constructor() {

  }
}
