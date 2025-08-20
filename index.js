import express from 'express' 
import authRoute from './router/auth.Route.js'
import dotenv from 'dotenv'
import connectDB from './lib/db.js';
import cors from 'cors'

dotenv.config();
connectDB()

const app = express();
const PORT = process.env.PORT ||5006 ;

const frontendURL = 'http://127.0.0.1:5500'

app.use(cors({
  origin: frontendURL,
  optionsSuccessStatus: 200,
}));
app.use(express.json());
app.use('/api/auth',authRoute)

app.get('/', (req, res) => {
  res.send('Hello! Server is running.');
});

app.listen(PORT,()=>{
   console.log(`Server is running at http://localhost:${PORT}`);
})