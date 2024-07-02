import mongoose from 'mongoose';
import { database } from './index.js';

const { username, host, name, password } = database;
const URI = `mongodb+srv://${username}:${password}@${host}/${name}?retryWrites=true&w=majority&appName=Cluster0`;

const { connection } = mongoose;

connection.on('error', () => {
  console.error('🔴 Error database connection');
});

connection.on('open', () => {
  console.info('🟢 Database connected');
});

mongoose.connect(URI);
