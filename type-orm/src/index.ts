import "reflect-metadata"
import { PhotoDataAccess } from "./data-access/user-data-access";
import { AppDataSource } from "./data-source";
import { Photo } from './entity/photo';

class Test {

    async initializeDb() {
        await AppDataSource.initialize();

        //test
        const photo = new Photo();
        photo.id = 1;
        photo.name = 'name';
        photo.description = 'desc';
        photo.filename = 'test.jpg';
        photo.views = 2;
        photo.isPublished = true;

        const dataAccess = new PhotoDataAccess();
        await dataAccess.create(photo);

        let readedObject = await dataAccess.read(1);
        console.log(readedObject);

        if (readedObject != null) {
            readedObject.description = 'UPDATED';
            await dataAccess.update(readedObject);
        }

        const photoToUpdate = new Photo();
        photo.id = 1;
        photo.name = 'name';
        photo.description = 'UPDATED 2';
        photo.filename = 'test.jpg';
        photo.views = 2;
        photo.isPublished = true;

        //await dataAccess.update(photoToUpdate);

        await dataAccess.remove(1);

    }

}

new Test().initializeDb();