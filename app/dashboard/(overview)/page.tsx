import CardWrapper from '@/app/ui/dashboard/cards'
import RevenueChart from '@/app/ui/dashboard/revenue-chart'
import LatestInvoices from '@/app/ui/dashboard/latest-invoices'
import { lusitana } from '@/app/ui/fonts'
import { Suspense } from 'react'
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons'

// Note: inaczej dane ktore pobieram z bazy danych sa pobierane tylko raz, podczas deployu apki - potestuj to jeszcze
export const dynamic = 'force-dynamic'

//Page is an async component. This allows you to use await to fetch data.
export default async function Page() {
  // The data requests are unintentionally blocking each other, creating a request waterfall.
  // const revenue = await fetchRevenue() // moved inside RevenueChart, to not block whole page, during revenues are loading
  //const latestInvoices = await fetchLatestInvoices() // wait for fetchRevenue() to finish
  //const { numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices } = await fetchCardData() // wait for fetchLatestInvoices() to finish
  // in fetchCardData is example how to fetch data in parrarel

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <Suspense fallback={<CardsSkeleton />}>
          {/* @ts-ignore @ts-expect-error Server Component */}
          <CardWrapper />
        </Suspense>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
        <Suspense fallback={<RevenueChartSkeleton />}>
          {/* @ts-ignore @ts-expect-error Server Component */}
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          {/* @ts-ignore @ts-expect-error Server Component */}
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  )
}
