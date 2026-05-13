# Statistics guide — YB Vet

## The rule of three

Every statistic should follow:

1. **Stat** — the number  
2. **Plain English** — what it means for a pet owner  
3. **So what** — why it matters for action (book, monitor at home, call)

Never lead with a bare number as the hook.

## YB Vet — canonical clinic numbers (verify before publishing)

Use **`lib/data.ts`** as the source of truth for **this** business; update this table when marketing numbers change.

| Fact | Value | Notes |
|------|--------|--------|
| Google rating | **4.9** | From `CLINIC.rating` |
| Review count | **155** | From `CLINIC.reviewCount` |
| Weekday hours | **8:30am – 5:30pm** | Mon–Fri |
| Saturday | **8:30am – 12:00pm** | |
| Sunday | **Closed** | After-hours: use **generic** “nearest 24-hour emergency vet” unless leadership approves named routing on this site |

When citing **YB Vet** in prose, use **YB Vet** or **Yangebup-Beeliar Vet Clinic** consistently with structured data on **this** domain.

## Parent / group figures (only if approved for *this* URL)

The owning group may operate **other** veterinary businesses. **Do not** merge their statistics, review counts, or equipment claims into YB Vet copy unless leadership explicitly approves each line for **`ybvet.com.au`**.

| Fact | Value | Notes |
|------|--------|--------|
| *(add only when approved)* | | Dated, source, and approval note |

**Rule:** Never imply YB Vet is open **24/7** or offers **emergency-hospital** capabilities **at Yangebup** unless `lib/data.ts` and the live site say so.

## General pet / Australia stats (verify + cite externally in blog)

When you need broader clinical context, prefer **recent** sources (RSPCA, AVA, state agriculture, peer-reviewed summaries) and name the source briefly in prose. Examples of **topics** (look up current figures before publishing):

- Parasite control and heartworm in Australian dogs  
- Dental disease prevalence in adult cats and dogs  
- Vaccination schedules for puppies and kittens (follow current WSAVA / product label guidance)

**Timing-style stats** (e.g. toxin windows): cite **authoritative veterinary sources**, not second-hand blog copy.

**Do not** stack two statistics in the same paragraph. After a stat, add at least two sentences of human context before the next number.
