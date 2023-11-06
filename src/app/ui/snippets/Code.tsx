'use client';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code = ({ codeString }: { codeString: string }) => {
  //   const codeString = `function createStyleObject(classNames, style) {
  //   return classNames.reduce((styleObject, className) => {
  //     return {...styleObject, ...style[className]};
  //   }, {});
  // }`;
  return (
    <SyntaxHighlighter
      language="javascript"
      style={docco}
      showLineNumbers={true}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default Code;
