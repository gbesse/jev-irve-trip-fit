# Comment la décision est prise

Classe des bornes de recharge selon les contraintes exprimées pour un trajet et explique chaque correspondance.

Le code normalise la source et applique d’abord le cas déterministe documenté dans `src/index.mjs`. Pour les autres dossiers, Jev choisit la catégorie la plus prudente selon la compatibilité d’usage décrite, l’accessibilité, les services et les contraintes du trajet après application des filtres exacts. Une confiance inférieure à `0.8` marque le résultat pour revue humaine.

Distance, détour, puissance minimale et compatibilité exacte des connecteurs restent filtrés par le code.

Les démonstrations ne contiennent que des probabilités synthétiques. Constituez un corpus français annoté, mesurez les erreurs par catégorie et fixez vos propres seuils avant un usage opérationnel.
