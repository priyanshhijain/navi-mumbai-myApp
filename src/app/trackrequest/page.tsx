"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Header2 from '@/components/Header2';
import MobileMenu from '@/components/MobileMenu';

interface Item {
    id: number;
    requestId: string;
    status: 'In Process' | 'Resolved' | 'Pending' | 'Closed';
}

const items: Item[] = [
    { id: 1, requestId: 'REQ001', status: 'In Process' },
    { id: 2, requestId: 'REQ002', status: 'Resolved' },
    { id: 3, requestId: 'REQ003', status: 'Pending' },
    { id: 4, requestId: 'REQ004', status: 'Closed' },
    { id: 5, requestId: 'REQ005', status: 'Resolved' },
    { id: 6, requestId: 'REQ006', status: 'Resolved' },
    // Add more items as needed
];

const statusColors: { [key in Item['status']]: string } = {
    'In Process': '#fafaf9',
    'Resolved': '#f1f8f4',
    'Pending': '#f0f9ff',
    'Closed': '#fce8e8',
};

const TrackRequestPage: React.FC = () => {
    const router = useRouter();

    const handleViewDetails = (requestId: string) => {
        router.push(`/trackrequest/${requestId}`);
    };

    return (
        <>
            <Header2 />
            <div className="bg-gray-100 flex flex-col items-center justify-center py-6 px-4 sm:py-8 sm:px-6 lg:py-10 lg:px-8">
                <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-6 sm:p-8 lg:p-10">
                <h1 className="text-2xl font-bold pl-4 ">
    Track Request
</h1>

                    <ul className="w-full bg-white shadow-sm rounded-lg">
                        <li className="hidden sm:flex p-6 rounded-t-lg border-b">
                            <div className="flex-1 font-bold text-gray-900 text-center sm:text-left">
                                REQUEST ID
                            </div>
                            <div className="w-full sm:w-32 font-bold text-gray-900 text-center pr-[220px]">
                                STATUS
                            </div>
                        </li>

                        {items.map((item) => (
                            <li
                                key={item.id}
                                className="flex flex-col sm:flex-row justify-between items-center p-6 bg-white hover:bg-gray-50 transition duration-300 border-l-4 mb-4 sm:mb-2"
                                style={{
                                    borderColor: statusColors[item.status],
                                }}
                            >
                                <div className="flex-1 font-medium text-gray-900 text-center sm:text-left">
                                    <span className="block sm:hidden font-bold text-gray-900">REQUEST ID:</span>
                                    {item.requestId}
                                </div>
                                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0 w-full sm:w-auto">
                                    <span className="block sm:hidden font-bold text-gray-900">STATUS:</span>
                                    <span
                                        className={`inline-flex items-center justify-center min-w-[100px] px-4 py-2 text-xs sm:text-sm font-semibold text-gray-800 rounded-md ring-1 shadow-sm ${
                                            item.status === 'Resolved'
                                                ? 'bg-[#d0f0c0] ring-[#a3c940]'
                                                : item.status === 'In Process'
                                                    ? 'bg-[#fefbd0] ring-[#f4c300]'
                                                    : item.status === 'Pending'
                                                        ? 'bg-[#d0eaff] ring-[#a1c4fd]'
                                                        : 'bg-[#fbd0d0] ring-[#f8a2a2]'
                                        }`}
                                    >
                                        {item.status}
                                    </span>
                                    <button
                                        type="button"
                                        className="rounded-md bg-indigo-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out"
                                        onClick={() => handleViewDetails(item.requestId)}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="fixed bottom-0 w-full mt-12 sm:pt-6 sm:hidden">
                <MobileMenu isLogin={false} />
            </div>
        </>
    );
};





export default TrackRequestPage;
