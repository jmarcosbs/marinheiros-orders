import CommentOrder from './CommentOrder';
import DeleteOrder from './DeleteOrder'

interface HandleOrderItemProps {
    dishIndex : number;
}

export default function HandleOrderItem({ dishIndex } : HandleOrderItemProps) {


    return (
        <>
            <div className='flex items-center flex-col'>

                <CommentOrder dishIndex={dishIndex}/>

                <DeleteOrder dishIndex={dishIndex}/>

            </div>
        </>
    );
}