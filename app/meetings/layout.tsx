import { Suspense } from 'react';
import NavLinks from '@/components/NavLinks';

export default function MeetingsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <div className="border-b border-slate-200 bg-white print:hidden">
        <div className="page-shell flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Planner workspace</p><p className="mt-1 font-bold text-ink">Sunday programs</p></div>
          <Suspense fallback={<div className="h-10 w-48 animate-pulse rounded-full bg-blue-50" aria-label="Loading navigation" />}>
            <NavLinks />
          </Suspense>
        </div>
      </div>
      <div className="page-shell py-10 sm:py-14">{children}</div>
    </main>
  );
}
