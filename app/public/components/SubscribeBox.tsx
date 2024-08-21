import React from 'react';
import IconButton from './IconButton';

export default function SubscribeBox({ onTap }: { onTap: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <IconButton onTap={onTap} />
        </div>
    );

};