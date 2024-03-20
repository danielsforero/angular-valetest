import { Observable } from 'rxjs';
import { UrlToProgramModel } from '../models/urlToProgram.model';

export abstract class LookAndFeelRepository {
  abstract getLookAndFeel(): Observable<UrlToProgramModel>
}
