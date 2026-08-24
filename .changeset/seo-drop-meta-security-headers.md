---
"@wendermedia/astro-components": minor
---

SEO: die vier `<meta http-equiv>` Security-Header entfernt

Sie schuetzten nichts. Gemessen, nicht vermutet: eine Seite mit
`<meta http-equiv="X-Frame-Options" content="DENY">` laesst sich weiterhin in
einen `<iframe>` laden, und das eltern-Dokument kann ihr DOM lesen. Chrome
protokolliert dazu bei jedem Aufruf einen Fehler.

Die anderen drei waren stiller und darum schlimmer: `X-Content-Type-Options`,
`X-XSS-Protection` und `Referrer-Policy` werden als `http-equiv` kommentarlos
ignoriert — kein Fehler, keine Warnung, keine Wirkung. `http-equiv` kennt nur
sieben Pragmas, und keiner dieser vier Namen gehoert dazu.

Ein `<meta name="referrer">` waere die eine gueltige Form gewesen, kommt aber
bewusst NICHT zurueck: gemessen ueberschreibt sie den `Referrer-Policy`-Header
der konsumierenden Seite.

Fuer Konsumenten aendert sich nichts an der tatsaechlichen Sicherheit — es gab
keine. Security-Header gehoeren an den Edge; die Vorlagen unter
`templates/deployment/` setzen sie korrekt.
