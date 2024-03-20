import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { LookAndFeelMapper } from '../../core/mappers/lookAndFeel.mapper';
import { UrlToProgramModel } from '../../core/models/urlToProgram.model';
import { UrlToProgramDto } from '../dto/urlToProgram.dto';
import { LookAndFeelRepository } from '../../core/repositories/lookAndFeel.repository';
@Injectable({
  providedIn: 'root'
})
export class LookAndFeelService implements LookAndFeelRepository {

  constructor(private http: HttpClient) { }


  getLookAndFeel(): Observable<UrlToProgramModel> {
    console.log('aqui llega')
    return this.http.get<UrlToProgramDto>('../../assets/look-and-feel.json')
      .pipe(map((data: UrlToProgramDto) => {
        return LookAndFeelMapper.programApiToDomain(data)
      }));
      
  }
}
