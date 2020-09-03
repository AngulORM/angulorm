import {AbstractEntity} from '../domain/entities';
import {Observable} from 'rxjs';

export interface IEntityService<T extends AbstractEntity> {
  read(id: any): Promise<any> | Observable<any>;

  readAll(): Promise<any> | Observable<any>;

  create(entity: T): Promise<any>;

  update(entity: T): Promise<any>;

  delete(id: any): Promise<any>;
}
