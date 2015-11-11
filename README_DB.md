### Create the DATABASE

* `sudo apt-get install postgresql postgresql-contrib`
* `sudo -u postgres -i`
* `createuser garage_door --pwprompt`
* `pgsql`
  * `CREATE DATABASE garage_door WITH owner=garage_door;`
  * `/connect garage_door;`
  * `CREATE EXTENSION "uuid-ossp";`
  * `exit`
* `exit`

### Migrate the database

> Note: You have to have your `config/config.json` file updated for your environment
> Note: You may with to globally install the sequelize command line package to simplify running migrations
> You can do so with `npm install -g sequelize-cli`
* `sequelize db:migrate`
