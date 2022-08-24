import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Input() title: string | undefined;
  @Output() buttonEmit: any = new EventEmitter();
  buttonState = false;

  ngOnInit(): void {}

  onEventEmitter(elemento: any) {
    this.buttonState = !this.buttonState;
    return elemento ? this.buttonEmit.emit(this.buttonState) : null;
  }
}
