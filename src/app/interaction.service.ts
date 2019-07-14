import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _teacherMessageSource = new Subject<string>();
  teacherMessage$ = this._teacherMessageSource.asObservable();

  constructor() { }

  sendMessage(message: string) {
    this._teacherMessageSource.next(message);
  }
}
