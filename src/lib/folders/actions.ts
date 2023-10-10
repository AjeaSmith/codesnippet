import { Folder } from '@/lib/folders/types';
import prisma from '@/lib/index';

export const getFolders = async (): Promise<Folder[]> => {
  try {
    const folders = await prisma.folder.findMany();

    if (!folders.length) {
      // Handle error - look at docs
    }

    return folders;
  } finally {
    await prisma.$disconnect();
  }
};
