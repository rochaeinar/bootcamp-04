import { AppDataSource } from '../data-source';
import { Photo } from '../entity/photo';
export class PhotoDataAccess {

    async create(photo: Photo) {
        const photoRepository = AppDataSource.getRepository(Photo);
        await photoRepository.save(photo);
    }

    async read(id: number) {
        const photoRepository = AppDataSource.getRepository(Photo);
        return await photoRepository.findOneBy({
            id: id
        });
    }

    async update(photo: Photo) {
        const photoRepository = AppDataSource.getRepository(Photo);

        photoRepository.save(photo);

    }

    async remove(id: number) {
        const photoRepository = AppDataSource.getRepository(Photo);

        const photoToRemove = await photoRepository.findOneBy({
            id: 1,
        })

        if (photoToRemove != null)
            await photoRepository.remove(photoToRemove);

    }




}