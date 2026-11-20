import { NextResponse } from 'next/server';
import { getMeetings } from '@/lib/meetings-db';
import type { MeetingsResponse } from '@/lib/types';

export function GET(request: Request) {
  const url = new URL(request.url);
  const date = url.searchParams.get('date') ?? undefined;
  const meetings = getMeetings(date);
  const response: MeetingsResponse = { meetings, total: meetings.length };
  return NextResponse.json(response);
}
