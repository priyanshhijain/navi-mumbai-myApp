"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const FileUploadForm = () => {
  const { register, handleSubmit } = useForm();
  const [fileArray, setFileArray] = useState<File[]>([]);

  // Handle file input change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files;
    if (newFiles) {
      // Convert FileList to an array
      const newFileArray = Array.from(newFiles);

      // Combine the new files with the existing files
      setFileArray((prevFiles) => [...prevFiles, ...newFileArray]);
    }
  };

  // Handle form submission
  const onSubmit = (data: any) => {
    if (fileArray.length > 0) {
      // Process the selected files
      console.log("Selected files:", fileArray);

      // Example: Upload files to a server (not implemented here)
      // uploadFiles(fileArray);
    } else {
      console.log("No files selected");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="fileInput">Select Files:</label>
      <input
        type="file"
        id="fileInput"
        multiple
        {...register('files')} // Register the input
        onChange={handleFileChange} // Update local state with new files
      />
      <button type="submit">Upload</button>

      {/* Display selected files */}
      {fileArray.length > 0 && (
        <div>
          <h3>Selected Files:</h3>
          <ul>
            {fileArray.map((file, index) => (
              <li key={index}>
                {file.name} - {file.size} bytes
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

export default FileUploadForm;
