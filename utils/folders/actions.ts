'use server';
import prisma from '@/app/_lib/db';
import { revalidatePath } from 'next/cache';
import { cache } from 'react';

export async function createFolder(name: string) {
  try {
    await prisma.folder.create({
      data: {
        name,
        icon: 'folder',
      },
    });

    revalidatePath('/');
  } finally {
    await prisma.$disconnect();
  }
}

export const getFolders = cache(async () => {
  try {
    console.log('Its called');
    const folders = await prisma.folder.findMany();

    if (!folders.length) {
      // Handle error - look at docs
    }

    return folders;
  } finally {
    await prisma.$disconnect();
  }
});
