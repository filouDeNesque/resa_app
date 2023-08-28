import { createMocks } from 'node-mocks-http';
import handler from './read';
import { type NextApiRequest, type NextApiResponse } from 'next';
import { type Horse } from '~/types/Horse.type';



describe('API Tests', () => {
    it('should get a horse by id', async () => {
        // Créer une requête simulée pour la méthode GET avec le paramètre id
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: 'GET',
        });

        // Appeler le gestionnaire avec la requête simulée
        await handler(req, res);

        // Vérifier le code de statut HTTP
        expect(res._getStatusCode()).toBe(200);

        // Vérifier le contenu de la réponse

        const responseBodyString = res?._getData() as string;
        const responseBody = JSON.parse(responseBodyString) as { message: string, data: null | Horse }; expect(responseBody.message).toBe('API Horse read All');
        console.log(responseBody)
        //expect(responseBody.data).toEqual(horseDataget);
    });
});