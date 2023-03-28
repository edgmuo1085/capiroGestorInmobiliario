import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastCustomService {
  constructor(private messageService: MessageService) {}

  showToast(summary: string, detail: string, severity?: string, life?: number) {
    let severityCustom = severity ? severity : 'success';
    let lifeCustom = life ? life : 8000;
    this.messageService.add({
      key: 'toast-capiro',
      severity: severityCustom,
      summary: summary,
      detail: detail,
      life: lifeCustom,
    });
  }
}
