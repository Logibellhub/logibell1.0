/* LogiBell — Homepage load-board data.
   ───────────────────────────────────────────────────────────────────────────
   EDIT THIS FILE WEEKLY. This drives the "Lane activity" board in the hero.
   Keep it truthful: list only representative recent lanes that were actually
   booked. Anonymized lanes only — NO carrier, broker, shipper, or MC names.

   Fields per lane:
     from      "City, ST"
     to        "City, ST"
     equipment "Dry Van" | "Reefer" | "Flatbed" | "Power Only" | "Box" | "Hotshot" | "Sprinter"
     mode      "FTL" | "LTL"
     rate      "$1,850"  (linehaul; owner-maintained, representative)

   If a given week's lanes aren't ready, set LB_LANES = [] — the board falls
   back to a clean "Recent lanes — updated weekly" state (no fabricated volume).
   ─────────────────────────────────────────────────────────────────────────── */
window.LB_LANES_UPDATED = "Updated weekly"; // PROVISIONAL — set to a real week label, e.g. "Week of Jun 2"
window.LB_LANES = [
  { from: "Perris, CA",          to: "Mesa, AZ",     equipment: "Dry Van", mode: "FTL",        rate: "$1,928" },
  { from: "Los Angeles, CA",     to: "Salt Lake City, UT", equipment: "Dry Van", mode: "FTL",  rate: "$3,800" },
  { from: "Santa Fe Springs, CA", to: "Dallas, TX",  equipment: "Dry Van", mode: "FTL",        rate: "$4,800" },
  { from: "Garden Grove, CA",    to: "Dayton, TX",   equipment: "Dry Van", mode: "Multi-Stop", rate: "$5,100" },
  { from: "Ogden, UT",           to: "Ontario, CA",  equipment: "Dry Van", mode: "LTL",        rate: "$1,000" },
];
