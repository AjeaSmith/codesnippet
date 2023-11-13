'use server';
import prisma from '@/app/lib/db';
import { CodeSnippet, Folder } from '@/app/lib/definitions';
import { FolderIcon } from '@heroicons/react/24/solid';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// FETCH DATA
export async function fetchFolders(): Promise<Folder[]> {
  // test remove this to see if performance is slow in network
  noStore();

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
export async function fetchSnippetById(
  id: string
): Promise<CodeSnippet | null> {
  try {
    //  throw new Error('Fetch Failed');
    const code = await prisma.codeSnippet.findUnique({
      where: { id },
    });

    return code;
  } catch (error) {
    console.error('FETCH CODE SNIPPET:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function fetchSnippets(): Promise<CodeSnippet[]> {
  try {
    // Fetch snippets
    const snippets = await prisma.codeSnippet.findMany();

    return snippets;
  } catch (error) {
    // Handle errors appropriately
    throw error;
  }
}

export async function fetchSnippetsByFolder(
  id: string
): Promise<CodeSnippet[]> {
  try {
    const snippet = await prisma.codeSnippet.findMany({
      where: { folderId: id },
    });
    return snippet;
  } catch (error) {
    console.log('Database Error: Failed to Fetch Snippets by folder.');
    throw error;
  }
}

export async function fetchSnippetsByFavorite(): Promise<CodeSnippet[]> {
  try {
    const likedSnippets = await prisma.codeSnippet.findMany({
      where: { isFavorite: true },
    });
    return likedSnippets;
  } catch (error) {
    console.log('Database Error: Failed to Fetch Snippets by favorites.');
    throw error;
  }
}

// MUTATE DATA
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
    console.log(err);
    return {
      message: 'Database Error: Failed to Create Folder.',
    };
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

export async function createSnippet(formData: CodeSnippet) {
  const { title, code, folderId, tags, language } = formData;

  try {
    await prisma.codeSnippet.create({
      data: {
        title,
        code,
        folder: {
          connect: {
            id: folderId!, // Assuming 'folder' is an object with an 'id' property
          },
        },
        tags,
        language,
      },
    });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Code Snippet.',
    };
  }

  revalidatePath('/dashboard/folder/AllSnippets');
  redirect('/dashboard/folder/AllSnippets');
}
export async function favoriteSnippet(snippetId: string, value: boolean) {
  try {
    const updatedSnippet = await prisma.codeSnippet.update({
      where: { id: snippetId },
      data: { isFavorite: value },
    });
    revalidatePath(`/dashboard/code/${updatedSnippet.id}`);
  } catch (error) {
    console.log(error);
    return {
      message: 'Database Error: Failed to Favorite Snippet.',
    };
  }
}

export async function updateSnippetById(id: string, updatedData: CodeSnippet) {
  const { title, code, folderId, tags, language } = updatedData;

  try {
    const existingRecord = await prisma.codeSnippet.findUnique({
      where: {
        id, // Specify the unique identifier or condition to find the record
      },
    });

    if (!existingRecord) {
      return {
        message: 'Code Snippet not found.',
      };
    }

    await prisma.codeSnippet.update({
      where: {
        id, // Specify the unique identifier or condition to find the record
      },
      data: {
        title: title ? title : existingRecord.title,
        code: code ? code : existingRecord.code,
        folder: folderId
          ? {
              connect: {
                id: folderId, // Assuming 'folder' is an object with an 'id' property
              },
            }
          : {
              connect: {
                id: existingRecord.folderId!, // Assuming 'folder' is an object with an 'id' property
              },
            },
        tags: tags ? tags : existingRecord.tags,
        language: language ? language : existingRecord.language,
      },
    });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Code Snippet.',
    };
  }
  revalidatePath(`/code/${id}`);
  redirect(`/code/${id}`);
}

export async function deleteSnippetById(id: string) {
  try {
    await prisma.codeSnippet.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      message: 'Database Error: Failed to Delete Code Snippet.',
    };
  }
  revalidatePath('/dashboard/folder/AllSnippets');
  redirect('/dashboard/folder/AllSnippets');
}
