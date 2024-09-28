import { getPhotoById } from "@/lib/image-date";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const photoId = params?.id;
  const data = await getPhotoById(photoId);

  return NextResponse.json(data);
}
