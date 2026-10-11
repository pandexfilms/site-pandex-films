// Imagem que aparece quando o link é colado no WhatsApp, Instagram ou LinkedIn.
// Provisória, só com texto. Quando tiver um frame forte de filme, ele entra como fundo.

export const shareImageSize = { width: 1200, height: 630 };

export function ShareImage({ eyebrow, title }: { eyebrow: string; title: string }) {
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
        padding: "72px 80px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ width: 14, height: 14, borderRadius: 7, background: "#e8b45a" }} />
        <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase", color: "#9b9ba3" }}>
          {eyebrow}
        </div>
      </div>
      <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>{title}</div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30 }}>
        <div style={{ fontWeight: 700, letterSpacing: 6 }}>PANDEX FILMS</div>
        <div style={{ color: "#9b9ba3" }}>pandexfilms.com.br</div>
      </div>
    </div>
  );
}
