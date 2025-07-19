const LoadingSpinner = ({ size = 'md' }) => {
  const sizeClass = size === 'lg' ? 'w-12 h-12' : 'w-8 h-8';
  
  return (
    <div className="flex justify-center items-center p-2">
      <div className={`${sizeClass} border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin`} />
    </div>
  );
};

export default LoadingSpinner;