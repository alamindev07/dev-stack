const LoadingSpinner = () => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500" />

      <p className="mt-4 text-sm font-medium text-slate-500">
        Loading technologies...
      </p>
    </div>
  );
};

export default LoadingSpinner;