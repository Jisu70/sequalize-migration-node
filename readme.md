Here's a sample README file for your Git project that includes the provided commands:

```markdown
# Project Name

## Introduction

This project uses Sequelize as the ORM for database management. Below are the commands to initialize migrations, create models, and manage seed data.

## Getting Started

### Initializing Migrations

To initialize the migration setup, run:

```bash
npx sequelize-cli init
```

### Creating a Model

To create a new model (e.g., User) with specified attributes, use:

```bash
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

### Generating Migrations

To generate a migration for a model, run:

```bash
npx sequelize-cli migration:generate --name create-user-model
```

### Running Migrations

To start the migration process, execute:

```bash
npx sequelize-cli db:migrate
```

To run migrations in a specific environment (e.g., production), use:

```bash
npx sequelize-cli db:migrate --env production
```

### Undoing Migrations

To undo a specific migration, run:

```bash
npx sequelize-cli db:migrate:undo --name <migration-filename>
```

### Seeding Data

To create a new seeder, use:

```bash
npx sequelize-cli seed:generate --name <seeder-name>
```

To seed all data, run:

```bash
npx sequelize-cli db:seed:all
```

To undo all seeded data, execute:

```bash
npx sequelize-cli db:seed:undo:all
```

### Database Rollback

To roll back all migrations, run:

```bash
npx sequelize-cli db:migrate:undo:all
```

## Scripts in package.json

The following scripts are included in the `package.json` file:

```json
{
  "scripts": {
    "migrate": "npx sequelize-cli db:migrate",
    "migrate:undo": "npx sequelize-cli db:migrate:undo"
  }
}
```

## Conclusion

These commands will help you manage migrations and seeding in your Sequelize-based project. For more information, refer to the [Sequelize CLI documentation](https://sequelize.org/master/manual/migrations.html).
```

Feel free to modify the project name and any other details as needed!