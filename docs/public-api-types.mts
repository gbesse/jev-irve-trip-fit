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
void assessChargingFit(dossier, createFakeProvider(() => ({ model: "jev-1.13.0", answers: { decision: { type: "choice", choice: "strong_fit", probabilities: { "strong_fit": 0.82, "review_required": 0.06, "weak_fit": 0.06, "no_station": 0.06 }, confidence: 0.82 } } })));

// Ces erreurs attendues protègent le contrat des consommateurs TypeScript.
// @ts-expect-error — un fournisseur doit retourner une réponse Jev complète.
createFakeProvider(() => ({}));
const result = await assessChargingFit(dossier, createFakeProvider(() => ({ model: "jev-1.13.0", answers: {} })));
const review: boolean = result.review;
void review;
// @ts-expect-error — la revue humaine est un booléen.
const incorrect: string = result.review;
void incorrect;
