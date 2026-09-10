/**
 * serializeJsonLd — serializa datos para un bloque <script type="application/ld+json">.
 *
 * `JSON.stringify` NO escapa `<`. Un valor que contenga una etiqueta de cierre
 * de script termina el bloque antes de tiempo: HTML lee el contenido de un
 * script como texto crudo y para en el primer cierre, este donde este. El
 * bloque queda truncado (JSON invalido, adios rich result), lo que sigue se
 * pinta como texto visible, y el generador de hashes CSP ve el fragmento
 * inyectado como script inline y ofrece meter su hash en la CSP del sitio.
 *
 * No hace falta un atacante: basta un articulo que cite codigo.
 *
 * El escape unicode de `<` es JSON valido y decodifica a la MISMA cadena, asi
 * que Google lee exactamente lo que escribio el autor. U+2028 y U+2029 son
 * legales dentro de una cadena JSON pero son terminadores de linea para
 * parsers JS antiguos, asi que van tambien. `>` y `&` no necesitan escape: una
 * etiqueta de cierre no puede formarse sin un `<`.
 *
 * Gate: scripts/verify-jsonld.mjs (en la cadena de `npm run build`).
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
