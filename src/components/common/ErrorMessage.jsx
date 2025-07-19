import { HiXMark } from 'react-icons/hi2';

const ErrorMessage = ({ message, onDismiss }) => {
  if (!message) return null;

  return (
    <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-red-800">{message}</p>
        {onDismiss && (
          <button type="button" onClick={onDismiss} className="text-red-500 hover:text-red-700">
            <HiXMark className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;