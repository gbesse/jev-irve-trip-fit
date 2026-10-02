// Objectif : effectuer un appel Jev synthétique uniquement sur demande explicite.
import { createJevClient } from "../src/jev.mjs";
import { assessChargingFit } from "../src/index.mjs";
const client = createJevClient();
const résultat = await assessChargingFit({
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
}, client);
console.log(JSON.stringify({ décision: résultat.decision, confiance: résultat.confidence, usage: résultat.usage }, null, 2));
