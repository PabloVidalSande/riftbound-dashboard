# Riftbound Tracker — Dashboard público

Dashboard estático del valor de la colección Riftbound en USD (TCGplayer market),
con histórico y top movers de cada snapshot.

URL del dashboard: **https://pablovidalsande.github.io/riftbound-dashboard/**

## Cómo se actualiza

No se actualiza desde aquí. Los datos los pushea automáticamente el workflow
del repo privado [riftbound-tracker](https://github.com/PabloVidalSande/riftbound-tracker)
después de cada cron diario. Solo viaja información pública (precios USD de TCGplayer + variant_numbers);
las cantidades en colección y otros datos personales nunca salen del repo privado.

## Archivos

- `index.html` — UI del dashboard (Chart.js, mobile responsive).
- `data/snapshots.json` — array de snapshots `{date, total_usd}` (últimos 60).
- `data/movers.json` — array de movers del último snapshot `{variant_number, old_usd, new_usd, pct}`.

## GitHub Pages

Settings → Pages → Source: **Deploy from a branch** → Branch: **main** /
Folder: **/ (root)** → Save. URL aparece arriba en la misma página de Pages.
