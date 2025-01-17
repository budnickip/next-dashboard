import { fetchCustomersData } from '@/app/lib/data'
import CustomersTable from '@/app/ui/customers/table'

export default async function Page() {
  const customers = await fetchCustomersData()
  {/* @ts-ignore @ts-expect-error Server Component */}
  return <CustomersTable customers={customers} />
}
