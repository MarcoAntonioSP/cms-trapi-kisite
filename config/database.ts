// strapi-api/config/database.ts
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      // Usa o domínio privado fornecido pelo Railway
      host: env('RAILWAY_PRIVATE_DOMAIN', env('PGHOST')),
      port: env.int('PGPORT', 5432),
      // Nome do banco de dados
      database: env('PGDATABASE', env('POSTGRES_DB')),
      // Usuário do banco de dados
      user: env('PGUSER', env('POSTGRES_USER')),
      // Senha do banco de dados
      password: env('PGPASSWORD', env('POSTGRES_PASSWORD')),
      // Configuração de SSL, necessária para conexões seguras
      ssl: {
        rejectUnauthorized: false,
      },
      // Força o uso de IPv4 para evitar problemas com endereços IPv6
      family: 4,
    },
    debug: false,
  },
});
