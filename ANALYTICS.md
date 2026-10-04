# Eventi GA4

Il sito usa la proprietà `G-FT35PR45HQ`. I link dichiarano evento e parametri
tramite attributi `data-analytics-*`; un unico gestore invia gli eventi con `gtag`.

| Evento | Parametro | Valori |
| --- | --- | --- |
| `booking_click` | `placement` | `header`, `after_services` |
| `phone_click` | `placement` | `contacts` |
| `directions_click` | `provider` | `google`, `apple` |
| `social_click` | `platform` | `instagram`, `facebook` |

In GA4, **Amministrazione → Visualizzazione dei dati → Definizioni personalizzate**,
creare tre dimensioni personalizzate con ambito **Evento** e parametri evento
`placement`, `provider` e `platform`, per usare questi valori nei report.
Questa configurazione va eseguita nell'account; il codice non la crea.

`booking_click` misura il click verso Cal.com, non un appuntamento confermato.
Gli eventuali eventi automatici GA4 per i link in uscita restano separati dagli
eventi personalizzati: non sommarli per contare le stesse azioni.

Per i test locali, bloccare il caricamento di Google Tag Manager e le richieste
Google Analytics **prima** di aprire la pagina. Il `dataLayer` locale permette
di verificare evento e parametri senza inviarli alla proprietà reale.
