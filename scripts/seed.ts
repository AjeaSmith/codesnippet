const { PrismaClient } = require('@prisma/client');

async function seedDatabase() {
  const prisma = new PrismaClient();

  try {
    const existingFolders = await prisma.folder.findMany({
      where: {
        name: {
          in: ['Favorites', 'All Snippets', 'Recommended'], // List of default folder names
        },
      },
    });

    if (existingFolders.length === 0) {
      // Create three default folders
      await prisma.folder.createMany({
        data: [
          { name: 'Favorites' },
          { name: 'All Snippets' },
          { name: 'Recommended' },
        ],
      });
      console.log('Default folders created successfully.');
    } else {
      console.log('Default folders already added');
      return;
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
