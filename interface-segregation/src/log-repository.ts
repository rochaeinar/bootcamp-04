import Repository from './repository';
import Log from './log';
export default class LogRepository implements Repository<Log>{
    insert(entity: Log): Log {
        console.log('insert ok');
        return new Log();
    }
    update(id: number, entity: Log): Log {
        throw new Error('Method not implemented.');
    }
    get(id: number): Log {
        throw new Error('Method not implemented.');
    }
    delete(id: number): void {
    }

}