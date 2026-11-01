---
title: "YOYO Test"
subtitle: "Digitalizing the traditional maximal aerobic endurance fitness test (YO-YO/Beep Test)"
accent: "#4a25b1"
facts: [{"label": "Time frame", "value": "4 weeks"}, {"label": "Role", "value": "Team Lead, UX Researcher, UX Designer, Visual Designer"}, {"label": "Platform", "value": "Mobile app"}]
---

<div class="summary"><p><strong>The challenge</strong>Coaches record Yo-Yo test results on paper and retype them later. With around 15 athletes running at once, that is slow and easy to get wrong.</p><p><strong>What I did</strong>I led research with 8 coaches and 12 athletes, mapped the whole test day, and designed one mobile app for both, with phone and manual capture plus team reports.</p><p><strong>What happened</strong>19 of 25 test attempts succeeded. Core flows worked. Explaining the app and connecting phones failed, and that drove the next iteration.</p></div>

<figure><img src="/media/work/yoyo-test/5917c5bf4b20454f.webp" alt="" loading="lazy" style="max-width:380px"></figure>

## 1. Understand

### What the test is

The Yo-Yo test is a maximal aerobic endurance test: athletes run between markers 20 meters apart at increasing speeds until exhaustion. It was developed in the 1990s by Danish soccer physiologist Jens Bangsbo and colleagues, and it is still widely used because it is a great way to measure VO2 max.

<figure><img src="/media/work/yoyo-test/cb08b58e0f4e4809.webp" alt="YOYO/Beep intermittent recovery test" loading="lazy"><figcaption>YOYO/Beep intermittent recovery test</figcaption></figure>

### The real problem

The test itself works. The system around it doesn't. Athletes also lack exact information about how to do the test on their own premises.

<div class="panel"><p>A coach's test day today: six stages, eight tools</p><div class="cards n6"><div class="card"><strong>Aware</strong><span class="tag">Email</span><span class="tag">Phone</span><span class="tag">Calendar</span><small>Details reach people one by one</small></div><div class="card"><strong>Before test</strong><span class="tag">Laptop</span><span class="tag">Google Sheet</span><span class="tag">Printer</span><small>Lists are built and printed</small></div><div class="card"><strong>Test day</strong><span class="tag">Phone</span><span class="tag">Speaker</span><small>Ground measured and set up by hand</small></div><div class="card"><strong>Intro</strong><span class="tag">Face to face</span><small>Rules explained again and again</small></div><div class="card"><strong>Test</strong><span class="tag">Phone</span><span class="tag">Speaker</span><span class="tag">Paper</span><small>Results marked on printed paper</small></div><div class="card"><strong>End</strong><span class="tag">Paper</span><span class="tag">Laptop</span><small>Results retyped and checked</small></div></div><p>Rebuilt from my customer journey map. The coach's emotion peaks negatively at the end, while checking that entered values are correct.</p></div>

> How might we let one coach capture accurate results for 15 running athletes, in real time, without paper?

**For users:** perform the test seamlessly and effectively.

**For the business:** 40% of athletes and 35% of sports teams in the world use the product, as a meaningful provider of insights and a companion to coaches and athletes.

### How we worked

We followed IDEO's Human-Centered Design and Lean UX. With four weeks, we agreed a clear boundary in strategy sessions: a simple solution and minimal research, while still trying new technology.

<figure><img src="/media/work/yoyo-test/a0267bb9016b4978.webp" alt="Design process" loading="lazy"><figcaption>Design process</figcaption></figure>

<div class="panel"><p>Research at a glance</p><div class="stats"><div><strong>8</strong><span>coaches interviewed</span></div><div><strong>12</strong><span>athletes interviewed</span></div><div><strong>4</strong><span>competing apps compared</span></div><div><strong>5</strong><span>users in task testing</span></div></div></div>

### Learning the rules

The test is more complicated than it looks: every level has its own shuttles, speeds and calculations. Level 1, for example, has 7 runs of 20 meters, or 140 meters in total.

<div class="grid c2"><figure><img src="/media/work/yoyo-test/a49e7343ca7443d9.webp" alt="Test footage and VO2 max score tables" loading="lazy"><figcaption>Test footage and VO2 max score tables</figcaption></figure><figure><img src="/media/work/yoyo-test/7598f939e5254916.webp" alt="Recording sheet and level schema" loading="lazy"><figcaption>Recording sheet and level schema</figcaption></figure></div>

<div class="panel"><p>The rule the design has to follow</p><div class="cards n4"><div class="card"><strong>1. Running</strong>A timer starts with the test and triggers the Yo-Yo audio cues.</div><div class="card"><strong>2. First miss</strong>An athlete who doesn't reach the other side before the cue gets a warning.</div><div class="card"><strong>3. Second miss</strong>The athlete is out, and the coach adds their result.</div><div class="card dark"><strong>4. Result</strong>Saved as level and shuttle, such as 3-7, from a fixed set, so it can be corrected later.</div></div><p>From user story B and C. With up to 15 athletes, this cycle runs in parallel, which is why a coach can't look down at a form for long.</p></div>

### Looking at the market

We compared four apps on usability, interface, features and engagement. Market share data wasn't available, so we judged them on the experience.

<figure><img src="/media/work/yoyo-test/1476479ed102468f.webp" alt="Top applications in the market" loading="lazy"><figcaption>Top applications in the market</figcaption></figure>

<figure><img src="/media/work/yoyo-test/e2410b361e8647d0.webp" alt="Competitor benchmarking" loading="lazy"><figcaption>Competitor benchmarking</figcaption></figure>

<div class="insight"><p><strong>What we learned:</strong> The gap was not another timer. Most apps gave coaches no real insight or report.</p><p><strong>What it changed:</strong> Reports and team-level results became core to the MVP.</p></div>

### Talking to coaches and athletes

I used semi-structured interviews and put time into framing the questions, because the intent behind a question matters before any interview starts.

<figure><img src="/media/work/yoyo-test/c7c91c5a7ed0444d.webp" alt="Original affinity map of interview findings" loading="lazy"><figcaption>Original affinity map of interview findings</figcaption></figure>

<div class="panel"><p>What 24 interview notes clustered into</p><div class="cards n5"><div class="card"><strong>Create and assign (7)</strong><div class="note">Create a new Yo-Yo test</div><div class="note">Assign athletes to the test</div><div class="note">Do all different types of tests</div><div class="note a">Do my test with my team mates</div><small>The team is the unit, not the individual</small></div><div class="card"><strong>Edit and convert (6)</strong><div class="note">Edit results to fix a mistake</div><div class="note a">Convert my results to a VO2 max score</div><div class="note">Delete a specific test</div><small>Results must be correctable and meaningful</small></div><div class="card"><strong>Track and share (5)</strong><div class="note">Results added faster to the system</div><div class="note a">Track my exact result while running</div><div class="note">My team can see results instantly</div><small>Speed of capture is the core value</small></div><div class="card"><strong>How to do the test (3)</strong><div class="note a">Measure the track without a tape</div><div class="note">See details about a specific test</div><div class="note">Eliminate paper and pen</div><small>Setup is part of the product</small></div><div class="card"><strong>Help and support (3)</strong><div class="note a">Help and support when I need it</div><div class="note a">Share practice results with my coach</div><div class="note a">Communicate with my coach</div><small>Only athletes raised this</small></div></div><p>Yellow notes came from coaches and blue notes from athletes. Representative notes shown; synthesised from the interview board below.</p></div>

- "I'm always overwhelmed by explaining the same thing again and again"
- "This digital world, we are still using pen and paper for doing the test"
- "I really struggle most of the times to get the small improvements that I did on the self-test"

### Trying it myself

Anybody can do this test, so I tried it with the tools available to feel the experience first-hand.

<figure><img src="/media/work/yoyo-test/0c0a1ed3f9d741bf.webp" alt="Observation of YOYO/Beep tests" loading="lazy"><figcaption>Observation of YOYO/Beep tests</figcaption></figure>

## 2. Define

### Two people, one journey

We created two primary personas: a coach aged 45 to 50, and an athlete aged 22 to 31.

<div class="grid c2"><figure><img src="/media/work/yoyo-test/4437966b491e44bd.webp" alt="Persona - Coach" loading="lazy"><figcaption>Persona - Coach</figcaption></figure><figure><img src="/media/work/yoyo-test/98fef26adaee4f62.webp" alt="Persona - Athlete" loading="lazy"><figcaption>Persona - Athlete</figcaption></figure></div>

<figure><img src="/media/work/yoyo-test/f929e85de2db4a4d.webp" alt="User stories" loading="lazy"><figcaption>User stories</figcaption></figure>

<figure><img src="/media/work/yoyo-test/37fbac95ea8d4c32.webp" alt="Customer journey map - Coach" loading="lazy"><figcaption>Customer journey map - Coach</figcaption></figure>

<figure><img src="/media/work/yoyo-test/98cb1d0dc8654946.webp" alt="Empathy map" loading="lazy"><figcaption>Empathy map</figcaption></figure>

<div class="insight"><p><strong>What we learned:</strong> Most of the athlete's touchpoints already sit inside the coach's journey, and both need the same test, results and information.</p><p><strong>What it changed:</strong> We chose one mobile application for both, rather than two products.</p></div>

The journey showed four specific opportunities:

- An easy way to share test information with a group of athletes
- Create a team from an Excel sheet
- Give players an overall idea before they arrive for the test
- Capture the result automatically and instantly

### Design principles

"Work everywhere" came straight from the setting. This app is used on a field or a court, not at a desk.

<div class="principles"><div><img src="/media/work/yoyo-test/667ef087004c459b.webp" alt="" loading="lazy"><strong>Seamless</strong><p>Each user has their own schedule and habits. The experience should connect with daily life.</p></div><div><img src="/media/work/yoyo-test/3934b9cf3bf943e4.webp" alt="" loading="lazy"><strong>Work everywhere</strong><p>The design should work in sunlight, at night and under indoor lights.</p></div><div><img src="/media/work/yoyo-test/ae2cf7f6d1d644d6.webp" alt="" loading="lazy"><strong>Simple</strong><p>No complicated design or experience.</p></div><div><img src="/media/work/yoyo-test/45bbdd13371a451f.webp" alt="" loading="lazy"><strong>Perform automatically</strong><p>Work in the background with less manual interaction.</p></div></div>

## 3. Ideate

### Deciding the MVP

We brainstormed solutions and placed them on a 2x2 matrix.

<div class="grid c2"><figure><img src="/media/work/yoyo-test/f918fb2de4544e68.webp" alt="Brainstorming" loading="lazy"><figcaption>Brainstorming</figcaption></figure><figure><img src="/media/work/yoyo-test/6b10f37ad4b14322.webp" alt="2x2 prioritisation matrix" loading="lazy"><figcaption>2x2 prioritisation matrix</figcaption></figure></div>

<div class="panel"><p>What made the MVP</p><div class="cards n2"><div class="card"><strong>In the MVP: high value to users and MVP</strong><span class="tag">Test multiple athletes</span><span class="tag">Create a team</span><span class="tag">All test types</span><span class="tag">VO2 max auto conversion</span><span class="tag">Real-time test level</span><span class="tag">Schedule</span><span class="tag">Save and graph results</span><span class="tag">Edit and update</span><span class="tag">Share results</span><span class="tag">How-to video and information</span></div><div class="card"><strong>Later: high MVP value, lower user value</strong><span class="tag">Fitness rating</span><span class="tag">AR measuring scale</span><span class="tag">Voice command</span><span class="tag">Live video recording</span><span class="tag">Custom tests</span></div><div class="card"><strong>Deprioritised: lower MVP value</strong><span class="tag">Feedback on how to improve</span><span class="tag">Chat between coaches and athletes</span><span class="tag">Blog</span></div><div class="card dark"><strong>Testing later challenged this</strong>Athletes kept asking how to improve, the very idea placed in the bottom row.</div></div><p>Selected items, rebuilt from the 2x2 matrix below.</p></div>

### The central decision

Capturing the result is where this product succeeds or fails. Keeping a manual route was deliberate: technology should never stop anyone from doing the test.

<div class="panel"><p>How should a result be captured?</p><table><thead><tr><th>Idea</th><th>What it needs</th><th>Who records</th><th>Decision</th></tr></thead><tbody><tr><td>Smartwatch</td><td>Each athlete owns a watch</td><td>Automatic</td><td>Later: shown disabled in the prototype</td></tr><tr><td>Track sensors</td><td>Sensors installed on the track</td><td>Automatic</td><td>Not chosen</td></tr><tr><td><strong>Manual</strong></td><td>Only the coach's phone</td><td>Coach</td><td><strong>MVP</strong></td></tr><tr><td><strong>Phone carried while running</strong></td><td>Phones paired and carried</td><td>Automatic</td><td><strong>MVP</strong></td></tr></tbody></table><p>Requirements summarised from each idea. We chose ideas 3 and 4 after voting and a technical feasibility check.</p></div>

### Scenarios and structure

Before any wireframes, I wrote task flows from user scenarios, then we ran workshops to build the information architecture.

<figure><img src="/media/work/yoyo-test/f765c5b3e10a449c.webp" alt="User scenarios and task flows" loading="lazy"><figcaption>User scenarios and task flows</figcaption></figure>

<figure><img src="/media/work/yoyo-test/90fa59e10b4c48c8.webp" alt="User flow workshops" loading="lazy"><figcaption>User flow workshops</figcaption></figure>

<div class="panel"><p>Information architecture</p><div class="cards n5"><div class="card"><strong>Home</strong><ul><li>Hello, name</li><li>Test today</li><li>Athletes accepted</li><li>Tests this month</li><li>Average score</li></ul></div><div class="card"><strong>Team</strong><ul><li>Team list and members</li><li>Choose test type</li><li>Add a member</li></ul></div><div class="card dark"><strong>Run</strong><ul><li>Run with mobile</li><li>Run it manually</li><li>Run with smartwatch</li><li>Live test screen</li></ul></div><div class="card"><strong>Reports</strong><ul><li>Mine / Team</li><li>Filter by test</li><li>Score chart</li><li>Results / Upcoming</li></ul></div><div class="card"><strong>Profile</strong><ul><li>QR code</li><li>Test introduction</li><li>How to do the test</li><li>Settings: music, beep</li><li>Invite</li></ul></div></div><p>Mapped from the final screens and five-tab navigation. Tab names are descriptive; the app uses icons. Run sits in the centre because it's the primary action.</p></div>

### Storyboards and paper

I storyboarded how people would use the app, then made paper wireframes to review with friends and seniors.

<div class="grid c2"><figure><img src="/media/work/yoyo-test/4d1127aa05f34da6.webp" alt="Storyboarding" loading="lazy"><figcaption>Storyboarding</figcaption></figure><figure><img src="/media/work/yoyo-test/37ba9dd14541460b.webp" alt="First stage of wireframes" loading="lazy"><figcaption>First stage of wireframes</figcaption></figure></div>

## 4. Design

### From role to result

The first screen identifies a coach or an athlete, so the app can send relevant content. The next offers three ways to run the test, so it can always go ahead whatever equipment is available.

<div class="phones"><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/yoyo-test/1dc1d73520fd4491.webp" alt="1. Identify the role" loading="lazy"></div><span>1. Identify the role</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/yoyo-test/6e7f019594114bb3.webp" alt="2. Choose how to run" loading="lazy"></div><span>2. Choose how to run</span></div></div>

### Running the test

The test screen shows the current level, time and distance in a large, simple layout that can be read at a glance. Run sits at the centre of the navigation because it is the main job.

<div class="grid c2"><figure><img src="/media/work/yoyo-test/6a178b6c23c84fe8.webp" alt="Live test screen" loading="lazy"><figcaption>Live test screen</figcaption></figure><figure><img src="/media/work/yoyo-test/d5a9c0f589ab4f82.webp" alt="Five-tab navigation" loading="lazy"><figcaption>Five-tab navigation</figcaption></figure></div>

<figure><img src="/media/work/yoyo-test/2f1bac1dd11640bd.webp" alt="Team view: scores, test count and average" loading="lazy" style="max-width:533px"><figcaption>Team view: scores, test count and average</figcaption></figure>

### Profile and report

Athletes wanted to see small improvements, so progress is visible from the home screen through to each result. Scroll inside the longer screens to see all of them.

<div class="phones"><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/yoyo-test/a607e96fc05a4427.webp" alt="Home" loading="lazy"></div><span>Home</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/yoyo-test/7ef1bc82a0db4172.webp" alt="Report" loading="lazy"></div><span>Report</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/yoyo-test/a7eccac4c8b1456b.webp" alt="Profile" loading="lazy"></div><span>Profile</span></div></div>

<div class="panel"><p>A score scale coaches can read at a glance</p><div class="cards n4"><div class="card"><strong><span class="swatch" style="background:#fdd159"></span>Fair</strong></div><div class="card"><strong><span class="swatch" style="background:#62f9af"></span>Good</strong></div><div class="card"><strong><span class="swatch" style="background:#76d8d7"></span>Excellent</strong></div><div class="card"><strong><span class="swatch" style="background:#ff73e2"></span>Superior</strong></div></div><p>Colours sampled from the final UI. White on the app's purple measures 9.6:1 contrast, which supports the Work everywhere principle.</p></div>

## 5. Validate

### Task testing

We ran a remote moderated test of 5 major functions with 5 users.

<div class="panel"><p>Results by task and user</p><table><thead><tr><th>Task</th><th>Athlete 1</th><th>Athlete 2</th><th>Coach 3</th><th>Coach 4</th><th>Athlete 5</th></tr></thead><tbody><tr><td>Understand what the app is</td><td class="pass">✓</td><td class="fail">✕</td><td class="fail">✕</td><td class="fail">✕</td><td class="fail">✕</td></tr><tr><td>Create a level 1 test and schedule it</td><td class="pass">✓</td><td class="pass">✓</td><td class="pass">✓</td><td class="pass">✓</td><td class="pass">✓</td></tr><tr><td>Connect your team's phones</td><td class="fail">✕</td><td class="retry">2nd try</td><td class="pass">✓</td><td class="fail">✕</td><td class="pass">✓</td></tr><tr><td>Create and perform a manual test</td><td class="pass">✓</td><td class="pass">✓</td><td class="pass">✓</td><td class="pass">✓</td><td class="pass">✓</td></tr><tr><td>View your and your team's reports</td><td class="pass">✓</td><td class="pass">✓</td><td class="pass">✓</td><td class="pass">✓</td><td class="pass">✓</td></tr></tbody></table><p>19 of 25 attempts succeeded. Failures sit in two rows, so the problem is onboarding and connection, not the core test flow.</p></div>

<figure><img src="/media/work/yoyo-test/08e195cece8e42da.webp" alt="Original user testing sheet" loading="lazy"><figcaption>Original user testing sheet</figcaption></figure>

Only one person understood the app without help. One user suggested explaining more early on, with an option to skip.

### Testing in the real world

We then tested outdoors and indoors, because a phone on a field behaves differently from a prototype on a call.

<div class="grid c2"><figure><img src="/media/work/yoyo-test/c0fe8f2b6b9545b8.webp" alt="Outdoor test" loading="lazy"><figcaption>Outdoor test</figcaption></figure><figure><img src="/media/work/yoyo-test/10765775aead4e65.webp" alt="Indoor test" loading="lazy"><figcaption>Indoor test</figcaption></figure></div>

<div class="panel"><p>From finding to change</p><table><thead><tr><th>Finding</th><th>Design change</th><th>Status</th></tr></thead><tbody><tr><td>Coaches keep explaining the same context</td><td>Test Demonstration card on the home screen</td><td>Designed</td></tr><tr><td>Coaches can't find individual reports</td><td>Each athlete's result leads to their report</td><td>Designed</td></tr><tr><td>Adding a member before starting is hard</td><td>Add member action on the test screen</td><td>Designed</td></tr><tr><td>How to carry the phone while running</td><td>No change documented</td><td>Open</td></tr><tr><td>Athletes ask how to improve</td><td>No change documented</td><td>Open</td></tr><tr><td>Connecting phones failed for 2 of 5</td><td>No change documented</td><td>Open</td></tr></tbody></table></div>

<figure><img src="/media/work/yoyo-test/90510a63c2e143c2.webp" alt="Before and after: Test Demonstration card on the home screen" loading="lazy"><figcaption>Before and after: Test Demonstration card on the home screen</figcaption></figure>

<figure><img src="/media/work/yoyo-test/e010e970efda4047.webp" alt="Before and after: add member on the test type screen" loading="lazy"><figcaption>Before and after: add member on the test type screen</figcaption></figure>

<figure><img src="/media/work/yoyo-test/8febbe12c4fd411a.webp" alt="Before and after: each athlete&#x27;s result leads to their report" loading="lazy"><figcaption>Before and after: each athlete's result leads to their report</figcaption></figure>

## 6. Outcome

<div class="stats"><div><strong>2</strong><span>International teams</span></div><div><strong>7+</strong><span>International athletes</span></div><div><strong>30+</strong><span>Academy</span></div></div>

### What I learned

- Testing can overturn prioritisation. We ranked feedback on how to improve low, and athletes asked for it anyway.
- Brainstorming works best when you know when you actually need a group. With an unfamiliar product, desk research and the people around you build understanding.
- Remote research can cover most of a UX project.

### What I'd measure next

<div class="panel"><p>Proposed measures for the next round</p><table><thead><tr><th>Question</th><th>Measure</th></tr></thead><tbody><tr><td>Does it beat paper?</td><td>Time from test end to all results in the system, compared with paper</td></tr><tr><td>Is capture accurate?</td><td>How often coaches edit a result after the test</td></tr><tr><td>Is onboarding fixed?</td><td>Share of first-time users who can say what the app does</td></tr><tr><td>Does connection work?</td><td>Task success connecting team phones, up from 3 of 5</td></tr></tbody></table><p>These are proposed measures, not results.</p></div>
