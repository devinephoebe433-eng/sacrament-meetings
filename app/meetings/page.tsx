import { headers } from 'next/headers';
import MeetingCard from '@/components/MeetingCard';
import type { MeetingsResponse } from '@/lib/types';

async function fetchMeetings(): Promise<MeetingsResponse> {
  const requestHeaders = await headers();
  const host = requestHeaders.get('host') ?? 'localhost:3000';
  const protocol = requestHeaders.get('x-forwarded-proto') ?? 'http';
  const response = await fetch(`${protocol}://${host}/api/meetings`, { cache: 'no-store' });
  if (!response.ok) throw new Error('Unable to load meetings.');
  return response.json() as Promise<MeetingsResponse>;
}

export default async function MeetingsPage() {
  const { meetings, total } = await fetchMeetings();

  return (
    <>
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt">Meeting archive</p>
        <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><h1 className="text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl">All meetings</h1><p className="mt-4 text-lg leading-8 text-slate-600">A shared record of the order of worship, ready to review and print.</p></div>
          <span className="w-fit rounded-full bg-blue-pale px-3 py-1.5 text-sm font-bold text-cobalt">{total} programs</span>
        </div>
      </div>
      <div className="mt-10 grid gap-5">
        {meetings.map((meeting, index) => <MeetingCard key={meeting.id} meeting={meeting} featured={index === 0} />)}
      </div>
    </>
  );
}
