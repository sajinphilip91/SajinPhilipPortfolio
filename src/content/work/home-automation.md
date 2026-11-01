---
title: "Home Automation"
subtitle: "Personalized and customizable smart home experience"
accent: "#1c2350"
facts: [{"label": "Time frame", "value": "4 weeks"}, {"label": "Role", "value": "UX Researcher, UX Designer, Visual Designer"}, {"label": "Platform", "value": "Mobile app"}]
---

<div class="summary"><p><strong>The challenge</strong>Smart home buyers face too many apps and devices, and in developing countries many people still lack the knowledge and awareness to get started.</p><p><strong>What I did</strong>I analysed reviews of leading apps, defined two first-time personas, mapped a full day at home, and designed one app around moods and rooms, not individual devices.</p><p><strong>What happened</strong>A prototype covering device connection, suggestions and a personalised home, in light and dark. This project has no usability results yet.</p></div>

<div class="grid c2"><figure><img src="/media/work/home-automation/7a33741aab294189.webp" alt="" loading="lazy"></figure><figure><img src="/media/work/home-automation/5d8745fbb71a4754.webp" alt="" loading="lazy"></figure></div>

## 1. Understand

### The problem

The goal was to bring safety and control into the home at the lowest cost, so people have more control over their energy spending.

But with so many apps and devices, people get confused about which is right for the entire home. Developing countries are further away still, because of lower knowledge, awareness and understanding of the benefits.

> How might we help a first-time owner control their whole home simply, without needing to understand the technology?

### Learning from real reviews

I started with customer feedback on the top products in the Play Store and App Store.

<div class="grid c3"><figure><img src="/media/work/home-automation/89b4719e46b0405a.webp" alt="Current apps customer feedback" loading="lazy"><figcaption>Current apps customer feedback</figcaption></figure><figure><img src="/media/work/home-automation/f780ec1e51924d07.webp" alt="Philips Hue reviews" loading="lazy"><figcaption>Philips Hue reviews</figcaption></figure><figure><img src="/media/work/home-automation/773fb1dd0635403f.webp" alt="Google Assistant reviews" loading="lazy"><figcaption>Google Assistant reviews</figcaption></figure></div>

<figure><img src="/media/work/home-automation/9f757b153f0f4902.webp" alt="" loading="lazy" style="max-width:60px"></figure>

- "The instructions that come with the lights and their YouTube videos don't match what the app shows"
- "Alexa no longer recognizes commands like 'Alexa, set thermostat to heat.'"
- "This app is a HUGE pain to install."
- "The app is NOT user friendly. The help center is a joke."
- "Won't start without access to my contacts and possibility to making calls"

<div class="panel"><p>What the complaints were really about</p><div class="cards n4"><div class="card"><strong>Setup</strong><div class="note">This app is a HUGE pain to install</div><div class="note">Instructions don't match what the app shows</div></div><div class="card"><strong>Help</strong><div class="note">The help center is a joke</div><div class="note">The app is NOT user friendly</div></div><div class="card"><strong>Reliability</strong><div class="note">Alexa no longer recognizes commands</div><div class="note">Won't work without a net connection</div></div><div class="card"><strong>Trust</strong><div class="note">Won't start without access to my contacts</div><div class="note">High data and battery use</div></div></div><p>Synthesised from reviews and my pros and cons slides.</p></div>

<div class="insight"><p><strong>What we learned:</strong> People's anger was rarely about smart home features. It was about setup, help, reliability and trust.</p><p><strong>What it changed:</strong> Connecting a device became one of the three flows to prototype first.</p></div>

### Comparing the leaders

<div class="grid c3"><figure><img src="/media/work/home-automation/008418b0c7ad41eb.webp" alt="Competitor analysis" loading="lazy"><figcaption>Competitor analysis</figcaption></figure><figure><img src="/media/work/home-automation/5db6467241d44463.webp" alt="Philips Hue" loading="lazy"><figcaption>Philips Hue</figcaption></figure><figure><img src="/media/work/home-automation/e3831424ef8747d1.webp" alt="Apple Home" loading="lazy"><figcaption>Apple Home</figcaption></figure></div>

<div class="panel"><p>What each product taught me</p><table><thead><tr><th>Product</th><th>Strength</th><th>Weakness</th><th>What I took from it</th></tr></thead><tbody><tr><td>Google Assistant</td><td>Easy understanding, tracks details</td><td>Needs the net, drains battery, uses data</td><td>Be useful without demanding attention</td></tr><tr><td>Philips Hue</td><td>Quality lights, big ecosystem, add-on apps</td><td>Can't easily save colours or temperatures</td><td>Saved scenes are valuable: make them moods</td></tr><tr><td>Apple Home</td><td>One place for many accessories</td><td>Tied to the HomeKit framework</td><td>Control the whole home from one app</td></tr></tbody></table></div>

## 2. Define

### Who I designed for

I defined two new users, both IT professionals who are excited about a smart home and share the same frustrations: device availability and budget.

- **Jubin, 29, home owner:** wants to reduce the electricity bill, and to share device control with family.
- **Alphy, 24:** shares a flat with roommates, where lights and fans often stay on. Wants to control all electric devices remotely, from a single app.

<figure><img src="/media/work/home-automation/ba519b196bfe4708.webp" alt="Persona 1 and 2" loading="lazy"><figcaption>Persona 1 and 2</figcaption></figure>

### A day at home

I mapped Persona 1's whole day, from morning alarm to sleep. This showed that the need isn't remote control. It's being free of small worries and waits.

<figure><img src="/media/work/home-automation/5b5cdaab6ce4426b.webp" alt="User journey map - Persona 1" loading="lazy"><figcaption>User journey map - Persona 1</figcaption></figure>

<div class="panel"><p>A day at home, and where technology could help</p><table><thead><tr><th>Moment</th><th>Problem</th><th>Opportunity</th></tr></thead><tbody><tr><td>Morning alarm</td><td>Alarm isn't encouraging</td><td>Lights on with the alarm</td></tr><tr><td>Getting ready</td><td>Waiting by the bathroom for the heater</td><td>Start the heater from the phone, with an exact time</td></tr><tr><td>Making breakfast</td><td>Waiting near the toaster</td><td>Handle it from a phone, with the correct time</td></tr><tr><td>Going to the office</td><td>Checking all rooms, forgetting the door</td><td>Check every device from the app, with alerts</td></tr><tr><td>Office time</td><td>Unsure about the iron box status</td><td>See status and switch off from anywhere</td></tr><tr><td>Back home</td><td>Tired, waiting for shower and coffee</td><td>Automatically switch on coffee maker and heater</td></tr><tr><td>Sleep</td><td>Waking up again to switch off the light</td><td>Control lights from bed</td></tr></tbody></table><p>Rebuilt from the user journey map below.</p></div>

<div class="insight"><p><strong>What we learned:</strong> The sharpest moment wasn't at home. It was at the office, unsure whether the iron box was off.</p><p><strong>What it changed:</strong> Status had to be visible at a glance, from anywhere.</p></div>

## 3. Ideate

### Structuring the product

A home app has to hold a lot. Designing the structure early kept that complexity away from the home screen.

<figure><img src="/media/work/home-automation/b8007ab53e294fdd.webp" alt="Site map" loading="lazy" style="max-width:620px"><figcaption>Site map</figcaption></figure>

<div class="panel"><p>Information architecture</p><div class="cards n4"><div class="card dark"><strong>Home</strong><ul><li>User profile</li><li>Set mood: change, create, update</li><li>Notifications</li><li>Add device: AR scan, Bluetooth</li><li>Active rooms and devices</li></ul></div><div class="card"><strong>All devices</strong><ul><li>List and box views</li><li>Search devices</li><li>Switch room</li><li>On and off</li></ul></div><div class="card"><strong>Shop</strong><ul><li>AI suggestions</li><li>AI savings mode</li><li>Product details</li><li>Cart</li></ul></div><div class="card"><strong>Settings</strong><ul><li>Profile</li><li>Smart management</li><li>View report</li><li>Device integration</li></ul></div></div><p>Rebuilt from the site map below.</p></div>

### Starting from a story

I storyboarded a full use case before drawing screens, then tested the idea on paper.

<figure><img src="/media/work/home-automation/6765b0c2a9fb4969.webp" alt="Use case 1" loading="lazy"><figcaption>Use case 1</figcaption></figure>

<figure><img src="/media/work/home-automation/4b47693c19464241.webp" alt="Initial wireframes" loading="lazy" style="max-width:620px"><figcaption>Initial wireframes</figcaption></figure>

[View the Paper Prototype here...](https://marvelapp.com/732ah1d)

<div class="panel"><p>From insight to design</p><table><thead><tr><th>Insight</th><th>Design decision</th></tr></thead><tbody><tr><td>Setup is the biggest complaint</td><td>Add a device through AR scan or Bluetooth search</td></tr><tr><td>Good products group by moments and places</td><td>Home opens with moods, then active rooms</td></tr><tr><td>Worry comes from not knowing device status</td><td>Active rooms show how many devices are on</td></tr><tr><td>People want to reduce bills</td><td>AI savings mode and reports</td></tr><tr><td>Families share a home</td><td>Personas call for shared control; still to be designed</td></tr></tbody></table></div>

## 4. Design

### Three flows that matter most

The wireframe prototype focused on an easy way to connect a device, data-driven and AI-based suggestions, and a personalised home page.

<div class="phones"><video src="/media/work/home-automation/acaf61bf7b52.mp4" poster="/media/work/home-automation/acaf61bf7b524d36.webp" controls muted loop playsinline preload="none"></video><video src="/media/work/home-automation/547881b8f01f.mp4" poster="/media/work/home-automation/547881b8f01f4a88.webp" controls muted loop playsinline preload="none"></video><video src="/media/work/home-automation/d23fd52e5ad9.mp4" poster="/media/work/home-automation/d23fd52e5ad941b9.webp" controls muted loop playsinline preload="none"></video></div>

<figure><img src="/media/work/home-automation/045ba8396c7d4b64.webp" alt="Initial wireflow" loading="lazy" style="max-width:620px"><figcaption>Initial wireflow</figcaption></figure>

[View the Prototype here...](https://invis.io/AVNDKVYXK3G)

### Moods first, rooms second

The home screen opens with "Set mood" and then Active Rooms. A person can think "party time" or "bedroom" instead of hunting for a device. Inside a room, each device gets one large control with schedule and power within reach.

<div class="phones"><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/home-automation/5583c51d10ae4ee9.webp" alt="Home" loading="lazy"></div><span>Home</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/home-automation/837ddcb1e4694536.webp" alt="Light control" loading="lazy"></div><span>Light control</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/home-automation/3171ae113a9142fb.webp" alt="Speed control" loading="lazy"></div><span>Speed control</span></div></div>

### Light and dark

A home app gets used at night as well as in daylight, so I designed both modes.

<div class="phones"><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/home-automation/0abeade6a61b4924.webp" alt="Home" loading="lazy"></div><span>Home</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/home-automation/59a5a5f0318a457c.webp" alt="Light control" loading="lazy"></div><span>Light control</span></div><div class="shot"><div class="screen" tabindex="0"><img src="/media/work/home-automation/b18f8fc87deb41fc.webp" alt="Speed control" loading="lazy"></div><span>Speed control</span></div></div>

## 5. Validate

This is the gap in this project. The design is complete up to high-fidelity UI, but there are no usability results to show yet. This is how I'd test it.

<div class="panel"><p>Proposed usability test</p><table><thead><tr><th>Question</th><th>Task</th><th>Measure</th></tr></thead><tbody><tr><td>Is setup really easy?</td><td>Connect a new device</td><td>Task success and time</td></tr><tr><td>Are moods understood?</td><td>Set up the home for a party</td><td>First-click success</td></tr><tr><td>Does it reduce worry?</td><td>Check whether anything is still on at home</td><td>Time and confidence</td></tr><tr><td>Does it save energy?</td><td>Find out what's using power</td><td>Task success, then real bills over time</td></tr></tbody></table><p>This is a proposed plan, not results.</p></div>

## 6. Outcome

The outcome is a complete design direction, not a measured result.

### What I learned

Reading real reviews before designing was the most valuable step. Competitors' failures showed what people actually care about, and it shaped the product more than the feature comparison did. Mapping a full day then moved the focus from controlling devices to removing small worries.
