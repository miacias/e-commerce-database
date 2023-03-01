# E-Commerce-Database
Secure back-end Sequelize database managing commercial products

## Description

This project integrates an API into a database with fully functioning C.R.U.D. operations, thus acting as a fully functional database for an e-commerce environment. With a tool such as this, a business owner could manage and keep track of their products and services.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Contact](#contact)
- [Credits](#credits)
- [License](#license)


## Installation

To run this back-end database, please clone this repository locally to your machine. 
1. Be sure to install Node.js version 16 and run `npm i` in the root folder to install MySQL2, dotenv, Express, Nodemon, and Sequelize packages.
2. Create and adjust a .env file with environment variables to match the MySQL login config file.
3. In the terminal's root folder, initialize MySQL with `mysql -u root -p` (or `mysql -uroot` if you do not use a password) to log into MySQL.
4. Create the database with `source db/schema.sql` then `quit` from MySQL.
5. Seed the database with information with `npm run seed` then turn on the server with `npm run watch`.
6. Follow the given API routes to view, add, update, or delete information!


## Usage

After opening the port locally to `localhost:3001/api`, open an API client such as Insomnia or Postman to navigate through different the different routes available, which are `/categories`, `/products`, and `/tags`.

[See demonstration of how it works here!](https://youtu.be/QLrlKuN1JIA)


## Contribution

No contributions at this time, thank you for your interest.


## Tests

No testing provided at this time.


## Contact

- creator: [miacias](https://github.com/miacias)
- email: [miaciasullo@gmail.com](mailto:miaciasullo@gmail.com)


## Credits

Documentation referenced:

- Mozilla Development Network
- Stack Overflow forums
- Sequelize

Tools used:

- [VS Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [MySQL2 package](https://www.npmjs.com/package/mysql2)
- [dotenv package](https://www.npmjs.com/package/dotenv)
- [Sequelize package](https://sequelize.org/)
- [Express package](https://expressjs.com/)
- [Nodemon package](https://www.npmjs.com/package/nodemon)

U. Penn Bootcamp instructor(s): 

- [Dan Gross](https://github.com/DanielWGross)
- [Andrew Hojnowski](https://github.com/aHojo)
- [C. Ross King](https://github.com/RomeoKilo125/)

U. Penn Bootcamp study groups:

- [Josh Eflin](https://github.com/JoshEflin)

## License
  
MIT

[![License](https://img.shields.io/badge/license-MIT-blue?logo=github)](https://github.com/miacias/e-commerce-database/blob/main/LICENSE)
