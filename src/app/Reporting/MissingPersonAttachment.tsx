import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faTimes } from '@fortawesome/free-solid-svg-icons';

interface MissingPersonAttachmentFormInputs {
    identityProof: File[];
    recentPhotograph: File[];
    evidence: File[];
    medicalReports: File[];
}

const MissingPersonAttachment: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<MissingPersonAttachmentFormInputs>();
    const [identityProof, setIdentityProof] = useState<File[]>([]);
    const [recentPhotograph, setRecentPhotograph] = useState<File[]>([]);
    const [evidence, setEvidence] = useState<File[]>([]);
    const [medicalReports, setMedicalReports] = useState<File[]>([]);

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
        inputId: string,
        fieldName: keyof MissingPersonAttachmentFormInputs
    ) => (
        <div className="flex flex-col mt-4">
            <div className="flex items-center space-x-2">
                <input
                    type="file"
                    id={inputId}
                    className="hidden"
                    multiple
                    {...register(fieldName, { required: "This field is required" })}
                    onChange={(e) => handleFileChange(e, setFiles)}
                />
                <FontAwesomeIcon
                    icon={faPaperclip}
                    className="text-gray-700 cursor-pointer"
                    onClick={() => document.getElementById(inputId)?.click()}
                />
                <h5 className="text-lg text-gray-700">{label}</h5>
                <div className="flex flex-wrap items-center ml-4 space-x-4">
                    {files.map((file, index) => (
                        <div key={index} className="flex items-center">
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
            {errors[fieldName] && (
                <p className="text-red-500 text-sm mt-2">{errors[fieldName]?.message?.toString()}</p>
            )}
        </div>
    );

    const onSubmit: SubmitHandler<MissingPersonAttachmentFormInputs> = (data) => {
        console.log("Submitted Data:", data);
        // Handle form submission logic here, e.g., send data to an API
    };

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="text-gray-900 dark:text-gray-100">
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faPaperclip} className="text-gray-500 dark:text-gray-400 text-xl font-bold" />
                    <h3 className="text-xl font-bold">Missing Person Attachment</h3>
                </div>
                <hr className="border-gray-500 dark:border-gray-400 mt-2" />
            </div>

            {renderFileSection(
                "Identity Proof (Aadhar Card, Driving Licence, etc.)",
                identityProof,
                setIdentityProof,
                "identity-proof-upload",
                "identityProof"
            )}
            {renderFileSection(
                "Recent Photograph of a Missing Person",
                recentPhotograph,
                setRecentPhotograph,
                "recent-photograph-upload",
                "recentPhotograph"
            )}
            {renderFileSection(
                "Evidence (Photos/Videos Related to Disappearance)",
                evidence,
                setEvidence,
                "evidence-upload",
                "evidence"
            )}
            {renderFileSection(
                "Medical Reports (if the Missing Person has Known Medical Conditions)",
                medicalReports,
                setMedicalReports,
                "medical-reports-upload",
                "medicalReports"
            )}
        </form>
    );
};

export default MissingPersonAttachment;
