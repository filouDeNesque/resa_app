import { createMocks } from 'node-mocks-http';
import handler from './[id]'; 

const horseDataget = {
    id: 'cllugvgsr0001ukj0p7j8vlyx',
    name: 'Horse Name',
    size: 15,
    UdpdateDate: "2023-08-28T05:56:42.312Z",
    placeId: null,
    stabId: null,
    ownerId: 'cllqs7p350000ukpc3b3l92mc',
    birthDate: "2023-08-28T05:56:41.794Z",
    createdDate: "2023-08-28T05:56:42.312Z",
    halfLeaseUsersId: [],
};


describe('API Tests', () => {
    it('should get a horse by id', async () => {
        // Créer une requête simulée pour la méthode GET avec le paramètre id
        const { req, res } = createMocks({
            method: 'GET',
            query: { id: horseDataget.id },
        });

        // Appeler le gestionnaire avec la requête simulée
        await handler(req, res);

        // Vérifier le code de statut HTTP
        expect(res._getStatusCode()).toBe(200);

        // Vérifier le contenu de la réponse
        const responseBody = JSON.parse(res._getData());
        expect(responseBody.message).toBe('Get Horse ById');
        expect(responseBody.data).toEqual(horseDataget);
    });
});


// Mock updated horse data for testing
const updatedHorseData = {
    id: 'cllutf69t0001ukmw7i7co3fd',
    name: 'Updated Horse Name',
    size: 20,
    UdpdateDate: "2023-08-28T12:45:31.334Z",
    birthDate: "2023-08-28T12:45:31.334Z",
    // createdDate: "2023-08-28T12:45:31.334Z",
    placeId: 'cllqsv4zr0006ukpc2ho04l7p',
    stabId: '64ce356b69ec7fd1ecd7fc97',
    ownerId: 'test-owner-id',
    halfLeaseUsersId: ['test-user-id-1', 'cllqs7p350000ukpc3b3l92mc'],
};
const resultupdatedHorseData = {
    id: 'cllutdv910001ukjc3agwzv4q',
    name: 'Updated Horse Name',
    size: 20,
    UdpdateDate: "2023-08-28T12:45:31.334Z",
    birthDate: "2023-08-28T12:45:31.334Z",
    createdDate: "2023-08-28T12:45:31.334Z",
    placeId: 'test-place-id',
    stabId: 'test-stab-id',
    ownerId: 'test-owner-id',
    halfLeaseUsersId: ['test-user-id-1', 'test-user-id-2'],
};

describe('API Tests', () => {
    it('should update a horse by id', async () => {
        // Créer une requête simulée pour la méthode PUT avec les données mises à jour
        const { req, res } = createMocks({
            method: 'PUT',
            body: updatedHorseData,
            query: { id: 'cllutdv910001ukjc3agwzv4q' },
        });

        // Appeler le gestionnaire avec la requête simulée
        await handler(req, res);

        // Vérifier le code de statut HTTP
        expect(res._getStatusCode()).toBe(200);

        // Vérifier le contenu de la réponse
        const responseBody = JSON.parse(res._getData());
        expect(responseBody.message).toBe('Update Horse ById');
        expect(responseBody.data).toEqual(resultupdatedHorseData);
    });
});


describe('API Tests Horse Delete by Id', () => {
    it('should delete a horse by id', async () => {
        // Créer une requête simulée pour la méthode DELETE avec l'ID du cheval à supprimer
        const { req, res } = createMocks({
            method: 'DELETE',
            query: { id: 'clluteb9c0001ukhw5tmoi152' }, // Remplacez par l'ID du cheval à supprimer
        });

        // Appeler le gestionnaire avec la requête simulée
        await handler(req, res);

        // Vérifier le code de statut HTTP
        expect(res._getStatusCode()).toBe(200);

        // Vérifier le contenu de la réponse
        const responseBody = JSON.parse(res._getData());
        expect(responseBody.message).toBe('Delete Horse ById');

    });
});