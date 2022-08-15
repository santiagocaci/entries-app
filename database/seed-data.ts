interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pending - Labore id duis fugiat consequat magna.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'In-Progress - Excepteur consectetur anim cupidatat non.',
      status: 'in-progress',
      createdAt: Date.now() + 1000000,
    },
    {
      description:
        'Finished - Aute Lorem elit eu consectetur occaecat ex consectetur excepteur proident labore magna laboris ex dolor.',
      status: 'finished',
      createdAt: Date.now() + 2000000,
    },
  ],
};
