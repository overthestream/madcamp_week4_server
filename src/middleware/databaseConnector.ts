const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'week4',
  password: '0129',
  port: 5432,
});

interface query {
  str: string;
  val: Array<any>;
}

const queryGenerator = async (query: query) => {
  const client = await pool.connect();
  try {
    const res = await client.query(query.str, query.val);
    client.release();
    return res.rows;
  } catch (err) {
    return err;
  }
};

export default queryGenerator;
