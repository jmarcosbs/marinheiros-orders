import TableNumber from '@/app/components/TableNumber';
import ShowItemsButton from '@/app/components/ShowItemsButton'
import OrderList from '@/app/components/OrderList'
import Comment from '@/app/components/Comment'
import SendOrder from '@/app/components/SendOrder'
import { OrderProvider } from '../app/context/OrderContext';

export default function Home() {
  return (
      <div className='flex items-center w-screen justify-center'>
        
          <main>
            <div className='grid grid-cols-1 gap-4 w-[100%] min-w-[400px] border p-4'>
              <OrderProvider>
                <TableNumber/>
                <ShowItemsButton />
                <OrderList />
                <Comment/>
                <SendOrder />
              </OrderProvider>
            </div>
          </main>

          <footer></footer>
        </div>

  );
}
