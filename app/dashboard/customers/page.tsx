import Table from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
export default async function Page({searchParams}: {
    searchParams?: {
        query?:string 
    }
}) {
  const query =  searchParams?.query ? searchParams.query : ''
  const customers = await fetchFilteredCustomers(query);
  console.log(customers)
  return (
    <div className="w-full">
      <Table customers={customers} />
    </div>
  );
}
