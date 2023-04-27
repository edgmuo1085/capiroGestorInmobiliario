import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageLocalService } from './storage-local.service';
import { environment } from 'src/environments/environment';
import { InformacionGeneralA, InformacionOcupacionA, ReferenciasA } from '../../interfaces/arrendamiento.interface';

@Injectable({
  providedIn: 'root',
})
export class StepArrendamientosService {
  infoGeneralArrendar: BehaviorSubject<InformacionGeneralA>;
  infoGeneralArrendarVal$: Observable<InformacionGeneralA>;

  infoOcupacionArrendar: BehaviorSubject<InformacionOcupacionA>;
  infoOcupacionArrendarVal$: Observable<InformacionOcupacionA>;

  infoReferenciasArrendar: BehaviorSubject<ReferenciasA>;
  infofoReferenciasArrendarVal$: Observable<ReferenciasA>;

  informacionGeneral: InformacionGeneralA = {} as InformacionGeneralA;
  informacionOcupacion: InformacionOcupacionA = {} as InformacionOcupacionA;
  informacionReferencias: ReferenciasA = {} as ReferenciasA;

  constructor(private storageService: StorageLocalService) {
    this.infoGeneralArrendar = new BehaviorSubject<InformacionGeneralA>(this.informacionGeneral);
    this.infoGeneralArrendarVal$ = this.infoGeneralArrendar.asObservable();

    this.infoOcupacionArrendar = new BehaviorSubject<InformacionOcupacionA>(this.informacionOcupacion);
    this.infoOcupacionArrendarVal$ = this.infoOcupacionArrendar.asObservable();

    this.infoReferenciasArrendar = new BehaviorSubject<ReferenciasA>(this.informacionReferencias);
    this.infofoReferenciasArrendarVal$ = this.infoReferenciasArrendar.asObservable();

    this.setInfoGeneralAStorage();
    this.setInfoOcupacionAStorage();
    this.setReferenciasAStorage();
  }

  setInfoGenArrendar(infoGeneral: InformacionGeneralA): void {
    this.infoGeneralArrendar.next(infoGeneral);
  }

  getInfoGeneralArrendar(): Observable<InformacionGeneralA> {
    return this.infoGeneralArrendarVal$;
  }

  setInfoOcupArrendar(infoOcupacion: InformacionOcupacionA): void {
    this.infoOcupacionArrendar.next(infoOcupacion);
  }

  getInfoOcupArrendar(): Observable<InformacionOcupacionA> {
    return this.infoOcupacionArrendarVal$;
  }

  setReferenciasArrendar(infoReferencias: ReferenciasA): void {
    this.infoReferenciasArrendar.next(infoReferencias);
  }

  getReferenciasArrendar(): Observable<ReferenciasA> {
    return this.infofoReferenciasArrendarVal$;
  }

  private setInfoGeneralAStorage(): void {
    const gestorCapiroInfoGen = this.storageService.localGet(environment.storageKey.infoGeneralArrendar);
    let inforGen: InformacionGeneralA = {} as InformacionGeneralA;
    if (gestorCapiroInfoGen) {
      inforGen = JSON.parse(gestorCapiroInfoGen);
    }
    this.setInfoGenArrendar(gestorCapiroInfoGen ? inforGen : this.informacionGeneral);
  }

  private setInfoOcupacionAStorage(): void {
    const gestorCapiroInfoOcup = this.storageService.localGet(environment.storageKey.infoOcupacionArrendar);
    let inforOcup: InformacionOcupacionA = {} as InformacionOcupacionA;
    if (gestorCapiroInfoOcup) {
      inforOcup = JSON.parse(gestorCapiroInfoOcup);
    }
    this.setInfoOcupArrendar(gestorCapiroInfoOcup ? inforOcup : this.informacionOcupacion);
  }

  private setReferenciasAStorage(): void {
    const gestorCapiroReferencias = this.storageService.localGet(environment.storageKey.infoReferenciasArrendar);
    let inforRefer: ReferenciasA = {} as ReferenciasA;
    if (gestorCapiroReferencias) {
      inforRefer = JSON.parse(gestorCapiroReferencias);
    }
    this.setReferenciasArrendar(gestorCapiroReferencias ? inforRefer : this.informacionReferencias);
  }
}
