const mysql =  require('mysql2/promise');

// Create a connection pool using environment variables

const pool = mysql.createPool({
  host: process.env.DB_HOST,      
  user: process.env.DB_USER,    
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME,    
});

export const queryDatabase = async () => {
  const connection = await pool.getConnection();
  const [rows, fields] = await connection.execute('SELECT 1 + 1 AS solution');
  console.log('Database query result:', rows);  // Output should be 2
  connection.release();
}
