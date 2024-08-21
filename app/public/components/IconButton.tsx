import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { ArrowRightOutlined } from '@mui/icons-material';

interface IconButtonProps {
    onTap: () => void; // Define the onClick prop type
}

const IconButton: React.FC<IconButtonProps> = ( {onTap} ) => {
    return (
        <Button
            variant="outlined"
            endIcon={<ArrowRightOutlined />}
            onClick={onTap}
            className='bg-white text-black hover:bg-primary hover:text-white border-1 border-black'
        >
            Subscribe Now
        </Button>
    );
};

export default IconButton;