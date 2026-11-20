import { NextResponse } from 'next/server';
import { getMeetingById } from '@/lib/meetings-db';

interface MeetingRouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, context: MeetingRouteContext) {
  const { id: rawId } = await context.params;
  const id = Number(rawId);

  if (!Number.isInteger(id) || id < 1) {
    return NextResponse.json({ error: 'Meeting id must be a positive number.' }, { status: 400 });
  }

  const meeting = getMeetingById(id);
  if (!meeting) {
    return NextResponse.json({ error: 'Meeting not found.' }, { status: 404 });
  }

  return NextResponse.json(meeting);
}
