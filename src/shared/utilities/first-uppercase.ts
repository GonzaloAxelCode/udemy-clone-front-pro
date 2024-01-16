export default function capitalizarPrimerPalabra(frase: any) {
  return frase
    .toLowerCase()
    .replace(/^\w/, (letra: string) => letra.toUpperCase());
}
