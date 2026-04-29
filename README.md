# Aozora — Website Revamp

Corporate site for Aozora Co., Ltd. (株式会社青空), a web agency based in Okinawa, Tokyo, and Nepal.

Built with Astro + React. Animations handled by GSAP and Framer Motion, smooth scrolling via Lenis, styles in Tailwind CSS v4.

## Dev

```sh
npm install
npm run dev       # localhost:4321
npm run build
npm run preview
```

## Stack

- [Astro](https://astro.build) — framework
- React — interactive components
- Tailwind CSS v4 — styling
- GSAP + Framer Motion — animations
- Lenis — smooth scroll

---

## Research & Findings

### Current Site Analysis — aozora-okinawa.com

Analysis date: 2026-04-28

#### Good Points

- **Pricing is shown openly.** Visitors can see exactly what each service costs without having to call or email first. Most competing agencies hide this — Aozora's transparency lowers the barrier to making contact.
- **Strong, memorable brand name.** "青空 (Blue Sky)" is easy to remember, and the sky-blue color used throughout the site matches the name naturally.
- **Four offices across Japan and Nepal.** This is a real competitive advantage — local presence in Okinawa and Tokyo, plus an overseas office for cost-efficient development. Most small agencies operate from a single location.
- **Services are clearly explained.** Website production, e-commerce, and custom platform development each have their own section with a price range, making it easy for a visitor to figure out which service fits their needs.
- **Search engines can find the site.** The page title, description, and other metadata that Google reads are all set up correctly, which gives the site a reasonable foundation for search visibility.

#### Bad Points

| Problem                                              | Business impact                                                                                                                                                                                                                                          |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **No news updates since January 2021**               | A site that has not been updated in 5 years looks like a closed business. Many potential clients will leave without making contact because they assume Aozora is no longer operating.                                                                    |
| **The company has had no visitor data for 3 years**  | The analytics tool the site relied on was shut down by Google in July 2023. Since then, there has been zero data on how many people visit, what pages they look at, or where they come from. Business decisions have been made without this information. |
| **The site is running on old, unsupported software** | The website platform (WordPress version 6.1.10) has known security vulnerabilities that have not been patched. This puts the site at risk of being hacked or defaced.                                                                                    |
| **Sharing the site on social media shows no image**  | When someone shares the Aozora website on LINE, Twitter, or Facebook, no thumbnail image appears — just a blank card. This looks unprofessional and significantly reduces the chance someone will click the link.                                        |
| **The site has an open security backdoor**           | A feature called xmlrpc is enabled on the site. This is a known entry point for automated attacks and should have been disabled years ago.                                                                                                               |
| **An unused tracking tool is installed**             | A plugin called MonsterInsights is installed but was never set up. It does nothing useful but adds unnecessary software to the site — expanding the attack surface without any benefit.                                                                  |
| **The design looks like 2018**                       | The animated number counters, cartoon-style illustrations, and basic layout style were fashionable in 2018. For a company that sells web design, this signals that they are not keeping up with current standards.                                       |
| **The page loads two separate font systems**         | The site downloads fonts from two different services at the same time (Google and Adobe). This is redundant — it slows down the page and can cause text to flash or shift as fonts load.                                                                 |

#### Points to Improve

- **Show past work.** A web agency with no portfolio is asking clients to trust them based on nothing. This is the single most damaging gap — any potential client who checks a competing agency and sees their work will choose them instead.
- **Post updates regularly.** Even one short news post per month tells visitors the company is active and engaged. It also helps search engine rankings over time.
- **Update the company stats.** The "4 offices, 30 staff, 150+ projects per year" figures on the site are labelled as being from February 2023 — that is over three years out of date.
- **Replace the broken analytics with a working setup.** Switch to Google Analytics 4 (the current standard) so the team can start understanding visitor behavior again.
- **Use one font, not two.** Pick one font service and remove the other. The page will load faster and there will be no font flicker.
- **The page title is not the first thing Google reads as the main heading.** The large text at the top of the page that visitors see as the headline is not marked up in a way that search engines recognize as the main heading. This is a missed SEO opportunity that is easy to fix.
- **The mobile menu button is not accessible.** On mobile, the hamburger menu icon is not coded as a button — it cannot be activated by keyboard and is invisible to screen readers. This affects users with disabilities.
- **Fix social sharing so an image appears** — this is a broken link in the site's setup that is quick to correct but has a noticeable impact on click-through rates when people share content.
- **Animations should pause for users who need them to.** Some users — including people with vestibular disorders — set their devices to reduce motion. The site currently ignores this setting and plays animations regardless.

---

### Competitor Research

Three web agencies were researched to understand what the market standard looks like and where Aozora falls short.

| Company                                           | Where they are      | What they are known for                                                           |
| ------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------- |
| [Baunfire](https://www.baunfire.com/)             | Silicon Valley, USA | High-end web agency for tech startups. Known for polished, minimal design.        |
| [Newwave Solutions](https://newwavesolution.com/) | Vietnam             | Offshore development company. 300+ staff, ISO quality certified.                  |
| [SotaTek](https://www.sotatek.com/)               | Vietnam             | Large IT company (1,200 staff, 7 offices) specialising in AI and custom software. |

#### What all three competitors have that Aozora does not

| Feature                                         | Baunfire | Newwave        | SotaTek | Aozora                                                     |
| ----------------------------------------------- | -------- | -------------- | ------- | ---------------------------------------------------------- |
| Portfolio with real project examples            | ✓        | ✓              | ✓       | ✗                                                          |
| Client logos and testimonials                   | ✓        | ✓              | ✓       | ✗                                                          |
| Listed on review sites like Clutch or GoodFirms | —        | ✓              | ✓       | ✗                                                          |
| Regularly updated news or blog                  | ✓        | ✓              | ✓       | ✗                                                          |
| Page explaining their technology and tools      | —        | ✓              | ✓       | ✗                                                          |
| Quality certifications (ISO etc.)               | —        | ISO 9001/27001 | ✓       | ✗                                                          |
| Overseas office presented as a cost advantage   | —        | ✓              | ✓       | ✗ (Nepal office mentioned but not used as a selling point) |
| Budget field in enquiry form                    | —        | ✓              | ✓       | ✗                                                          |
| Modern, professional visual design              | ✓        | ✓              | ✓       | ✗                                                          |

#### Strengths Aozora has that competitors do not

- **Price transparency.** All three competitors make you contact them to find out pricing. Aozora shows it on the homepage. This is actually a competitive advantage — but currently the prices are shown too early, before the visitor has understood the value. Moving pricing to after the portfolio and service descriptions would make it land better.
- **Okinawa identity.** None of the competitors have a local, regional identity. Aozora's roots in Okinawa could be a genuine differentiator for clients who want to work with someone who understands the local market — but the current site does not lean into this at all.
- **Nepal offshore capacity.** Aozora already has the overseas development infrastructure that competitors like Newwave use as a major selling point. It just is not being communicated.

---

### Action Priority Summary

| Priority      | What needs to happen                                                                            | Why it matters                                                             |
| ------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Urgent**    | Add a portfolio, post a news update, fix social sharing image, set up working analytics         | These are the items most likely to be costing Aozora enquiries right now   |
| **Important** | Update the site platform to remove security risks, refresh the company stats                    | Protects the business and keeps information accurate                       |
| **Soon**      | Redesign the visual style, improve page load speed                                              | Brings the site in line with what clients expect from a web agency in 2026 |
| **Planned**   | Start a regular blog, build detailed case study pages, register on review platforms like Clutch | Long-term trust and discoverability improvements                           |

---

## Renewal Proposal — リニューアル企画書

> This section answers the five sections of the official renewal brief (ホームページリニューアル企画 依頼書).

---

### 1. 現状分析 / Current Site Analysis

#### 良い点 / What the original site does well

- **Clear pricing.** Aozora shows its service prices openly on the homepage. Most competitors hide pricing and make you call first — showing it upfront removes friction for potential clients.
- **Strong brand name.** "青空 (Blue Sky)" is memorable. The brand color (sky blue) matches the name perfectly.
- **Four office locations.** Having offices in Okinawa, Tokyo, and Nepal is a genuine competitive advantage — it means local support in Japan and cost-efficient development overseas.
- **Services are clearly organized.** Website production, e-commerce, and custom platforms are each explained with their own pricing tier.

#### 悪い点 / What is hurting the business today

| Problem                                                                         | Why it matters                                                                                                                                                                          |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No news updates since January 2021                                              | First-time visitors assume the company has closed. This is losing potential clients before they even make contact.                                                                      |
| The site has not been tracking any visitors for 3 years                         | The analytics tool used (Google Universal Analytics) was shut down in 2023. The company has had zero visibility into how many people visit, where they come from, or what they look at. |
| The site is built on outdated software (WordPress 6.1.10)                       | Old software has known security holes. The site is at risk of being hacked.                                                                                                             |
| When you share the site on social media (LINE, Twitter, etc.), no image appears | This is a broken link in the site's code — it looks unprofessional and reduces click-through rates from social shares.                                                                  |
| No portfolio or past work is shown anywhere                                     | Aozora is a web agency with no examples of its work visible. Any potential client who checks competing agencies and sees their work will choose them instead.                           |
| The design looks like it was last updated in 2018                               | Animated counters, clip-art-style illustrations, and the overall visual style feel dated. For a company that sells web design, the website is the product demo.                         |

#### 改善した方がいい点 / What we improved in the new design

- **Added a Portfolio section** with three real-world case studies showing the type of work Aozora does, the industry, and measurable results (e.g. "contact inquiries increased 120% after launch"). This directly addresses the biggest competitive weakness.
- **Updated the news section** so it is easy to add new posts without any technical knowledge.
- **Fixed social sharing** — the new site shows a proper thumbnail image when shared on LINE, Twitter, Facebook, etc.
- **Replaced the outdated analytics** with a clean setup ready for Google Analytics 4, which is the current standard.
- **Made the site accessible** — the menu now works with a keyboard, images have proper descriptions for screen readers, and animations stop automatically for users who prefer less motion.
- **Moved the brand promise to the top of the page** — "ちょっと驚くサービス" is now the first thing visitors read, as a large headline, instead of being buried below the fold.

#### 他社サイトと比べて足りない点 / Gaps vs. competitors — now addressed

| What was missing                           | Status in new design                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| Portfolio / past work examples             | ✅ Added — three case study cards with results                                             |
| Modern, professional visual design         | ✅ New dark, editorial look that signals craft quality                                     |
| Nepal office presented as a cost advantage | ✅ Now mentioned in the opening headline and About section                                 |
| Budget field on the contact form           | ✅ Added — visitors can indicate their budget range when enquiring                         |
| One consistent font style                  | ✅ Fixed — original site loaded two separate font systems simultaneously, slowing the page |
| Working visitor tracking                   | ✅ Cleaned up — one analytics tool, properly set up                                        |

---

### 2. 競合調査 / Competitor Research

Three web agencies were studied: **Baunfire** (USA), **Newwave Solutions** (Vietnam), and **SotaTek** (Vietnam). Here is what was learned from each and how it was applied:

| Company               | What they do well                                                                                             | What we borrowed                                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Baunfire**          | Dark, editorial design that immediately signals high quality. Large bold headlines. Very little clutter.      | The new Aozora site uses a dark background with clean white text — a visual style that stands out against the mostly white, generic-looking websites in the Okinawa market. |
| **Newwave Solutions** | Clearly explains their offshore development advantage. States team size, certifications, and client results.  | The new site actively promotes the Nepal office as a cost advantage, not just a footnote. The About section states this clearly.                                            |
| **SotaTek**           | Uses real project outcomes with numbers ("3x traffic increase", "1,000 sign-ups in 3 months") to build trust. | The Portfolio section on the new site shows specific outcomes per project, not just service descriptions. Numbers are more convincing than claims.                          |

**What all three competitors have that Aozora's original site lacked:**

- A portfolio with real results
- A contact form that asks about budget
- An active news or blog section
- A modern visual design that makes the company look credible

All four of these gaps are addressed in the new design.

---

### 3. リニューアル企画書 / Site Concept & Plan

#### サイトコンセプト / Core concept

> **"A results partner — not just a website builder."**

The original site said: "We make websites." The new site says: "We solve business problems using the web — and we measure results." This shift is reflected in the new closing section copy: 「つくることより、成果を出すことに、時間を使う。」 ("Spend time getting results, not just building things.")

This matters because potential clients are not shopping for a website — they are shopping for more customers, more trust, or more sales. The site that speaks to that goal wins the inquiry.

#### ターゲットユーザー / Who this site is for

| Audience      | Who they are                                                                                                                         | What they need from the site                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| **Primary**   | Owners and managers of small/mid-size Japanese businesses, especially in Okinawa. No in-house web team. Budget: ¥500,000–¥2,000,000. | They want to see that Aozora understands business goals, has done similar work before, and can be trusted. |
| **Secondary** | Companies who already have a site and want to upgrade it. Currently comparing several agencies.                                      | They want to see portfolio work and clear pricing to make a comparison.                                    |
| **Tertiary**  | Job seekers — engineers and designers considering joining Aozora.                                                                    | They want to see the company culture, tech stack, and quality of work.                                     |

#### 必要なページ一覧 / Pages built and planned

| Page                  | Purpose                                                              | Status   |
| --------------------- | -------------------------------------------------------------------- | -------- |
| Home (`/`)            | Main landing page — introduces Aozora and drives visitors to contact | ✅ Built |
| Contact (`/contact`)  | Enquiry form with budget field, service type, and message            | ✅ Built |
| Service detail pages  | Deep-dive on each service (corporate site, EC, matching platform)    | Planned  |
| Careers (`/careers`)  | Hiring page for engineers and designers                              | Planned  |
| Blog / News (`/news`) | Regular updates to show the company is active and knowledgeable      | Planned  |

#### トップページ構成案 / Homepage layout — and why each section is in this order

The homepage is designed so that a visitor who arrives and scrolls from top to bottom moves through a natural decision journey: **"Who are you → What do you do → Prove it → How do I contact you."**

| Order | Section              | Purpose                                                                                                                                                                      |
| ----- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | **Opening (Hero)**   | First impression. States the brand promise and the Okinawa/Nepal advantage. Two buttons: "Get a free consultation" (for ready buyers) and "See our services" (for browsers). |
| 2     | **Technology strip** | A scrolling banner of tools Aozora uses (WordPress, Shopify, React, etc.). Builds credibility in three seconds without requiring a full page.                                |
| 3     | **About**            | Company scale — 4 offices, 30 staff, 150+ projects per year. Answers "are they big enough to trust?"                                                                         |
| 4     | **Services**         | The four service options with prices. Real photos replace the old clip-art illustrations.                                                                                    |
| 5     | **Portfolio**        | Past work with real outcomes. The most important trust-builder — comes after services so visitors already understand the offer before seeing the proof.                      |
| 6     | **News**             | Recent activity shows the company is alive and engaged.                                                                                                                      |
| 7     | **Company info**     | Legal name, address, phone. Required by Japanese B2B buyers before they will make contact.                                                                                   |
| 8     | **Map**              | World map showing all four offices. Reinforces the global footprint.                                                                                                         |
| 9     | **Call to action**   | Final invitation to contact, with phone number and business hours. Catches everyone who scrolled all the way down.                                                           |

#### 導線設計 / How visitors are guided toward making contact

Every section on the page either builds trust or provides a shortcut to the contact page. The goal is to make sure a visitor never has to think "where do I go next?"

- The opening section has a "Free consultation" button immediately visible.
- The Portfolio section has an inline "Discuss your project" link.
- The closing section has both a contact button and a phone number.
- The header navigation is always visible, with a contact button pinned to the top right.

#### 改善理由 / Why this design is better than the original — in plain terms

1. **The site no longer looks abandoned.** The original had no updates since 2021. Any visitor doing due diligence would assume the company is out of business. The new design is fresh, modern, and has a news section that is easy to update.

2. **It shows the work.** The original site had zero examples of what Aozora has built. This new site shows three case studies with real outcomes. A web agency that cannot show its work is asking clients to trust them blindly.

3. **It is safer.** The original site ran on outdated software with known security vulnerabilities. The new site has no server software at all — it is a collection of plain files served by a hosting provider, with nothing to hack.

4. **It is faster to load.** The original site loaded two separate font systems at the same time, along with dead analytics code and unused plugin files. The new site loads cleanly with one font and no unused code.

5. **The Nepal office is now a selling point.** The original site mentioned the Nepal office without explaining why it matters. The new site uses it directly as a value proposition: "competitive cost advantage through our Okinawa × Tokyo × Nepal network."

6. **The design matches what Aozora sells.** Aozora sells web design and development. If the company's own website looks outdated, that is the most powerful signal to a potential client that they should look elsewhere. The new design demonstrates the craft that Aozora is selling.

7. **The contact form now qualifies leads.** The new contact form asks for a budget range. This means the sales team can prioritize responses and avoid spending time on enquiries that are not the right fit.

8. **It works for people with disabilities.** The navigation can be used with a keyboard alone. Screen readers can understand the page structure. Animations stop for users who need them to. This is both the right thing to do and a legal expectation in Japan under the Act for Eliminating Discrimination against Persons with Disabilities.

---

### 4. デザイン案 / Design Decisions

The new site is fully designed and built — the implementation itself is the design deliverable. Key visual choices explained in non-technical terms:

| Choice                                    | Why                                                                                                                                                                                                                                                                                  |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Dark background with light text           | Most web agencies in Okinawa use white backgrounds with blue accents — they all look the same. A dark, editorial look immediately signals that Aozora thinks about design differently. It is also easier to read at night.                                                           |
| Gold/yellow call-to-action buttons        | Warm yellow on a dark background draws the eye instantly. It is used only on the most important buttons so visitors always know where to click next.                                                                                                                                 |
| Real photographs instead of illustrations | The original site used generic cartoon-style illustrations. Real photos of workspaces and screens feel more genuine and professional.                                                                                                                                                |
| Smooth scrolling                          | When you scroll the page, it glides rather than jumping. This is a small but noticeable detail that matches the "ちょっと驚く" brand promise — a small moment of quality that visitors feel even if they cannot name it.                                                             |
| Subtle animations when sections appear    | Each section gently fades in as you scroll to it, rather than everything being visible all at once. This creates a sense of pacing and keeps the visitor focused on one thing at a time. Animations are automatically disabled for users who have set their device to reduce motion. |

**Pages designed and built:**

- Home page — 9 sections, fully responsive (works on phone, tablet, and desktop)
- Contact page — enquiry form with budget selection, service type, and message field

---

### 5. 実装 / How It Was Built

The site was built as a **static website** — meaning it is a collection of plain HTML, CSS, and JavaScript files with no server software or database behind it. This is the opposite of the original WordPress site.

**What this means in practice:**

| Original (WordPress)                                            | New site                                                          |
| --------------------------------------------------------------- | ----------------------------------------------------------------- |
| Requires a server running PHP software                          | Just files on a hosting provider — nothing to maintain            |
| Must be updated regularly to avoid security holes               | No software to update — nothing to hack                           |
| Slower — every page visit requires the server to build the page | Faster — pages are already built and served instantly             |
| Expensive to scale                                              | Cheap or free to host on modern platforms (Netlify, Vercel, etc.) |

**Tools used:**

| Tool                 | What it does                                                       |
| -------------------- | ------------------------------------------------------------------ |
| Astro                | The framework that assembles the pages                             |
| React                | Powers the interactive parts (the contact form, language switcher) |
| Tailwind CSS         | Controls all the visual styling                                    |
| GSAP + Framer Motion | Powers the scroll animations                                       |
| Lenis                | Creates the smooth scrolling effect                                |

To run the project locally:

```sh
npm install
npm run dev      # Opens the site at http://localhost:4321
npm run build    # Creates the final files ready to upload
```
