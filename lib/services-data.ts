export interface Service {
  slug: string;
  num: string;
  title: string;
  desc: string;
  img: string;
  vimeoId: string;
  detail: {
    headline: string;
    overview: string;
    whyItMatters: string;
    features: string[];
    process: { step: string; description: string }[];
    useCases: string[];
    faq: { q: string; a: string }[];
    cta: string;
  };
}

export const services: Service[] = [
  {
    slug: "trial-graphics",
    num: "01",
    title: "Trial Graphics",
    desc: "Courtroom-ready visuals that help jurors and decision-makers understand the story.",
    img: "/sequence-1/0001.jpg",
    vimeoId: "1158145127",
    detail: {
      headline: "Turn Complex Cases Into Clear, Visual Arguments",
      overview:
        "Trial graphics are the backbone of courtroom communication. When words alone cannot convey the weight of evidence, a precisely designed graphic bridges the gap between technical complexity and juror comprehension. Our trial graphics are created with one objective: to make your argument undeniable. Every element — from color choices to layout hierarchy — is crafted to guide attention, build understanding, and reinforce persuasion.",
      whyItMatters:
        "Studies show that jurors retain 65% more information when it is presented visually. In a courtroom where every detail matters, the difference between a clear visual and a wall of text can be the difference between winning and losing. Trial Template's graphics are not clip art or templates — they are custom-built, case-specific tools designed to survive cross-examination and resonate with decision-makers.",
      features: [
        "Custom-designed courtroom boards and digital presentations",
        "Anatomically accurate medical and surgical visuals",
        "Timeline reconstructions and event sequences",
        "Mechanism-of-injury diagrams with layered detail",
        "Before/after comparisons for surgical outcomes",
        "Interactive exhibit packages for trial teams",
      ],
      process: [
        { step: "Case Review", description: "We study the records, depositions, and expert reports to identify the visual story. Every graphic begins with understanding the legal strategy and the audience." },
        { step: "Concept Design", description: "Initial sketches and layout drafts are shared for attorney review and feedback. We iterate quickly to lock in the right approach before production." },
        { step: "Production", description: "Final graphics are rendered at presentation-grade quality with print and digital formats. Every visual is reviewed for accuracy and persuasive impact." },
        { step: "Delivery & Support", description: "Files are delivered trial-ready with optional revisions, last-minute updates, and on-call support during trial week." },
      ],
      useCases: [
        "Personal injury litigation requiring anatomical visuals",
        "Medical malpractice trials with complex surgical procedures",
        "Product liability cases needing engineering schematics",
        "Wrongful death cases requiring emotional and factual clarity",
        "Insurance bad faith disputes with timeline evidence",
        "Mass tort and class action visual support",
      ],
      faq: [
        { q: "How long does it take to produce trial graphics?", a: "Standard turnaround is 5–10 business days depending on complexity. We also offer expedited 48-hour rush service for urgent trial needs." },
        { q: "Can you work directly with our expert witnesses?", a: "Absolutely. We regularly coordinate with medical experts, engineers, and economists to ensure every graphic accurately represents their testimony." },
        { q: "What formats do you deliver?", a: "We deliver in all formats needed: high-resolution print boards, PowerPoint/Keynote presentations, PDF exhibits, and digital files optimized for courtroom displays." },
        { q: "Do you offer flat-rate pricing?", a: "Yes. All Trial Template services are offered at transparent, flat-rate pricing — no surprise hourly billing. You know the cost before we start." },
      ],
      cta: "Ready to build your trial visuals? Let's discuss your case.",
    },
  },
  {
    slug: "medical-illustrations",
    num: "02",
    title: "Medical Illustrations",
    desc: "Visual explanations of anatomy, injury, treatment, procedures, and causation.",
    img: "/sequence-2/0001.jpg",
    vimeoId: "1157689279",
    detail: {
      headline: "Anatomy Made Clear for Legal and Medical Communication",
      overview:
        "Medical illustrations are essential when the human body becomes evidence. Whether explaining a cervical fusion, a traumatic brain injury, or a complex surgical procedure, our illustrations translate clinical language into visual clarity. Each illustration is reviewed against source records, imaging, and operative notes to ensure anatomical accuracy and litigation-grade reliability.",
      whyItMatters:
        "Medical testimony is often the most technical — and most confusing — part of any personal injury or malpractice case. Without clear visuals, jurors struggle to connect the dots between diagnosis, treatment, and damages. Our medical illustrations give expert witnesses a powerful visual anchor and give attorneys a tool to make clinical facts emotionally and intellectually accessible.",
      features: [
        "Anatomical cross-sections and surgical views",
        "Pre-operative and post-operative comparisons",
        "Pathology and disease progression visuals",
        "Spinal, orthopedic, and neurological illustrations",
        "Injection site and procedure step breakdowns",
        "Life-care and future treatment visual summaries",
      ],
      process: [
        { step: "Record Analysis", description: "Medical records, imaging, and operative reports are reviewed for anatomical accuracy and legal relevance." },
        { step: "Illustration Draft", description: "Preliminary anatomical sketches are developed based on the medical evidence and shared for attorney and expert feedback." },
        { step: "Refinement", description: "Revisions ensure clinical accuracy and alignment with attorney strategy. We work with your experts to confirm every detail." },
        { step: "Final Output", description: "Polished illustrations are delivered in print, digital, and presentation formats — ready for deposition, mediation, or trial." },
      ],
      useCases: [
        "Spinal surgery cases (laminectomy, fusion, disc replacement)",
        "Traumatic brain injury (TBI) and concussion cases",
        "Orthopedic injuries (fractures, joint replacements, rotator cuff)",
        "Birth injury and obstetric malpractice cases",
        "Surgical error and wrong-site surgery claims",
        "Chronic pain and nerve damage visualization",
      ],
      faq: [
        { q: "How do you ensure anatomical accuracy?", a: "Every illustration is built from the actual medical records, imaging studies, and operative notes in your case. We cross-reference with medical atlases and can coordinate with your expert for final review." },
        { q: "Can illustrations be used in depositions?", a: "Yes. Our illustrations are designed to be defensible under Daubert and are routinely used in depositions, mediations, and trial." },
        { q: "Do you create 3D medical animations?", a: "We specialize in high-quality 2D and 2.5D medical illustrations. For cases requiring full 3D animation, we can coordinate with our production partners." },
        { q: "What body systems do you cover?", a: "All of them. We have experience illustrating musculoskeletal, neurological, cardiovascular, respiratory, gastrointestinal, and reproductive systems." },
      ],
      cta: "Need medical visuals that hold up under cross-examination? Get in touch.",
    },
  },
  {
    slug: "mediation-presentations",
    num: "03",
    title: "Mediation Presentations",
    desc: "Concise visual packages designed to communicate case value and liability clearly.",
    img: "/sequence-3/0001.jpg",
    vimeoId: "1158145127",
    detail: {
      headline: "Present Your Case Value with Precision and Impact",
      overview:
        "Mediation is where cases are won or settled. A well-designed mediation presentation does more than display evidence — it frames the narrative, quantifies the damages, and leaves the opposing side with a clear understanding of exposure. Our mediation packages are built to compress complex case stories into focused, persuasive visual narratives that drive resolution.",
      whyItMatters:
        "The average mediation lasts a single day. In that window, you need to communicate years of medical treatment, liability arguments, and damage calculations in a way that compels action. A generic PowerPoint will not cut it. Trial Template mediation decks are built with the same visual rigor as trial exhibits — because every presentation is a chance to resolve the case.",
      features: [
        "Comprehensive slide decks tailored for mediation",
        "Damage summaries with visual cost breakdowns",
        "Liability and causation visual arguments",
        "Medical treatment timeline presentations",
        "Day-in-the-life visual narratives",
        "Demand package visual supplements",
      ],
      process: [
        { step: "Strategy Call", description: "We align on the case theory, damages, key strengths, and the audience. This call shapes the entire narrative arc of the presentation." },
        { step: "Deck Design", description: "A structured presentation is built around the core narrative — from incident to injuries to impact — with supporting visuals at every stage." },
        { step: "Review Cycle", description: "Attorney feedback is incorporated to fine-tune messaging, sequencing, and visual emphasis. We typically complete in 1–2 review rounds." },
        { step: "Final Package", description: "Delivered as a ready-to-present deck with speaker notes, backup slides, and optional printed leave-behind materials." },
      ],
      useCases: [
        "Pre-litigation demand presentations",
        "Formal mediation proceedings",
        "Arbitration visual support",
        "Settlement conferences and judicial mediations",
        "Insurance carrier presentations",
        "Case evaluation panels and mock trials",
      ],
      faq: [
        { q: "How far in advance should I order a mediation deck?", a: "We recommend 2–3 weeks lead time for a standard mediation deck. Rush turnaround is available for urgent deadlines." },
        { q: "Can you include medical illustrations in the deck?", a: "Absolutely. We integrate custom medical illustrations, timelines, damage charts, and any other visuals needed to tell the complete story." },
        { q: "Do you provide printed materials for the mediator?", a: "Yes. We can produce printed leave-behind packets, summary boards, and reference materials formatted specifically for the mediator's review." },
        { q: "What if we need last-minute changes?", a: "We build our workflow to accommodate last-minute updates. Same-day revisions are available during the final 48 hours before your mediation." },
      ],
      cta: "Make your next mediation impossible to ignore. Schedule a consult.",
    },
  },
  {
    slug: "injury-visualizations",
    num: "04",
    title: "Injury Visualizations",
    desc: "Graphics that explain how an injury occurred and why it matters.",
    img: "/sequence-2/0060.jpg",
    vimeoId: "1157689279",
    detail: {
      headline: "Show the Jury Exactly What Happened",
      overview:
        "Injury visualizations are designed to make the invisible visible. From soft tissue damage to fracture patterns, these visuals reconstruct the mechanism of injury and its consequences on the human body. They are built to withstand Daubert challenges and to communicate complex medical facts in a way that resonates emotionally and intellectually with any audience.",
      whyItMatters:
        "Injuries are often internal, microscopic, or progressive — things a jury cannot see with their own eyes. Without a clear visual explanation, the defense can minimize the severity, question the causation, or confuse the timeline. Injury visualizations give your case a visual anchor that makes the harm real, tangible, and undeniable.",
      features: [
        "Mechanism-of-injury reconstructions",
        "Impact and force vector diagrams",
        "Soft tissue, ligament, and tendon injury visuals",
        "Fracture pattern and displacement graphics",
        "Nerve damage and impingement illustrations",
        "Comparative anatomy: healthy vs. injured states",
      ],
      process: [
        { step: "Incident Review", description: "We study the accident or incident details alongside medical records to understand the full mechanism of injury." },
        { step: "Visual Mapping", description: "The mechanism and resulting injuries are mapped into a visual framework that tells the story from impact to diagnosis." },
        { step: "Clinical Validation", description: "Graphics are cross-referenced with imaging, operative notes, and expert opinions to ensure defensibility." },
        { step: "Delivery", description: "Final visuals are provided in all necessary formats for trial, mediation, or deposition — with revision support included." },
      ],
      useCases: [
        "Motor vehicle accident injury reconstruction",
        "Slip-and-fall and premises liability injuries",
        "Workplace and industrial accident injuries",
        "Sports-related traumatic injuries",
        "Assault and violent crime injury documentation",
        "Pediatric and birth-related trauma",
      ],
      faq: [
        { q: "Can you show the mechanism of injury, not just the result?", a: "Yes. We specialize in mechanism-of-injury graphics that show how the force was applied, how the body responded, and what structures were damaged." },
        { q: "Do you work from diagnostic imaging?", a: "We regularly work from MRI, CT, X-ray, and ultrasound imaging to create accurate visualizations of the actual injuries in your case." },
        { q: "Are these admissible in court?", a: "Our visualizations are designed with admissibility in mind. They are based on medical evidence and can be presented through expert testimony." },
        { q: "Can you show progressive or degenerative injuries?", a: "Absolutely. We create progression visuals that show how an injury evolved over time, including pre-existing conditions and aggravation." },
      ],
      cta: "Let us visualize the injury so the jury can see the truth.",
    },
  },
  {
    slug: "timelines",
    num: "05",
    title: "Timelines",
    desc: "Chronological visuals that organize events, treatment, injuries, and case development.",
    img: "/sequence-1/0060.jpg",
    vimeoId: "1158145127",
    detail: {
      headline: "Organize Complex Case Histories Into One Clear View",
      overview:
        "Legal timelines turn scattered facts into structured stories. Whether tracking years of medical treatment, a sequence of negligent acts, or overlapping events across multiple parties, our timelines impose order on chaos. They are designed to be both comprehensive and digestible — giving judges and jurors a roadmap through the case.",
      whyItMatters:
        "Complex cases often span months or years of events across multiple providers, parties, and locations. Without a visual timeline, the fact-finder is left to piece together a mental picture from testimony alone. A well-designed timeline eliminates confusion, highlights critical moments, and controls the narrative arc of your case.",
      features: [
        "Multi-track event and treatment timelines",
        "Color-coded party and liability mapping",
        "Medical treatment and procedure chronologies",
        "Accident reconstruction event sequences",
        "Discovery and litigation milestone timelines",
        "Interactive digital timelines for trial presentation",
      ],
      process: [
        { step: "Data Collection", description: "All relevant dates, events, medical visits, and records are gathered and organized into a master chronology." },
        { step: "Timeline Architecture", description: "Events are mapped into a logical, visual chronology with clear categories, color coding, and hierarchy." },
        { step: "Design & Review", description: "The timeline is designed for maximum clarity and attorney-approved. We iterate until the narrative flow is exactly right." },
        { step: "Final Output", description: "Delivered in large-format print, digital scroll, and presentation-ready formats — with update capability through trial." },
      ],
      useCases: [
        "Multi-year medical treatment chronologies",
        "Construction defect and delay claim timelines",
        "Employment discrimination and retaliation event sequences",
        "Insurance claim handling and bad faith timelines",
        "Criminal case event reconstructions",
        "Multi-party litigation with overlapping events",
      ],
      faq: [
        { q: "How many events can a timeline include?", a: "There's no hard limit. We've built timelines with over 200 events spanning 10+ years. The key is smart design — grouping, layering, and visual hierarchy to keep it readable." },
        { q: "Can timelines be updated as the case develops?", a: "Yes. We build timelines to be updatable. As new records come in or depositions reveal new facts, we can add events quickly." },
        { q: "What size are printed timelines?", a: "We typically produce timelines at 36×48 inches or larger for courtroom display. We also create scroll-format digital versions for screen presentation." },
        { q: "Do you include medical records in the timeline?", a: "We can annotate timeline events with references to specific medical records, imaging dates, provider names, and treatment details." },
      ],
      cta: "Turn your case history into a visual story. Let's build your timeline.",
    },
  },
  {
    slug: "expert-demonstratives",
    num: "06",
    title: "Expert Demonstratives",
    desc: "Visual assets that help expert opinions become easier to understand.",
    img: "/sequence-3/0060.jpg",
    vimeoId: "1157689279",
    detail: {
      headline: "Make Expert Testimony Visually Unforgettable",
      overview:
        "Expert witnesses bring critical knowledge to the courtroom, but their testimony often contains language that is too technical for a lay audience. Expert demonstratives bridge this gap — transforming complex opinions into visual aids that reinforce credibility, simplify jargon, and anchor key points in the jury's memory. Every demonstrative is designed in collaboration with the testifying expert.",
      whyItMatters:
        "An expert without visuals is just a voice. Studies in cognitive science show that visual aids increase the perceived credibility of expert witnesses and improve juror recall of technical testimony by up to 400%. Trial Template expert demonstratives are not generic diagrams — they are tailored to your expert's specific methodology and opinions.",
      features: [
        "Biomechanical force and motion diagrams",
        "Engineering and structural failure visuals",
        "Economic damage and life-care cost graphics",
        "Toxicology and pharmacology illustrations",
        "Accident reconstruction overlays and models",
        "Standard-of-care comparison charts",
      ],
      process: [
        { step: "Expert Coordination", description: "We work directly with the expert to understand their opinion, methodology, and the key points they need the jury to remember." },
        { step: "Visual Translation", description: "Complex concepts are translated into clear, accurate visual aids — from force diagrams to cost projections to anatomical models." },
        { step: "Expert Review", description: "The expert reviews and approves all demonstratives before finalization. We iterate until the visuals match their testimony exactly." },
        { step: "Trial Delivery", description: "Final assets are formatted for courtroom display, deposition exhibit, or mediation presentation — with real-time update support." },
      ],
      useCases: [
        "Biomechanical expert testimony support",
        "Accident reconstruction engineer visuals",
        "Economist and life-care planner damage charts",
        "Vocational rehabilitation expert demonstratives",
        "Toxicology and pharmacology visual aids",
        "Standard-of-care violation comparisons",
      ],
      faq: [
        { q: "Do you attend depositions or trials?", a: "We can provide remote or on-site support during depositions and trials to manage exhibit display and handle real-time visual updates." },
        { q: "Can you create demonstratives for defense experts too?", a: "Yes. We work with both plaintiff and defense teams. Our goal is always accurate, clear communication — regardless of which side retains us." },
        { q: "How do you coordinate with the expert?", a: "We typically start with a 30-minute call with the expert, followed by draft rounds via email. Most projects require 1–2 review cycles." },
        { q: "What if the expert changes their opinion?", a: "We build flexibility into our process. If opinions shift after deposition or new evidence emerges, we can revise demonstratives quickly." },
      ],
      cta: "Help your expert be heard. Schedule a consultation.",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
