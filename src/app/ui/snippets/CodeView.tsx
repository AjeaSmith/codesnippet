'use client';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeView = ({
  codeString,
  language,
}: {
  codeString: string | undefined;
  language: string | undefined;
}) => {
  return (
    <SyntaxHighlighter language={language} style={docco} showLineNumbers={true} wrapLines={true}>
      {codeString!}
    </SyntaxHighlighter>
  );
};

export default CodeView;
