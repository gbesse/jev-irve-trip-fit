// Objectif : vérifier les types publiés depuis un projet consommateur.
import { chargingFitCase, assessChargingFit, DECISIONS } from "../src/index.mjs";
import { createFakeProvider } from "../src/jev.mjs";
const dossier = chargingFitCase({
  "id": "exemple-1",
  "text": "Trajet synthétique avec recharge de nuit ; la station candidate est ouverte en continu, compatible avec le connecteur déclaré et proche de l’itinéraire calculé.",
  "source": {
    "url": "https://example.test/source-publique",
    "date": "2026-10-01"
  },
  "details": {
    "territoire": "France — cas synthétique",
    "origine": "donnée synthétique"
  }
});
void DECISIONS;
void assessChargingFit(dossier, createFakeProvider(() => ({})));
