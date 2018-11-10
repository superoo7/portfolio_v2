import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-home-tools',
  templateUrl: './home-tools.component.html',
  styleUrls: ['./home-tools.component.css']
})

//  <script src="https://widgets.coingecko.com/coingecko-beam-widget.js"></script>
export class HomeToolsComponent implements OnInit {
  loaded: Boolean = false;
  inputData: any = 'init';

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) {}

  ngOnInit() {
    const s = this._renderer2.createElement('script');
    s.src = 'https://widgets.coingecko.com/coingecko-beam-widget.js';
    this._renderer2.appendChild(this._document.body, s);
    this.loaded = true;
  }

  inputChange(newValue) {
    this.inputData = newValue;
  }
}
