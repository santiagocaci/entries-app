import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';
import { Entry, IEntry } from 'models';

type Data = { message: string } | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //! Los query son siempres strings
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id))
    return res
      .status(400)
      .json({ message: `ID: ${id} no es un mongooId valido` });

  switch (req.method) {
    case 'GET':
      return getEntryById(req, res);
    case 'PUT':
      return updateEntry(req, res);

    default:
      return res
        .status(400)
        .json({ message: `Metodo: ${req.method} no valido` });
  }
}

const getEntryById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  await db.connect();
  const entry = await Entry.findById(id);
  await db.disconnect();
  if (!entry) {
    return res.status(404).json({ message: 'Entrada no encontrada' });
  }
  return res.status(200).json(entry);
};

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  await db.connect();
  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res
      .status(400)
      .json({ message: `ID: ${id} no existe en la base de datos` });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updateEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
    );

    res.status(200).json(updateEntry!);
  } catch (error) {
    error instanceof Error ? console.log(error.message) : console.log(error);

    res.status(400).json({ message: `Status no valido` });
  } finally {
    await db.disconnect();
  }
};
