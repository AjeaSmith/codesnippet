'use server';
import prisma from '@/app/lib/db';
import { CodeSnippet, Folder } from '@/app/lib/definitions';
import { FolderIcon } from '@heroicons/react/24/solid';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// ---------FETCH DATA------------
export async function fetchFolders(): Promise<Folder[]> {
  try {
    const folders = await prisma.folder.findMany();
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
    console.log('SNIPPETS:', error);
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

// ---------MUTATE DATA------------
export async function createFolder(name: string) {
  try {
    const folder = await prisma.folder.create({
      data: {
        name,
        icon: FolderIcon.toString(),
      },
    });
    revalidatePath(`/dashboard/folder/${folder.id}`);
    return folder.id;
  } catch (err) {
    console.log(err);
    return {
      message: 'Database Error: Failed to Create Folder.',
    };
  }
}

export async function deleteFolder(id: string) {
  try {
    // Step 1: Unlink snippets from the folder
    const snippets = await prisma.codeSnippet.findMany({
      where: { folderId: id },
      select: { id: true },
    });

    await prisma.folder.update({
      where: { id },
      data: {
        snippets: {
          disconnect: snippets.map((snippet) => ({ id: snippet.id })),
        },
      },
    });

    // Step 2: Delete the folder
    await prisma.folder.delete({ where: { id } });

    // Step 3: Delete the snippets
    await prisma.codeSnippet.deleteMany({
      where: { id: { in: snippets.map((snippet) => snippet.id) } },
    });
  } catch (error) {
    console.log('FOLDER DELETION:', error);
  }
  revalidatePath('/dashboard/folder/AllSnippets');
}

export async function createSnippet(formData: {
  title: string;
  code: string;
  folderId?: string | null; // Make folderId optional
  tags: string[];
  language: string;
}) {
  const { title, code, folderId, tags, language } = formData;

  try {
    await prisma.codeSnippet.create({
      data: {
        title,
        code,
        folder: folderId
          ? {
              connect: {
                id: folderId,
              },
            }
          : undefined,
        tags,
        language,
      },
    });
  } catch (error) {
    return {
      message: `Database Error: Failed to Create Code Snippet. ${error}`,
    };
  }
  revalidatePath('/dashboard/folder/AllSnippets');
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
  revalidatePath(`/dashboard/code/${id}`);
  redirect(`/dashboard/code/${id}`);
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
