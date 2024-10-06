import TableNumber from '@/components/order/orderItems/TableNumber';
import ShowItemsButton from '@/components/order/orderItems/ShowItemsButton'
import OrderList from '@/components/order/orderItems/OrderList'

export default function Home() {
  return (
      <div className='flex items-center w-screen justify-center'>
        
          <main>
            <div className='grid grid-cols-1 gap-4 w-[100%] min-w-[400px] border p-4'>
              <TableNumber/>
              <ShowItemsButton />
              <OrderList />
            </div>
          </main>

          <footer></footer>
        </div>

  );
}
