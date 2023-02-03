import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {

  @Input() color: string = 'red | green';
  @Input() disabled = true;
  ngOnInit(): void {
      this.calcBackgroundColorStyle();
  }
  bgColor: string = '';
  fontColor: string = 'white';

  calcBackgroundColorStyle() {
    if (this.color === 'red') {
      this.bgColor = '#f44c3e';
    }
    else {
      this.bgColor = 'green';
    }
  }
}
