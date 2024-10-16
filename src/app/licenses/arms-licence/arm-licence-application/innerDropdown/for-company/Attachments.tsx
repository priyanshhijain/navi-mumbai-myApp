"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faTimes } from '@fortawesome/free-solid-svg-icons';

const Attachments: React.FC = () => {
    const [specialConsideration, setSpecialConsideration] = useState<File[]>([]);
    const [writtenUndertaking, setWrittenUndertaking] = useState<File[]>([]);
    const [boardResolution, setBoardResolution] = useState<File[]>([]);
    const [foundingDocuments, setFoundingDocuments] = useState<File[]>([]);
    const [safeUseUndertaking, setSafeUseUndertaking] = useState<File[]>([]);

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setFiles: React.Dispatch<React.SetStateAction<File[]>>
    ) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            setFiles(selectedFiles);
        }
    };

    const removeFile = (
        index: number,
        setFiles: React.Dispatch<React.SetStateAction<File[]>>,
        files: File[]
    ) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
    };

    const renderFileSection = (
        label: string,
        files: File[],
        setFiles: React.Dispatch<React.SetStateAction<File[]>>,
        inputId: string
    ) => (
        <div className="flex items-center mt-4">
            <div className="flex items-center space-x-2">
                <input
                    type="file"
                    id={inputId}
                    className="hidden"
                    multiple
                    onChange={(e) => handleFileChange(e, setFiles)}
                />
                <FontAwesomeIcon
                    icon={faPaperclip}
                    className="text-gray-700 cursor-pointer"
                    onClick={() => document.getElementById(inputId)?.click()}
                />
                <h5 className="text-lg text-gray-700">{label}</h5>
            </div>
            <div className="flex flex-wrap items-center ml-4">
                {files.map((file, index) => (
                    <div key={index} className="flex items-center mr-2">
                        <p className="text-sm text-gray-600">{file.name}</p>
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="text-red-500 cursor-pointer ml-2"
                            onClick={() => removeFile(index, setFiles, files)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <form className="flex flex-col gap-6">
            <div className="text-gray-900 dark:text-gray-100">
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faPaperclip} className="text-gray-500 dark:text-gray-400 text-xl font-bold" />
                    <h3 className="text-xl font-bold">Attachments</h3>
                </div>
                <hr className="border-gray-500 dark:border-gray-400 mt-2" />
            </div>

            {renderFileSection(
                "Written undertaking on the letterhead of the company applicant duly assigned",
                writtenUndertaking,
                setWrittenUndertaking,
                "written-undertaking-upload"
            )}
            {renderFileSection(
                "Original copy of the board resolution or authority letter",
                boardResolution,
                setBoardResolution,
                "board-resolution-upload"
            )}
            {renderFileSection(
                "Certified copies of founding documents of the company",
                foundingDocuments,
                setFoundingDocuments,
                "founding-documents-upload"
            )}
            {renderFileSection(
                "Safe use and storage of firearms undertaking in Form S-2",
                safeUseUndertaking,
                setSafeUseUndertaking,
                "safe-use-undertaking-upload"
            )}
            {renderFileSection(
                "Claims for Special Consideration for Obtaining the License",
                specialConsideration,
                setSpecialConsideration,
                "special-consideration-upload"
            )}
        </form>
    );
};

export default Attachments;
