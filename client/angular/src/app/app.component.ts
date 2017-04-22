import { Component } from '@angular/core';
import { Tab } from './tab/tab.interface';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logs:string[] = [];

  log(selectedTab:Tab) {
    this.logs.push('Selected Tab with title: ' + selectedTab.tabTitle);
  }
}
