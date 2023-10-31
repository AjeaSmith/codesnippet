import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: string;
}
const InputBox = ({ labelText, error, ...props }: Props) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-[#F4FAFF]"
      >
        {labelText}
      </label>
      <div className="mt-2">
        <input
          className={`block mb-5 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FE6C0B] sm:text-sm sm:leading-6
              ${
                error ? ' border-red-500   animate-shake' : 'border-slate-400'
              }`}
          {...props}
        ></input>
        {/* <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          
          className="block mb-5 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FE6C0B] sm:text-sm sm:leading-6"
        /> */}
      </div>
    </div>
  );
};

export default InputBox;
