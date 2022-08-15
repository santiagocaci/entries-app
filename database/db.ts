import mongoose from 'mongoose';

// 0 = disconnected
// 1 = connected
// 2 = connecting
// 3 = disconnecting

const mongoConnection = {
  isConencted: 0,
};

export const connect = async () => {
  try {
    if (mongoConnection.isConencted) {
      console.log('ya ESTABAMOS conectados');
      return;
    }

    if (mongoose.connections.length > 0) {
      mongoConnection.isConencted = mongoose.connections[0].readyState;
      if (mongoConnection.isConencted === 1) {
        console.log('usando conexion anterior');
        return;
      }
      await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL || '');
    mongoConnection.isConencted = 1;
    console.log('conectado a MongoDB:', process.env.MONGO_URL);
  } catch (error) {
    console.log(error);
  }
};

export const disconnect = async () => {
  if (mongoConnection.isConencted === 0) return;

  await mongoose.disconnect();
  mongoConnection.isConencted = 0;
  console.log('desconectado de mongodb');
};
