import TableNumber from '@/components/order/orderItems/TableNumber';
import Items from '@/components/order/orderItems/Items'

export default function Home() {
  return (
      <div className="flex items-center w-screen justify-center">
        
          <main>
            <div className='block w-[100%] border p-4'>
              <TableNumber />
              <Items />
            </div>
          </main>

          <footer></footer>
        </div>

  );
}
