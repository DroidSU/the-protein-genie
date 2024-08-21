import React from 'react';

export default function SubscribeBox({ onTap } : {onTap : () => void }) {
    return (
        <div className="flex flex-col items-center justify-center">
            {/* <div className="mb-2 text-center font-bold text-sm">
                Subscribe to get 50% off on your first 3 orders
            </div>
            <div className="rounded-lg p-2 w-full max-w-sm">
                <div className="flex space-x-2">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-grow p-2 border border-gray-300 rounded-lg"
                    />
                    <button className="text-black font-regular mr-4 px-2 rounded-lg border border-black">
                        Submit
                    </button>
                </div>
            </div> */}

            <button onClick={onTap} className="text-black font-regular p-2 rounded-lg border border-black hover:bg-primaryGreen hover:text-white">
                Subscribe Now
            </button>
        </div>
    );

};