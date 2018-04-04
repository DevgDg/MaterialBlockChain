import { Component } from '@angular/core';
import NgBlock from '../blockClasses/ngBlock';
import NgBlockChain from '../blockClasses/ngBlockChain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  eCoin = new NgBlockChain();
  i=0;

  constructor(){
  }
  addBlock(){
    this.eCoin.addBlock(new NgBlock(this.i++, '4/02', '', [{from: '', to: '', amount: 40 }] , ''));
    console.log(JSON.stringify(this.eCoin));
  }
}
