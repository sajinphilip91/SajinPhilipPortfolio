---
title: "WhatsApp Poll"
subtitle: "An experimental project for Adding a new Poll feature to WhatsApp"
accent: "#075e54"
facts: [{"label": "Time frame", "value": "2 weeks - Feb 2021"}, {"label": "Role", "value": "UX Researcher, UX Designer, Visual Designer"}, {"label": "Platform", "value": "Android concept"}]
---

<div class="summary"><p><strong>The challenge</strong>Deciding anything in a WhatsApp group is hard. Answers get buried, people mute the group, and businesses have no simple way to learn what customers like.</p><p><strong>What I did</strong>I studied polls in 5 leading products, interviewed 17 users, and designed polls that live inside WhatsApp's existing patterns, for groups, status and business accounts.</p><p><strong>What happened</strong>In usability tests with 4 users, 16 of 20 task attempts succeeded. Finding the second way to post a poll was the weakest point, at 2 of 4.</p></div>

<figure><img src="/media/work/whatsapp-poll/s01-0.webp" alt="" loading="lazy" style="max-width:280px"></figure>

## 1. Understand

### The problem

It's difficult to finalise anything in a WhatsApp group: the date for an outing, the next holiday spot, a birthday present. In larger groups it is harder to organise people, and irrelevant messages make people put the group on silent, so they miss the question entirely. New messages push it out of sight.

Businesses have a version of the same problem: identifying what a group of people likes and dislikes about their brand.

> How might we help a group reach a decision without leaving the chat?

This is a self-initiated concept, not work for WhatsApp.

### Learning the product

I followed IDEO's Human-Centered Design Thinking process: learn the product, focused research, ideation and wireframing, design and prototype, then usability testing.

WhatsApp Business mattered from the start. It already lets companies connect with customers through catalogues, automated messages and quick replies, so a poll could become a useful tool for them too.

<figure><img src="/media/work/whatsapp-poll/s04-0.webp" alt="WhatsApp Business quick replies" loading="lazy" style="max-width:260px"><figcaption>WhatsApp Business quick replies</figcaption></figure>

### How others do polls

I compared polling in five top products across six areas: poll options, themes, frame colour, business polls, voting privacy and advanced settings.

<div class="logos"><img src="/media/work/whatsapp-poll/s08-0.webp" alt="" loading="lazy"><img src="/media/work/whatsapp-poll/s08-1.webp" alt="" loading="lazy"><img src="/media/work/whatsapp-poll/s08-2.webp" alt="" loading="lazy"><img src="/media/work/whatsapp-poll/s08-3.webp" alt="" loading="lazy"><img src="/media/work/whatsapp-poll/s08-4.webp" alt="" loading="lazy"><img src="/media/work/whatsapp-poll/s10-4.webp" alt="" loading="lazy"><img src="/media/work/whatsapp-poll/s10-5.webp" alt="" loading="lazy"><img src="/media/work/whatsapp-poll/s10-6.webp" alt="" loading="lazy"></div>

<div class="grid c4"><figure><img src="/media/work/whatsapp-poll/s10-0.webp" alt="Facebook Messenger" loading="lazy"><figcaption>Facebook Messenger</figcaption></figure><figure><img src="/media/work/whatsapp-poll/s10-1.webp" alt="Instagram" loading="lazy"><figcaption>Instagram</figcaption></figure><figure><img src="/media/work/whatsapp-poll/s10-2.webp" alt="Discord" loading="lazy"><figcaption>Discord</figcaption></figure><figure><img src="/media/work/whatsapp-poll/s10-3.webp" alt="Viber" loading="lazy"><figcaption>Viber</figcaption></figure></div>

<div class="grid c2"><figure><img src="/media/work/whatsapp-poll/s10-8.webp" alt="Telegram: visible votes" loading="lazy"><figcaption>Telegram: visible votes</figcaption></figure><figure><img src="/media/work/whatsapp-poll/s09-0.webp" alt="Findings from the comparison" loading="lazy"><figcaption>Findings from the comparison</figcaption></figure></div>

<div class="insight"><p><strong>What we learned:</strong> Polls elsewhere share a common shape, and the differences are in themes, privacy controls and end dates.</p><p><strong>What it changed:</strong> WhatsApp's poll should feel familiar, and needed options for privacy, a deadline and a theme.</p></div>

### What people told me

I interviewed 4 WhatsApp Business users and 13 private users through voice calls.

<figure><img src="/media/work/whatsapp-poll/s12-0.webp" alt="Interview findings from business and private users" loading="lazy"><figcaption>Interview findings from business and private users</figcaption></figure>

<div class="panel"><p>What the interview notes clustered into</p><div class="cards n4"><div class="card"><strong>Decide fast</strong><div class="note">Quickly create poll</div><div class="note">I want to get the decision as much as quickly</div><div class="note">See the result instantly</div><small>Speed is the whole point</small></div><div class="card"><strong>Cut the noise</strong><div class="note">I miss most of the important messages</div><div class="note">Irritated about irrelevant funny messages</div><small>The question gets buried</small></div><div class="card"><strong>Learn from people</strong><div class="note">I want to get the people feedback</div><div class="note">Analyse the poll data and result</div><div class="note">Share the results with participants</div><small>Results are useful after the vote</small></div><div class="card"><strong>Make it richer</strong><div class="note">Poll should be more interactive</div><div class="note">Multiple choice is a good option</div><div class="note">I can add my option if it's not listed</div><small>Other apps set expectations</small></div></div><p>Representative notes shown; synthesised from the interview board.</p></div>

- "It's difficult to me for identify which cake people most liked"
- "Planning a trip was painful"
- "I'm wondering why WhatsApp still not providing poll function"
- "I struggle most of the times to get a decision in the group of people, they located in different places"

## 2. Define

### Three roles, not one user

The biggest shift came from looking at psychology instead of account type. In any poll, people play one of three roles, each needing something different.

| Role | Who they are | What they need |
| --- | --- | --- |
| Creator | Business or private user who creates the poll | Manage the poll, instant notifications, view results and analytics, use them to decide |
| Responder | Private user who views and votes | A one-time notification, the instant result once voted, the final result |
| Viewer | Private user who sees the poll but doesn't respond | A one-time notification, and the final result |

I also created provisional personas based on research and on people I knew who use WhatsApp.

<div class="grid c2"><figure><img src="/media/work/whatsapp-poll/s17-0.webp" alt="Persona: Johny, marketing manager" loading="lazy"><figcaption>Persona: Johny, marketing manager</figcaption></figure><figure><img src="/media/work/whatsapp-poll/s18-0.webp" alt="Persona: Ann Maria, student" loading="lazy"><figcaption>Persona: Ann Maria, student</figcaption></figure></div>

### Where a poll could fit

I mapped the existing flows for normal and business users to see where a poll could go.

<div class="grid c2"><figure><img src="/media/work/whatsapp-poll/s20-0.webp" alt="Existing flow - normal user" loading="lazy"><figcaption>Existing flow - normal user</figcaption></figure><figure><img src="/media/work/whatsapp-poll/s21-0.webp" alt="Existing flow - business user" loading="lazy"><figcaption>Existing flow - business user</figcaption></figure></div>

## 3. Ideate

### Framing with 4W

- **Why?** Easy decision making.
- **What do users expect?** To decide as easily and quickly as possible.
- **When?** In between chatting in groups, and in business chat discussions.
- **Who?** Business, group and private users, who already know WhatsApp. That's an advantage: there's nothing to teach from the bottom up.

I generated many ideas, then used a 2x2 matrix to check what really matters for users and the business.

<div class="grid c2"><figure><img src="/media/work/whatsapp-poll/s24-0.webp" alt="Brainstorming and solutions" loading="lazy"><figcaption>Brainstorming and solutions</figcaption></figure><figure><img src="/media/work/whatsapp-poll/s26-0.webp" alt="2x2 prioritisation matrix" loading="lazy"><figcaption>2x2 prioritisation matrix</figcaption></figure></div>

<div class="panel"><p>What the 2x2 put first</p><div class="cards n2"><div class="card"><strong>High value to users and business</strong><span class="tag">Quickly create</span><span class="tag">Instant result</span><span class="tag">Set end date</span><span class="tag">Poll in status</span><span class="tag">Privacy</span><span class="tag">Different themes</span><span class="tag">Progress bar</span><span class="tag">Poll indication</span><span class="tag">Re-voting</span></div><div class="card"><strong>High business value, lower user value</strong><span class="tag">Analytical data</span><span class="tag">Statistics</span><span class="tag">Data-driven decision</span><span class="tag">Quiz mode</span><span class="tag">Prefilled options</span></div><div class="card"><strong>High user value, lower business value</strong><span class="tag">Sharable link</span><span class="tag">Multiple choice</span><span class="tag">Poll history</span></div><div class="card"><strong>Low on both</strong><span class="tag">Countdown</span></div></div><p>A selection rebuilt from the 2x2 matrix below. Poll History ranked low here, but I later designed it for business users, so its value still needs testing.</p></div>

### Testing the idea against the journey

I mapped the emotional experience of a typical journey with the solution in place, then wrote task flows from user scenarios before drawing anything.

<div class="grid c2"><figure><img src="/media/work/whatsapp-poll/s28-0.webp" alt="Emotional experience map" loading="lazy"><figcaption>Emotional experience map</figcaption></figure><figure><img src="/media/work/whatsapp-poll/s30-0.webp" alt="User scenarios and task flows" loading="lazy"><figcaption>User scenarios and task flows</figcaption></figure></div>

<div class="panel"><p>Friends planning an outing, with polls</p><div class="cards n5"><div class="card"><strong>Plan</strong>A group plans an outing.<small>Mood rises</small></div><div class="card"><strong>Discuss</strong>They create a group and discuss locations.<small>Mood falls</small></div><div class="card"><strong>Shortlist</strong>A few locations remain.<small>Brief lift</small></div><div class="card"><strong>Create poll</strong>One member creates a poll.<small>Lowest point</small></div><div class="card dark"><strong>Respond and go</strong>People vote, the location is final, and they go.<small>Highest point</small></div></div><p>Rebuilt from the mood map. Creating the poll is the low point, so it must take as little effort as possible.</p></div>

### Designing with psychology

I based decisions on established behaviour. People use WhatsApp status largely to get attention, express feeling and share, which suggested status could be a natural place for polls. Curiosity and a sense of belonging are also strong motivators, so seeing who has voted could encourage others to join.

### The new flow

I redrew the flows with polls added: a Poll Option in chats for everyone, and Poll in Status and Poll History for business users.

<div class="grid c2"><figure><img src="/media/work/whatsapp-poll/s35-0.webp" alt="Updated flow - normal user" loading="lazy"><figcaption>Updated flow - normal user</figcaption></figure><figure><img src="/media/work/whatsapp-poll/s36-0.webp" alt="Updated flow - business user" loading="lazy"><figcaption>Updated flow - business user</figcaption></figure></div>

<div class="panel"><p>Where polls live in WhatsApp</p><div class="cards n4"><div class="card dark"><strong>Chats</strong><ul><li>Poll indicator in the list</li><li>Attach menu: Poll</li><li>Create poll</li><li>Missed poll bar</li></ul></div><div class="card"><strong>In a poll</strong><ul><li>Vote</li><li>See result and count</li><li>Undo</li><li>Bookmark</li></ul></div><div class="card"><strong>Status</strong><ul><li>Business users only</li><li>Create poll in status</li><li>Viewers vote in status</li></ul></div><div class="card"><strong>Business settings</strong><ul><li>Poll History</li><li>Long-term decisions</li><li>Delete if needed</li></ul></div></div><p>Mapped from the updated user flows and final screens.</p></div>

### Wireframes

Paper let me work through each part quickly: entry points, creation, two themes, status and history.

<div class="grid c2"><figure><img src="/media/work/whatsapp-poll/s38-0.webp" alt="Poll indication, create option and themes" loading="lazy"><figcaption>Poll indication, create option and themes</figcaption></figure><figure><img src="/media/work/whatsapp-poll/s39-0.webp" alt="Default theme and viewer view" loading="lazy"><figcaption>Default theme and viewer view</figcaption></figure><figure><img src="/media/work/whatsapp-poll/s40-0.webp" alt="Theme 2 and missed poll" loading="lazy"><figcaption>Theme 2 and missed poll</figcaption></figure><figure><img src="/media/work/whatsapp-poll/s41-0.webp" alt="Business poll through status" loading="lazy"><figcaption>Business poll through status</figcaption></figure><figure><img src="/media/work/whatsapp-poll/s42-0.webp" alt="Business poll history" loading="lazy"><figcaption>Business poll history</figcaption></figure></div>

## 4. Design

### Staying inside WhatsApp

The poll had to look like it always belonged. WhatsApp uses Material Design with some customisations, so I followed both for iconography, font, spacing and interaction. The visual style is deliberately not trend-led.

<div class="grid c3"><figure><img src="/media/work/whatsapp-poll/s45-0.webp" alt="WhatsApp brand guidelines" loading="lazy"><figcaption>WhatsApp brand guidelines</figcaption></figure><figure><img src="/media/work/whatsapp-poll/s46-0.webp" alt="WhatsApp colours" loading="lazy"><figcaption>WhatsApp colours</figcaption></figure><figure><img src="/media/work/whatsapp-poll/s47-0.webp" alt="Material Design" loading="lazy"><figcaption>Material Design</figcaption></figure></div>

<div class="panel"><p>A poll's lifecycle</p><div class="cards n4"><div class="card"><strong>1. Draft</strong>Post is enabled after a question and at least 2 options.</div><div class="card"><strong>2. Active</strong>An indicator shows in the chat list until the chat is opened.</div><div class="card"><strong>3. Buried</strong>A bar lets the user view or close the poll, and scrolls to it.</div><div class="card dark"><strong>4. Voted</strong>Results appear instantly, with Undo and Bookmark.</div></div><p>Rules taken from my design notes for each screen.</p></div>

### Creating a poll

Biometric login → group chat → attach icon → create poll → post in the group. [View the clickable prototype](https://www.figma.com/proto/xgWRgWPo9dvea3ypAnuKJQ/DH?page-id=22%3A0&node-id=23%3A6&viewport=243%2C32%2C0.3100016713142395&scaling=min-zoom)

The poll sits with the other attachments, because everything in that menu makes communication easier. It uses a widely recognised poll icon (Jakob's Law) and a new colour that matches the strength of the others. A green dot signals something new. The text and interaction match the rest of the group, following the Law of Similarity.

Post is only enabled after a question and at least 2 options. Users can also set a voting deadline and hide participant details.

<div class="phones"><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s51-0.webp" alt="Poll in the attach menu" loading="lazy"></div><span>Poll in the attach menu</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s53-0.webp" alt="Create poll" loading="lazy"></div><span>Create poll</span></div></div>

### Viewing a poll: two concepts

I created two concepts for how the creator sees the poll. I personally liked concept 1, but chose concept 2 because it's more aligned with WhatsApp's guidelines. Later, both should be A/B tested.

<div class="phones"><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s54-0.webp" alt="Concept 1" loading="lazy"></div><span>Concept 1</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s54-1.webp" alt="Concept 2" loading="lazy"></div><span>Concept 2</span></div></div>

### Not missing it

This solves the problem from the research. An indicator in the chat list shows a poll is active and disappears once the chat is opened, like a normal message notification. If the poll has been buried, a bar at the top lets the user view or close it, and auto-scrolls to the poll.

[View the participation prototype](https://www.figma.com/proto/xgWRgWPo9dvea3ypAnuKJQ/DH?page-id=38%3A119&node-id=109%3A2&viewport=558%2C351%2C0.43395304679870605&scaling=min-zoom)

<div class="phones"><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s55-0.webp" alt="Chat list indicator" loading="lazy"></div><span>Chat list indicator</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s56-0.webp" alt="Missed poll bar" loading="lazy"></div><span>Missed poll bar</span></div></div>

### Voting

People see the question and options, and who has voted, which may inspire them to join. On voting, the result appears instantly with the count and progress. The green matches WhatsApp and works with black text for colour-blind users. Undo covers accidental votes and changed minds. Bookmarking uses an existing WhatsApp feature, so a poll stays easy to find after lots of messages.

<div class="phones"><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s57-0.webp" alt="Vote" loading="lazy"></div><span>Vote</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s58-0.webp" alt="Result" loading="lazy"></div><span>Result</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s59-0.webp" alt="Bookmark" loading="lazy"></div><span>Bookmark</span></div></div>

### A richer theme for business

Theme 2 is more interactive and business-focused, with a live preview, editable gradients, and images or GIFs. I didn't have WhatsApp Business screenshots, so it uses the private user's colour theme for now. [View the theme 2 prototype](https://www.figma.com/proto/xgWRgWPo9dvea3ypAnuKJQ/DH?page-id=22%3A0&node-id=23%3A6&viewport=243%2C32%2C0.3100016713142395&scaling=min-zoom)

<div class="phones"><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s61-1.webp" alt="Create" loading="lazy"></div><span>Create</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s62-2.webp" alt="Live preview" loading="lazy"></div><span>Live preview</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s63-1.webp" alt="In the chat" loading="lazy"></div><span>In the chat</span></div></div>

### Polls in status

Only for business users, this reaches more customers and gets more feedback. Private users only see it if they saved the business number. People usually post status from the camera, so the camera stays in the most reachable spot, with Poll at the top of the expanded buttons. More participation here is an assumption still to be tested. [View the status prototype](https://www.figma.com/proto/xgWRgWPo9dvea3ypAnuKJQ/DH?page-id=74%3A452&node-id=74%3A453&viewport=189%2C497%2C0.15382377803325653&scaling=min-zoom)

<div class="phones"><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s65-1.webp" alt="Before" loading="lazy"></div><span>Before</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s65-0.webp" alt="After" loading="lazy"></div><span>After</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s66-1.webp" alt="Poll in status" loading="lazy"></div><span>Poll in status</span></div></div>

### Poll history

A new Poll History item helps business users make decisions over the long term. Its icon looks similar to Statistics, so that needs more work. [View the history prototype](https://www.figma.com/proto/xgWRgWPo9dvea3ypAnuKJQ/DH?page-id=127%3A18&node-id=127%3A19&viewport=268%2C439%2C0.3214886486530304&scaling=scale-down)

<div class="phones"><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s68-1.webp" alt="Before" loading="lazy"></div><span>Before</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/whatsapp-poll/s68-0.webp" alt="After" loading="lazy"></div><span>After</span></div></div>

## 5. Validate

I ran remote and in-house guerrilla usability tests with 4 users.

<div class="panel"><p>Results by task and user</p><table><thead><tr><th>Task</th><th>U1</th><th>U2</th><th>U3</th><th>U4</th></tr></thead><tbody><tr><td>Find the poll function</td><td class="pass">✓</td><td class="pass">✓</td><td class="pass">✓</td><td class="pass">✓</td></tr><tr><td>Find the other way to post a poll</td><td class="fail">✕</td><td class="pass">✓</td><td class="pass">✓</td><td class="fail">✕</td></tr><tr><td>Create a poll with pictures</td><td class="pass">✓</td><td class="pass">✓</td><td class="pass">✓</td><td class="fail">✕</td></tr><tr><td>Remove your vote</td><td class="pass">✓</td><td class="pass">✓</td><td class="fail">✕</td><td class="pass">✓</td></tr><tr><td>Add and remove a poll option</td><td class="pass">✓</td><td class="pass">✓</td><td class="pass">✓</td><td class="pass">✓</td></tr></tbody></table><p>16 of 20 attempts succeeded. The main flow worked; failures were about discovering secondary features.</p></div>

<figure><img src="/media/work/whatsapp-poll/s71-0.webp" alt="Original usability test sheet" loading="lazy"><figcaption>Original usability test sheet</figcaption></figure>

<div class="insight"><p><strong>What we learned:</strong> The main flow worked. The failures came from discoverability: one person didn't realise Theme 2 was clickable, one took longer to find Undo, and status was hard to find as a second route.</p><p><strong>What it changed:</strong> Theme 2 needs a clearer selection state, and Undo needs more prominence. One tester also asked for more humanised wording.</p></div>

## 6. Outcome

This is a concept, so the outcome is what I learned and what I chose to ship first.

### What I left out, and why

I had many more ideas, including multiple answers, shareable links, analytics, reminders, countdowns and templates. Tesler's Law says some complexity can't be removed, only moved. So release one stays simple: test it, learn, then add what's relevant.

### What I'd do next

Fix the two discoverability issues and retest with more users, A/B test the two poll views, and validate the assumption that status polls increase participation.
