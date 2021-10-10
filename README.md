# Mean Stack Traing

<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Guides](#usage)

## About <a name="about"></a>

The Project is dedicated for training of MEAN Stack development. The End product can be used as a boiler plate for
future projects that are based on the similar dev technologies and SRS related but not limited to the following.

- Authentication with Roles
- Blogging/Newsletter
- Event Management
- Teams/Contributors
- Pages
- API with Basic and Bearer Authentication

## Getting Started <a name="getting_started"></a>

Please follow the instructions

#### Setting up on localhost

- Create a database in postgres `js_cms`
- Create a `.env` file that stores all the credentials for postgres database.
- Create a entry in `etc/hosts` for hosts `127.0.0.1 jscms.test` and a subdomain entry for host `127.0.0.1 subdomain.jscms.test`
- Run `npm i`
- Run the sequelize migrations by running `npm run migrations` for initial install
- Run `npm run dev` to start the server listening to port `6000`
- You can verify configuring your domains by visiting `jscms.test:6000` and `subdomain.jscms.test`

### Prerequisites

- Install Postgres
- Intall PgAdmin 4
- Installing nvm
- Installing and default to nodejs 14
