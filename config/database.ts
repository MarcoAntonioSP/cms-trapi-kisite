// strapi-api/config/database.ts
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      // Usa o domínio privado fornecido pelo Railway (ou PGHOST como fallback)
      host: env('RAILWAY_PRIVATE_DOMAIN', env('PGHOST')),
      // Define a porta (geralmente 5432)
      port: env.int('PGPORT', 5432),
      // Define o nome do banco de dados
      database: env('PGDATABASE', env('POSTGRES_DB')),
      // Define o usuário do banco de dados
      user: env('PGUSER', env('POSTGRES_USER')),
      // Define a senha do banco de dados
      password: env('PGPASSWORD', env('POSTGRES_PASSWORD')),
      // Configuração de SSL (necessária em muitos casos no Railway)
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
