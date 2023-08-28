import { createMocks } from 'node-mocks-http';
import handler from '../byhalfLeaseUsersId/[halfLeaseUsersId]';


// const halfLeaseUsersId = "cllqs7p350000ukpc3b3l92mc"
const halfLeaseUsersId = "cllqs7p350000ukpc3b3l92mc"

describe('API Tests', () => {
    it('should get a horse by id', async () => {
        // Créer une requête simulée pour la méthode GET avec le paramètre id
        const { req, res } = createMocks({
            method: 'GET',
            query: {  halfLeaseUsersId:  halfLeaseUsersId },
        });

        // Appeler le gestionnaire avec la requête simulée
        await handler(req, res);

        // Vérifier le code de statut HTTP
        expect(res._getStatusCode()).toBe(200);

        // Vérifier le contenu de la réponse
        const responseBody = JSON.parse(res._getData());
        expect(responseBody.message).toBe('Get Horse ByHalfLeaseUsersId');
        console.log("responseBody")
        console.log(responseBody)
        //expect(responseBody.data).toEqual(horseDataget);
    });
});