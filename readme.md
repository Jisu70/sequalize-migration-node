To intialise migration : npx sequelize-cli init
To create model : npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
To generate migration : npx sequelize-cli migration:generate --name create-user-model
To start migration : npx sequelize-cli db:migrate
To start migration in specific environment : npx sequelize-cli db:migrate --env production
Undo specific migration:  npx sequelize-cli db:migrate:undo --name <migration-filename>

Seeding data:
npx sequelize-cli seed:generate --name <seeder-name>
npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo:all
Database rollback : npx sequelize-cli db:migrate:undo:all


pkg.json : 
 "migrate": "npx sequelize-cli db:migrate",
 "migrate:undo": "npx sequelize-cli db:migrate:undo"

