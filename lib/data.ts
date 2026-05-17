import { PUPPY_TRAINING_BLOG_POST } from "@/lib/blog-posts/puppy-training-guide-australia";

export const CLINIC = {
  name: "YB Vet",
  fullName: "Yangebup-Beeliar Vet Clinic",
  phone: "(08) 9417 2882",
  phoneHref: "tel:+61894172882",
  email: "info@ybvet.com.au",
  address: "Shop 4/31-35 Moorhen Drive, Yangebup WA 6164",
  suburb: "Yangebup",
  state: "WA",
  postcode: "6164",
  bookingUrl: "https://www.vetstoria.com",
  googleReviewUrl: "https://g.page/r/ybvet/review",
  rating: 4.9,
  reviewCount: 155,
  hours: [
    { day: "Monday–Friday", hours: "8:30am – 5:30pm" },
    { day: "Saturday",      hours: "8:30am – 12:00pm" },
    { day: "Sunday",        hours: "Closed" },
  ],
  suburbs: ["Yangebup", "Beeliar", "Success", "Aubin Grove", "Bibra Lake"],
  lat: -32.1256,
  lng: 115.8219,
};

export const VETS = [
  {
    name: "Dr Amelia Barrett",
    title: "Veterinarian",
    credential: "BVSc",
    bio: "Amelia has been caring for Yangebup's pets for over five years. She has a particular love for senior animals and a talent for making nervous dogs feel instantly at ease.",
    image:
      "https://images.pexels.com/photos/19963166/pexels-photo-19963166.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Dr Amelia Barrett, veterinarian at YB Vet — professional portrait",
  },
  {
    name: "Dr Chloe Hutson",
    title: "Veterinarian",
    credential: "BVSc",
    bio: "Chloe's calm hands and unhurried approach have made her the vet cats in particular seem to trust most. She's especially interested in feline medicine and preventive care.",
    image:
      "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Dr Chloe Hutson, veterinarian at YB Vet, consulting with a pet owner and patient",
  },
];

/** Homepage + services listing; `icon` kept for /services page icon row. */
export type ServiceCard = {
  name: string;
  icon: string;
  desc: string;
  /** When set, the services hub links to `/services/{slug}`. */
  slug?: string;
  /** Pexels or same-origin URL for homepage service card photo strip. */
  imageSrc: string;
  imageAlt: string;
};

export const SERVICES: ServiceCard[] = [
  {
    name: "Vaccinations",
    icon: "shield",
    slug: "vaccinations",
    desc: "Annual and puppy/kitten vaccination programs tailored to your pet's lifestyle and risk.",
    imageSrc:
      "https://images.pexels.com/photos/36111944/pexels-photo-36111944.jpeg?auto=compress&cs=tinysrgb&w=480",
    imageAlt: "Veterinarian administering a canine vaccine injection",
  },
  {
    name: "Dental Care",
    icon: "sparkles",
    slug: "dental-care",
    desc: "Professional dental cleans, extractions, and home dental advice to protect long-term health.",
    imageSrc:
      "https://images.pexels.com/photos/6235113/pexels-photo-6235113.jpeg?auto=compress&cs=tinysrgb&w=480",
    imageAlt: "Person gently examining a dog's teeth during a dental check",
  },
  {
    name: "Consultations",
    icon: "stethoscope",
    slug: "consultations",
    desc: "Thorough, unhurried consultations for illnesses, check-ups, second opinions, and health concerns.",
    imageSrc:
      "https://images.pexels.com/photos/6235116/pexels-photo-6235116.jpeg?auto=compress&cs=tinysrgb&w=480",
    imageAlt: "Small dog on an examination table during a veterinary visit",
  },
  {
    name: "Senior Pet Care",
    icon: "heart",
    slug: "senior-pet-care",
    desc: "Specialised health monitoring for dogs and cats over seven — catching issues before they escalate.",
    imageSrc:
      "https://images.pexels.com/photos/6235231/pexels-photo-6235231.jpeg?auto=compress&cs=tinysrgb&w=480",
    imageAlt: "Veterinarian examining a dog's coat during a skin and wellness check",
  },
  {
    name: "Desexing",
    icon: "scissors",
    slug: "desexing",
    desc: "Safe, routine desexing procedures for dogs and cats with compassionate pre- and post-op care.",
    imageSrc:
      "https://images.pexels.com/photos/6131096/pexels-photo-6131096.jpeg?auto=compress&cs=tinysrgb&w=480",
    imageAlt: "Veterinarian in clinic gently handling a cat during an examination",
  },
  {
    name: "Surgery",
    icon: "activity",
    slug: "surgery",
    desc: "General soft-tissue surgery performed with careful anaesthetic monitoring and pain management.",
    imageSrc:
      "https://images.pexels.com/photos/7121992/pexels-photo-7121992.jpeg?auto=compress&cs=tinysrgb&w=480",
    imageAlt: "Dog at a veterinary clinic looking relaxed with staff",
  },
  {
    name: "Dermatology",
    icon: "droplets",
    slug: "dermatology",
    desc: "Diagnosis and management of skin conditions, allergies, and ear disease in dogs and cats.",
    imageSrc:
      "https://images.pexels.com/photos/5482555/pexels-photo-5482555.jpeg?auto=compress&cs=tinysrgb&w=480",
    imageAlt: "Dalmatian dog standing on green grass in natural outdoor light",
  },
  {
    name: "Microchipping",
    icon: "tag",
    slug: "microchipping",
    desc: "Permanent identification implanted in seconds — and we'll register your pet's details on the spot.",
    imageSrc:
      "https://images.pexels.com/photos/6001208/pexels-photo-6001208.jpeg?auto=compress&cs=tinysrgb&w=480",
    imageAlt: "Person gently holding a relaxed cat in their arms",
  },
];

export const TESTIMONIALS = [
  {
    text: "We've been bringing our dogs to YB Vet for six years. The level of care and the way the team actually remembers our pets is something you just don't get at a big chain clinic.",
    name: "Sarah M.",
    suburb: "Yangebup",
    pet: "Two Border Collies",
  },
  {
    text: "Dr Amelia diagnosed an issue with our cat that two other vets had missed. She took the time to explain everything and called us the next day to check in. Genuinely exceptional.",
    name: "James & Petra K.",
    suburb: "Success",
    pet: "Domestic Shorthair",
  },
  {
    text: "Our elderly Lab needed surgery last year and we were terrified. The team at YB Vet made us feel completely supported — the after-care was outstanding. He's recovered beautifully.",
    name: "Trish O.",
    suburb: "Beeliar",
    pet: "Labrador Retriever",
  },
];

/** Blog hero image: Pexels URL (allowed in next.config) or /public path. */
export type BlogPost = {
  slug: string;
  title: string;
  /** Shorter browser / OG title; falls back to `title` if omitted. */
  seoTitle?: string;
  excerpt: string;
  /** SERP meta description (~155 chars). Falls back to excerpt in metadata when omitted. */
  metaDescription?: string;
  category: string;
  date: string;
  /** ISO date for `dateModified` in schema and OG; defaults to `date`. */
  dateModified?: string;
  dateFormatted: string;
  readTime: string;
  author: string;
  coverSrc: string;
  content: string;
  /** FAQ visible on page + FAQPage JSON-LD when present. */
  faqs?: { question: string; answer: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  PUPPY_TRAINING_BLOG_POST,
  {
    slug: "puppy-vaccinations-schedule-australia",
    title: "Puppy Vaccinations in Australia — Schedules, Core Vaccines, and First Vet Visits",
    seoTitle: "Puppy Vaccinations — Schedule & Core Vaccines",
    metaDescription:
      "Puppy vaccinations protect against parvovirus and distemper. Typical Australian schedules, booster timing, side effects, and when to book YB Vet Yangebup. Call (08) 9417 2882.",
    excerpt:
      "If you have just picked up a puppy, vaccinations are probably on your mind alongside sleep, chewing, and where the wee pads went. Here is how Australian puppy courses usually work, what core vaccines cover, and how we plan visits at YB Vet in Yangebup.",
    category: "Preventive Care",
    date: "2026-05-15",
    dateFormatted: "15 May 2026",
    readTime: "9 min read",
    author: "Dr Chloe Hutson",
    coverSrc:
      "https://images.pexels.com/photos/36111944/pexels-photo-36111944.jpeg?auto=compress&cs=tinysrgb&w=1400",
    faqs: [
      {
        question: "When should a puppy get their first vaccination in Australia?",
        answer:
          "Most puppies start their course between six and eight weeks of age, sometimes slightly earlier if a breeder or shelter has already given a first dose. The exact date depends on maternal antibody levels, health, and what is recorded on any paperwork you bring. Your vet spaces boosters so immunity is not left with risky gaps.",
      },
      {
        question: "What is the difference between C3 and C5 puppy vaccines?",
        answer:
          "C3 refers to core protection against distemper, infectious hepatitis, and parvovirus. C5 adds components for canine cough, often covering parainfluenza and Bordetella bronchiseptica. Not every puppy needs every non-core component on the same day; lifestyle and local risk guide what we recommend in addition to core vaccines.",
      },
      {
        question: "How long after puppy vaccinations can they go outside?",
        answer:
          "Socialisation matters, and so does incomplete immunity. Many owners balance controlled, low-traffic outings with avoiding high dog-traffic areas until the puppy course is finished and your vet confirms timing. Ask us directly for your suburb and your puppy's age rather than relying on generic social media timelines.",
      },
      {
        question: "What side effects are normal after puppy vaccinations?",
        answer:
          "A quiet afternoon, mild soreness at the injection site, or a small lump that softens over a few days can occur. True anaphylaxis is rare but urgent. If your puppy collapses, develops facial swelling, or cannot settle after several hours of monitoring, seek emergency veterinary care immediately.",
      },
      {
        question: "Do puppies need vaccinations if they stay indoors?",
        answer:
          "Indoor life lowers some risks but does not remove them. Parvovirus can enter homes on shoes and wheels. Core puppy vaccination remains the standard foundation for nearly all dogs in Australia, with non-core vaccines added only when justified by lifestyle.",
      },
      {
        question: "How much do puppy vaccinations cost in Australia?",
        answer:
          "Fees vary by clinic, region, and which vaccines and parasite products are included in a visit. We explain what we recommend and what it costs before proceeding so you can make a clear decision. Pet insurance may help some families; others prefer to budget visit by visit.",
      },
    ],
    content: `
      <p>You have probably had the puppy home for three days, named them, and already Googled whether that sneeze was normal. Somewhere in the same browser history sits the word <strong>puppy vaccinations</strong>. The short answer is: core vaccines protect against diseases that can kill young dogs quickly, and the schedule is built around how maternal antibodies fade and how boosters train the immune system. We see new puppies every week at our Moorhen Drive clinic in Yangebup, and we plan the course around the individual animal, not a one-size-fits-all sticker on the fridge.</p>
      <p>The longer answer still fits on one page: you are not failing if you feel overwhelmed by dates, acronyms, and conflicting advice from apps, neighbours, and old forum threads. Good puppy vaccination care is mostly steady timing, accurate records, and a clinic that will tell you when something can wait until Tuesday and when it cannot.</p>
      <p>We are a day clinic with set hours, not a twenty-four-hour emergency hospital. If your puppy is collapsed, non-responsive, or struggling to breathe, your nearest emergency veterinary hospital is the right call. For planning, records, and routine needles, we are here.</p>

      <h2>When your puppy's first vaccinations usually start</h2>
      <p>Most Australian puppies begin their course between six and eight weeks of age. Some arrive with a sticker in a passport from a breeder or shelter showing an earlier dose. That is useful information rather than a problem: we read what was given, which brand family was used if recorded, and continue the series without unnecessary duplication.</p>
      <p>Last week a small spaniel cross arrived tucked under a jacket, shaking just enough that the owner apologised five times before we had said hello. The owner worried they had “left it too late” because the internet said eight weeks as if it were a cliff edge. The puppy had had one dose elsewhere, on schedule for that litter. After a floor-level sniff and a treat, we mapped the remaining boosters, talked about worming, weighed the puppy against growth expectations, and sent them home with a written plan on paper rather than a screenshot of a stranger’s opinion. That is the shape of a normal first vaccination visit: calm handling first, medicine second, and a timeline you can stick to on the fridge without second-guessing.</p>
      <p>If you are still packing the carrier or lead for the very first time, our <a href="/blog/preparing-pet-first-vet-visit">first vet visit guide</a> covers habituation and what to bring. Honest cost conversations matter too: we explain what we recommend and what it costs before we proceed. Surprises help nobody.</p>

      <h2>Core puppy vaccines in Australia — what “C3” means</h2>
      <p>In everyday Australian clinic language, “C3” usually means core protection against canine distemper virus, canine infectious hepatitis (adenovirus), and canine parvovirus. These are not rare trivia diseases. Parvovirus in particular can devastate unvaccinated puppies within days. National welfare bodies such as <a href="https://www.rspca.org.au/" target="_blank" rel="noopener noreferrer">RSPCA Australia</a> publish owner-facing material on infectious disease and prevention; your own veterinarian still tailors timing to your puppy.</p>
      <p>Registered vaccines in Australia have labels that describe how they may be used. Your vet chooses products and intervals that align with those labels and with your dog’s risk profile. If you are comparing two clinics online, comparing brand names alone is less useful than comparing whether someone examined your puppy before injecting, whether records are thorough, and whether you left with a clear next date.</p>
      <p>Non-core components, sometimes discussed as part of a “C5” style protocol, may cover agents involved in canine cough. Whether your puppy benefits on the same schedule depends on boarding plans, daycare, and local disease patterns. The <a href="https://www.ava.com.au/" target="_blank" rel="noopener noreferrer">Australian Veterinary Association</a> hosts vet-authored public information that sits alongside — not instead of — a consult.</p>
      <p>International specialist groups publish vaccination guideline frameworks for veterinarians worldwide. The <a href="https://wsava.org/global-guidelines/vaccination-guidelines/" target="_blank" rel="noopener noreferrer">WSAVA vaccination guidelines</a> are one reference many Australian vets consider when interpreting label directions and local risk.</p>

      <h2>Typical puppy vaccination schedule and booster gaps</h2>
      <p>There is no single calendar that fits every litter. Most puppies receive a series of doses weeks apart until they are old enough for the final booster in the primary course. The gap between visits is deliberate: too long leaves a window where protection may be incomplete; too tight is not always useful because maternal antibodies can interfere with early doses.</p>
      <p>Your vet records the lot, the injection site, and the due date for the next visit. Bring any breeder, shelter, or previous clinic paperwork even if it is a photo on your phone. It saves guessing.</p>
      <p>If your puppy has been unwell with vomiting or diarrhoea, tell us before you leave home. Live modified vaccines are powerful tools; they are not always given on the same day as a febrile illness. A postponed needle is a small frustration. An inappropriate one is worse.</p>
      <p>After the puppy course, adult boosters and titre testing (where appropriate) become part of long-term preventive care. Our <a href="/blog/why-annual-vet-checks-matter">article on annual check-ups</a> explains why the yearly consult is about more than a single needle.</p>

      <h2>Breeder passports, rescue intakes, and mixed histories</h2>
      <p>Some puppies arrive with immaculate paperwork: dates, batch numbers, and the vet clinic stamp. Others arrive with a folded note and sincere best guesses. Both are workable. What slows a visit down is no information at all, so photograph old booklets before they fade.</p>
      <p>Rescue puppies sometimes have unknown early weeks. We still build a forward plan from the age and weight in front of us, then adjust if new records appear later. If your puppy travelled interstate, mention it: timing of certain parasites and regulatory paperwork can differ from a locally bred litter in Aubin Grove.</p>
      <p>When histories conflict — for example two “first” doses close together — we prioritise safety and label-consistent spacing rather than rushing a third injection to “catch up” in one afternoon.</p>

      <h2>Heartworm and intestinal worms alongside the vaccine conversation</h2>
      <p>Vaccination protects against specific viruses and some bacteria; it does not replace worming or heartworm prevention. In Western Australia, heartworm remains a genuine risk for dogs that spend time outdoors, and intestinal worms are common in puppies regardless of how glossy the breeder paperwork looked.</p>
      <p>We use vaccine visits to weigh your puppy, discuss product choice for their age and size, and set reminders that match how you actually live. Some families prefer monthly chewables; others prefer injectable heartworm prevention paired with a different worming rhythm. The goal is a plan you will follow, not a lecture you forget in the car park.</p>

      <h2>Parasite control, microchipping, and the same appointments</h2>
      <p>Vaccination visits are also practical checkpoints for intestinal worms, heartworm prevention plans suited to Western Australia, flea and tick control if travel exposes your dog, and microchip confirmation. Bundling does not mean rushing: it means fewer separate car trips for an animal who is still learning that the car sometimes ends somewhere nice.</p>
      <p>Our <a href="/services">veterinary services</a> page lists vaccinations alongside dentistry, surgery, and consultations so you can see how a puppy’s first year fits into the wider clinic picture.</p>

      <h2>Side effects most owners notice — and the ones that cannot wait</h2>
      <p>Many puppies sleep heavily for an afternoon after vaccination. Some have a small tender lump at the injection site that resolves over several days. Those findings sit in the “monitor and phone us if worried” basket.</p>
      <p>The basket that needs an emergency hospital includes sudden collapse, repeated vomiting with lethargy, facial swelling, or breathing difficulty soon after a vaccine. Those signs are uncommon, but they are not wait-until-Monday signs.</p>

      <h2>Socialisation, footpaths, and unfinished vaccine courses</h2>
      <p>Owners in Beeliar, Success, and Bibra Lake often ask whether they are “allowed” to walk on pavement or meet neighbour dogs before the course finishes. Immunity is not a light switch. Many families practise careful socialisation: carry the puppy to quiet verges, introduce stable, healthy adult dogs belonging to friends, and avoid dog-park mud until the vet confirms the puppy is through the high-risk window for parvovirus.</p>
      <p>We would rather discuss a realistic plan for your household than hand you a rigid rule copied from a forum.</p>
      <p>Puppy school run by reward-based trainers who require vaccine records is different from an informal meet-up in a drainage reserve after rain. Ask trainers what hygiene and age rules they use. Good classes often start slightly later than the very first needle; they should still fit inside a sensible socialisation window once your vet agrees.</p>

      <h2>After the puppy course: titre tests, boosters, and the annual rhythm</h2>
      <p>Once the primary course is complete, conversation shifts from “how many weeks between these doses” to “what does this adult dog need this year.” Some dogs receive triennial core protocols where appropriate; others need annual components because of kennel cough exposure. Titre testing measures antibodies for some diseases and can inform decisions in specific cases. It does not replace physical exams, dental checks, or conversations about weight.</p>
      <p>If you are unsure what your adult dog is due for after moving suburbs, bring the old booklet. We reconcile the history, then align forward dates with what you can realistically attend given work and school runs.</p>

      <h2>What puppy vaccination looks like at YB Vet</h2>
      <p>We examine before we vaccinate: heart, lungs, weight trend, hydration, and whether the day is the right day for a needle if your puppy has a fever or diarrhoea. Nurses and vets step through consent in plain language. You can read about <a href="/team">who works clinically</a> before you arrive.</p>
      <p>Yangebup-Beeliar Vet Clinic holds a Google rating of 4.9 from 155 client reviews. That figure reflects trust built in small moments — clear plans, gentle handling — as much as any single clinical skill.</p>
      <p>When you are ready to book the next step in your puppy’s preventive care, use Vetstoria from our <a href="/contact">contact page</a> or call (08) 9417 2882. Monday to Friday we are open 8:30am–5:30pm; Saturday mornings until midday. Sunday we are closed.</p>
      <p>If you want more owner-focused reading after this piece, browse the rest of our <a href="/blog">pet care resources</a> — dental articles, wellness guides, and first-visit tips live there together.</p>
    `,
  },
  {
    slug: "why-annual-vet-checks-matter",
    title: "Why Annual Vet Check-Ups Are the Most Valuable Thing You Can Do for Your Pet",
    seoTitle: "Annual Vet Check-Ups — Why They Matter for Dogs & Cats",
    metaDescription:
      "Annual vet checks catch hidden illness in dogs and cats early. What we examine at YB Vet Yangebup — Perth's southern suburbs, Beeliar, Success & Bibra Lake.",
    excerpt:
      "Most pet owners wait until something is wrong before booking a vet visit. Here's why that's the most expensive approach — and what an annual check-up actually looks for.",
    category: "Preventive Care",
    date: "2026-04-15",
    dateFormatted: "15 April 2026",
    readTime: "5 min read",
    author: "Dr Amelia Barrett",
    coverSrc:
      "https://images.pexels.com/photos/4453157/pexels-photo-4453157.jpeg?auto=compress&cs=tinysrgb&w=1400",
    faqs: [
      {
        question: "How often should an adult dog or cat see the vet?",
        answer:
          "For most healthy adults, once a year is standard. Senior dogs over seven and cats over ten often benefit from six-monthly visits so weight, teeth, and organ changes are not missed.",
      },
      {
        question: "What is checked during an annual vet check-up?",
        answer:
          "We perform a nose-to-tail physical exam, review vaccinations, weigh your pet, and look at teeth, ears, eyes, skin, and abdomen. We also discuss behaviour and diet, and may recommend blood tests for older animals.",
      },
      {
        question: "My pet seems fine — is a check-up still worth it?",
        answer:
          "Yes. Dogs and cats often hide pain until a problem is advanced. Early dental disease, weight loss, and heart murmurs are examples of issues we can pick up before obvious symptoms appear.",
      },
      {
        question: "Do indoor-only cats need annual vet visits?",
        answer:
          "Indoor cats still age, need parasite prevention tailored to their lifestyle, and can develop dental disease, kidney issues, or thyroid problems. An annual visit supports long, comfortable lives.",
      },
    ],
    content: `
      <p>The most common thing we hear from pet owners who bring in an older dog or cat with a newly diagnosed health condition is: "But they seemed completely fine." And the difficult truth is: they probably were fine — until they weren't. That's the nature of how animals age. National bodies such as the <a href="https://www.rspca.org.au/" target="_blank" rel="noopener noreferrer">RSPCA</a> also publish owner guidance on recognising when something may be wrong; nothing replaces an in-person exam for your pet.</p>

      <h2>Animals hide illness better than we do</h2>
      <p>Dogs and cats are instinctively inclined to mask signs of pain and weakness. It's a survival mechanism inherited from wild ancestors for whom appearing vulnerable could mean becoming prey. This means that by the time your pet is showing clear signs of discomfort — limping, refusing food, obvious lethargy — the underlying issue has often been developing for months.</p>
      <p>An annual physical examination gives us the opportunity to detect what your pet won't show you. We're checking body weight trends (a 10% weight loss in a cat is significant and often missed at home), lymph node size, dental disease progression, heart murmurs, joint stiffness, and abdominal organ size — none of which are things a pet owner can reasonably assess at home. The <a href="https://www.ava.com.au/" target="_blank" rel="noopener noreferrer">Australian Veterinary Association</a> summarises why preventive vet visits matter for dogs and cats across Australia.</p>

      <h2>What happens during a check-up at YB Vet</h2>
      <p>A standard annual consultation at our Yangebup clinic takes about 20 to 30 minutes. During that time, we:</p>
      <ul>
        <li>Perform a full nose-to-tail physical examination</li>
        <li>Review vaccination status and update where needed</li>
        <li>Check weight against your pet's history and breed norms</li>
        <li>Examine teeth, ears, eyes, and skin</li>
        <li>Palpate the abdomen to assess organ size</li>
        <li>Discuss any behavioural changes you've noticed at home</li>
        <li>For pets over seven: recommend bloodwork if not done recently</li>
      </ul>
      <p>For a single overview of consults, vaccines, dental checks, and surgery, see our <a href="/services">veterinary services</a> page — it mirrors what we talk through in the consult room.</p>

      <h2>The cost comparison that matters</h2>
      <p>An annual check-up at YB Vet costs a fraction of what emergency treatment or the management of a late-stage chronic disease costs. Dental disease caught at stage one is a polish and a scale. Caught at stage three, it's extractions, a longer anaesthetic, and a harder recovery. Kidney disease identified through bloodwork in an eight-year-old cat can be managed for years with diet and medication. The same disease identified when a cat stops eating often cannot be reversed.</p>
      <p>We're not saying this to alarm you. We're saying it because we genuinely believe that the relationship between a vet clinic and a healthy animal is the most valuable one in preventive pet care — and that's the relationship we want to build with every pet in Yangebup, Beeliar, Success, and the surrounding suburbs.</p>

      <h2>When to book</h2>
      <p>For most adult dogs and cats, once a year is the standard recommendation. For senior pets (dogs over seven, cats over ten), every six months is worth considering. Puppies and kittens will need a more frequent schedule through their first year for their vaccination program — if the clinic is new to your household, our <a href="/blog/preparing-pet-first-vet-visit">first vet visit guide</a> walks through carrier training, car habituation, and what to bring.</p>
      <p>If your pet hasn't had a check-up in the last twelve months, <a href="/contact">book a consultation</a> online or call (08) 9417 2882. We're open Monday to Friday 8:30am–5:30pm and Saturday mornings. You can also <a href="/team">meet our veterinarians</a> before you arrive.</p>
    `,
  },
  {
    slug: "preparing-pet-first-vet-visit",
    title: "Preparing Your Pet for Their First Vet Visit: A Practical Guide",
    seoTitle: "First Vet Visit — How to Prepare Your Dog or Cat",
    metaDescription:
      "Calmer first vet visits: car habituation, cat carrier training, what to bring, and what to expect at YB Vet Yangebup — for dogs and cats near Beeliar & Success.",
    excerpt:
      "A vet visit doesn't have to be stressful — for your pet or for you. Small steps at home can make a significant difference to how your animal experiences a clinic visit.",
    category: "Pet Care Tips",
    date: "2026-03-20",
    dateFormatted: "20 March 2026",
    readTime: "6 min read",
    author: "Dr Chloe Hutson",
    coverSrc:
      "https://images.pexels.com/photos/7210498/pexels-photo-7210498.jpeg?auto=compress&cs=tinysrgb&w=1400",
    faqs: [
      {
        question: "How can I make my dog less anxious about the car before a vet visit?",
        answer:
          "Take short car trips to fun places, not only the vet, and practise parking near the clinic without going in at first so the car and location feel less threatening.",
      },
      {
        question: "How should I prepare my cat's carrier for travel?",
        answer:
          "Leave the carrier out at home with a familiar blanket, feed nearby, and use Feliway spray before travel. A carrier that feels like normal furniture reduces panic on the day.",
      },
      {
        question: "Should I feed my pet before their first vet appointment?",
        answer:
          "Ask when you book. For some visits a light meal is fine; for procedures we may advise fasting. Always tell us if your pet has diabetes or other conditions.",
      },
      {
        question: "What documents should I bring to a first visit?",
        answer:
          "Bring any previous vaccination or vet records, a stool sample if possible for puppies or kittens, and a written list of questions so you do not forget them during the consultation.",
      },
    ],
    content: `
      <p>The smell of a vet clinic — disinfectant, other animals, unfamiliar sounds — is genuinely alarming to many dogs and cats on their first visit. That alarm response is normal, it's biological, and it's one of the things we think about carefully in how we've designed the way we see patients at YB Vet. For species-specific stress tips, <a href="https://www.rspca.org.au/" target="_blank" rel="noopener noreferrer">RSPCA Australia</a> publishes broad welfare guidance; your own vet still tailors advice to your pet.</p>
      <p>But there's also a lot you can do at home to make that first visit — and every visit after it — much calmer for your animal.</p>

      <h2>For dogs: car trips first, clinic second</h2>
      <p>If your dog only ever gets in the car to go to the vet, the car itself becomes a source of anxiety. In the weeks before a first visit, take short car trips to pleasant destinations — a park, a friend's house, anywhere that ends with something good. The goal is to break the association between "car" and "stress."</p>
      <p>You can also drive past or park near the clinic a couple of times without going in. Let your dog smell the area from the safety of the car or on a lead. Familiarity reduces fear.</p>

      <h2>For cats: carrier training</h2>
      <p>Most cats associate their carrier with the vet. The carrier comes out, they disappear under the bed. The solution is to leave the carrier out in your home permanently — as furniture, as a comfortable resting spot, with a familiar-smelling blanket inside. Feed your cat near it. Let them choose to go in and out freely. By the time the carrier is needed for an actual visit, it's just a familiar box they happen to be picked up in.</p>
      <p>On travel day, spray the carrier interior with Feliway (a synthetic feline pheromone available at most pet shops) about 30 minutes before you put your cat in. The <a href="https://www.ava.com.au/" target="_blank" rel="noopener noreferrer">Australian Veterinary Association</a> publishes vet-authored material on reducing fear at visits; we still prefer a plan written for your individual cat.</p>

      <h2>What to bring to a first visit</h2>
      <ul>
        <li><strong>Any vaccination or vet records</strong> from a previous clinic or breeder</li>
        <li><strong>A stool sample</strong> in a sealed container if you can get one — useful for worm detection, especially in puppies and kittens</li>
        <li><strong>Your pet's current food</strong> — a small handful of high-value treats for positive reinforcement during the examination</li>
        <li><strong>A written list of questions</strong> — consultations can feel rushed when you're managing a nervous animal; having questions written down means you won't forget them</li>
      </ul>

      <h2>What to expect at YB Vet</h2>
      <p>We try to make the experience as calm as possible. We keep dog and cat waiting areas separate where we can. We work at floor level with nervous dogs rather than immediately lifting them onto a table. We let cats come out of their carrier in their own time. We don't rush examinations.</p>
      <p>If your pet has had a genuinely traumatic experience at a vet in the past — or if they're known to be very anxious — mention it when you book. We can discuss whether a pre-visit sedative might make the experience safer and less distressing for your animal.</p>
      <p>Once you are settled in, <a href="/blog/why-annual-vet-checks-matter">regular check-ups</a> help us catch dental disease, weight drift, and organ changes early — the same themes we cover in a routine consult. Browse <a href="/services">what we offer</a> if you want the full list before you walk in.</p>
      <p>We're at Shop 4/31-35 Moorhen Drive in Yangebup. You can <a href="/contact">book online</a> through Vetstoria or call us on (08) 9417 2882. Read about <a href="/team">who will see your pet</a> on our team page.</p>
    `,
  },
  {
    slug: "why-does-my-dogs-breath-smell-so-bad",
    title: "Why Does My Dog's Breath Smell So Bad?",
    seoTitle: "Dog Bad Breath — Causes & When to See Us",
    metaDescription:
      "Persistent bad dog breath often signals dental disease. Common causes of halitosis, home warning signs, and when to book YB Vet in Yangebup for a dental assessment.",
    excerpt:
      "Fishy, rotten, or sour breath in dogs is common — and it is not something you should ignore for months. Here is what usually causes it, what dental disease looks like at home, and when to book a check at YB Vet.",
    category: "Dental & Oral Health",
    date: "2026-05-08",
    dateFormatted: "8 May 2026",
    readTime: "5 min read",
    author: "Dr Amelia Barrett",
    coverSrc:
      "https://images.pexels.com/photos/6235113/pexels-photo-6235113.jpeg?auto=compress&cs=tinysrgb&w=1400",
    faqs: [
      {
        question: "Is bad breath in dogs ever normal?",
        answer:
          "Brief changes after eating something unusual can happen. A persistent foul smell over more than a couple of weeks is not something to ignore and often links to dental or other health issues.",
      },
      {
        question: "What is the most common cause of smelly dog breath?",
        answer:
          "Dental disease: plaque and tartar harbour bacteria at the gum line, causing periodontal disease and a rotten odour. Many dogs still eat despite sore mouths, so appetite alone is not a reliable guide.",
      },
      {
        question: "Can dental problems in dogs be treated at YB Vet?",
        answer:
          "We assess mouths in routine consultations and discuss home care, safe chews, and professional dental cleaning under anaesthetic when appropriate. We are a day clinic and will refer to emergency services if your pet is acutely unwell.",
      },
      {
        question: "What other causes should I discuss with my vet?",
        answer:
          "Diet, coprophagia, and stomach upset can change breath short term. Less commonly, internal illness can alter odour. Sudden change, lethargy, bleeding, or swelling warrants a sooner appointment.",
      },
      {
        question: "When should I book an appointment for halitosis?",
        answer:
          "If the smell lasts more than a couple of weeks or you see tartar, red gums, drooling, or pawing at the mouth, book a dental assessment. Early treatment is typically shorter and safer than waiting for advanced infection.",
      },
    ],
    content: `
      <p>If you have leaned in for a pat and thought your dog's breath could strip paint, you are not dramatic. Owners mention halitosis to us every week at our Moorhen Drive clinic in Yangebup. Sometimes it is mild and recent. Sometimes it has been building quietly while the dog still eats normally. The important part is: bad breath is a symptom, not a personality trait. General dental welfare context from <a href="https://www.rspca.org.au/" target="_blank" rel="noopener noreferrer">RSPCA Australia</a> can sit alongside — not instead of — advice from your own vet.</p>

      <h2>What counts as normal versus worth a call</h2>
      <p>Puppy breath is a real thing — it tends to be sweeter and disappears as adult teeth settle. A healthy adult dog might have neutral breath after a meal or a brief "I found something in the garden" phase. Persistent foul odour, especially if it worsens over weeks, is not something to normalise. It often sits in the same bucket as limping or drinking more: a sign the body is asking for attention.</p>

      <h2>Dental disease is the most common reason</h2>
      <p>Plaque hardens into tartar, bacteria multiply along the gum line, and periodontal disease develops. That combination produces the classic rotten smell. Many dogs still eat dry food with sore mouths because hunger wins over discomfort — so you cannot rely on appetite alone to tell you the teeth are fine.</p>
      <p>At home, you might notice yellow-brown buildup on the back teeth, red gums where they meet the enamel, or reluctance to chew on one side. Some dogs paw at the mouth or drool more than usual. None of these findings confirm a diagnosis on their own, but they are good reasons to book a dental assessment with a vet who can look under the lip properly. The <a href="https://www.ava.com.au/" target="_blank" rel="noopener noreferrer">Australian Veterinary Association</a> explains why professional dental assessment matters when owners notice oral changes.</p>

      <h2>When it might not be the teeth</h2>
      <p>Diet, coprophagia, and gut upset can change mouth odour short term. Less commonly, serious internal disease can alter how breath smells. That is not a list to panic over — it is a reminder that "dog bad breath" searches cover everything from a scale-and-polish candidate to problems that need bloodwork. If the smell appeared suddenly, your dog is unwell in any other way, or you see bleeding or swelling, bring that forward in your mind and call sooner rather than later.</p>

      <h2>What we do about pet dental care in Yangebup</h2>
      <p>At YB Vet we examine the mouth as part of <a href="/blog/why-annual-vet-checks-matter">routine consultations</a> and can talk you through home brushing, chews that are safe for your dog's jaw, and when a professional dental clean under anaesthetic is the right step. We are a day clinic in Yangebup with set hours — we are not a 24-hour emergency hospital — so if your dog is in acute distress we will always be honest about whether you need an emergency centre instead.</p>
      <p>If you want the full picture of what we offer, our <a href="/services">services page</a> lists dental care alongside vaccinations, surgery, and the rest of what we do for dogs and cats from Yangebup, Beeliar, Success, Aubin Grove, and Bibra Lake. You can read about <a href="/team">which veterinarian</a> will assess your dog.</p>

      <h2>When to book</h2>
      <p>If the smell has lasted more than a couple of weeks, or you can see tartar or gum redness, book a consultation. Early dental work is usually shorter, safer, and easier on your dog than waiting until infection is deep in the socket. You can use Vetstoria online or phone (08) 9417 2882. If you are unsure whether it can wait, <a href="/contact">contact us</a> and we will help you triage.</p>
    `,
  },
];
