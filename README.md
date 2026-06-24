# Riftbound Tracker — Dashboard público

Dashboard estático del valor de la colección Riftbound, con precios en **EUR
(Cardmarket)** y **USD (TCGplayer)**, histórico, top movers, señales de buyout y
tendencias de mercado.

URL: **https://pablovidalsande.github.io/riftbound-dashboard/**

## Cómo se actualiza

No se edita aquí. Los datos los publica automáticamente, tras cada cron diario,
el workflow del repo privado
[riftbound-tracker](https://github.com/PabloVidalSande/riftbound-tracker).
Solo viaja información pública (precios y `variant_number`); las **cantidades en
colección y otros datos personales nunca salen del repo privado**.

## Archivos

- `index.html` — UI del dashboard (SPA, Chart.js, PWA instalable, responsive).
- `manifest.json` / `sw.js` / `icon-*.png` / `icon.svg` — PWA (instalable en
  móvil, funciona offline con los últimos datos cacheados).
- `og.png` — imagen de previsualización al compartir el enlace.
- `data/snapshots.json` — serie `{date, total_usd, total_eur}` del valor total.
- `data/movers_usd.json` / `data/movers_eur.json` — movers del último snapshot.
- `data/buyouts.json` — señales de buyout/momentum más urgentes.
- `data/breakdown.json` — desglose de valor por set y rareza.
- `data/cards.json` — tabla de cartas: precios EUR/USD, variación 7d/30d,
  momentum, buyout y mini-serie de 30 días (sparkline).

## Secciones del dashboard

KPIs (valor EUR/USD y deltas) · histórico con marcas de salida de sets ·
señales de buyout/momentum · movers USD/EUR y top 7d/30d · desglose por
set/rareza · **mapa de cartas (treemap)** · **heatmap de variación** ·
**comparador de cartas** · tabla filtrable con detalle por carta.

## GitHub Pages

Settings → Pages → Source: **Deploy from a branch** → Branch: **main** /
Folder: **/ (root)**.
