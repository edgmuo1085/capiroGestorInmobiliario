import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageLocalService {
  constructor() {}
  localSet(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  localGet(key: string): string {
    let token = localStorage.getItem(key) || '';
    return token;
  }

  localRemove(key: string): void {
    localStorage.removeItem(key);
  }

  localClear(): void {
    localStorage.clear();
  }
}
