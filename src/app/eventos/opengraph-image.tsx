import { ImageResponse } from "next/og";
import { ShareImage, shareImageSize } from "@/components/ShareImage";

export const alt = "Pandex Films: filmes de evento em Recife e João Pessoa.";
export const size = shareImageSize;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <ShareImage
      eyebrow="Filmes de evento · Recife e João Pessoa"
      title="Seu evento não pode acabar quando as luzes apagam."
    />,
    size,
  );
}
