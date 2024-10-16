import mariadb  from 'mariadb';

// Create a connection pool using environment variables
const pool = mariadb.createPool({
  host: 'mariadb',                          // Hostname
  user: process.env.DB_USER,                // Username from .env
  password: process.env.DB_PASSWORD,        // Password from .env
  database: process.env.DB_NAME,            // Database name from .env
  connectionLimit: 10                       // Max number of connections in the pool
});

// Query the database with a sample query
export const queryDatabase = async () => {
  let connection;
  try {
    // Get a connection from the pool
    connection = await pool.getConnection();
    
    // Execute a simple query
    const rows = await connection.query('SELECT 1 + 1 AS solution');
    console.log('Database query result:', rows);  // Output should be 2
  } catch (err) {
    console.error('Error querying the database:', err);
  } finally {
    // Ensure the connection is released back to the pool
    if (connection) connection.release();
  }
};

