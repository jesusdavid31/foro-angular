//El injectable es para utilizar este servicio cualquier componente
import { Injectable } from '@angular/core';
//El HttpClient, HttpHeaders sirve para hacer peticiones ajax al backend
import { HttpClient, HttpHeaders } from '@angular/common/http';
//El observable sirve para recibir los resultados que nos devuelva el api
import { Observable } from 'rxjs';
import { global } from './global';

//El injectable es inyectar esta clase en cualquier componente
@Injectable()
export class TopicService {
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    prueba(){
       return "Hola mundo desde el topic Service";
    }

    addTopic(token, topic): Observable<any> {
        //Convierte el objeto del usuario en un json string
        let params = JSON.stringify(topic);

        //Definimos las cabeceras
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);

        //Hacer petición ajax
        return this._http.post(this.url + 'topic', params, { headers: headers });
    }

    getTopicsByUser(userId): Observable<any> {
        //Definimos las cabeceras
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        //Hacer petición ajax
        return this._http.get(this.url + 'user-topics/' + userId, { headers: headers });
    }

    getTopic(id): Observable<any> {
        //Hacer petición ajax
        return this._http.get(this.url + 'topic/' + id);
    }

    update(token, id, topic): Observable<any> {
        //Convierte el objeto del usuario en un json string
        let params = JSON.stringify(topic);

        //Definimos las cabeceras
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);

        //Hacer petición ajax
        return this._http.put(this.url + 'topic/' + id, params, { headers: headers });
    }

    delete(token, id): Observable<any> {
        //Definimos las cabeceras
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);

        //Hacer petición ajax
        return this._http.delete(this.url + 'topic/' + id, { headers: headers });
    }

    getTopics(page = 1): Observable<any> {
        //Hacer petición ajax
        return this._http.get(this.url + 'topics/' + page);
    }

    getTopicDetail(id): Observable<any> {
        //Hacer petición ajax
        return this._http.get(this.url + 'topic/' + id);
    }

    search(searchString): Observable<any> {
        //Hacer petición ajax
        return this._http.get(this.url + 'search/' + searchString);
    }

}