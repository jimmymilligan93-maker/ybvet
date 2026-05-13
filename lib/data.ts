export const CLINIC = {
  name: "YB Vet",
  fullName: "Yangebup-Beeliar Vet Clinic",
  phone: "(08) 9417 2882",
  phoneHref: "tel:0894172882",
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
    image: "/images/vet-amelia.jpg",
    alt: "Dr Amelia Barrett, veterinarian at YB Vet, holding a golden retriever",
  },
  {
    name: "Dr Chloe Hutson",
    title: "Veterinarian",
    credential: "BVSc",
    bio: "Chloe's calm hands and unhurried approach have made her the vet cats in particular seem to trust most. She's especially interested in feline medicine and preventive care.",
    image: "/images/vet-chloe.jpg",
    alt: "Dr Chloe Hutson, veterinarian at YB Vet, examining a cat",
  },
];

export const SERVICES = [
  { name: "Vaccinations",    icon: "shield",      desc: "Annual and puppy/kitten vaccination programs tailored to your pet's lifestyle and risk." },
  { name: "Dental Care",     icon: "sparkles",    desc: "Professional dental cleans, extractions, and home dental advice to protect long-term health." },
  { name: "Consultations",   icon: "stethoscope", desc: "Thorough, unhurried consultations for illnesses, check-ups, second opinions, and health concerns." },
  { name: "Senior Pet Care", icon: "heart",       desc: "Specialised health monitoring for dogs and cats over seven — catching issues before they escalate." },
  { name: "Desexing",        icon: "scissors",    desc: "Safe, routine desexing procedures for dogs and cats with compassionate pre- and post-op care." },
  { name: "Surgery",         icon: "activity",    desc: "General soft-tissue surgery performed with careful anaesthetic monitoring and pain management." },
  { name: "Dermatology",     icon: "droplets",    desc: "Diagnosis and management of skin conditions, allergies, and ear disease in dogs and cats." },
  { name: "Microchipping",   icon: "tag",         desc: "Permanent identification implanted in seconds — and we'll register your pet's details on the spot." },
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
      "https://images.pexels.com/photos/6235231/pexels-photo-6235231.jpeg?auto=compress&cs=tinysrgb&w=1400",
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
