const codeSnippets = [
  {
    id: '1234',
    title: 'React test snippet',
    isFavorite: true,
    code: `<div className="py-10">
        <Link href="/dashboard/folder/AllSnippets" className="underline">
          <span className="flex">
            <ArrowLeftIcon className="w-6 mr-2" />
            Back to Dashboard
          </span>
        </Link>
      </div>`,
    tags: ['React', 'Tailwindcss'],
    folder: 'folderId',
    language: 'javascript',
  },
  {
    id: '12378',
    title: 'Swift test snippet',
    isFavorite: true,
    code: `<div className="py-10">
        <Link href="/dashboard/folder/AllSnippets" className="underline">
          <span className="flex">
            <ArrowLeftIcon className="w-6 mr-2" />
            Back to Dashboard
          </span>
        </Link>
      </div>`,
    tags: ['Swift'],
    folder: 'folderId',
    language: 'swift',
  },
  {
    id: '7w892',
    title: 'Python test snippet',
    isFavorite: false,
    code: `<div className="py-10">
        <Link href="/dashboard/folder/AllSnippets" className="underline">
          <span className="flex">
            <ArrowLeftIcon className="w-6 mr-2" />
            Back to Dashboard
          </span>
        </Link>
      </div>`,
    tags: ['Python'],
    folder: 'folderId',
    language: 'python',
  },
];

// model CodeSnippet {
//   id     String      @id @default(auto()) @map("_id") @db.ObjectId
//   title  String
//   isFavorite Boolean? @default(false)
//   code   String
//   tags   String[]

//   folder Folder?  @relation(fields: [folderId], references: [id])
//   folderId String? @db.ObjectId
//   language String
// }
