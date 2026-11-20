import Image from "next/image";
import Link from 'next/link';
import { getCurrentMeeting, getMeetings } from '@/lib/meetings-db';
import { formatMeetingDate, meetingTypeLabel } from '@/lib/formatters';

export default function HomePage() {
  const current = getCurrentMeeting();
  const meetingCount = getMeetings().length;

  return (
    <main>
      <section className="page-shell grid gap-12 py-12 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cobalt">Mutungo Ward · Meeting planner</p>
          <h1 className="mt-5 max-w-2xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-ink sm:text-7xl">Plan the order. <span className="text-cobalt">Make room for people.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">A clear, shared place to prepare Sunday programs, review the details, and print the plan when it is ready.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/meetings/current" className="rounded-full bg-cobalt px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2">Open current Sunday <span aria-hidden="true">→</span></Link>
            <Link href="/meetings" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-cobalt hover:text-cobalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2">Browse past programs</Link>
          </div>
          <dl className="mt-12 flex flex-wrap gap-8 border-t border-slate-200 pt-6">
            <div><dt className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Programs ready</dt><dd className="mt-1 text-2xl font-extrabold text-ink">{meetingCount}</dd></div>
            <div><dt className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Next program</dt><dd className="mt-1 text-2xl font-extrabold text-ink">Print-friendly</dd></div>
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-5 rounded-[2rem] bg-blue-pale/70 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-4 shadow-2xl shadow-blue-100/70 sm:p-6">
            <Image src="/meeting-mark.svg" alt="An illustrated meeting program with a clock and check mark" width={640} height={460} priority className="h-auto w-full rounded-2xl" />
            <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-5">
              <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-cobalt">Most recent</p><p className="mt-1 font-bold text-ink">{formatMeetingDate(current.date, { month: 'long', day: 'numeric' })}</p></div>
              <p className="text-right text-sm font-semibold text-slate-500">{meetingTypeLabel(current.meetingType)}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-slate-200 bg-white">
        <div className="page-shell grid gap-8 py-10 sm:grid-cols-3">
          <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-cobalt">01 · Prepare</p><h2 className="mt-3 text-xl font-bold text-ink">Keep every detail together.</h2><p className="mt-2 text-sm leading-6 text-slate-500">Announcements, hymns, prayers, business, and speakers in one readable order.</p></div>
          <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-cobalt">02 · Review</p><h2 className="mt-3 text-xl font-bold text-ink">See the Sunday at a glance.</h2><p className="mt-2 text-sm leading-6 text-slate-500">Move between current and past meetings without losing your place.</p></div>
          <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-cobalt">03 · Share</p><h2 className="mt-3 text-xl font-bold text-ink">Print when the plan is ready.</h2><p className="mt-2 text-sm leading-6 text-slate-500">A clean program view gives ushers, musicians, and members the same page.</p></div>
        </div>
      </section>
    </main>
  );
}
