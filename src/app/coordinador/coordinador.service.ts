import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Coordinador} from './coordinador';
import {CoordinadorDetail} from './coordinador-detail';

import {environment} from '../../environments/environment';
const coordinadores = '/coordinadores/';

const API_URL = environment.apiURL;

@Injectable()
export class CoordinadorService {

    constructor(private http: HttpClient) {}

    getCoordinadors(): Observable<Coordinador[]> {
        return this.http.get<Coordinador[]>(API_URL + coordinadores);
    }
    getCoordinadorDetail(coordinadorId): Observable<CoordinadorDetail> {
        return this.http.get<CoordinadorDetail>(API_URL + coordinadores + coordinadorId);
    }
    createCoordinador(coordinador): Observable<Coordinador> {
        return this.http.post<Coordinador>(API_URL + coordinadores, coordinador);
    }
    
    /**
* Updates an Coordinador
* @param Coordinador The Coordinador's information updated
* @returns The confirmation that the Coordinador was updated
*/
updateCoordinador(coordinador: Coordinador): Observable<CoordinadorDetail> {
    return this.http.put<CoordinadorDetail>(API_URL + coordinadores + coordinador.id, coordinador);
}

/**
* Deletes an Coordinador from the BookStore
* @param CoordinadorId The id of the Coordinador
* @returns The confirmation that the Coordinador was deleted
*/
deleteCoordinador(coordinadorId: number): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + coordinadores  + coordinadorId);
}
}