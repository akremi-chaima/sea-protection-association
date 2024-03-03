import { Injectable } from '@angular/core';

@Injectable()
export class ConstsHelper {
  static readonly ERROR_OCCURRED_RETRY_MESSAGE = 'Oups, nous avons rencontré un petit souci... Nous vous invitons à ré-essayer plus tard.';
  static readonly emailPattern: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  static readonly phoneNumber: RegExp = /^0[1|2|3|4|5|6|7][0-9]{8}$/;
  static readonly eventDate: RegExp = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/;
}
