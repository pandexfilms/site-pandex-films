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

export const HERO_VIDEO_VIMEO_ID = "1189938651";

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

// EVM primeiro: é o case que a prospecção de eventos usa.
export const FILMS: Film[] = [
  { slug: "imersao-evm", client: "Imersão EVM", kind: "Evento", vimeoId: "1189938651" },
  { slug: "mirai", client: "Mirai Intercâmbios", kind: "Comercial", vimeoId: "1154869295" },
  { slug: "team-ma", client: "Team MA", kind: "Campanha", vimeoId: "1154868996" },
];

export const SERVICES = [
  "Filmes de evento",
  "Vídeos institucionais",
  "Campanhas publicitárias",
  "Documentários corporativos",
  "Conteúdo para redes sociais",
];
