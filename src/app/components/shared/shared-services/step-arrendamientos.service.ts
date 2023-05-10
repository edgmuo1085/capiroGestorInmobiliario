import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageLocalService } from './storage-local.service';
import { environment } from 'src/environments/environment';
import { BienesA, InformacionGeneralA, InformacionOcupacionA, ReferenciasA } from '../../interfaces/arrendamiento.interface';

@Injectable({
  providedIn: 'root',
})
export class StepArrendamientosService {
  infoGeneralArrendar: BehaviorSubject<InformacionGeneralA>;
  infoGeneralArrendarVal$: Observable<InformacionGeneralA>;
  infoOcupacionArrendar: BehaviorSubject<InformacionOcupacionA>;
  infoOcupacionArrendarVal$: Observable<InformacionOcupacionA>;
  infoReferenciasArrendar: BehaviorSubject<ReferenciasA>;
  infoReferenciasArrendarVal$: Observable<ReferenciasA>;
  infoBienesArrendar: BehaviorSubject<BienesA>;
  infoBienesArrendarVal$: Observable<BienesA>;

  informacionGeneral: InformacionGeneralA = {} as InformacionGeneralA;
  informacionOcupacion: InformacionOcupacionA = {} as InformacionOcupacionA;
  informacionReferencias: ReferenciasA = {} as ReferenciasA;
  informacionBienes: BienesA = {} as BienesA;

  constructor(private storageService: StorageLocalService) {
    this.infoGeneralArrendar = new BehaviorSubject<InformacionGeneralA>(this.informacionGeneral);
    this.infoGeneralArrendarVal$ = this.infoGeneralArrendar.asObservable();
    this.infoOcupacionArrendar = new BehaviorSubject<InformacionOcupacionA>(this.informacionOcupacion);
    this.infoOcupacionArrendarVal$ = this.infoOcupacionArrendar.asObservable();
    this.infoReferenciasArrendar = new BehaviorSubject<ReferenciasA>(this.informacionReferencias);
    this.infoReferenciasArrendarVal$ = this.infoReferenciasArrendar.asObservable();
    this.infoBienesArrendar = new BehaviorSubject<BienesA>(this.informacionBienes);
    this.infoBienesArrendarVal$ = this.infoBienesArrendar.asObservable();

    this.setInfoGeneralAStorage();
    this.setInfoOcupacionAStorage();
    this.setReferenciasAStorage();
    this.setBienesAStorage();
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
    return this.infoReferenciasArrendarVal$;
  }

  setBienesArrendar(infoBienes: BienesA): void {
    this.infoBienesArrendar.next(infoBienes);
  }

  getBienesArrendar(): Observable<BienesA> {
    return this.infoBienesArrendarVal$;
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

  private setBienesAStorage(): void {
    const gestorCapiroBienes = this.storageService.localGet(environment.storageKey.infoBienesArrendar);
    let inforBienes: BienesA = {} as BienesA;
    if (gestorCapiroBienes) {
      inforBienes = JSON.parse(gestorCapiroBienes);
    }
    this.setBienesArrendar(gestorCapiroBienes ? inforBienes : this.informacionBienes);
  }

  clearObservablesArrendamiento() {
    let inforGen: InformacionGeneralA = {} as InformacionGeneralA;
    let inforOcup: InformacionOcupacionA = {} as InformacionOcupacionA;
    let inforRefer: ReferenciasA = {} as ReferenciasA;
    let inforBienes: BienesA = {} as BienesA;

    this.setInfoGenArrendar(inforGen);
    this.setInfoOcupArrendar(inforOcup);
    this.setReferenciasArrendar(inforRefer);
    this.setBienesArrendar(inforBienes);
    this.storageService.localRemove(environment.storageKey.infoGeneralArrendar);
    this.storageService.localRemove(environment.storageKey.infoOcupacionArrendar);
    this.storageService.localRemove(environment.storageKey.infoReferenciasArrendar);
    this.storageService.localRemove(environment.storageKey.infoBienesArrendar);
  }
}
