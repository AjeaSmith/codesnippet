'use server';
import prisma from '@/app/lib/db';
import { FolderIcon } from '@heroicons/react/24/solid';
import { Folder } from '@/app/_types/Folder';
import { revalidatePath } from 'next/cache';

export async function createFolder(name: string) {
  try {
    await prisma.folder.create({
      data: {
        name,
        icon: FolderIcon.toString(),
      },
    });

    revalidatePath('/');
  } catch (err) {
    await prisma.$disconnect();
  }
}

export async function getFolders(): Promise<Folder[]> {
  try {
    //  throw new Error('Fetch Failed');
    const folders = await prisma.folder.findMany();
    if (!folders.length) {
      throw new Error('Fetch Failed');
    }
    return folders;
  } catch (error) {
    console.error('FETCH FOLDERS:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function deleteFolder(id: string) {
  try {
    await prisma.folder.delete({ where: { id } });
    revalidatePath('/');
  } catch (error) {
    console.log('FOLDER DELETION:', error);
  }
}
