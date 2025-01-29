import PropTypes from 'prop-types';

const FileList = ({ files, onRemoveFile, className }) => {
  return (
    <div className={`border border-orange-200 rounded-lg p-4 ${className}`}>
      {files.length === 0 ? (
        <p className="text-gray-500 text-center">No files selected</p>
      ) : (
        <ul className="space-y-2">
          {files.map((file, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-orange-50 p-2 rounded-md"
            >
              <span className="text-gray-700 truncate flex-1">{file.name}</span>
              <span className="text-gray-500 text-sm mr-4">
                {(file.size / 1024).toFixed(2)} KB
              </span>
              <button
                onClick={() => typeof onRemoveFile === 'function' && onRemoveFile(index)}
                className="text-orange-500 hover:text-orange-700 focus:outline-none"
                aria-label={`Remove ${file.name}`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

FileList.propTypes = {
  files: PropTypes.array.isRequired,
  onRemoveFile: PropTypes.func,
  className: PropTypes.string,
};

FileList.defaultProps = {
  onRemoveFile: () => {},
  className: '',
};

export default FileList;