'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('ERROR:', error);
  }, [error]);

  return (
    <div className='flex flex-col justify-center items-center space-y-6 mt-20'>
      <h2 className='text-4xl'>Something went wrong!</h2>
      <p className='font-light'>{error.message}</p>
      <button
      className="bg-white px-3 text-gray-900 font-semibold py-2"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
