// Dados da Pandex usados no site inteiro. Mude aqui e muda em todas as páginas.

export const SITE_URL = "https://pandexfilms.com.br";

export const CONTACT = {
  email: "pandexfilms@gmail.com",
  instagram: "https://instagram.com/pandexfilms",
  instagramHandle: "@pandexfilms",
  city: "Recife, PE",
  whatsappNumber: "5581991677447",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  home: "Oi! Vim pelo site e quero uma proposta.",
  eventos: "Oi! Vi a página de eventos e quero falar sobre o meu próximo evento.",
  flutuante: "Olá! Gostaria de saber mais sobre os serviços da Pandex Films.",
};

// Fundo do topo da home: FYS. A /eventos usa o recap do EVM, que é o case de evento.
export const HERO_VIDEO_VIMEO_ID = "1248370560";
export const EVENTOS_HERO_VIDEO_VIMEO_ID = "1244425709";

export type Film = {
  slug: string;
  client: string;
  kind: string;
  vimeoId: string;
  // Contexto do case. Enquanto o texto real não chega, fica vazio e o card mostra só cliente e tipo.
  challenge?: string;
  delivered?: string;
  after?: string;
};

// FYS primeiro: é o vídeo principal do site. O EVM segue como case da /eventos.
export const FILMS: Film[] = [
  { slug: "fys", client: "FYS", kind: "Filme de marca", vimeoId: "1248370560" },
  { slug: "imersao-evm", client: "Imersão EVM", kind: "Evento", vimeoId: "1244425709" },
  { slug: "cerveja-praya", client: "Cerveja Praya", kind: "Comercial", vimeoId: "1244426713" },
];

// Pasta com mais trabalhos. Precisa estar com "Qualquer pessoa com o link pode ver" no Google Drive.
export const MORE_WORK_URL = "https://drive.google.com/drive/folders/1tTDsB03iiIi9-h1TQY1_YFlTZAGD9wVN?usp=share_link";

export const SERVICES = [
  "Filmes de evento",
  "Vídeos institucionais",
  "Campanhas publicitárias",
  "Documentários corporativos",
  "Conteúdo para redes sociais",
];
