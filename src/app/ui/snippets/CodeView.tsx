'use client';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeView = ({
  codeString,
  language,
}: {
  codeString: string | undefined;
  language: string | undefined;
}) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={atelierForestDark}
      showLineNumbers={true}
      wrapLines={true}
    >
      {codeString!}
    </SyntaxHighlighter>
  );
};

export default CodeView;
