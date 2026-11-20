import Image from 'next/image';
import Link from 'next/link';
import CurrentDate from './CurrentDate';

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur print:hidden">
      <div className="page-shell flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3" aria-label="Sunday Order home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cobalt text-white shadow-sm transition-transform group-hover:-translate-y-0.5">
            <Image src="/meeting-mark.svg" alt="" width={26} height={20} className="brightness-0 invert" />
          </span>
          <span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-cobalt">Maple Grove Ward</span>
            <span className="block text-lg font-bold tracking-tight text-ink">Sunday Order</span>
          </span>
        </Link>
        <div className="hidden text-right sm:block">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Today</p>
          <p className="mt-1 text-sm font-semibold text-slate-600"><CurrentDate /></p>
        </div>
      </div>
    </header>
  );
}
