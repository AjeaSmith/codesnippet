'use server';
import prisma from '@/app/_lib/db';
import { revalidatePath } from 'next/cache';

export async function createFolder(name: string) {
  try {
    await prisma.folder.create({
      data: {
        name,
        icon: 'folder',
      },
    });

    revalidatePath('/');
  } catch (err) {
    await prisma.$disconnect();
  }
}

export async function getFolders() {
  try {
    const folders = await prisma.folder.findMany();

    return folders;
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong');
  } finally {
    await prisma.$disconnect();
  }
}

export const deleteFolder = async (id: string) => {
  try {
    await prisma.folder.delete({ where: { id } });
  } catch (error) {
    console.log('FOLDER:', error);
  }
};
