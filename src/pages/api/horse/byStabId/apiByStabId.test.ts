import { createMocks } from 'node-mocks-http';
import handler from '../byStabId/[stabId]';


const stabId = "64ce356b69ec7fd1ecd7fc97"

describe('API Tests', () => {
    it('should get a horse by id', async () => {
        // Créer une requête simulée pour la méthode GET avec le paramètre id
        const { req, res } = createMocks({
            method: 'GET',
            query: { stabId: stabId },
        });

        // Appeler le gestionnaire avec la requête simulée
        await handler(req, res);

        // Vérifier le code de statut HTTP
        expect(res._getStatusCode()).toBe(200);

        // Vérifier le contenu de la réponse
        const responseBody = JSON.parse(res._getData());
        expect(responseBody.message).toBe('Get Horse ByStabId');
        console.log(responseBody)
        //expect(responseBody.data).toEqual(horseDataget);
    });
});