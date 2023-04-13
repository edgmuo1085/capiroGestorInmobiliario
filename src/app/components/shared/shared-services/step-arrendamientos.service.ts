import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageLocalService } from './storage-local.service';
import { environment } from 'src/environments/environment';
import { InformacionGeneralA } from '../../interfaces/arrendamiento.interface';

@Injectable({
  providedIn: 'root',
})
export class StepArrendamientosService {
  infoGeneralArrendar: BehaviorSubject<InformacionGeneralA>;
  infoGeneralArrendarVal$: Observable<InformacionGeneralA>;
  informacionGeneral: InformacionGeneralA = {} as InformacionGeneralA;

  constructor(private storageService: StorageLocalService) {
    this.infoGeneralArrendar = new BehaviorSubject<InformacionGeneralA>(this.informacionGeneral);
    this.infoGeneralArrendarVal$ = this.infoGeneralArrendar.asObservable();
    this.setInfoGeneralAStorage();
  }

  setInfoGenArrendar(infoGeneral: InformacionGeneralA): void {
    this.infoGeneralArrendar.next(infoGeneral);
  }

  getInfoGeneralArrendar(): Observable<InformacionGeneralA> {
    return this.infoGeneralArrendarVal$;
  }

  private setInfoGeneralAStorage(): void {
    const gestorCapiroInfoGen = this.storageService.localGet(environment.storageKey.infoGeneralArrendar);
    let inforGen: InformacionGeneralA = {} as InformacionGeneralA;
    if (gestorCapiroInfoGen) {
      inforGen = JSON.parse(gestorCapiroInfoGen);
    }
    this.setInfoGenArrendar(gestorCapiroInfoGen ? inforGen : this.informacionGeneral);
  }
}
