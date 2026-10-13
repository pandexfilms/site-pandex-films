import { ImageResponse } from "next/og";
import { ShareImage, logoDataUrl, shareImageSize } from "@/components/ShareImage";

export const alt = "Pandex Films: a emoção não acaba. Ela vira filme.";
export const size = shareImageSize;
export const contentType = "image/png";

export default async function Image() {
  const logo = await logoDataUrl();
  return new ImageResponse(
    <ShareImage eyebrow="Produtora audiovisual · Recife" title="A emoção não acaba. Ela vira filme." logo={logo} />,
    size,
  );
}
