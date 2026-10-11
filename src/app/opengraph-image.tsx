import { ImageResponse } from "next/og";
import { ShareImage, shareImageSize } from "@/components/ShareImage";

export const alt = "Pandex Films: a emoção não acaba. Ela vira filme.";
export const size = shareImageSize;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <ShareImage eyebrow="Produtora audiovisual · Recife" title="A emoção não acaba. Ela vira filme." />,
    size,
  );
}
