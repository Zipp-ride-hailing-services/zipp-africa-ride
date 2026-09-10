/** 36 states + the Federal Capital Territory. */
export const NIGERIA_STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "FCT (Abuja)",
] as const;

export type NigeriaState = (typeof NIGERIA_STATES)[number];

/** Calabar is in Cross River — default the waitlist there. */
export const DEFAULT_WAITLIST_STATE: NigeriaState = "Cross River";

export const LAUNCH_MARKETS = [
  { name: "Calabar", region: "Cross River", code: "CBQ", status: "START" as const },
  { name: "Akwa Ibom", region: "Nigeria", code: "UYO", status: "NEXT" as const },
  { name: "Nigeria", region: "Scale", code: "NGA", status: "SCALE" as const },
  { name: "Africa", region: "Beyond", code: "AFR", status: "AHEAD" as const },
];

export const LAUNCH_LINE = "Calabar first. Akwa Ibom next. Nigeria, then Africa.";

export const LAUNCH_CLOSE = [
  "Calabar is where we start.",
  "Akwa Ibom is where we go next.",
  "Nigeria is where we scale.",
  "Africa is where we’re headed.",
] as const;
