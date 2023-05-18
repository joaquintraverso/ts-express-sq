import express, { Application } from 'express';
import dbInit from './database/init';
import userRoutes from './api/routes/user.routes'

const app: Application = express();
app.use(express.json());

app.use(userRoutes);

const port = 3000;

async function Main(){
  
  try {
    await dbInit();
    app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
    });
  } catch (error) {
    console.log('Error database:', error);
  }    
}

Main().catch((error) => {
  console.log('Unhandled error:', error);
});


