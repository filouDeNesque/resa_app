import React from "react";
import Layout from "~/components/Layout/Layout";
const AboutPage = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="md:w-2/3  justify-center p-8	">
          <h1 className="mb-4 text-3xl font-semibold text-[#00122D]">
            À Propos de Stable Mate
          </h1>

          <p className="text-[#1F3C64]">
            Stable Mate - Équitation Connectée est une application innovante qui
            facilite la mise en relation entre les propriétaires de chevaux, les
            écuries et les cavaliers intéressés par la demi-pension.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-[#00122D]">Fonctionnalités clés :</h2>
          <ul className="list-inside list-disc text-[#1F3C64]">
            <li>
              <strong>🏠 Écuries :</strong> Les écuries peuvent utiliser
              l&apos;application pour afficher les places disponibles pour la
              demi-pension. Elles peuvent gérer leurs disponibilités, gérer les
              réservations des demi-pensionnaires et rendre leurs chevaux
              disponibles à la demi-pension.
            </li>
            <li>
              <strong>👤 Propriétaires :</strong> Les propriétaires de chevaux
              peuvent mettre leurs chevaux disponibles à la demi-pension. Ils
              peuvent réserver des créneaux dans un calendrier pour prévenir les
              demi-pensionnaires des disponibilités.
            </li>
            <li>
              <strong>📆 Calendrier :</strong> L&apos;application propose un
              calendrier interactif où les propriétaires et les
              demi-pensionnaires peuvent réserver des créneaux pour organiser
              les séances d&apos;équitation.
            </li>
            <li>
              <strong>🔎 Recherches :</strong> Les cavaliers peuvent effectuer
              des recherches en fonction de leurs préférences, telles que la
              localisation, le niveau de compétence du cheval, etc. Cela leur
              permet de trouver des chevaux adaptés à la demi-pension.
            </li>
            <li>
              <strong>💬 Messagerie :</strong> La messagerie intégrée facilite
              la communication entre les propriétaires, les écuries et les
              cavaliers. Ils peuvent discuter, planifier les détails et échanger
              des informations importantes.
            </li>
          </ul>

          <h2 className="mt-6 text-xl font-semibold">Avantages :</h2>
          <ul className="list-inside list-disc text-[#1F3C64]">
            <li>
              <strong>✅ Facilité :</strong> L&apos;application simplifie le
              processus de recherche et de réservation d&apos;une demi-pension,
              offrant une expérience transparente pour les propriétaires et les
              cavaliers.
            </li>
            <li>
              <strong>✅ Flexibilité :</strong> Les propriétaires et les
              demi-pensionnaires peuvent gérer leurs disponibilités et leurs
              réservations de manière flexible via le calendrier.
            </li>
            <li>
              <strong>✅ Communication Améliorée :</strong> La messagerie
              intégrée facilite la communication en temps réel entre les parties
              prenantes, améliorant ainsi la collaboration.
            </li>
            <li>
              <strong>✅ Large Choix :</strong> Les cavaliers ont accès à une
              variété de chevaux disponibles à la demi-pension, adaptés à leurs
              besoins et préférences.
            </li>
          </ul>

          <p className="mt-6">
            Rejoignez StableMate et créez des connexions plus fortes entre
            propriétaires, écuries et cavaliers. 🐎🌟
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
