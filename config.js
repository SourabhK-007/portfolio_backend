import dotenv from 'dotenv';
import { Pool } from 'pg';
dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
export const pool= new Pool({
    host: PGHOST,
    database: PGDATABASE,
    username: PGUSER,
    port: 5432,
    password: PGPASSWORD,
    ssl: {
        required: true
    }
});

