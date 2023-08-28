import { createMocks } from '../../../../node_modules/node-mocks-http';
import handler from './create'; // Remplacez par le chemin vers votre fichier API

const horseData = {
    name: 'Horse Name',
    size: 15,
    birthDate: new Date(),
    ownerId: 'cllqs7p350000ukpc3b3l92mc',
    halfLeaseUsersId: [ 'cllqs7p350000ukpc3b3l92mc'],
};

describe('API Tests', () => {
    it('should create a new horse', async () => {
        const { req, res } = createMocks({
            method: 'POST',
            body: { horse: horseData },
        });

        await handler(req, res);
        expect(res._getStatusCode()).toBe(200); // Vérifie le code de statut HTTP
    });
});

