# Pokedex Project

Welcome to the Pokedex project, a web application for exploring and filtering Pokemon data. This project is built with TypeScript, Next.js, Prisma, tRPC, and Material UI.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Implemented Features](#implemented-features)
- [Bonus Features](#bonus-features)
- [Deployment](#deployment)
- [Contribution](#contribution)
- [License](#license)

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/dagbag/interview.git
   ```

Navigate to the project directory:

bash
Copy code
cd pokedex-project
Install dependencies:

bash
Copy code
npm install
Set up your database by configuring Prisma and applying migrations:

bash
Copy code
npx prisma migrate dev
Seed the database with mock Pokemon data:

bash
Copy code
npx prisma db seed
Start the development server:

bash
Copy code
npm run dev
Open your browser and access the application at http://localhost:3000.

Project Structure
The project follows a structured organization:

pages/: Contains Next.js pages for different routes.
components/: Houses reusable React components, such as PokemonRow.
prisma/: Defines the database schema and seed data.
utils/: Contains utility functions and constants.
public/: Stores static assets like images.
Implemented Features
Part 1: Pokemon Search
Create a SQL database with Prisma.
Set up a tRPC router for Pokemon data.
Create a form to search for a single Pokemon by name.
Implement a PokemonRow component to display Pokemon details.
Part 2: Pokemon Array
Implement a tRPC route to fetch an array of Pokemon by their names.
Create a form to search for multiple Pokemon by name.
Create a PokedexTable component to display a list of Pokemon.
Part 3: Type Filtering
Create a form for selecting Pokemon types.
Implement type-based filtering in the tRPC route.
Create a FilterablePokedexTable to display Pokemon based on the selected type.
Bonus Features
Code Quality: Follow best practices and maintain clean code.
Database Schema: Optimize the schema for performance.
Pagination: Implement pagination for the Pokedex table.
Caching: Implement data caching for improved performance.
Responsive UI: Use Material UI components for a responsive design.
Deployment
The project can be deployed to a hosting platform like Vercel or Netlify. Simply set up the deployment configuration for your chosen platform.

Contribution
Contributions to this project are welcome. Please follow the standard GitHub Fork and Pull Request workflow.

License
This project is licensed under the MIT License. See the LICENSE file for details.
