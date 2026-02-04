import express from 'express';
import dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';
import { Pool } from 'pg';
import { pool } from './config.js';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: "http://localhost:5174",
  
  })
);
app.get("/projects", async (req, res) => {
    const client = await pool.connect();
   
    try {
        const result = await client.query('SELECT * from PROJECTS where type=$1', ['project']);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        client.release();
    }
});
app.get("/experience", async (req, res) => {
    const client = await pool.connect();
   
    try {
        const result = await client.query('SELECT * from PROJECTS where type=$1 order by created_at' , ['experience'] );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        client.release();
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
