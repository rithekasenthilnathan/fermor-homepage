export default function Home() {
  return (
    <main>

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          FERMOR
        </div>

        <div className="nav-links">
          <a href="#product">Product</a>
          <a href="#how-it-works">How it works</a>
          <a href="#footer">About</a>
        </div>

        <div className="nav-actions">
          <a href="#" className="login">
            Log in
          </a>

          <a href="#cta" className="get-started">
            Get Started
          </a>
        </div>

      </nav>


      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            FINANCIAL CLARITY, SIMPLIFIED
          </p>

          <h1>
            Understand your money.
            <br />
            <span>Grow with clarity.</span>
          </h1>

          <p className="hero-description">
            Fermor helps you understand your finances,
            make better decisions and build towards
            your financial goals.
          </p>

          <div className="hero-buttons">
            <a href="#cta" className="hero-primary">
              Get Started
            </a>

            <a href="#product" className="hero-secondary">
              Explore Fermor →
            </a>
          </div>

        </div>


        {/* FINANCIAL DASHBOARD */}
<div className="dashboard">

  <div className="dashboard-top">
    <div>
      <p className="dashboard-welcome">Your financial overview</p>
      <p className="dashboard-date">October 2026</p>
    </div>

    <div className="profile-circle">
      RS
    </div>
  </div>

  <div className="balance-section">
    <p>Total balance</p>

    <div className="balance-row">
      <h2>₹1,24,500</h2>
      <span className="growth">+12.4%</span>
    </div>
  </div>

  <div className="chart">
    <div className="chart-grid"></div>
    <div className="chart-line"></div>
  </div>

  <div className="dashboard-stats">

    <div className="stat">
      <div className="stat-icon spending-icon">
        ↗
      </div>

      <div>
        <p>Spending</p>
        <strong>₹32,400</strong>
      </div>
    </div>

    <div className="stat">
      <div className="stat-icon savings-icon">
        ↗
      </div>

      <div>
        <p>Savings</p>
        <strong>₹18,200</strong>
      </div>
    </div>

  </div>

</div>

            </section>


      {/* WHY FERMOR */}
      {/* PRODUCT SHOWCASE */}
      {/* SMART INSIGHTS */}
      {/* FINANCIAL GOALS */}
      {/* FINAL CTA */}
<section className="cta-section" id="cta">
  <div className="cta-content">
    <p className="section-label">START WITH CLARITY</p>

    <h2>
      Your money has a story.
      <span> Make it a better one.</span>
    </h2>

    <p>
      Understand where you are, decide where you want
      to go and take the next step with Fermor.
    </p>

    <div className="cta-buttons">
      <a href="#cta" className="cta-primary">
        Get Started
      </a>

      <a href="#product" className="cta-secondary">
        Explore Fermor →
      </a>
    </div>
  </div>
</section>
<section className="goals-section">
  <div className="goals-header">
    <p className="section-label">FINANCIAL GOALS</p>

    <h2>
      Give your money
      <span> a direction.</span>
    </h2>

    <p>
      Whether you're building an emergency fund,
      planning a purchase or saving for something
      important, Fermor helps you stay focused.
    </p>
  </div>

  <div className="goals-layout">
    <div className="goal-main-card">
      <div className="goal-card-top">
        <div>
          <span>YOUR ACTIVE GOAL</span>
          <h3>Emergency Fund</h3>
        </div>

        <div className="goal-status">On track</div>
      </div>

      <div className="goal-progress-area">
        <div className="goal-progress-circle">
          <div>
            <strong>72%</strong>
            <span>complete</span>
          </div>
        </div>

        <div className="goal-details">
          <p>Saved so far</p>
          <strong>₹72,000</strong>

          <p className="goal-target-label">Target</p>
          <span>₹1,00,000</span>
        </div>
      </div>

      <div className="goal-bottom">
        <span>₹28,000 remaining</span>
        <span>Estimated: 3 months</span>
      </div>
    </div>

    <div className="goal-side">
      <div className="small-goal">
        <div className="small-goal-icon">⌂</div>

        <div>
          <span>HOME</span>
          <h3>New Home</h3>
          <p>₹2.4L saved</p>
        </div>

        <strong>48%</strong>
      </div>

      <div className="small-goal">
        <div className="small-goal-icon">✈</div>

        <div>
          <span>EXPERIENCE</span>
          <h3>Travel Fund</h3>
          <p>₹42,500 saved</p>
        </div>

        <strong>63%</strong>
      </div>

      <div className="small-goal">
        <div className="small-goal-icon">＋</div>

        <div>
          <span>NEW GOAL</span>
          <h3>Create a goal</h3>
          <p>Start planning something new</p>
        </div>

        <strong>→</strong>
      </div>
    </div>
  </div>
</section>
<section className="insights-section">
  <div className="insights-heading">
    <p className="section-label">SMART INSIGHTS</p>

    <h2>
      Numbers are useful.
      <span> Understanding them is better.</span>
    </h2>

    <p>
      Fermor turns financial data into simple insights
      that help you understand your habits and make
      more confident decisions.
    </p>
  </div>

  <div className="insights-grid">
    <div className="insight-card large-insight">
      <div className="insight-top">
        <span className="insight-tag">SPENDING</span>
        <span className="insight-icon">↗</span>
      </div>

      <h3>Your spending is trending down.</h3>

      <p>
        You spent 8.4% less this month compared
        with your previous month.
      </p>

      <div className="insight-line"></div>

      <span className="insight-footer">
        Keep building the habit →
      </span>
    </div>

    <div className="insight-card">
      <div className="insight-top">
        <span className="insight-tag">SAVINGS</span>
        <span className="insight-icon">◎</span>
      </div>

      <h3>You're building momentum.</h3>

      <p>
        Your savings rate has improved for
        three months in a row.
      </p>

      <div className="mini-progress">
        <div className="mini-progress-fill"></div>
      </div>

      <span className="progress-label">72% towards your goal</span>
    </div>

    <div className="insight-card">
      <div className="insight-top">
        <span className="insight-tag">GOAL</span>
        <span className="insight-icon">✦</span>
      </div>

      <h3>You're getting closer.</h3>

      <p>
        Your emergency fund goal is
        within reach.
      </p>

      <div className="goal-amount">
        <strong>₹72,000</strong>
        <span>of ₹1,00,000</span>
      </div>
    </div>
  </div>
</section>
<section className="product-section" id="how-it-works">
  <div className="product-content">
    <p className="section-label">YOUR MONEY, AT A GLANCE</p>

    <h2>
      See your financial life
      <span> clearly.</span>
    </h2>

    <p className="product-description">
      Fermor brings your financial information together
      in one simple view, so you can understand your
      spending, savings and progress without the noise.
    </p>

    <div className="product-points">
      <div className="product-point">
        <div className="point-icon">↗</div>
        <div>
          <h3>Track your spending</h3>
          <p>Know where your money goes every month.</p>
        </div>
      </div>

      <div className="product-point">
        <div className="point-icon">◎</div>
        <div>
          <h3>Build better habits</h3>
          <p>Turn your financial data into meaningful actions.</p>
        </div>
      </div>

      <div className="product-point">
        <div className="point-icon">✦</div>
        <div>
          <h3>Work towards your goals</h3>
          <p>Stay focused on what you're building for the future.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="product-dashboard">
    <div className="product-dashboard-header">
      <div>
        <p>Financial overview</p>
        <span>October 2026</span>
      </div>

      <div className="dashboard-menu">•••</div>
    </div>

    <div className="product-balance">
      <p>Total balance</p>
      <h3>₹1,24,500</h3>
      <span>↑ 12.4% this month</span>
    </div>

    <div className="product-chart">
      <div className="chart-bar bar-one"></div>
      <div className="chart-bar bar-two"></div>
      <div className="chart-bar bar-three"></div>
      <div className="chart-bar bar-four"></div>
      <div className="chart-bar bar-five"></div>
      <div className="chart-bar bar-six"></div>
      <div className="chart-bar bar-seven"></div>
    </div>

    <div className="product-cards">
      <div className="mini-card">
        <p>Monthly spending</p>
        <strong>₹32,400</strong>
        <span>↓ 4.2%</span>
      </div>

      <div className="mini-card">
        <p>Monthly savings</p>
        <strong>₹18,200</strong>
        <span>↑ 8.6%</span>
      </div>
    </div>
  </div>
</section>
      <section className="why-section" id="product">

        <div className="section-heading">

          <p className="section-label">
            WHY FERMOR
          </p>

          <h2>
            Money shouldn't be complicated.
          </h2>

          <p className="section-description">
            Fermor brings clarity to your financial life,
            helping you understand where you are and
            make better decisions about where you're going.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <span className="feature-number">
              01
            </span>

            <div className="feature-icon">
              ◌
            </div>

            <h3>
              Understand
            </h3>

            <p>
              Get a clearer picture of your finances
              and understand where your money goes.
            </p>

            <span className="feature-arrow">
              →
            </span>

          </div>


          <div className="feature-card featured-card">

            <span className="feature-number">
              02
            </span>

            <div className="feature-icon">
              ↗
            </div>

            <h3>
              Act
            </h3>

            <p>
              Turn financial information into simple,
              meaningful actions you can take.
            </p>

            <span className="feature-arrow">
              →
            </span>

          </div>


          <div className="feature-card">

            <span className="feature-number">
              03
            </span>

            <div className="feature-icon">
              ✦
            </div>

            <h3>
              Grow
            </h3>

            <p>
              Build better financial habits and
              move confidently towards your goals.
            </p>

            <span className="feature-arrow">
              →
            </span>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer" id="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">FERMOR</div>

            <p>
              Understand your money.
              <br />
              Grow with clarity.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span>PRODUCT</span>
              <a href="#product">Overview</a>
              <a href="#how-it-works">How it works</a>
              <a href="#">Features</a>
            </div>

            <div>
              <span>COMPANY</span>
              <a href="#about">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>

            <div>
              <span>LEGAL</span>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Fermor. All rights reserved.</p>
          <p>Built with clarity.</p>
        </div>
      </footer>

    </main>
  );
}


    
