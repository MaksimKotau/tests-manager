# Scripts Manager

This project is a **Scripts Manager** designed to create and manage simple pipelines via a UI. It enables users to define, execute, and track pipelines that run scripts in both parallel and sequential modes. All pipelines and logs are stored in a database for easy access and retrieval.

## Technologies

- **Docker**: Used for containerizing the application and database.
- **Next.js**: Framework for the UI and server-side rendering.
- **MariaDB**: Relational database for storing pipelines and logs.
- **Sequelize**: ORM for database interactions and migrations.

## Setup

1. Copy the `.env.example` file to `.env`:

    ```bash
    cp .env.example .env
    ```

2. Open the `.env` file and set values for the environment variables without quotes. Example:

    ```bash
    DB_USER=user
    DB_PASSWORD=password
    DB_NAME=tests_runner
    MYSQL_ROOT_PASSWORD=mypassword
    ```

## Running the Application

### Development

```bash
docker-compose -f ./docker-compose.dev.yaml up
docker-compose -f ./docker-compose.prod.yaml up
```