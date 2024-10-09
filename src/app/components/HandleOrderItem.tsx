import { DeleteForever } from '@mui/icons-material'; 
import { IconButton } from '@mui/material';
import CommentOrder from './CommentOrder';

export default function HandleOrderItem() {


    return (
        <>
            <div className='flex items-center flex-col'>

                <CommentOrder />
                <IconButton aria-label="delete">
                    <DeleteForever sx={{ color: '#FF6961', fontSize: '30px' }} />
                </IconButton>

            </div>
        </>
    );
}