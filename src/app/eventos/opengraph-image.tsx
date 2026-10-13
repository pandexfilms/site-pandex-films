import { ImageResponse } from "next/og";
import { ShareImage, logoDataUrl, shareImageSize } from "@/components/ShareImage";

export const alt = "Pandex Films: filmes de evento em Recife e João Pessoa.";
export const size = shareImageSize;
export const contentType = "image/png";

export default async function Image() {
  const logo = await logoDataUrl();
  return new ImageResponse(
    <ShareImage
      eyebrow="Filmes de evento · Recife e João Pessoa"
      title="Seu evento não pode acabar quando as luzes apagam."
      logo={logo}
    />,
    size,
  );
}
