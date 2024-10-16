import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTimes } from '@fortawesome/free-solid-svg-icons';

interface AttachmentsProps {
  setAttachments: (attachments: (prev: { [key: string]: File[] }) => { [key: string]: File[] }) => void;
  attachmentType: string;
  label: string;
}

const Attachments: React.FC<AttachmentsProps> = ({ setAttachments, attachmentType, label }) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);

    // Using the callback form of setAttachments
    setAttachments((prevAttachments) => ({
      ...prevAttachments,
      [attachmentType]: selectedFiles
    }));
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);

    // Use the callback form for setAttachments
    setAttachments((prevAttachments) => ({
      ...prevAttachments,
      [attachmentType]: updatedFiles
    }));
  };
  return (
    <div className="flex items-center py-3 px-3 bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg shadow-md">
      <label className="flex items-center cursor-pointer">
        <FontAwesomeIcon icon={faCamera} className="h-5 w-5 text-gray-600 mr-2" />
        <span className="text-md text-gray-700 py-2">{label}</span>
        <input type="file" multiple onChange={handleFileChange} hidden />
      </label>
      {files.length > 0 && (
        <ul className="flex items-center gap-4 ml-4">
          {files.map((file, index) => (
            <li key={index} className="flex items-center p-2 bg-gray-100 rounded-lg">
              <span className="text-sm text-gray-800 mr-2">{file.name}</span>
              <FontAwesomeIcon
                icon={faTimes}
                className="cursor-pointer text-red-500 hover:text-red-700"
                onClick={() => removeFile(index)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Attachments;
