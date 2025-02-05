// strapi-api/config/database.ts
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', env('DATABASE_HOST')),         // Ex: "railway_private_domain" ou similar
      port: env.int('PGPORT', 5432),                       // Geralmente 5432
      database: env('POSTGRES_DB', env('DATABASE_NAME')),  // Ex: "railway"
      user: env('POSTGRES_USER', env('DATABASE_USERNAME')), // Ex: "postgres"
      password: env('POSTGRES_PASSWORD', env('DATABASE_PASSWORD')), // Senha conforme Railway
      schema: env('DATABASE_SCHEMA', 'public'),          // Geralmente "public"
      ssl: {
        rejectUnauthorized: false,                       // Necessário se o Railway exigir SSL
      },
    },
    debug: false,
  },
});
