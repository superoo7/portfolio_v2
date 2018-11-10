import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-stat-bot',
  templateUrl: './stat-bot.component.html',
  styleUrls: ['./stat-bot.component.css']
})
export class StatBotComponent implements OnInit {
  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) {}

  ngOnInit() {
    const s = this._renderer2.createElement('script');
    s.setAttribute('src', 'https://buttons.github.io/buttons.js');
    s.setAttribute('crossorigin', 'anonymous');
    s.setAttribute(
      'intergrity',
      'sha384-bBjThBdQCsmhpVDfPHET3qkDfHGiFRd7AiXfu4o5upLj6aQPztYOxxB8gNFH91Ow'
    );
    this._renderer2.appendChild(this._document.body, s);
  }
}
