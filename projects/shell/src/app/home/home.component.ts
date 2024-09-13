import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef }) vc!: ViewContainerRef;

  async ngOnInit() {
    const m = await loadRemoteModule('mfe1', './Shop');
    this.vc.createComponent(m.ShopComponent);
  }
}
