export function buildWhatsappLink(numberRaw: string, textRaw: string): string {
  const cleaned = numberRaw.replace(/\D/g, "");
  const text = encodeURIComponent(textRaw);
  return `https://wa.me/${cleaned}?text=${text}`;
}
