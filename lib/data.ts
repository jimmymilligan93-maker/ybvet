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

export const BLOG_POSTS = [
  {
    slug: "why-annual-vet-checks-matter",
    title: "Why Annual Vet Check-Ups Are the Most Valuable Thing You Can Do for Your Pet",
    excerpt: "Most pet owners wait until something is wrong before booking a vet visit. Here's why that's the most expensive approach — and what an annual check-up actually looks for.",
    category: "Preventive Care",
    date: "2026-04-15",
    dateFormatted: "15 April 2026",
    readTime: "5 min read",
    author: "Dr Amelia Barrett",
    image: "/images/blog-annual-checkup.jpg",
    content: `
      <p>The most common thing we hear from pet owners who bring in an older dog or cat with a newly diagnosed health condition is: "But they seemed completely fine." And the difficult truth is: they probably were fine — until they weren't. That's the nature of how animals age.</p>

      <h2>Animals hide illness better than we do</h2>
      <p>Dogs and cats are instinctively inclined to mask signs of pain and weakness. It's a survival mechanism inherited from wild ancestors for whom appearing vulnerable could mean becoming prey. This means that by the time your pet is showing clear signs of discomfort — limping, refusing food, obvious lethargy — the underlying issue has often been developing for months.</p>
      <p>An annual physical examination gives us the opportunity to detect what your pet won't show you. We're checking body weight trends (a 10% weight loss in a cat is significant and often missed at home), lymph node size, dental disease progression, heart murmurs, joint stiffness, and abdominal organ size — none of which are things a pet owner can reasonably assess at home.</p>

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

      <h2>The cost comparison that matters</h2>
      <p>An annual check-up at YB Vet costs a fraction of what emergency treatment or the management of a late-stage chronic disease costs. Dental disease caught at stage one is a polish and a scale. Caught at stage three, it's extractions, a longer anaesthetic, and a harder recovery. Kidney disease identified through bloodwork in an eight-year-old cat can be managed for years with diet and medication. The same disease identified when a cat stops eating often cannot be reversed.</p>
      <p>We're not saying this to alarm you. We're saying it because we genuinely believe that the relationship between a vet clinic and a healthy animal is the most valuable one in preventive pet care — and that's the relationship we want to build with every pet in Yangebup, Beeliar, Success, and the surrounding suburbs.</p>

      <h2>When to book</h2>
      <p>For most adult dogs and cats, once a year is the standard recommendation. For senior pets (dogs over seven, cats over ten), every six months is worth considering. Puppies and kittens will need a more frequent schedule through their first year for their vaccination program.</p>
      <p>If your pet hasn't had a check-up in the last twelve months, book one. The phone number is (08) 9417 2882, and we're open Monday to Friday 8:30am–5:30pm and Saturday mornings.</p>
    `,
  },
  {
    slug: "preparing-pet-first-vet-visit",
    title: "Preparing Your Pet for Their First Vet Visit: A Practical Guide",
    excerpt: "A vet visit doesn't have to be stressful — for your pet or for you. Small steps at home can make a significant difference to how your animal experiences a clinic visit.",
    category: "Pet Care Tips",
    date: "2026-03-20",
    dateFormatted: "20 March 2026",
    readTime: "6 min read",
    author: "Dr Chloe Hutson",
    image: "/images/blog-first-visit.jpg",
    content: `
      <p>The smell of a vet clinic — disinfectant, other animals, unfamiliar sounds — is genuinely alarming to many dogs and cats on their first visit. That alarm response is normal, it's biological, and it's one of the things we think about carefully in how we've designed the way we see patients at YB Vet.</p>
      <p>But there's also a lot you can do at home to make that first visit — and every visit after it — much calmer for your animal.</p>

      <h2>For dogs: car trips first, clinic second</h2>
      <p>If your dog only ever gets in the car to go to the vet, the car itself becomes a source of anxiety. In the weeks before a first visit, take short car trips to pleasant destinations — a park, a friend's house, anywhere that ends with something good. The goal is to break the association between "car" and "stress."</p>
      <p>You can also drive past or park near the clinic a couple of times without going in. Let your dog smell the area from the safety of the car or on a lead. Familiarity reduces fear.</p>

      <h2>For cats: carrier training</h2>
      <p>Most cats associate their carrier with the vet. The carrier comes out, they disappear under the bed. The solution is to leave the carrier out in your home permanently — as furniture, as a comfortable resting spot, with a familiar-smelling blanket inside. Feed your cat near it. Let them choose to go in and out freely. By the time the carrier is needed for an actual visit, it's just a familiar box they happen to be picked up in.</p>
      <p>On travel day, spray the carrier interior with Feliway (a synthetic feline pheromone available at most pet shops) about 30 minutes before you put your cat in.</p>

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
      <p>We're at Shop 4/31-35 Moorhen Drive in Yangebup. You can book online through Vetstoria or call us on (08) 9417 2882.</p>
    `,
  },
];
