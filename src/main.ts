import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container">
    <header class="header">
      <img src="/logo.svg" alt="SCIANTI Beauty Studio" class="logo" />
      <h1 class="studio-name">SCIANTI</h1>
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
          <iframe
            src="https://cal.com/flavio-de-stefano-ytejjf"
            frameborder="0"
            width="100%"
            height="600"
            title="Schedule an appointment"
          ></iframe>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; ${new Date().getFullYear()} SCIANTI Beauty Studio. All rights reserved.</p>
    </footer>
  </div>
`;
