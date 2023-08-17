import React from "react";
import Layout from "~/components/Layout/Layout";

const Pricing = () => {
  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-screen-xl rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-6 text-center text-3xl font-semibold">
            Nos Abonnements
          </h1>
          <div className="grid grid-cols-3 gap-6">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">
                Abonnement Standard
              </h2>
              <p className="mb-4 text-gray-600">
                Accès à toutes les fonctionnalités de base
              </p>
              <p className="text-2xl font-semibold">$19/mois</p>
              <button className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                Choisir
              </button>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">Abonnement Premium</h2>
              <p className="mb-4 text-gray-600">
                Accès à toutes les fonctionnalités de base et avancées
              </p>
              <p className="text-2xl font-semibold">$39/mois</p>
              <button className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                Choisir
              </button>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">Abonnement Master</h2>
              <p className="mb-4 text-gray-600">
                Accès à toutes les fonctionnalités premium
              </p>
              <p className="text-2xl font-semibold">$79/mois</p>
              <button className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                Choisir
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
