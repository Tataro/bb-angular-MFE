import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() className: string = '';
  @Input() label: string = '';

  @Output() onChange = new EventEmitter<void>();

  handleClick() {
    this.onChange.emit();
  }
}
