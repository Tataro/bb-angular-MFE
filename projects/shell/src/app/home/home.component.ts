import { loadRemoteModule } from '@angular-architects/native-federation';
import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ButtonComponent } from '../../../../mfe1/src/app/components/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef }) vc!: ViewContainerRef;
  @ViewChild('vc2', { read: ViewContainerRef }) vc2!: ViewContainerRef;

  async ngOnInit() {
    const m = await loadRemoteModule('mfe1', './Shop');
    this.vc.createComponent(m.ShopComponent);

    const y = (await loadRemoteModule('mfe1', './Button')) as {
      ButtonComponent: typeof ButtonComponent;
    };
    const btnRef: ComponentRef<ButtonComponent> = this.vc2.createComponent(
      y.ButtonComponent
    );
    btnRef.instance.type = 'submit';
    btnRef.instance.label = 'Click me';
    btnRef.instance.className = 'btn-primary';

    btnRef.instance.onChange.subscribe(() => {
      console.log('Button clicked!');
    });
  }
}
