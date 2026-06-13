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
  { from: "Los Angeles, CA", to: "Phoenix, AZ",       equipment: "Dry Van",    mode: "FTL", rate: "$1,850" },
  { from: "Dallas, TX",      to: "Memphis, TN",       equipment: "Reefer",     mode: "FTL", rate: "$2,300" },
  { from: "Atlanta, GA",     to: "Miami, FL",         equipment: "Flatbed",    mode: "FTL", rate: "$1,650" },
  { from: "Chicago, IL",     to: "Detroit, MI",       equipment: "Power Only", mode: "FTL", rate: "$900"   },
  { from: "Houston, TX",     to: "New Orleans, LA",   equipment: "Box",        mode: "LTL", rate: "$780"   },
];
