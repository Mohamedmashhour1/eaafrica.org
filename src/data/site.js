// Everything on the site that changes lives in this file.
// Edit a line, save, and the page updates.

// The sign-up form. Paste the Google Form link here (the "Send" > link, ending in /viewform).
export const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfYY-smDfjLOnta-0gL2QFfvs8autACaTIScH_TLQa7qK2SGA/viewform";

// Where and when every meeting happens.
export const PLACE = "LC Foyer";
export const TIME = "9 to 9:30 pm";

// Clips for the home page video. Each one shows a problem the club works on.
export const CLIPS = [
  { file: "health.mp4", label: "Global health" },
  { file: "poverty.mp4", label: "Poverty" },
  { file: "biosecurity.mp4", label: "Biosecurity" },
  { file: "ai.mp4", label: "AI safety" },
  { file: "climate.mp4", label: "Climate and energy" },
  { file: "water.mp4", label: "Clean water" },
  { file: "education.mp4", label: "Education" },
  { file: "cities.mp4", label: "Growing cities" },
  { file: "future.mp4", label: "The long-term future" },
];

// Meetings. Dates are YYYY-MM-DD. Past meetings move to "Past" on their own.
// Term 1: twice. Terms 2 and 3: twice a month for two months.
export const EVENTS = [
  { date: "2026-11-18", term: "Term 1", title: "The Giving Game", text: "Our first meeting! In small groups, you read about three charities and decide how to split a pot of money between them. Then we look at what the evidence says." },
  { date: "2026-11-25", term: "Term 1", title: "Doing good on purpose", text: "Session 1 of the programme.", session: 1 },
  { date: "2027-02-03", term: "Term 2", title: "Comparing ways of helping", text: "Session 2 of the programme.", session: 2 },
  { date: "2027-02-17", term: "Term 2", title: "Who should we care about?", text: "Session 3 of the programme.", session: 3 },
  { date: "2027-03-03", term: "Term 2", title: "The biggest risks", text: "Session 4 of the programme.", session: 4 },
  { date: "2027-03-17", term: "Term 2", title: "Is effective altruism wrong?", text: "Session 5 of the programme. We run it as a debate.", session: 5 },
  { date: "2027-04-14", term: "Term 3", title: "What can I actually do?", text: "Session 6 of the programme.", session: 6 },
  { date: "2027-04-28", term: "Term 3", title: "Talking to people who do this work", text: "We call someone working on one of these problems in Africa and ask them everything we want to know." },
  { date: "2027-05-12", term: "Term 3", title: "The Giving Game, round two", text: "We play again, this time with everything we have learned during the year." },
  { date: "2027-05-26", term: "Term 3", title: "Last meeting of the year", text: "We look back at the year and hand the club over to the Year 1s." },
];

// The six sessions.
export const SESSIONS = [
  {
    n: 1, title: "Doing good on purpose",
    idea: "Caring about a problem and actually helping with it are two different things. We look at how much the world has changed since 1990, and why.",
    read: [
      { title: "On Caring", by: "Nate Soares", url: "https://mindingourway.com/on-caring/" },
      { title: "The world is awful. The world is much better. The world can be much better.", by: "Our World in Data", url: "https://ourworldindata.org/much-better-awful-can-be-better" },
    ],
    africa: "Child deaths in sub-Saharan Africa have fallen by more than half since 1990. Vaccines, bed nets and better care did most of that work. What made those programmes succeed?",
    questions: ["What problem have you cared about without doing anything about it?", "Is it possible to care about a million people the way you care about one?", "Which change since 1990 surprised you most?"],
  },
  {
    n: 2, title: "Comparing ways of helping",
    idea: "Two programmes can cost exactly the same and still do very different amounts of good. We look at how people compare them.",
    read: [
      { title: "Giving 101", by: "GiveWell", url: "https://www.givewell.org/giving101" },
      { title: "The moral imperative toward cost-effectiveness in global health", by: "Toby Ord", url: "https://www.cgdev.org/publication/moral-imperative-toward-cost-effectiveness-global-health" },
    ],
    africa: "New Incentives gives families in northern Nigeria small cash payments when their children get vaccinated. GiveWell rates it one of the most cost-effective charities it knows of.",
    questions: ["Why might a well-meaning charity do very little good?", "What would convince you a programme works?", "Is it cold to compare lives with numbers, or is it more caring?"],
  },
  {
    n: 3, title: "Who should we care about?",
    idea: "How far should we care - about strangers, about people who are not born yet, about animals? We talk about where we draw the line and why.",
    read: [
      { title: "Radical empathy", by: "Holden Karnofsky", url: "https://coefficientgiving.org/research/radical-empathy/" },
      { title: "Factory farming (summary)", by: "80,000 Hours", url: "https://80000hours.org/problem-profiles/factory-farming/" },
    ],
    africa: "Chicken farming is growing fast across Africa as cities grow. The choices made in the next decades will affect billions of animals.",
    questions: ["Who did people in the past leave out, that we now include?", "Who might we be leaving out today?", "Does distance change how much someone matters?"],
  },
  {
    n: 4, title: "The biggest risks",
    idea: "Some risks are unlikely but could affect everyone, like pandemics and very powerful AI. We talk about how seriously we should take them.",
    read: [
      { title: "Preventing catastrophic pandemics (summary)", by: "80,000 Hours", url: "https://80000hours.org/problem-profiles/preventing-catastrophic-pandemics/" },
      { title: "AI risk (summary)", by: "80,000 Hours", url: "https://80000hours.org/problem-profiles/artificial-intelligence/" },
    ],
    africa: "The 2014 to 2016 Ebola outbreak in West Africa killed more than 11,000 people. Health workers in Guinea, Liberia and Sierra Leone learned lessons the whole world used during COVID.",
    questions: ["What made Ebola hard to stop, and what finally worked?", "How do you weigh a small chance of a huge disaster?", "Who in Africa should have a say in how AI is built?"],
  },
  {
    n: 5, title: "Is effective altruism wrong?",
    idea: "We read a strong critique of effective altruism and debate it. The motion: you should give to the most effective charity, not to your own community.",
    read: [
      { title: "The deaths of effective altruism", by: "Leif Wenar, WIRED", url: "https://www.wired.com/story/deaths-of-effective-altruism/" },
      { title: "Reflections on bottlenecks facing potential African EAs", by: "EA Forum", url: "https://forum.effectivealtruism.org/posts/ztrjYbGwQZLFRfWDs/reflections-on-bottlenecks-facing-potential-african-eas" },
    ],
    africa: "Most money in effective altruism comes from outside Africa. Who should decide what Africa needs, and how?",
    questions: ["What is the strongest point the critique makes?", "Where do you think it goes wrong?", "What would an African-led version of this movement look like?"],
  },
  {
    n: 6, title: "What can I actually do?",
    idea: "We talk about degrees, careers and next steps, and everyone leaves with one thing they want to try.",
    read: [
      { title: "Key ideas, first section", by: "80,000 Hours", url: "https://80000hours.org/key-ideas/" },
    ],
    africa: "A lot of the people working on these problems are Africans, working in Africa. We talk about where each of us could fit in.",
    questions: ["Which problem from the programme do you keep thinking about?", "What could you learn at university that would help with it?", "What is one thing you will do in the next month?"],
  },
];

// Opportunities. Grouped by when they fit.
export const OPPORTUNITIES = [
  { group: "Start now", items: [
    { name: "80,000 Hours", url: "https://80000hours.org", text: "A free guide to choosing a career that does good. They also have a podcast, a job board and free one-on-one advice." },
    { name: "Probably Good", url: "https://probablygood.org", text: "Free career advice for people who want their work to really help others, wherever they live." },
    { name: "GiveWell", url: "https://www.givewell.org", text: "Really detailed research on which charities save and improve the most lives for each dollar." },
    { name: "Giving What We Can", url: "https://www.givingwhatwecan.org", text: "Charity recommendations and giving pledges, including a 1% pledge for students (completely optional)." },
    { name: "EA Forum", url: "https://forum.effectivealtruism.org", text: "The online forum where people share research, ask questions and discuss ideas." },
  ]},
  { group: "At university", items: [
    { name: "Introductory EA Program", url: "https://www.effectivealtruism.org/virtual-programs/introductory-program", text: "A free eight-week online discussion course with people from around the world. For people 18 and over." },
    { name: "BlueDot Impact", url: "https://bluedot.org", text: "Free online courses on AI safety and other big risks." },
    { name: "Effective Thesis", url: "https://effectivethesis.org", text: "Help choosing a thesis or research topic that matters." },
    { name: "EA Global and EAGx", url: "https://www.effectivealtruism.org/ea-global", text: "Conferences around the world. Students can apply, and some financial support for travel is available." },
  ]},
  { group: "In Africa", items: [
    { name: "EA South Africa", url: "https://www.effectivealtruism.co.za", text: "Programmes, events and free career conversations in South Africa." },
    { name: "EA Nigeria", url: "https://forum.effectivealtruism.org/groups/xrvwspdqKbnvYj4bm", text: "The national group, based in Abuja. It hosted Africa's first EAGx conference in 2025." },
  ]},
  { group: "Later in your career", items: [
    { name: "AIM (Ambitious Impact)", url: "https://www.ambitiousimpact.com", text: "Helps people start new, highly effective charities. Several of its charities work in Africa." },
  ]},
];

export const PEOPLE = [
  { name: "Ali Mohamed", role: "Organiser, Year 2", photo: "/media/people/ali-mohamed.jpg" },
  { name: "Yassir Ben Ahijba", role: "Organiser, Year 2", photo: "/media/people/yassir-ben-ahijba.jpg" },
  { name: "Mohamed Moussa", role: "Alum advisor", photo: "/media/people/mohamed-mashhour.jpg" },
];

export const NUMBERS = [
  { n: "610,000", text: "people died of malaria in 2024. About 95% of them lived in Africa, and most were children under five.", src: "WHO World Malaria Report 2025", url: "https://www.who.int/teams/global-malaria-programme/reports/world-malaria-report-2025" },
  { n: "3 in 4", text: "of the world's children living in extreme poverty live in sub-Saharan Africa.", src: "World Bank and UNICEF, 2025", url: "https://allafrica.com/stories/202509160035.html" },
  { n: "About $5,000", text: "is roughly what the most cost-effective charities spend to save one life.", src: "GiveWell estimates, which vary by programme", url: "https://www.givewell.org/charities/top-charities" },
];
