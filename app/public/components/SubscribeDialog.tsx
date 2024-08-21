import { useEffect, useState } from "react";

export default function SubscribeDialog({ isOpen, onClose }: { isOpen: Boolean, onClose: () => void }) {
    const [email, setEmail] = useState('')

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.key === 'Escape') {
            onClose();
          }
        };
    
        if (isOpen) {
          document.addEventListener('keydown', handleKeyDown);
        }
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [isOpen, onClose]);

    if (!isOpen) {
        return null
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-4 flex flex-col animate-dropdown">
                {/* <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-4">
                    
                </div> */}
                <h2 className="text-xl font-bold">Subscribe to get 50% off on your first 3 orders</h2>
                {/* <p className="mb-4">This is a dialog message.</p> */}
                <div className="flex items-center mt-10 space-x-4">
                    <input
                        type="email"
                        placeholder="Enter your email ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                    />

                    <button
                        onClick={onClose}
                        className="bg-primaryGreen text-sm text-white px-4 py-2 rounded hover:bg-primaryGreen"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}