import { ICrud } from './icrud.interface';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { Model } from './model';

export abstract class ServiceFirebase<T extends Model> implements ICrud<T>{
    
    
    ref: AngularFirestoreCollection<T>;

    constructor(protected type: { new(): T;}, protected firestore: AngularFirestore, public path: string) {
        this.ref = this.firestore.collection<T>(this.path);
    }

    get(id: string: Observable<T> {
        let doc = this.ref.doc<T>(id);
        return doc.get().pipe(map(snapshot => this.docToClass(snapshot)));
    }

}