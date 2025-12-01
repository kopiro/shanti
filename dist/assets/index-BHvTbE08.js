(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const o of t.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = i(e);
    fetch(e.href, t);
  }
})();
document.querySelector("#app").innerHTML = `
  <div class="container">
    <header class="header">
      <img src="/logo.svg" alt="Shanti Beauty Studio" class="logo" />
      <h1 class="studio-name">Shanti</h1>
      <p class="tagline">Beauty Studio</p>
    </header>

    <main class="main">
      <section class="info-section">
        <div class="address">
          <h2>Visit Us</h2>
          <address>
            <p>123 Beauty Lane</p>
            <p>Suite 100</p>
            <p>New York, NY 10001</p>
          </address>
          <p class="hours">
            <strong>Hours:</strong><br>
            Mon - Sat: 9:00 AM - 7:00 PM<br>
            Sunday: Closed
          </p>
        </div>
      </section>

      <section class="booking-section">
        <h2>Book an Appointment</h2>
        <div class="cal-embed">
          <!-- Cal.com embed - replace YOUR_CALCOM_LINK with actual cal.com username -->
          <iframe
            src="https://cal.com/YOUR_CALCOM_LINK"
            frameborder="0"
            width="100%"
            height="600"
            title="Schedule an appointment"
          ></iframe>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; ${new Date().getFullYear()} Shanti Beauty Studio. All rights reserved.</p>
    </footer>
  </div>
`;
