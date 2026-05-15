import { SERVICES, type ServiceCard } from "./data";

export type ServicePageSection = {
  id: string;
  heading: string;
  /** HTML fragments: paragraphs and lists only; links use same-origin or external with rel on anchors. */
  html: string;
};

export type ServicePageFaq = { question: string; answer: string };

export type ServicePageDefinition = {
  slug: string;
  /** Must match `SERVICES[].name` for shared card image and listing copy. */
  serviceName: string;
  /** Same-origin hero asset for LCP (avoids remote Pexels on first paint). */
  heroLcpSrc?: string;
  metadataTitle: string;
  metaDescription: string;
  h1: string;
  heroLead: string;
  heroPill: string;
  procedureSchemaName: string;
  procedureSchemaDescription: string;
  sections: ServicePageSection[];
  /** Blog slugs from `BLOG_POSTS` for a related-reading block. */
  relatedBlogSlugs: string[];
  faqs: ServicePageFaq[];
};

export const SERVICE_PAGES: ServicePageDefinition[] = [
  {
    slug: "vaccinations",
    serviceName: "Vaccinations",
    heroLcpSrc: "/images/vaccinations-hero.jpg",
    metadataTitle: "Pet Vaccinations for Dogs & Cats | YB Vet",
    metaDescription:
      "Dog and cat vaccinations at YB Vet — puppy and kitten courses, adult boosters, and records reviewed before each needle. Book online or call (08) 9417 2882.",
    h1: "Vaccinations for dogs and cats",
    heroLead:
      "Core and lifestyle vaccines for puppies, kittens, and adult pets — planned around a physical exam, your pet's history, and what you can realistically keep up with at home.",
    heroPill: "Preventive care",
    procedureSchemaName: "Pet vaccinations",
    procedureSchemaDescription:
      "Vaccination consultations and booster programs for dogs and cats at Yangebup-Beeliar Vet Clinic.",
    sections: [
      {
        id: "why-vaccinations-matter",
        heading: "Why vaccinations matter for your pet",
        html: `
          <p>Your dog or cat cannot tell you when a virus is circulating on a footpath or in a boarding yard. Vaccination is how we reduce the risk of serious, preventable illness — especially in young animals whose immune systems are still learning what to fight.</p>
          <p>Core vaccines target diseases that can kill quickly or cause long hospital stays. In Australian dogs, that usually means protection against distemper, infectious hepatitis, and parvovirus. Canine cough components are added when lifestyle exposure warrants them. Cats receive their own core and non-core schedule based on whether they go outdoors, live with other cats, or board away from home.</p>
          <p>National welfare bodies such as <a href="https://www.rspca.org.au/" target="_blank" rel="noopener noreferrer">RSPCA Australia</a> publish owner-facing material on infectious disease. Your veterinarian still tailors products and timing to the animal in front of us — not a generic calendar from a forum.</p>
        `,
      },
      {
        id: "typical-visit",
        heading: "What happens at a vaccination appointment",
        html: `
          <p>A vaccination visit at YB Vet is a consultation first and an injection second. We weigh your pet, listen to heart and lungs, check gums and hydration, and ask about appetite, vomiting, diarrhoea, or coughing since you last saw us. If your pet has a fever or is acutely unwell, we may postpone live vaccines and reschedule — a delayed needle is safer than pushing ahead on the wrong day.</p>
          <p>When vaccination is appropriate, we explain which components we recommend and why, note the batch and injection site, and record the due date for the next visit. Nurses and vets use plain language for consent; you are not expected to memorise brand acronyms before you walk in.</p>
          <p>Puppy and kitten courses usually involve a series of visits weeks apart until the primary course is complete. Adult dogs and cats move to an annual or tailored booster rhythm once we have a full history. The <a href="https://www.ava.com.au/" target="_blank" rel="noopener noreferrer">Australian Veterinary Association</a> hosts vet-authored public information that complements — not replaces — a consult. Many clinicians also refer to the <a href="https://wsava.org/global-guidelines/vaccination-guidelines/" target="_blank" rel="noopener noreferrer">WSAVA vaccination guidelines</a> when interpreting label directions and local risk.</p>
          <p>Vaccination appointments are also a practical checkpoint for intestinal worms, heartworm prevention suited to Western Australia, and microchip confirmation where needed. We bundle conversations when it saves you a second car trip, without rushing the exam.</p>
        `,
      },
      {
        id: "book-and-prepare",
        heading: "How to book and what to bring",
        html: `
          <p>Book online through Vetstoria from our <a href="/contact">contact page</a> or phone <a href="tel:+61894172882">(08) 9417 2882</a>. Tell us if this is a new puppy or kitten, a rescue with patchy paperwork, or an adult due for a booster after moving clinics.</p>
          <ul>
            <li>Any vaccination booklet or previous clinic records — photos on your phone are fine</li>
            <li>For cats, a secure carrier; for dogs, a lead and a few small treats</li>
            <li>A short list of questions so nothing gets lost while your pet is on the table</li>
            <li>If your pet has had vomiting, diarrhoea, or collapse, mention it when you book so we can triage timing</li>
          </ul>
          <p>First visit with a young animal? Our <a href="/blog/preparing-pet-first-vet-visit">first vet visit guide</a> covers carrier training and car habituation. For puppy-specific schedules and C3 versus C5 language, read <a href="/blog/puppy-vaccinations-schedule-australia">puppy vaccinations in Australia</a>. For how vaccines fit into yearly health checks, see <a href="/blog/why-annual-vet-checks-matter">why annual vet check-ups matter</a>.</p>
          <p>You can <a href="/team">meet our veterinarians</a> before you arrive and browse all <a href="/services">veterinary services</a> we offer from the same clinic.</p>
        `,
      },
      {
        id: "fees",
        heading: "Fees and transparency",
        html: `
          <p>Vaccination fees depend on your pet's age, which vaccines are due, and whether parasite prevention or other care is included in the same visit. We explain what we recommend and what it costs before we proceed so you can make a clear decision. We do not publish fixed dollar amounts on the website because courses change as your pet grows.</p>
          <p>Pet insurance may help some families with preventive care; others prefer to budget visit by visit. Either approach is fine — we would rather you leave with a written plan than a surprise on the invoice.</p>
        `,
      },
      {
        id: "limits",
        heading: "When we are not the right first stop",
        html: `
          <p>YB Vet is a day clinic with set weekday and Saturday-morning hours. We are not a 24-hour emergency hospital. If your pet collapses, has facial swelling, repeated vomiting with lethargy, or difficulty breathing soon after a vaccine, go to your nearest emergency veterinary hospital — those signs are uncommon but cannot wait until Monday.</p>
          <p>For complex immune-mediated conditions or specialist vaccine advice beyond routine primary care, we will discuss referral options honestly. For everything else — puppy courses, kitten starts, adult boosters, and records reconciliation — we are set up to help at Shop 4/31-35 Moorhen Drive, Yangebup.</p>
        `,
      },
    ],
    relatedBlogSlugs: [
      "puppy-vaccinations-schedule-australia",
      "why-annual-vet-checks-matter",
      "preparing-pet-first-vet-visit",
    ],
    faqs: [
      {
        question: "Do you vaccinate both puppies and kittens?",
        answer:
          "Yes. We run primary courses for puppies and kittens and continue with adult booster plans once the initial series is complete. Timing depends on age, prior doses, and health on the day.",
      },
      {
        question: "What is the difference between C3 and C5 for dogs?",
        answer:
          "C3 refers to core protection against distemper, infectious hepatitis, and parvovirus. C5 adds components for canine cough where lifestyle risk warrants them. We recommend non-core parts only when they match how your dog actually lives.",
      },
      {
        question: "How often do adult dogs and cats need boosters?",
        answer:
          "Most healthy adults visit once a year for a physical exam and vaccination review. Some components may be given less often when labels and history support it. We record due dates after every visit so you are not guessing from memory.",
      },
      {
        question: "Can you vaccinate if my pet seems a bit unwell?",
        answer:
          "Sometimes we postpone vaccination if there is fever, acute vomiting or diarrhoea, or another illness that needs treatment first. Tell us when you book so we can allocate enough time or suggest the right day.",
      },
      {
        question: "What records should I bring?",
        answer:
          "Bring any breeder, shelter, or previous clinic paperwork, even as phone photos. Accurate history avoids duplicate doses and gaps in protection.",
      },
      {
        question: "Are new patients welcome for vaccinations?",
        answer:
          "Yes. New patients are always welcome. Book online via Vetstoria or call (08) 9417 2882 during clinic hours.",
      },
    ],
  },
  {
    slug: "dental-care",
    serviceName: "Dental Care",
    heroLcpSrc: "/images/dental-care-hero.jpg",
    metadataTitle: "Pet Dental Care & Teeth Cleaning | YB Vet",
    metaDescription:
      "Dog and cat dental care in Yangebup — assessment, scale and polish under anaesthetic when needed, and home-care advice. Book YB Vet online or call (08) 9417 2882.",
    h1: "Dental care for dogs and cats",
    heroLead:
      "Mouth pain changes how pets eat, play, and trust a hand near the face. We assess teeth and gums, explain what we find, and plan treatment you can follow at home.",
    heroPill: "Dental health",
    procedureSchemaName: "Veterinary dental care",
    procedureSchemaDescription:
      "Dental assessment and treatment for dogs and cats at Yangebup-Beeliar Vet Clinic.",
    sections: [
      {
        id: "why-dental-matters",
        heading: "Why dental care matters for your pet",
        html: `
          <p>Bad breath is the symptom owners notice first. Under the gumline, plaque and tartar can drive pain, tooth loss, and bacteria that affect the rest of the body. Many dogs and cats keep eating through sore mouths — so a calm dental check is worth scheduling before the problem becomes obvious.</p>
          <p>At YB Vet we look at more than the front teeth. We check gums for redness and recession, note fractured teeth, and discuss whether a scale and polish under anaesthetic is appropriate or whether home care alone is enough for now. The <a href="https://www.ava.com.au/" target="_blank" rel="noopener noreferrer">Australian Veterinary Association</a> publishes owner guidance on pet dental disease that lines up with what we see in consults across Yangebup and nearby suburbs.</p>
          <p>If your dog's breath has changed recently, our article on <a href="/blog/why-does-my-dogs-breath-smell-so-bad">why a dog's breath smells bad</a> walks through common causes — still book an exam if you are unsure.</p>
        `,
      },
      {
        id: "typical-visit",
        heading: "What happens at a dental appointment",
        html: `
          <p>A dental visit starts with a conscious exam when your pet is relaxed enough. We grade tartar, probe for pockets, and show you what we see. If a full clean or extractions are needed, we book a separate anaesthetic day with fasting instructions and a discharge plan.</p>
          <p>Under anaesthetic we scale above and below the gumline, polish smooth surfaces, and take dental radiographs when equipment and case indicate it. Your pet is monitored throughout — heart rate, breathing, temperature, and pain relief are not afterthoughts.</p>
          <p>At discharge we go through feeding, chews, tooth brushing if realistic for your household, and when to recheck. We link dental work to wider <a href="/services">veterinary services</a> at the same clinic so you are not bouncing between unfamiliar rooms.</p>
        `,
      },
      {
        id: "book-and-prepare",
        heading: "How to book and what to bring",
        html: `
          <p>Book online via Vetstoria from our <a href="/contact">contact page</a> or call <a href="tel:+61894172882">(08) 9417 2882</a>. Mention if your pet is off food, pawing at the mouth, or has had a dental procedure elsewhere.</p>
          <ul>
            <li>Previous dental records or vet history if you have them</li>
            <li>For cats, a secure carrier; for dogs, a lead</li>
            <li>A list of chews, foods, or treats your pet gets daily</li>
            <li>For anaesthetic days: confirm fasting times when we book — they differ for dogs and cats</li>
          </ul>
          <p>Annual health checks often surface dental issues early — see <a href="/blog/why-annual-vet-checks-matter">why annual vet check-ups matter</a> for how we tie mouth checks into routine visits. You can <a href="/team">meet our veterinarians</a> before the day.</p>
        `,
      },
      {
        id: "fees",
        heading: "Fees and transparency",
        html: `
          <p>Dental fees depend on the grade of disease, whether extractions are required, and pre-anaesthetic blood tests we recommend for your pet's age and health. We quote before the procedure day where possible and update you if we find unexpected disease under anaesthetic — we do not proceed with extractions beyond what you have agreed to without contact.</p>
          <p>Pet insurance policies vary in what they cover for dental work. Bring your policy details if you rely on reimbursement.</p>
        `,
      },
      {
        id: "limits",
        heading: "When we are not the right first stop",
        html: `
          <p>Facial swelling, inability to open the mouth, or collapse needs emergency care, not a routine dental slot. YB Vet is a day clinic — not a 24-hour hospital.</p>
          <p>Orthodontics, root canals, and specialist oral surgery beyond our equipment may be referred. For routine assessment, cleaning, and many extractions, we are set up at Shop 4/31-35 Moorhen Drive, Yangebup.</p>
        `,
      },
    ],
    relatedBlogSlugs: ["why-does-my-dogs-breath-smell-so-bad", "why-annual-vet-checks-matter"],
    faqs: [
      {
        question: "How often should my dog or cat have a dental check?",
        answer:
          "Most adult pets benefit from a dental assessment at least once a year, often alongside an annual health visit. Pets with prior dental disease may need shorter intervals.",
      },
      {
        question: "Does my pet need anaesthetic for a dental clean?",
        answer:
          "A proper scale and polish under the gumline requires anaesthetic in dogs and cats. We discuss risks, fasting, and monitoring for your individual pet before booking.",
      },
      {
        question: "Can you treat bad breath without surgery?",
        answer:
          "Sometimes home care and treating other causes help. If tartar and gum disease are present, cleaning is usually part of the solution. An exam clarifies which applies.",
      },
      {
        question: "Do you see cats as well as dogs for dental care?",
        answer:
          "Yes. Cats commonly have painful resorptive lesions that are easy to miss without a careful exam and often radiographs under anaesthetic.",
      },
      {
        question: "Are new patients welcome?",
        answer:
          "Yes. Book online or call (08) 9417 2882 during clinic hours.",
      },
    ],
  },
  {
    slug: "consultations",
    serviceName: "Consultations",
    heroLcpSrc: "/images/consultations-hero.jpg",
    metadataTitle: "Vet Consultations for Dogs & Cats | YB Vet",
    metaDescription:
      "General vet consultations in Yangebup for illness, check-ups, and second opinions. Unhurried exams for dogs and cats. Book YB Vet online or call (08) 9417 2882.",
    h1: "Veterinary consultations",
    heroLead:
      "When something feels off with your pet, you want a thorough exam and a plan you understand — not a rushed handover at the door.",
    heroPill: "General practice",
    procedureSchemaName: "Veterinary consultation",
    procedureSchemaDescription:
      "General veterinary consultations for dogs and cats at Yangebup-Beeliar Vet Clinic.",
    sections: [
      {
        id: "why-consultations-matter",
        heading: "When to book a consultation",
        html: `
          <p>Consultations cover more than vaccines. We see coughing dogs, itchy cats, limping greyhounds, newly adopted kittens, and owners who simply want a second opinion after searching symptoms online. If you are worried, that is reason enough to book — we would rather clarify early than wait for a crisis.</p>
          <p>We serve families from Yangebup, Beeliar, Success, Aubin Grove, and Bibra Lake. Same-day appointments are offered when capacity allows; tell reception if your pet's breathing, bleeding, or pain is worsening so we can triage.</p>
          <p>First-time clients might find our <a href="/blog/preparing-pet-first-vet-visit">guide to preparing for a first vet visit</a> useful before you arrive.</p>
        `,
      },
      {
        id: "typical-visit",
        heading: "What happens in a typical consultation",
        html: `
          <p>We start with your story — when signs began, what changed at home, and what you hope to achieve today. Then a full physical exam: weight, temperature when indicated, heart and lungs, abdomen, skin, ears, eyes, mouth, and gait.</p>
          <p>We explain findings in plain language and outline options — monitoring, medication, diet change, or further tests. You choose the path; we do not proceed with blood work, imaging, or procedures without your go-ahead after a cost discussion.</p>
          <p>Consultations often overlap with <a href="/services/vaccinations">vaccinations</a>, <a href="/services/senior-pet-care">senior care</a>, or <a href="/services/dermatology">skin work</a> when the pet is already on the table — we batch sensibly when it reduces stress for your animal.</p>
        `,
      },
      {
        id: "book-and-prepare",
        heading: "How to book and what to bring",
        html: `
          <p>Book through Vetstoria on our <a href="/contact">contact page</a> or phone <a href="tel:+61894172882">(08) 9417 2882</a>.</p>
          <ul>
            <li>Prior vet records or lab results — photos on your phone are fine</li>
            <li>A list of current foods, treats, and medications including supplements</li>
            <li>Photos or short videos of intermittent problems (collapse, lameness, coughing)</li>
            <li>For cats, a carrier; for dogs, a lead</li>
          </ul>
          <p>Browse <a href="/services">all services</a> or <a href="/team">meet the team</a> if you are new to the clinic.</p>
        `,
      },
      {
        id: "fees",
        heading: "Fees and transparency",
        html: `
          <p>Consultation fees cover the exam and discussion. Tests, medication, and procedures are itemised separately. We talk through likely costs before we run non-urgent diagnostics so you are not surprised at checkout.</p>
        `,
      },
      {
        id: "limits",
        heading: "When we are not the right first stop",
        html: `
          <p>True emergencies — difficulty breathing, major trauma, repeated seizures, suspected toxin ingestion, or collapse — need an emergency veterinary hospital immediately. YB Vet does not provide overnight critical care.</p>
          <p>For specialist oncology, advanced imaging beyond our setup, or complex surgical cases, we refer with notes and speak with the receiving hospital when helpful.</p>
        `,
      },
    ],
    relatedBlogSlugs: ["preparing-pet-first-vet-visit", "why-annual-vet-checks-matter"],
    faqs: [
      {
        question: "Do I need an appointment or can I walk in?",
        answer:
          "We recommend booking online or by phone. Urgent cases are triaged when you call so we can fit you in safely.",
      },
      {
        question: "How long does a consultation usually take?",
        answer:
          "Most consults are allocated enough time for history, exam, and discussion. Complex cases or multiple pets may need a longer slot — mention that when you book.",
      },
      {
        question: "Can I get a second opinion at YB Vet?",
        answer:
          "Yes. Bring previous records and test results. We will examine your pet fresh and explain where our view aligns or differs from prior advice.",
      },
      {
        question: "Do you consult for both dogs and cats?",
        answer:
          "Yes. We are a dog and cat focused general practice.",
      },
      {
        question: "Are new patients welcome?",
        answer:
          "Always. Book online or call (08) 9417 2882.",
      },
    ],
  },
  {
    slug: "senior-pet-care",
    serviceName: "Senior Pet Care",
    heroLcpSrc: "/images/senior-pet-care-hero.jpg",
    metadataTitle: "Senior Pet Care for Dogs & Cats | YB Vet",
    metaDescription:
      "Health checks and monitoring for older dogs and cats in Yangebup. Catch problems early with tailored senior care at YB Vet. Book online or call (08) 9417 2882.",
    h1: "Senior pet care",
    heroLead:
      "Older dogs and cats slow down in different ways. We track weight, pain, organ health, and behaviour so small shifts get attention before they become crises.",
    heroPill: "Older pets",
    procedureSchemaName: "Senior pet health assessment",
    procedureSchemaDescription:
      "Health monitoring and consultations for senior dogs and cats at Yangebup-Beeliar Vet Clinic.",
    sections: [
      {
        id: "why-senior-care-matters",
        heading: "Why senior care matters",
        html: `
          <p>A grey muzzle does not tell you how the kidneys, joints, or thyroid are coping. Many owners first notice slower stairs or longer naps — both can be normal ageing or early signs we can support. We tailor visits to pets roughly seven years and older, though giant breeds may benefit from earlier screening.</p>
          <p>Senior consults at YB Vet emphasise quality of life: appetite, mobility, cognition, and whether your pet still enjoys the things they used to. The <a href="https://www.rspca.org.au/" target="_blank" rel="noopener noreferrer">RSPCA</a> and <a href="https://www.ava.com.au/" target="_blank" rel="noopener noreferrer">AVA</a> both highlight preventive care for ageing animals; your vet still personalises tests to the pet in front of us.</p>
          <p>Our post on <a href="/blog/why-annual-vet-checks-matter">why annual check-ups matter</a> applies doubly once pets enter their senior years.</p>
        `,
      },
      {
        id: "typical-visit",
        heading: "What happens at a senior health visit",
        html: `
          <p>We extend history questions — drinking, urination, stiffness after rest, confusion at night. The exam targets common senior issues: weight change, dental pain, heart murmurs, lumps, and orthopaedic comfort.</p>
          <p>Blood pressure, blood tests, and urine tests are discussed when they change what we would do next. Not every pet needs every test every year; we recommend panels when results would guide medication or diet.</p>
          <p>Pain management, arthritis support, and dental disease often appear together in older pets. We coordinate with <a href="/services/dental-care">dental care</a> and general <a href="/services/consultations">consultations</a> under one roof.</p>
        `,
      },
      {
        id: "book-and-prepare",
        heading: "How to book and what to bring",
        html: `
          <p>Book via <a href="/contact">contact</a> or <a href="tel:+61894172882">(08) 9417 2882</a>. Mention mobility issues so we can meet you at the car or use a ground-floor approach if needed.</p>
          <ul>
            <li>Current medications and supplements</li>
            <li>Recent weight trends if you track them at home</li>
            <li>Video of stumbling or coughing if it is intermittent</li>
            <li>Prior lab results from other clinics</li>
          </ul>
          <p><a href="/team">Our veterinarians</a> can talk through end-of-life planning honestly when the time comes — no pressure, just clarity.</p>
        `,
      },
      {
        id: "fees",
        heading: "Fees and transparency",
        html: `
          <p>Senior consult fees follow our standard consultation structure. Recommended screening tests are quoted before they are run. Ongoing medication costs are discussed when we start or change long-term drugs.</p>
        `,
      },
      {
        id: "limits",
        heading: "When we are not the right first stop",
        html: `
          <p>Acute collapse, non-weight-bearing lameness, or respiratory distress needs emergency care. For advanced oncology or MRI/CT, we refer to specialist centres.</p>
          <p>For routine senior monitoring and most chronic disease management, we care for dogs and cats across the southern suburbs from Yangebup.</p>
        `,
      },
    ],
    relatedBlogSlugs: ["why-annual-vet-checks-matter", "preparing-pet-first-vet-visit"],
    faqs: [
      {
        question: "At what age is my pet considered a senior?",
        answer:
          "Many dogs and cats are treated as senior from around seven years, earlier for large breeds. We adjust screening to your pet's size, breed, and existing conditions.",
      },
      {
        question: "How often should seniors visit the vet?",
        answer:
          "Twice-yearly checks are common for seniors, or more often when managing chronic disease. We set a rhythm that matches your pet's stability.",
      },
      {
        question: "Do you offer blood tests for older pets?",
        answer:
          "Yes, when they would change management. We explain what each test looks for and what normal versus abnormal means for your situation.",
      },
      {
        question: "Can you help with arthritis pain?",
        answer:
          "Yes. We combine weight advice, pain relief, and home modifications. Never give human pain medicines without veterinary direction — some are toxic to pets.",
      },
      {
        question: "Are new senior patients welcome?",
        answer:
          "Yes. Bring prior records so we do not repeat tests unnecessarily.",
      },
    ],
  },
  {
    slug: "desexing",
    serviceName: "Desexing",
    heroLcpSrc: "/images/desexing-hero.jpg",
    metadataTitle: "Pet Desexing for Dogs & Cats | YB Vet",
    metaDescription:
      "Routine dog and cat desexing in Yangebup with pre- and post-op guidance, anaesthetic monitoring, and pain relief. Book YB Vet online or call (08) 9417 2882.",
    h1: "Desexing for dogs and cats",
    heroLead:
      "Desexing is routine surgery, but it is still surgery. We walk you through fasting, the day itself, and recovery at home so you know what normal looks like.",
    heroPill: "Routine surgery",
    procedureSchemaName: "Pet desexing",
    procedureSchemaDescription:
      "Routine desexing surgery for dogs and cats at Yangebup-Beeliar Vet Clinic.",
    sections: [
      {
        id: "why-desexing-matters",
        heading: "Why owners choose desexing",
        html: `
          <p>Owners desex to prevent unwanted litters, reduce certain behavioural and health risks, and comply with local expectations for responsible ownership. Timing depends on species, breed, growth, and whether your pet is healthy on the day.</p>
          <p>We discuss pros and cons for your individual animal — including large-breed dog timing, where recommendations have shifted in recent years. <a href="https://www.ava.com.au/" target="_blank" rel="noopener noreferrer">AVA resources</a> summarise welfare angles; your consult turns that into a plan for your pet.</p>
        `,
      },
      {
        id: "typical-visit",
        heading: "What happens on desexing day",
        html: `
          <p>Before surgery we confirm fasting, examine your pet, and may recommend pre-anaesthetic blood tests. On admission your pet receives pain relief and sedation suited to their size and temperament. Anaesthetic is monitored by trained staff throughout.</p>
          <p>After surgery we keep pets warm, continue pain management, and discharge when they are awake enough to travel safely. You receive written aftercare — rest, cone use, check of the incision, and when to call if something looks wrong.</p>
          <p>Desexing sits alongside our wider <a href="/services/surgery">surgery</a> and <a href="/services/consultations">consultation</a> services with the same surgical protocols.</p>
        `,
      },
      {
        id: "book-and-prepare",
        heading: "How to book and what to prepare",
        html: `
          <p>Book a pre-surgical consult or direct surgery date through <a href="/contact">contact</a> or <a href="tel:+61894172882">(08) 9417 2882</a>. Puppies and kittens should be on track with <a href="/services/vaccinations">vaccinations</a> — we advise on timing.</p>
          <ul>
            <li>Follow fasting instructions exactly — food and water rules differ by age</li>
            <li>Bring any prior medical history</li>
            <li>Plan a quiet indoor area at home for recovery</li>
            <li>Transport cats in a carrier, dogs on a lead</li>
          </ul>
          <p>New to the clinic? Read <a href="/blog/preparing-pet-first-vet-visit">preparing for a first visit</a> and <a href="/team">meet our team</a>.</p>
        `,
      },
      {
        id: "fees",
        heading: "Fees and transparency",
        html: `
          <p>Desexing quotes include anaesthetic, surgery, pain relief, and hospitalisation for the day unless we state otherwise. Optional pre-anaesthetic blood tests are discussed separately. We confirm fees before you admit your pet.</p>
        `,
      },
      {
        id: "limits",
        heading: "When we are not the right first stop",
        html: `
          <p>Animals in heat, pregnant, or with undiagnosed illness may need staging — not emergency, but timing changes. True surgical emergencies go to a 24-hour hospital.</p>
          <p>Complex reconstructive cases or specialist surgical referrals are discussed openly if they arise.</p>
        `,
      },
    ],
    relatedBlogSlugs: ["preparing-pet-first-vet-visit", "puppy-vaccinations-schedule-australia"],
    faqs: [
      {
        question: "What age should my puppy or kitten be desexed?",
        answer:
          "Timing varies by species and breed. We recommend a consult to plan the right age for your pet rather than relying on generic online charts.",
      },
      {
        question: "How long is recovery after desexing?",
        answer:
          "Many pets are quiet for 24–48 hours and need restricted activity for about ten days while skin heals. We give specific instructions at discharge.",
      },
      {
        question: "Will desexing change my pet's personality?",
        answer:
          "Some behaviours linked to hormones may reduce. Your pet's core temperament usually stays the same. We discuss realistic expectations before surgery.",
      },
      {
        question: "Is desexing safe?",
        answer:
          "All anaesthesia carries risk, which we minimise with exam, monitoring, and appropriate protocols. Serious complications are uncommon in healthy young animals.",
      },
      {
        question: "Do you desex both dogs and cats?",
        answer:
          "Yes, as routine day procedures for healthy patients.",
      },
    ],
  },
  {
    slug: "surgery",
    serviceName: "Surgery",
    heroLcpSrc: "/images/surgery-hero.jpg",
    metadataTitle: "Pet Surgery for Dogs & Cats | YB Vet",
    metaDescription:
      "General soft-tissue surgery for dogs and cats in Yangebup — monitored anaesthesia and pain management at YB Vet. Book online or call (08) 9417 2882.",
    h1: "Surgery for dogs and cats",
    heroLead:
      "When your pet needs an operation, you want a team that explains the why, monitors the anaesthetic closely, and supports recovery at home.",
    heroPill: "Surgery",
    procedureSchemaName: "Veterinary surgery",
    procedureSchemaDescription:
      "General soft-tissue surgery for dogs and cats at Yangebup-Beeliar Vet Clinic.",
    sections: [
      {
        id: "why-surgery",
        heading: "Types of surgery we perform",
        html: `
          <p>YB Vet performs general soft-tissue surgery — lump removals, wound repairs, abdominal procedures such as foreign body retrieval when appropriate, and elective surgery including <a href="/services/desexing">desexing</a>. We do not present ourselves as a referral orthopaedic centre; cruciate and complex bone work may be referred.</p>
          <p>Every surgical patient receives a pre-op assessment, tailored anaesthetic protocol, intravenous fluids when indicated, and multi-modal pain relief. Owners from Yangebup, Beeliar, Success, and surrounding suburbs use us because the same team follows the case from consult to stitch removal.</p>
        `,
      },
      {
        id: "typical-visit",
        heading: "What to expect on surgery day",
        html: `
          <p>Admission is morning for most routine cases. We re-check the surgical site, confirm fasting, and place an intravenous catheter when needed. During surgery a dedicated nurse monitors anaesthetic depth while the veterinarian operates.</p>
          <p>You receive a call when your pet is in recovery and a discharge appointment with wound care instructions. Suture removal or check-ups are booked before you leave.</p>
          <p>Non-surgical options are discussed when they are reasonable — not every lump needs immediate excision, for example — but we do not delay necessary surgery without clear communication.</p>
        `,
      },
      {
        id: "book-and-prepare",
        heading: "How to book and prepare",
        html: `
          <p>Surgical cases usually start with a <a href="/services/consultations">consultation</a> so we can examine the problem and quote accurately. Book via <a href="/contact">contact</a> or <a href="tel:+61894172882">(08) 9417 2882</a>.</p>
          <ul>
            <li>Follow fasting instructions — critical for safe anaesthesia</li>
            <li>Bring current medications unless we advise otherwise</li>
            <li>Allow time at discharge — we explain home care in person</li>
          </ul>
          <p>See <a href="/services">all services</a> and <a href="/team">our veterinarians</a> for context on who will manage your case.</p>
        `,
      },
      {
        id: "fees",
        heading: "Fees and transparency",
        html: `
          <p>Surgical estimates include anaesthesia, the procedure, hospitalisation, and standard pain relief. If intra-operative findings change the plan, we contact you before proceeding with additional work where possible.</p>
        `,
      },
      {
        id: "limits",
        heading: "When we are not the right first stop",
        html: `
          <p>Major trauma, active haemorrhage, or unstable patients need emergency hospitals. Specialist orthopaedic or neurosurgery is referred.</p>
          <p>For routine soft-tissue surgery and monitored anaesthesia, we operate from our Moorhen Drive clinic during business hours.</p>
        `,
      },
    ],
    relatedBlogSlugs: ["why-annual-vet-checks-matter"],
    faqs: [
      {
        question: "Is anaesthesia safe for my pet?",
        answer:
          "We reduce risk with pre-op exams, monitoring, and protocols matched to age and health. Blood tests may be recommended before anaesthesia in seniors or unwell patients.",
      },
      {
        question: "Will my pet stay overnight?",
        answer:
          "Most routine surgeries are day procedures. Overnight care is not available at YB Vet; we refer unstable cases to hospitals that do.",
      },
      {
        question: "How do I care for the wound at home?",
        answer:
          "We provide written instructions — rest, cone, no bathing until cleared, and signs of infection to watch for. Call if you are unsure.",
      },
      {
        question: "Do you remove lumps during surgery?",
        answer:
          "Yes, when indicated after assessment. Some lumps are sampled first; we explain whether excision is urgent or can be planned.",
      },
      {
        question: "Are new patients welcome for surgery?",
        answer:
          "Yes, usually after an initial consult to establish the surgical plan.",
      },
    ],
  },
  {
    slug: "dermatology",
    serviceName: "Dermatology",
    heroLcpSrc: "/images/dermatology-hero.jpg",
    metadataTitle: "Pet Dermatology & Skin Care | YB Vet",
    metaDescription:
      "Itchy skin, allergies, and ear disease in dogs and cats — dermatology-focused care at YB Vet Yangebup. Book online or call (08) 9417 2882.",
    h1: "Dermatology for dogs and cats",
    heroLead:
      "Scratching, head shaking, and red skin wear everyone down. We work through causes step by step instead of guessing with repeated courses of the same drug.",
    heroPill: "Skin & ears",
    procedureSchemaName: "Veterinary dermatology",
    procedureSchemaDescription:
      "Diagnosis and management of skin and ear conditions in dogs and cats at Yangebup-Beeliar Vet Clinic.",
    sections: [
      {
        id: "why-dermatology-matters",
        heading: "Common skin and ear problems",
        html: `
          <p>Itchy dogs and cats fill our consult rooms year-round in Perth's climate. Allergies, parasites, infections, and ear disease overlap — a thorough history beats a quick injection that only helps for a week.</p>
          <p>We examine the whole coat, paws, ears, and skin folds. Cytology and other in-clinic tests often guide treatment the same day. When diet trials or long-term allergy plans are needed, we map realistic timelines with you.</p>
          <p>Ear infections in floppy-eared dogs and allergic skin disease are labour-intensive for owners; we explain home ear cleaning and when professional rechecks matter. General welfare guidance from <a href="https://www.rspca.org.au/" target="_blank" rel="noopener noreferrer">RSPCA Australia</a> supports responsible parasite control alongside veterinary care.</p>
        `,
      },
      {
        id: "typical-visit",
        heading: "What happens at a dermatology-focused visit",
        html: `
          <p>We ask about diet, seasonality, flea control, and what helped or failed before. The exam targets lesions, distribution patterns, and ear canals. Samples from skin or ears may be examined under the microscope in minutes.</p>
          <p>Treatment might combine parasite prevention, infection control, anti-itch medication, and diet change — rarely a single magic cream. Rechecks are scheduled so we know whether we are on the right track.</p>
          <p>Chronic cases link to <a href="/services/consultations">ongoing consultations</a> and sometimes <a href="/services/senior-pet-care">senior monitoring</a> when older pets have overlapping conditions.</p>
        `,
      },
      {
        id: "book-and-prepare",
        heading: "How to book and what to bring",
        html: `
          <p>Book via <a href="/contact">contact</a> or <a href="tel:+61894172882">(08) 9417 2882</a>. Tell us if itch is severe — we may prioritise earlier appointments.</p>
          <ul>
            <li>List of current foods, treats, and flavoured medications</li>
            <li>Photos of flare-ups if signs vary day to day</li>
            <li>Names of past medications and how long they were used</li>
            <li>Bring all pets in the household if flea control is part of the plan</li>
          </ul>
          <p>Dental disease and skin disease sometimes coincide in itchy pets — we may discuss <a href="/services/dental-care">dental checks</a> when relevant.</p>
        `,
      },
      {
        id: "fees",
        heading: "Fees and transparency",
        html: `
          <p>Consult and in-clinic tests are quoted at the visit. Long-term allergy management may involve repeat visits and periodic medication — we outline ongoing costs when we start a plan.</p>
        `,
      },
      {
        id: "limits",
        heading: "When we are not the right first stop",
        html: `
          <p>Severe allergic reactions with facial swelling or breathing difficulty need emergency care. Specialist dermatology referral is offered for complex cases that need advanced allergy testing beyond our scope.</p>
          <p>For most itchy dogs and cats in the southern suburbs, we manage workups in-house.</p>
        `,
      },
    ],
    relatedBlogSlugs: ["why-does-my-dogs-breath-smell-so-bad"],
    faqs: [
      {
        question: "Why is my dog still itchy after flea treatment?",
        answer:
          "Flea allergy, other parasites, food allergy, and environmental allergy can all persist. We check compliance, treat secondary infections, and adjust the plan rather than repeating the same dose.",
      },
      {
        question: "Do you treat ear infections?",
        answer:
          "Yes. Ear disease is often linked to allergies or anatomy. We examine canals, take samples when needed, and schedule rechecks because ears often relapse if stopped too early.",
      },
      {
        question: "Can food allergy be tested?",
        answer:
          "Diet trials remain the most reliable approach for food allergy suspicion. Blood allergy tests are discussed when environmental allergy is the main question.",
      },
      {
        question: "Will my cat need lifelong medication?",
        answer:
          "Some chronic skin patients do. We aim for the lowest effective dose and revisit the plan regularly.",
      },
      {
        question: "Are new patients welcome?",
        answer:
          "Yes. Bring prior treatment lists so we do not repeat failed therapies.",
      },
    ],
  },
  {
    slug: "microchipping",
    serviceName: "Microchipping",
    heroLcpSrc: "/images/microchipping-hero.jpg",
    metadataTitle: "Pet Microchipping & Registration | YB Vet",
    metaDescription:
      "Dog and cat microchipping in Yangebup — quick implantation and registration guidance at YB Vet. Book online or call (08) 9417 2882.",
    h1: "Microchipping for dogs and cats",
    heroLead:
      "A microchip only helps if the number is registered to you. We implant chips in consult and talk you through keeping details current.",
    heroPill: "Identification",
    procedureSchemaName: "Pet microchipping",
    procedureSchemaDescription:
      "Microchip implantation and identification advice for dogs and cats at Yangebup-Beeliar Vet Clinic.",
    sections: [
      {
        id: "why-microchipping-matters",
        heading: "Why microchipping matters",
        html: `
          <p>Collars come off. Microchips stay. In Western Australia, dogs and cats are required to be microchipped in many circumstances — and registered on an approved database with your current phone number.</p>
          <p>The chip is rice-grain sized, implanted under the skin, and scanned with a reader at shelters and vet clinics. We confirm placement, record the number in your pet's file, and explain how to update your details if you move or change phones.</p>
          <p>Microchipping pairs naturally with <a href="/services/vaccinations">vaccination visits</a> and <a href="/blog/preparing-pet-first-vet-visit">first puppy or kitten appointments</a> so young animals leave identified early.</p>
        `,
      },
      {
        id: "typical-visit",
        heading: "What happens at a microchipping appointment",
        html: `
          <p>Most chips are placed during a short consult. We scan first in case a chip is already present, implant the device, then scan again to verify the number. Discomfort is brief — similar to a vaccination needle for most pets.</p>
          <p>We provide paperwork with the chip number and explain how registration works with the database your chip is linked to. If you are unsure whether an old chip is still registered to a previous owner, we help you trace next steps.</p>
        `,
      },
      {
        id: "book-and-prepare",
        heading: "How to book and what to bring",
        html: `
          <p>Book online at <a href="/contact">contact</a> or call <a href="tel:+61894172882">(08) 9417 2882</a>. Microchipping can be added to another visit if you mention it when booking.</p>
          <ul>
            <li>Your contact details for registration forms</li>
            <li>Proof of prior chip if you think one is already implanted</li>
            <li>For puppies and kittens, any breeder paperwork</li>
          </ul>
          <p>Browse <a href="/services">all services</a> or <a href="/team">meet our team</a>.</p>
        `,
      },
      {
        id: "fees",
        heading: "Fees and transparency",
        html: `
          <p>Microchipping is quoted as a standalone fee or bundled with consult fees when combined with another service. Registration with external databases may involve separate fees from the registry — we explain that at the visit.</p>
        `,
      },
      {
        id: "limits",
        heading: "When we are not the right first stop",
        html: `
          <p>Microchipping is not emergency care. If your lost pet is injured, seek veterinary treatment first.</p>
          <p>We do not replace council registration rules — we point you to current local requirements while handling the chip itself.</p>
        `,
      },
    ],
    relatedBlogSlugs: ["preparing-pet-first-vet-visit", "puppy-vaccinations-schedule-australia"],
    faqs: [
      {
        question: "Does microchipping hurt my pet?",
        answer:
          "Most animals react briefly, similar to a vaccination. We use a sharp needle and usually implant during a calm moment of the consult.",
      },
      {
        question: "Can you chip puppies and kittens?",
        answer:
          "Yes, when they are healthy and large enough for safe placement — often alongside first vaccines.",
      },
      {
        question: "How do I update my details on the database?",
        answer:
          "Contact the registry listed on your paperwork or search national databases with the chip number. We can rescan and remind you of the number if you lose paperwork.",
      },
      {
        question: "What if my pet already has a chip?",
        answer:
          "We scan first. If a chip is present, we confirm the number and focus on registration rather than implanting a second device.",
      },
      {
        question: "Are new patients welcome?",
        answer:
          "Yes. Walk-ins are possible when a vet is available, but booking reduces wait times.",
      },
    ],
  },
];

export function getServicePage(slug: string): ServicePageDefinition | undefined {
  return SERVICE_PAGES.find((p) => p.slug === slug);
}

export function getServiceCardForPage(page: ServicePageDefinition): ServiceCard | undefined {
  return SERVICES.find((s) => s.name === page.serviceName);
}

export function ogImageFromCardSrc(src: string, width = 1200): string {
  if (src.startsWith("/")) return src;
  if (src.includes("w=")) return src.replace(/w=\d+/, `w=${width}`);
  return `${src}${src.includes("?") ? "&" : "?"}w=${width}`;
}

/** Hero image for service landing LCP — local asset when set, else service card. */
export function heroLcpImageSrc(page: ServicePageDefinition, card?: ServiceCard): string {
  return page.heroLcpSrc ?? card?.imageSrc ?? "/images/happydog.webp";
}

/** Remote Pexels URLs use a smaller width on slow networks; local paths are used as-is. */
export function heroLcpRemoteWidth(src: string): number {
  return src.startsWith("/") ? 960 : 720;
}

export function heroLcpRemoteSrc(src: string, width = heroLcpRemoteWidth(src)): string {
  if (src.startsWith("/")) return src;
  if (src.includes("w=")) return src.replace(/w=\d+/, `w=${width}`);
  return `${src}${src.includes("?") ? "&" : "?"}w=${width}`;
}
