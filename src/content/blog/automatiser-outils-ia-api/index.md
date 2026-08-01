---
title: "Automatiser la création d'outils IA depuis une API"
description: "Transformer automatiquement chaque endpoint d'une API (décrite en OpenAPI) en outil MCP utilisable par une IA : un POC avec Redmine, le bundle Symfony MCP, et les questions de sécurité que ça soulève."
pubDate: 2025-08-02
tags: ['ia', 'mcp', 'symfony']
cover: ./cover.png
coverAlt: "Illustration : un fichier openapi.yaml transformé via MCP en outils get_issues(), get_projects(), get_time_entries()"
---

## Introduction

Et si on pouvait demander à l'IA d'interagir avec n'importe quelle API ? Nous avons testé cette approche avec Redmine (un outil de gestion de tickets, projets, utilisateurs, etc.), mais le concept pourrait s'appliquer à n'importe quelle API via le Model Context Protocol (MCP).

## Qu'est-ce qu'OpenAPI ?

OpenAPI (anciennement Swagger) est un standard qui décrit comment une API fonctionne. C'est comme un « manuel d'instruction » pour les développeurs qui explique :

- Quels endpoints sont disponibles
- Quels paramètres accepter
- Quels types de données retourner
- Comment s'authentifier

## Qu'est-ce que MCP et les « tools » ?

MCP (Model Context Protocol) est un protocole qui permet aux modèles d'IA d'interagir avec des outils externes. Un tool est une interface ou une fonction que l'IA peut appeler pour accomplir une tâche spécifique, comme effectuer un calcul, rechercher des informations sur Internet, accéder à une base de données, ou générer une image.

Exemple concret :

- Au lieu de dire à l'IA « va chercher les données sur le site web »
- On lui donne un « tool » qui dit « voici comment récupérer les données »
- L'IA peut alors utiliser ce tool intelligemment

## Le bundle Symfony MCP

Le [Symfony MCP Bundle](https://github.com/symfony/mcp-bundle) est un bundle qui facilite la création d'outils pour l'IA. Il fournit une structure standardisée pour exposer des fonctionnalités aux assistants IA.

### Exemple simple : CurrentTimeTool

Voici un exemple simple d'outil qui donne l'heure actuelle (basé sur [l'exemple officiel](https://github.com/symfony/ai/blob/main/demo/src/Mcp/Tools/CurrentTimeTool.php)) :

```php
class CurrentTimeTool implements ToolExecutorInterface
{
    public function getName(): string
    {
        return 'get_current_time';
    }

    public function getDescription(): string
    {
        return 'Récupère l\'heure actuelle';
    }

    public function getInputSchema(): array
    {
        return [
            'timezone' => [
                'type' => 'string',
                'description' => 'Fuseau horaire (ex: Europe/Paris)',
                'required' => false
            ]
        ];
    }

    public function getOutputSchema(): ?array
    {
        return [
            'type' => 'object',
            'properties' => [
                'current_time' => ['type' => 'string'],
                'timezone' => ['type' => 'string']
            ]
        ];
    }

    public function call($input): ToolCallResult
    {
        $timezone = $input->arguments['timezone'] ?? 'UTC';
        $time = new DateTime('now', new DateTimeZone($timezone));

        return new ToolCallResult(json_encode([
            'current_time' => $time->format('Y-m-d H:i:s'),
            'timezone' => $timezone
        ]));
    }
}
```

Comment ça fonctionne :

- `getInputSchema()` : définit les paramètres que l'IA peut utiliser
- `getOutputSchema()` : définit ce que le tool va renvoyer
- `call()` : l'action que l'outil effectue

## Génération automatique depuis la documentation API

L'approche que nous avons eue est de transformer chaque endpoint GET en outil que l'IA peut utiliser à sa guise. Du moment qu'on a la documentation de l'API (par exemple en format YAML), on peut la parser pour générer dynamiquement un outil par endpoint. Plus besoin de créer manuellement chaque outil !

Chaque endpoint de l'API devient automatiquement un tool :

- `/issues.{format}` → `get_issues` → « Liste les tickets »
- `/projects.{format}` → `get_projects` → « Liste les projets »
- `/users.{format}` → `get_users` → « Liste les utilisateurs »
- `/time_entries.{format}` → `get_time_entries` → « Qui a passé du temps ? »

## Résolution de problèmes complexes

Avec la liste de tous les endpoints à sa disposition, l'IA a la capacité de traiter des problèmes assez complexes en utilisant différents outils intelligemment.

Exemple concret : en testant avec Claude 3.5 Sonnet, nous lui avons demandé « Pour le projet Test-MCP, montre-moi le temps passé pour chaque ticket de ce projet ».

<img src="/blog/redmine-mcp-demo.webp" alt="Démo animée : l'agent IA interroge Redmine via les tools MCP générés automatiquement" width="800" height="783" loading="lazy" decoding="async" />

L'IA a alors orchestré plusieurs appels automatiquement :

1. `get_projects` avec le nom « Test-MCP » → récupération de l'ID du projet (535)
2. `get_time_entries` avec project_id = 535 → liste des temps saisies pour ce projet
3. `get_issues` pour chaque time entry → détails des tickets correspondants

Résultat : un tableau lisible avec pour chaque ticket :

- Nom et description du ticket
- Temps passé par utilisateur
- Détails des entrées de temps

Ce que ça montre : l'IA peut combiner intelligemment plusieurs outils pour résoudre des requêtes complexes, sans que vous ayez besoin de connaître les détails techniques de l'API.

## Les limites de cette approche

Sécurité et contrôle : cette approche ouvre de nombreuses possibilités, mais soulève aussi des questions de sécurité qu'il faut prendre au sérieux.

Le danger des opérations d'écriture : donner à une IA un accès complet à une API peut être dangereux. Imaginez si l'IA pouvait :

- Supprimer des tickets ou des projets
- Modifier des configurations critiques
- Créer des données en masse
- Effectuer des actions administratives

Pourquoi nous avons limité aux endpoints GET : dans notre test avec Redmine, nous avons volontairement restreint l'accès aux méthodes de lecture uniquement. L'IA peut consulter les données mais ne peut pas les modifier.

Réflexions sur la sécurité :

- Limiter aux opérations de lecture semble prudent
- Valider les permissions utilisateur pourrait être nécessaire
- Logger les actions de l'IA pour tracer l'activité
- Tester en environnement sécurisé avant production

Cette limitation nous semble importante pour un usage en production.

## Et si on automatise cela pour toutes les APIs ?

C'est exactement ce que font ces projets :

- [Swagger-MCP](https://github.com/Vizioz/Swagger-MCP) : un wrapper MCP pour les définitions Swagger/OpenAPI qui génère automatiquement des outils pour n'importe quelle API.
- [swagger-mcp](https://github.com/danishjsheikh/swagger-mcp) : un serveur MCP qui extrait dynamiquement les outils depuis les fichiers swagger.json et les rend disponibles aux assistants IA.

L'idée est simple : donnez une URL vers une documentation Swagger/OpenAPI, et ces outils génèrent automatiquement tous les outils MCP correspondants.

## Applications possibles

Cette approche peut s'appliquer à n'importe quelle API :

- **GitHub** → « Montre-moi mes projets les plus actifs »
- **Stripe** → « Quels sont mes clients les plus fidèles ? »
- **Slack** → « Résume les messages importants de cette semaine »
- **Jira** → « Quels tickets sont en retard ? »

## Conclusion

En donnant à l'IA un accès structuré et maîtrisé aux APIs, on redéfinit les interfaces logicielles : plus intuitives, plus conversationnelles, et plus puissantes. Une nouvelle couche d'abstraction émerge, celle du dialogue intelligent avec les systèmes.

Technologies utilisées :

- Model Context Protocol (MCP)
- OpenAPI Specification
- Symfony (pour l'implémentation)
