# Hand-off — auditoría legal de `astro.wendermedia.com` — 2026-09-03

**Autor:** Arnold Wender · Wender Media
**Repo:** `wm-project-astro-components` (`@wendermedia/astro-components` v4.1.2)
**Sitio auditado:** <https://astro.wendermedia.com>
**Estado:** 1 hallazgo abierto (MEDIO) + 1 contradicción documental + 1 decisión pendiente

> Hilfsmittel-Audit, kein Anwaltsgutachten. Cada afirmación de este documento trae la
> medición que la sostiene; la calificación legal definitiva la firma un abogado.

---

## 0. Antes de tocar nada — dos avisos de precedencia

**0.1 · Este documento vive en un repo PÚBLICO.** No metas aquí rutas absolutas de la máquina
de desarrollo, credenciales ni datos de cliente. Medido: hoy no hay ni una sola ruta local
absoluta en los ficheros versionados de este repo. Mantenlo así.

**0.2 · El [`.gitignore`](../.gitignore) excluye los informes de auditoría legal.** Las
líneas 34-37 llevan el bloque `# internal artifacts — never in the PUBLIC repo (audit
2026-07-02)` con el patrón `LEGAL-AUDIT-REPORT-DE-*.md`. Este hand-off **no** cae bajo ese
patrón y se commiteó a propósito, con el mismo criterio que
[`docs/PLAN-ASTRO-6-MIGRATION-AND-RELICENSE-3.0.0.md`](./PLAN-ASTRO-6-MIGRATION-AND-RELICENSE-3.0.0.md),
que es un plan interno versionado y público desde mayo. Si el criterio cambia, la decisión
es de Arnold: se añade el patrón al `.gitignore` y se hace `git rm --cached`, no se borra a
escondidas.

---

## 1. Qué es este repo y qué publica

Es una **librería de componentes**, no un sitio. No hay `astro.config.mjs` ni script
`build`, y por tanto no hay `dist/`. Lo dice el propio
[`netlify.toml`](../netlify.toml) en su cabecera de comentarios (líneas 1-14), escrita
justo para que la configuración no volviera a desviarse en la UI de Netlify.

Lo que la domain sirve es el **Storybook**:

| Qué | Dónde está escrito |
| --- | --- |
| `command = "npm run tokens:build && npm run build-storybook"` | [`netlify.toml:18`](../netlify.toml) |
| `publish = "storybook-static"` | [`netlify.toml:19`](../netlify.toml) |
| Historias = todo `src/**/*.mdx` y `src/**/*.stories.*` | [`.storybook/main.ts:10-14`](../.storybook/main.ts) |
| `staticDirs: ['../public']` — `public/` se copia a la raíz publicada | [`.storybook/main.ts:27`](../.storybook/main.ts) |
| `docs.defaultName: 'Documentation'` — de ahí el sufijo `--documentation` de los ids | [`.storybook/main.ts:24-26`](../.storybook/main.ts) |

El sitio es **público**, sin password gate: `curl -o /dev/null -w '%{http_code}'
https://astro.wendermedia.com/` devuelve **200**. Publica el inventario completo del design
system de Wender Media — **183 componentes en 18 categorías**, según el propio
[`README.md:173`](../README.md). El índice servido lo confirma:
`https://astro.wendermedia.com/index.json` declara **791 entradas** entre historias y
páginas de documentación.

Que `staticDirs` publica en la raíz está **medido**, no supuesto:
`/humans.txt` y `/colophon.html` devuelven **200** y sus únicos originales están en
[`public/`](../public). Eso importa, porque es el mecanismo del arreglo de la tarea T1.

---

## 2. El hallazgo — no hay Impressum alcanzable (DDG §5)

### 2.1 · Qué se midió

Todo con `curl` contra producción el 2026-09-03, sin tocar nada:

| Ruta | HTTP | Bytes servidos | Veces que aparece «Impressum» | `<a` en el HTML servido |
| --- | --- | --- | --- | --- |
| `/` | 200 | 3.501 | **0** | **0** |
| `/?path=/docs/legal-impressum-datenschutz--documentation` | 200 | 3.501 | **0** | **0** |
| `/iframe.html?id=legal-impressum-datenschutz--documentation&viewMode=docs` | 200 | 19.654 | **0** | 5 |
| `/impressum.html` | **404** | — | — | — |
| `/impressum/` | **404** | — | — | — |
| `/datenschutz/` | **404** | — | — | — |

El contenido legal **existe** — está en [`src/Legal.mdx`](../src/Legal.mdx), con Impressum
completo (líneas 11-27: dirección, teléfono, USt-IdNr. DE253389445, responsable §18 Abs. 2
MStV, declaración VSBG) y Datenschutz-Kurzfassung (líneas 31-47). El `<Meta title="Legal/Impressum &
Datenschutz" />` de [`src/Legal.mdx:3`](../src/Legal.mdx) genera el id
`legal-impressum-datenschutz--documentation`, y ese id **sí** está en el `index.json`
publicado, con `"importPath": "./src/Legal.mdx"`.

El problema no es que falte el texto. Es que **no es alcanzable como página**:

1. La query `?path=...` **no cambia la respuesta del servidor** — 3.501 bytes idénticos con
   y sin ella. Storybook es una SPA: la ruta la resuelve el cliente.
2. El texto legal se pinta dentro del **iframe de preview**, no en el documento principal.
3. En el HTML servido de la portada hay **cero anclas** (`<a`) — ni una. La entrada
   «Impressum & Datenschutz» de la barra lateral es un nodo de navegación del cliente, no un
   enlace del documento.
4. `grep -rn "legal-impressum-datenschutz\|path=/docs/legal"` sobre todo el repo, excluyendo
   `node_modules/` y `storybook-static/`, devuelve **cero resultados**: **nada enlaza a esa
   story**, ni dentro del repo ni desde el propio sitio.

### 2.2 · Por qué es un problema

Un Storybook público de una agencia, en un subdominio de la marca, enlazado desde el README
como «Live Playbook» ([`README.md:33`](../README.md), [`:42`](../README.md),
[`:341`](../README.md)), es un **Telemedium geschäftsmäßig**. Le aplica **DDG §5**, que exige
que la Anbieterkennzeichnung sea *«leicht erkennbar, unmittelbar erreichbar und ständig
verfügbar»*. El estándar del BGH (Urteil vom 20.07.2006, I ZR 228/03) admite dos clics
**siempre que exista un enlace etiquetado**. Aquí no hay enlace: hay un nodo de una SPA que
solo aparece si el JavaScript carga y el visitante navega hasta él.

### 2.3 · El «fix» de mayo no cerró nada

El informe local `LEGAL-AUDIT-REPORT-DE-2026-05-09.md` (no versionado, excluido por
[`.gitignore:37`](../.gitignore)) marca este punto como **HOCH resuelto («gefixt»)** y sube la nota de
55 a 86/100 sobre la base de haber añadido `src/Legal.mdx`. Esa conclusión **no se sostiene
contra la medición de hoy**: añadir la story puso el *texto* en el build, no una *página* en
el sitio. Es el fallo clásico de dar por verificado el artefacto en vez del efecto.

**No vuelvas a cerrarlo mirando el repo.** Se cierra midiendo producción — para eso está el
falsificador de la sección 6.

### 2.4 · `templates/pages/imprint.astro` no tiene nada que ver

Conviene dejarlo escrito porque invita a confusión: existe un
[`templates/pages/imprint.astro`](../templates/pages/imprint.astro) en el repo, y **no es**
el Impressum del sitio ni puede serlo.

- Su cabecera lo dice literal: *«Copy to src/pages/impressum.astro»*
  ([`templates/pages/imprint.astro:7`](../templates/pages/imprint.astro)).
- Es un componente con props **obligatorias** sin datos de WM horneados —
  `companyName`, `address`, `contact` son requeridas
  ([`templates/pages/imprint.astro:10-48`](../templates/pages/imprint.astro)).
- Se **exporta a los consumidores** de la librería:
  [`templates/pages/index.ts:18`](../templates/pages/index.ts), bajo el comentario
  `// Legal Pages (German DSGVO compliant)` de la línea 16.
- No entra en el build publicado: `.storybook/main.ts` solo recoge `src/**`, y
  `netlify.toml` publica `storybook-static/`. Ninguna ruta pasa por `templates/`.

Lo que sí es correcto en él, y hay que conservar: cita **DDG**, no el derogado TMG, en las
líneas 148 y 231-232. Ese arreglo se hizo en mayo y su valor es que **no propaga derecho
obsoleto** a los proyectos que copien la plantilla. No lo revuelvas.

---

## 3. Segundo hallazgo — la página legal contradice a la LICENSE

Encontrado leyendo, no estaba en el informe de flota.

[`src/Legal.mdx:55`](../src/Legal.mdx) afirma:

> «Bei kommerzieller Nutzung der Komponenten ist Code-Attribution an Wender Media
> **erforderlich** (siehe LICENSE Abschnitt "Attribution")».

La LICENSE dice exactamente lo contrario. Su sección 6, *Recommended (Non-Mandatory)
Attribution*, en [`LICENSE:171-173`](../LICENSE):

> «The following attribution practices are appreciated by the Licensor and encouraged in the
> community, but are **NOT required** by this License and their omission is **NOT a breach**».

El [`README.md:455`](../README.md) y el [`README.md:465`](../README.md) coinciden con la
LICENSE («recommended but not required», «Attribution is **not required** by the license»).
El outlier es `Legal.mdx`, y es el peor sitio posible para el error: es la página que se
presenta como la información legal del proyecto, y le atribuye a la licencia una obligación
que la licencia niega por escrito. Es también el tipo de afirmación que en Alemania se mira
bajo UWG §5 (irreführende geschäftliche Handlung).

Arreglo: una frase. La licencia manda, y el texto correcto ya está redactado en el README.

Menor, del mismo fichero: [`src/Legal.mdx:59`](../src/Legal.mdx) dice *«Stand: Mai 2026»*.
Si se toca el fichero, la fecha se actualiza en el mismo commit.

---

## 4. Tareas, con fichero y línea

| # | Tarea | Punto de intervención | Bloqueada por |
| --- | --- | --- | --- |
| **T1** | Publicar una página legal alcanzable de verdad: `public/impressum.html`, HTML estático y autocontenido, con el contenido de [`src/Legal.mdx:11-47`](../src/Legal.mdx). Se sirve en la raíz por [`.storybook/main.ts:27`](../.storybook/main.ts) (`staticDirs`), mecanismo ya probado por `/humans.txt` y `/colophon.html`, ambos 200 | fichero nuevo `public/impressum.html` | **Decisión §5** |
| **T2** | Enlazarla desde la portada de forma que el enlace exista en el **HTML servido**, no solo en la SPA. Vía razonable: `previewHead`/`managerHead` en [`.storybook/main.ts`](../.storybook/main.ts), o un enlace en el `brandUrl`/branding de [`.storybook/manager.ts:14-53`](../.storybook/manager.ts). Verificar con el falsificador, no a ojo | [`.storybook/main.ts:9-41`](../.storybook/main.ts) · [`.storybook/manager.ts:55-74`](../.storybook/manager.ts) | T1 |
| **T3** | Corregir la afirmación de attribution: `erforderlich` → recomendada, alineada con [`LICENSE:171-173`](../LICENSE) y [`README.md:465`](../README.md) | [`src/Legal.mdx:55`](../src/Legal.mdx) | ninguna — es independiente de la decisión |
| **T4** | Actualizar el *Stand* al hacer T3 | [`src/Legal.mdx:59`](../src/Legal.mdx) | T3 |
| **T5** | No tocar `templates/pages/imprint.astro`: DDG ya está bien en las líneas 148 y 231-232, y las props son para el consumidor | [`templates/pages/imprint.astro`](../templates/pages/imprint.astro) | — (tarea de NO hacer) |

**T3 y T4 se pueden hacer ya.** T1 y T2 dependen de lo que Arnold decida en la sección 5:
si el sitio se cierra tras el password gate, T1 y T2 dejan de ser necesarias.

---

## 5. `[NEEDS ARNOLD]` — decisión de negocio, no de derecho

El Storybook expone públicamente el inventario completo del design system: **183
componentes en 18 categorías** ([`README.md:173`](../README.md)), con previews en vivo,
props y ejemplos de uso. Eso es deliberado hoy — el README lo promociona como «Live
Playbook» y la librería se distribuye en npm bajo una licencia source-available. Pero es
una decisión revisable, y de ella depende qué se hace con el hallazgo. **No la tomo yo.**

### Opción (a) — Sigue público, y se le añade un Impressum alcanzable

- **Trabajo:** T1 + T2. Una tarde corta.
- **A favor:** el playbook es un activo comercial. Es la demostración de capacidad de la
  agencia, es lo que enlaza el README de un paquete público de npm, y quitarlo dejaría
  huérfanos los enlaces de [`README.md:33`](../README.md), [`:42`](../README.md) y
  [`:341`](../README.md), más los que haya en npm.
- **En contra:** el inventario completo sigue siendo legible por cualquiera, competidores
  incluidos. La licencia protege la *copia* del código (secciones 4 y 5), no la *lectura*
  del catálogo.
- **Consecuencia:** el hallazgo DDG §5 queda cerrado y el sitio sigue siendo escaparate.

### Opción (b) — Detrás del password gate de Netlify, como otros 51 sitios de la flota

- **Trabajo:** un ajuste en Netlify. Minutos.
- **A favor:** cierra el hallazgo por la vía más barata — sin Telemedium público no hay
  obligación DDG §5 — y retira el inventario de la vista. Es lo que ya se hace con 51
  dominios propios, así que no es una excepción rara sino la política mayoritaria de la casa.
- **En contra:** rompe la promesa del README y de la ficha de npm. Un paquete público cuya
  documentación en vivo pide contraseña se lee como abandono, y perjudica justo al canal por
  el que llega gente al paquete. Habría que reescribir los tres enlaces del README.
- **Consecuencia:** T1 y T2 se cancelan. T3 sigue pendiente igualmente (el texto de
  `Legal.mdx` es incorrecto esté el sitio abierto o cerrado).

### Opción (c) — Público, pero solo un subconjunto

- **Trabajo:** el mayor de los tres. Hay que decidir qué entra, filtrar los globs de
  [`.storybook/main.ts:10-14`](../.storybook/main.ts), y mantener esa frontera para siempre.
- **A favor:** conserva el escaparate y reduce la superficie expuesta.
- **En contra:** coste permanente de mantenimiento, y una frontera que nadie recordará
  dentro de seis meses se cruzará sola al añadir el siguiente componente. Sigue necesitando
  T1 + T2, porque lo que quede público sigue siendo un Telemedium.
- **Consecuencia:** todo el trabajo de (a), más el filtrado, más la disciplina de mantenerlo.

**Sin decisión, la opción por defecto es (a)**: hoy el sitio está público y sin Impressum
alcanzable, que es el único estado de los tres que no es defendible.

---

## 6. Falsificador ejecutable

Copia y ejecuta. Es completo y autocontenido, no un fragmento ilustrativo.

- `exit 2` = el hallazgo sigue abierto
- `exit 0` = resuelto, por la vía (a)/(c) o por cierre (b)
- `exit 1` = fallo del propio script

```bash
#!/usr/bin/env bash
# Falsificador — ¿sigue abierto el hallazgo DDG §5 de astro.wendermedia.com?
#   exit 0 = resuelto · exit 2 = hallazgo presente · exit 1 = fallo del propio script
#
# Nota de implementación, que costó un falso negativo: nada de
# `printf "$body" | grep -q`. Con `pipefail`, `grep -q` cierra la tubería en el
# primer acierto, printf recibe SIGPIPE y el pipeline devuelve 141 — con lo que el
# candidato BUENO se descarta en silencio. Solo pasa con cuerpos grandes, así que
# el sujeto (3,5 KB) daba el resultado correcto por accidente y el control (225 KB)
# fallaba. Se grepea sobre fichero.
set -uo pipefail
SITE="${1:-https://astro.wendermedia.com}"
HOST="${SITE#*://}"; HOST="${HOST%%/*}"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT

root_status=$(curl -sS -o "$TMP/root.html" -w '%{http_code}' "$SITE/") || exit 1

# Opción (b): sitio entero tras el password gate -> no es Telemedium público, sin DDG §5.
if [ "$root_status" = "401" ]; then
  echo "RESUELTO por cierre — $SITE/ responde 401 (password gate)."
  exit 0
fi

found=""
for path in /impressum.html /impressum/ /impressum /legal.html /legal/ /datenschutz.html /datenschutz/; do
  # -L: un 301 a la variante con barra sigue siendo alcanzable.
  read -r st eff < <(curl -sSL -o "$TMP/p.html" -w '%{http_code} %{url_effective}' "$SITE$path")
  [ "$st" = "200" ] || continue
  # STRICT RULE de flota: la página legal vive en SU dominio, no redirigida fuera.
  case "$eff" in *"://$HOST/"*) : ;; *) continue ;; esac
  grep -qiE 'Impressum|Anbieterkennzeichnung' "$TMP/p.html" || continue
  grep -qiE 'Wender Media'                    "$TMP/p.html" || continue
  found="$path"; break
done

if [ -z "$found" ]; then
  echo "ABIERTO — ninguna página legal alcanzable en $SITE (7 rutas, HTTP raíz=$root_status)."
  exit 2
fi

# DDG §5 pide 'unmittelbar erreichbar': un enlace en el HTML SERVIDO, no pintado en cliente.
if grep -qiE '<a[^>]+href="[^"]*(impressum|legal|datenschutz)' "$TMP/root.html"; then
  echo "RESUELTO — $SITE$found sirve el Impressum y la portada lo enlaza."
  exit 0
fi

echo "PARCIAL — $SITE$found existe, pero la portada no lo enlaza en el HTML servido."
exit 2
```

### Verificado con mutación el 2026-09-03

Un falsificador que solo se prueba contra el caso roto no distingue nada. Los tres estados,
medidos:

| Invocación | Salida | exit |
| --- | --- | --- |
| `./falsifier.sh` (sujeto) | `ABIERTO — ninguna página legal alcanzable … (7 rutas, HTTP raíz=200)` | **2** |
| `./falsifier.sh https://www.wendermedia.com` (control con Impressum) | `RESUELTO — …/impressum/ sirve el Impressum y la portada lo enlaza` | **0** |
| `./falsifier.sh https://nodus.build` (control tras password gate) | `RESUELTO por cierre — … responde 401` | **0** |

### Comprobación adicional para T3

Independiente del sitio, se mide en el repo:

```bash
# Rojo mientras Legal.mdx siga diciendo que la attribution es obligatoria.
grep -n 'erforderlich' src/Legal.mdx && echo 'T3 ABIERTA' || echo 'T3 cerrada'
```

---

## 7. La licencia — NO es drift y NO se arregla

**Lee esto antes de «corregir» nada relacionado con la licencia de este repo.**

Este repo es **público a propósito y PROPIETARIO**. Las dos cosas a la vez. Código visible
no es licencia abierta.

| Hecho | Evidencia |
| --- | --- |
| SPDX propietario | [`LICENSE:4`](../LICENSE) → `LicenseRef-Wender-Media-Source-1.0` |
| All Rights Reserved | [`LICENSE:6-7`](../LICENSE) |
| No es OSI | [`LICENSE:28-29`](../LICENSE) → *«This license is not an Open Source license as defined by the Open Source Initiative»* |
| El manifiesto coincide | `package.json` campo `license` → `LicenseRef-Wender-Media-Source-1.0` |
| GitHub lo clasifica bien | `gh repo view … --json licenseInfo` → `{"key":"other","name":"Other"}` · `visibility: PUBLIC` · `isFork: false` |

**El falsificador de licencias del workspace da 3 hits sobre este repo, y los 3 son
correctos.** Están en [`LICENSE:147-149`](../LICENSE), dentro de la sección **5.1
Restrictions** — una cláusula que **prohíbe** relicenciar bajo esas licencias:

> «You must not: 5.1 Sublicense the Software or any Derivative Work under any license that is
> more permissive than this License, including but not limited to the MIT License, the BSD
> licenses, the Apache License 2.0, the ISC License, the Creative Commons CC0 dedication or
> any Creative Commons "Attribution" license, the Mozilla Public License, …»

Es una licencia propietaria que **enumera licencias OSS para negarlas**, y por eso se detecta
a sí misma. Es **lo contrario de drift**.

**Qué NO hacer, nunca:**

- No sustituir la licencia por `LicenseRef-Proprietary-Wender-Media`.
- No borrar ni reescribir las líneas 147-149 para «limpiar» los hits del grep.
- No hacer el repo privado por esto: es público a propósito.
- No ejecutar `--no-verify` si un gate de licencias bloquea un commit aquí. Se diagnostica la
  causa; desactivar la cadena de gates entera para pasar un falso positivo conocido es peor
  que el falso positivo.
- Este repo **no** pertenece a la lista de repos OSS deliberados del workspace: aquella es
  solo para lo publicado bajo licencia abierta. Este no lo está.

Lo único que sí hay que corregir en materia de licencia es la afirmación de
[`src/Legal.mdx:55`](../src/Legal.mdx) (tarea T3), que **contradice** a la LICENSE. Ahí gana
la LICENSE.

---

## 8. Contexto de flota

De los **68** sitios propios auditados el 2026-09-03 (165 dominios inventariados, 158
propios, 51 tras password gate, 22 alias `.com`→`.de`, 14 sin DNS), este es **el único cuyo
contenido legal existe pero no es alcanzable como página**. Los demás, o lo tienen bien, o no
les aplica. Cero hallazgos críticos en el conjunto.

El detalle vive en el informe de flota del workspace,
`.claude/docs/LEGAL-AUDIT-FLOTA-PROPIA-2026-09-03.md`, fuera de este repo. Allí este hallazgo
es el §2.8, y en la orden de trabajo es el punto 8, marcado como *decisión* y no como
esfuerzo estimado — precisamente porque depende de la sección 5 de este documento.

---

Proprietary. All Rights Reserved · Arnold Wender · 2026
