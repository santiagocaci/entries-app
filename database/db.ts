import mongoose from 'mongoose';

// 0 = disconnected
// 1 = connected
// 2 = connecting
// 3 = disconnecting

const mongoConnection = {
  isConencted: 0,
};

export const connect = async () => {
  if (mongoConnection.isConencted) {
    console.log('connected');
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

  await mongoose.connect('mongodb://localhost:27017/entriesdb');
  mongoConnection.isConencted = 1;
  console.log('conectado a MongoDB: ');
};

export const disconnect = async () => {
  if (mongoConnection.isConencted !== 0) return;

  await mongoose.disconnect();
  console.log('desconectado de mongodb');
};
