import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Imagem que aparece quando o link é colado no WhatsApp, Instagram ou LinkedIn.
// Quando tiver um frame forte de filme, ele pode entrar como fundo.

export const shareImageSize = { width: 1200, height: 630 };

export async function logoDataUrl() {
  const file = await readFile(join(process.cwd(), "public", "logo-mark.png"));
  return `data:image/png;base64,${file.toString("base64")}`;
}

export function ShareImage({ eyebrow, title, logo }: { eyebrow: string; title: string; logo: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0b0b0c",
        color: "#f5f4f0",
        padding: "64px 80px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ width: 14, height: 14, borderRadius: 7, background: "#f5f4f0" }} />
        <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase", color: "#9b9ba3" }}>
          {eyebrow}
        </div>
      </div>
      <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>{title}</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 30 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} width={64} height={64} alt="" />
          <div style={{ fontWeight: 700, letterSpacing: 6 }}>PANDEX FILMS</div>
        </div>
        <div style={{ color: "#9b9ba3" }}>pandexfilms.com.br</div>
      </div>
    </div>
  );
}
