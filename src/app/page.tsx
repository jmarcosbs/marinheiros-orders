import TableNumber from '@/components/order/TableNumber';
import Items from '@/components/order/Items'

export default function Home() {
  return (
      <div className="flex items-center w-screen justify-center">
        
          <main>
            <div className='block pt-2 w-[312px] border'>
              <TableNumber />
              <Items />
            </div>
          </main>

          <footer></footer>
        </div>

  );
}
