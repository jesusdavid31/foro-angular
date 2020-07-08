//El injectable es para utilizar este servicio cualquier componente
import { Injectable } from '@angular/core';
//El HttpClient, HttpHeaders sirve para hacer peticiones ajax al backend
import { HttpClient, HttpHeaders } from '@angular/common/http';
//El observable sirve para recibir los resultados que nos devuelva el api
import { Observable } from 'rxjs';
import { global } from './global';

//El injectable es inyectar esta clase en cualquier componente
@Injectable()
export class CommentService {
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    prueba(){
       return "Hola mundo desde el topic Service";
    }

    addTopic(token, comment, topicId): Observable<any> {
        //Convierte el objeto del usuario en un json string
        let params = JSON.stringify(comment);

        //Definimos las cabeceras
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);

        //Hacer petición ajax
        return this._http.post(this.url + 'comment/topic/' + topicId, params, { headers: headers });
    }


    delete(token, topicId, commentId): Observable<any> {
        //Definimos las cabeceras 
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);

        //Hacer petición ajax
        return this._http.delete(this.url + 'comment/' + topicId + '/' + commentId, { headers: headers });
    }

}