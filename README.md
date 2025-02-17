# Système d'Anticipation des Commandes Pâtisserie

Application web permettant l'anticipation et l'automatisation des commandes en pâtisserie basée sur divers facteurs (météo, événements, tourisme).

## Technologies

- **Backend**: Symfony 6+ avec API Platform
- **Frontend**: React 18 avec Material UI
- **Base de données**: Mysql
- **Authentification**: JWT
- **Documentation API**: OpenAPI/Swagger
- **Génération PDF**: TCPDF
- **Notifications**: Mercure

## Structure du Projet

- `/api` - Backend Symfony
- `/client` - Frontend React
- `/docs` - Documentation

## Prérequis

- PHP 8.1+
- Composer
- Node.js 16+
- npm ou yarn
- MySql
- Symfony CLI

## Installation

1. Cloner le repository
2. Configuration du backend (dossier /api):
   ```bash
   composer install
   symfony console doctrine:database:create
   symfony console doctrine:migrations:migrate
   ```

3. Configuration du frontend (dossier /client):
   ```bash
   npm install
   npm run dev
   ```

## Fonctionnalités Principales

1. Gestion des boutiques et utilisateurs
2. Suivi des ventes et prévisions
3. Automatisation des commandes
4. Génération de rapports PDF
5. Système de notifications

## Modèles de Données

- User (Utilisateurs)
- Store (Points de vente)
- Sale (Historique des ventes)
- Product (Catalogue produits)
- Event (Événements impactant la fréquentation)
- Weather (Données météorologiques)
- Tourism (Données touristiques)
- Forecast (Prévisions de fréquentation)
- Media (id, fichier, type, boutique_id, utilisateur_id)
- Order (Commandes générées)
- OrderLine (détail des produits dans une commande)
- Production (Consolidation des commandes)
- Notification (Système d'alertes)
