---
layout: default
title: About
---

# ABOUT
{: #about}

I am a PhD candidate in Economics at the University of Virginia. My fields are macroeconomics and macroeconometrics, and I study the effects of monetary and fiscal policy.
{: .about-intro}

To answer these questions credibly, my work develops structural VAR methods that combine heteroskedasticity with sign, zero, and narrative restrictions. I write the samplers behind these methods myself and make the code available below.
{: .about-intro}

I am on the 2026–2027 job market. You can find my CV [here]({{ site.baseurl }}/Dawis_Kim_CV.pdf).
{: .about-intro}

# ACADEMIC APPOINTMENTS
{: #academic-appointments}

<dl>
  <dt>Visiting Scholar (Ph.D. interns), Federal Reserve Bank of Atlanta, Research Department</dt>
  <dd>August 2026</dd>
</dl>

<dl>
  <dt>Short-Term Consultant, IMF, IEO</dt>
  <dd>Fall 2024</dd>
  <dd>Follow-up work from IMF-FIP internship</dd>
</dl>

<dl>
  <dt>Fund Internship Program (FIP), IMF, IEO</dt>
  <dd>Summer 2024</dd>
  <dd>Contributed to fiscal policy evaluation and forecast error analysis</dd>
</dl>

<h1 id="research" style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 0.5rem 1rem;">
  <span>RESEARCH</span>
  <span style="font-size: 0.8rem; font-weight: 400; font-family: var(--font-sans); color: #666; letter-spacing: 0; text-transform: none;">* scheduled presentation &middot; &dagger; accepted, declined</span>
</h1>

## _WORKING PAPERS_

<dl>
  <dt>How the Financing of Balance-Sheet Policy Shapes Its Effects <span class="paper-status">(Job Market Paper)</span></dt>
  <dd><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7214338">[SSRN]</a> &middot; <a href="https://www.dropbox.com/scl/fi/w2dak1iipdy4sewxy6xnw/jmp_dawis.pdf?rlkey=hubsqx7d18fwqsx0a7iknbm7a&raw=1">[PDF]</a> &middot; <span class="code-note">HARS-Z sampler (sign + zero + narrative + heteroskedasticity) &middot; codes on request</span></dd>
  <dd class="abstract-toggle">
    <details>
      <summary>Abstract</summary>
      <p>I ask whether the financing of Federal Reserve balance-sheet policy shapes its effects on real GDP and the price level. In a monthly U.S. SVAR I identify two balance-sheet shocks, one financed by reserves and one by overnight reverse repurchases (ON RRP). Identification combines sign, zero, and narrative restrictions with shifts in the volatility of the structural errors, and imposing the zero restrictions requires a new sampler that I develop. The estimates support that both contractions lower the price level and that only the reserve-financed contraction lowers GDP. Over the two easings and the first tightening the reserve-financed shock is the most important driver of the unexpected change in GDP among the labeled shocks. Over the 2023 to 2025 drain the ON RRP-financed shock is the most important driver of the unexpected price-level change.</p>
    </details>
  </dd>
  <dd class="presentation-note">
    <details>
      <summary class="presentation-label">Presentations</summary>
      <ul class="presentation-list">
        <li><span class="pres-venue">North American Summer Meeting, Econometric Society</span><span class="pres-date">Jun 2026</span></li>
        <li><span class="pres-venue">Federal Reserve Bank of Atlanta</span><span class="pres-date">Aug 2026</span></li>
        <li><span class="pres-venue">UVA&ndash;Richmond Fed&ndash;Duke Jamboree<span class="pres-mark">*</span></span><span class="pres-date">Oct 2026</span></li>
        <li><span class="pres-venue">Tenth SNDE Continuing Education in Macroeconometrics Workshop, Reserve Bank of Australia (Sydney)<span class="pres-mark">&dagger;</span></span><span class="pres-date">Nov 2026</span></li>
        <li><span class="pres-venue">Southern Economic Association Annual Meeting<span class="pres-mark">*</span></span><span class="pres-date">Nov 2026</span></li>
      </ul>
    </details>
  </dd>
</dl>

<dl>
  <dt><a href="https://www.nber.org/system/files/working_papers/w35483/w35483.pdf">Sharpening Economic Interpretation with HARS</a> <span class="paper-status">(submitted)</span></dt>
  <dd>with <em><a href="http://www.tzha.net/" target="_blank">Tao Zha</a> (Emory University)</em></dd>
  <dd><a href="https://www.nber.org/papers/w35483">[NBER Working Paper w35483]</a> &middot; <a href="https://www.dropbox.com/scl/fo/i2fxistcz7r6slpc58j54/ALYBgJbM-d0D_x5k8_MiIHc?rlkey=uzhibvhrvz41keckbjjmx45bg&st=yfmw6879&dl=0">[Replication Codes]</a></dd>
  <dd class="abstract-toggle">
    <details>
      <summary>Abstract</summary>
      <p>We develop a unified framework that combines shock volatility with sign and narrative restrictions and provides the theoretical foundation for the computationally efficient sampler HARS. HARS preserves the heteroskedastic likelihood and can be combined with any posterior simulator for the heteroskedastic model. In monetary policy, oil market, and fiscal policy models, the same restrictions deliver substantively different economics once shock heteroskedasticity is accounted for. Homoskedastic SVARs put uncertainty in the wrong place, pushing shock-scale variation into impulse-response uncertainty. Heteroskedasticity sharpens dynamic responses, alters economic conclusions, and restores 90% credible intervals as a practical standard for economic inference.</p>
    </details>
  </dd>
</dl>

## _WORK IN PROGRESS_

<dl>
  <dt>From Underestimation to Overshooting? A Reappraisal of IMF Fiscal Multiplier Assumptions Across Crises</dt>
  <dd>with <em>Jeremie Cohen-Setton (International Monetary Fund)</em></dd>
</dl>

## _PUBLICATION_

<dl>
  <dt><a href="https://www.tandfonline.com/doi/full/10.1080/1226508X.2021.1875868">The Macroeconomic Consequences of Stimulating Offline Consumption during COVID-19</a></dt>
  <dd>with <a href="https://sites.google.com/view/myungkyushim/home" target="_blank">Myunkyu Shim</a> (Yonsei University) and Minseung Kim</dd>
  <dd><strong><em>Global Economic Review</em></strong>, March 2021</dd>
</dl>

# REPLICATION EXERCISES
{: #replication-exercises}

<dl>
  <dt><a href="https://github.com/davidkim5707/replications/tree/main/Bianchi_Dynare">Inflation as a Fiscal Limit</a></dt>
  <dd>Replication of Bianchi and Melosi (2023) using MATLAB/Dynare</dd>
  <dd>Explores monetary and fiscal policy interactions across different regime specifications</dd>
</dl>
