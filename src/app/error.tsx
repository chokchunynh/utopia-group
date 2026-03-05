"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0F1E] text-white px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <p className="text-white/60 mb-6">
          We&apos;re fixing this. Please try refreshing the page.
        </p>
        <button
          onClick={() => reset()}
          className="bg-[#3B5BDB] hover:bg-[#4C6EF5] text-white px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
