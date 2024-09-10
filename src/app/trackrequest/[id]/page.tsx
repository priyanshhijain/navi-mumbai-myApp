"use client";
import Header2 from '@/components/Header2';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import MobileMenu from '@/components/MobileMenu';

const items = [
    {
        requestId: 'REQ001',
        status: 'In Process',
        reportDate: '2024-07-01',
        pendingDays: 30,
        crimeType: 'Burglary',
        description: 'A report regarding a burglary incident at a residential area.'
    },
    {
        requestId: 'REQ002',
        status: 'Resolved',
        reportDate: '2024-06-15',
        pendingDays: 15,
        crimeType: 'Theft',
        description: 'Theft incident resolved in a commercial zone.'
    },
    // Add more items as needed
];

const statusColors: {
    'In Process': string;
    Resolved: string;
    Pending: string;
    Closed: string;
} = {
    'In Process': '#ffeb3b', // Yellow
    Resolved: '#4caf50',   // Green
    Pending: '#2196f3',    // Blue
    Closed: '#f44336',     // Red
};

const DetailPage = () => {
    const { id } = useParams(); // Extract the dynamic id from the URL
    const router = useRouter(); // Hook to programmatically navigate

    // Find the item details based on the id
    const itemDetails = items.find(item => item.requestId === id) || {
        requestId: 'Unknown',
        status: 'Unknown',
        reportDate: 'Unknown',
        pendingDays: 0,
        crimeType: 'Unknown',
        description: 'No details available'
    };

    // Type assertion to satisfy TypeScript
    const statusColor = statusColors[itemDetails.status as keyof typeof statusColors] || '#000000'; // Default color

    return (
        <>
            <Header2 />
            <div className="p-4 bg-gray-200 min-h-screen">
                <div className="relative max-w-full mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8">
                    <h1 className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 text-gray-900">
                        Report Details for Request ID: <span className="text-gray-600">{id}</span>
                    </h1>

                    <div className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Overview</h2>
                        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md border border-gray-300">
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <span className="w-full sm:w-1/3 font-semibold text-gray-600">Status:</span>
                              
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                                <span className="w-full sm:w-1/3 font-semibold text-gray-600">Report Date:</span>
                                <span className="text-gray-800">{new Date(itemDetails.reportDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                                <span className="w-full sm:w-1/3 font-semibold text-gray-600">Pending Days:</span>
                                <span className="text-gray-800">{itemDetails.pendingDays} days</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <span className="w-full sm:w-1/3 font-semibold text-gray-600">Crime Type:</span>
                                <span className="text-gray-800">{itemDetails.crimeType}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Description</h2>
                        <p className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md border border-gray-300 text-gray-800">
                            {itemDetails.description}
                        </p>
                        <div className="mt-4 sm:mt-6 flex justify-end">
                            <button 
                                onClick={() => router.push('/trackrequest')} 
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 w-full mt-12 sm:pt-6 sm:hidden">
                <MobileMenu isLogin={false} />
            </div>
        </>
    );
};

export default DetailPage;
