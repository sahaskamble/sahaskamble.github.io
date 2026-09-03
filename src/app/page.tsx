const NAV_LINKS = [
  { label: "work", href: "#projects" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

const RECEIPT_ITEMS = [
  { item: "Espresso", qty: 2, amount: "140.00" },
  { item: "Cappuccino", qty: 1, amount: "120.00" },
  { item: "Sandwich", qty: 1, amount: "160.00" },
  { item: "Brownie", qty: 1, amount: "90.00" },
  { item: "Water Bottle", qty: 1, amount: "40.00" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* ── NAV ── */}
      <nav className="flex items-center justify-between border-b border-border px-6 py-4 md:px-12 lg:px-16">
        <div className="font-body text-sm text-ink">
          <span className="font-semibold">sahas kamble</span>
          <span className="text-ink-dim">, systems builder</span>
        </div>
        <div className="flex gap-8 font-body text-sm text-ink-dim">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="border-b border-border">
        {/* Headline row — green bar + headline + stat + map */}
        <div className="px-6 md:px-12 lg:px-16">
          <div className="relative grid grid-cols-1 gap-4 py-10 lg:grid-cols-[1fr_1fr] lg:py-14">
            {/* Left: green bar + headline */}
            <div className="relative pl-[70px] lg:pl-[100px]">
              {/* Green vertical bar — only covers headline area */}
              <div
                className="absolute left-0 top-0 h-full w-[60px] bg-live lg:w-[80px]"
                aria-hidden="true"
              />
              <h1 className="font-display text-6xl font-bold leading-[0.88] tracking-tight text-ink sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem]">
                I build the
                <br />
                backend systems
                <br />
                most portfolios
                <br />
                never show.
              </h1>
            </div>

            {/* Right: stat + route-map decoration */}
            <div className="flex flex-col items-end">
              {/* 99.82% stat */}
              <div className="text-right">
                <span className="font-display text-6xl font-bold text-live sm:text-7xl lg:text-8xl tabular">
                  99.82%
                </span>
                <div className="mt-1 font-mono text-xs text-ink-dim">
                  uptime, 30 days
                </div>
              </div>

              {/* Static route-map decoration — large compass/route illustration */}
              <div className="mt-4 hidden w-full lg:block" aria-hidden="true">
                <svg
                  className="h-auto w-full"
                  viewBox="0 0 440 360"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="presentation"
                >
                  <title>Decorative route map</title>

                  {/* Outer circle */}
                  <circle
                    cx="220"
                    cy="180"
                    r="160"
                    stroke="#171a17"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                  {/* Middle circle */}
                  <circle
                    cx="220"
                    cy="180"
                    r="110"
                    stroke="#171a17"
                    strokeWidth="0.5"
                  />
                  {/* Inner circle */}
                  <circle
                    cx="220"
                    cy="180"
                    r="55"
                    stroke="#171a17"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                  />

                  {/* Cross radii — full span */}
                  <line
                    x1="220"
                    y1="20"
                    x2="220"
                    y2="340"
                    stroke="#171a17"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                  <line
                    x1="60"
                    y1="180"
                    x2="380"
                    y2="180"
                    stroke="#171a17"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />

                  {/* Diagonal radii */}
                  <line
                    x1="106"
                    y1="66"
                    x2="334"
                    y2="294"
                    stroke="#171a17"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                  <line
                    x1="334"
                    y1="66"
                    x2="106"
                    y2="294"
                    stroke="#171a17"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />

                  {/* Route polyline — thick, solid */}
                  <polyline
                    points="60,280 120,280 155,150 250,150 280,180 400,180"
                    stroke="#171a17"
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Route endpoints */}
                  <circle cx="60" cy="280" r="5" fill="#171a17" />
                  <circle cx="400" cy="180" r="5" fill="#171a17" />
                  {/* Green center dot */}
                  <circle cx="220" cy="180" r="4" fill="#157f3a" />

                  {/* Crosshair — top right */}
                  <line
                    x1="380"
                    y1="50"
                    x2="380"
                    y2="80"
                    stroke="#171a17"
                    strokeWidth="0.7"
                  />
                  <line
                    x1="365"
                    y1="65"
                    x2="395"
                    y2="65"
                    stroke="#171a17"
                    strokeWidth="0.7"
                  />

                  {/* Coordinate readout */}
                  <text
                    x="310"
                    y="330"
                    fill="#3a3f3a"
                    fontSize="10"
                    fontFamily="monospace"
                  >
                    18.5204° N
                  </text>
                  <text
                    x="310"
                    y="344"
                    fill="#3a3f3a"
                    fontSize="10"
                    fontFamily="monospace"
                  >
                    73.8567° E
                  </text>

                  {/* Annotation text */}
                  <text
                    x="310"
                    y="48"
                    fill="#3a3f3a"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    ETA 18:42
                  </text>
                  <text
                    x="310"
                    y="108"
                    fill="#3a3f3a"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    route optimized
                  </text>
                  <text
                    x="310"
                    y="122"
                    fill="#3a3f3a"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    reliability first
                  </text>
                  <text
                    x="310"
                    y="136"
                    fill="#3a3f3a"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    always on
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Paragraph + spec strip — full width */}
        <div className="border-t border-border px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-8 py-6 lg:grid-cols-2">
            <p className="max-w-lg text-sm leading-relaxed text-ink-dim">
              I build operational software that runs real workflows—from
              point-of-sale and fleet tracking to café management and
              cross-platform apps. Built for reliability, audited for scale.
            </p>
            <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 font-mono text-xs">
              <span className="text-ink-dim">stack</span>
              <span className="text-ink">
                TypeScript · React/Next.js · NestJS
              </span>
              <span className="text-ink-dim">language</span>
              <span className="text-ink">TypeScript</span>
              <span className="text-ink-dim">frameworks</span>
              <span className="text-ink">React Native · Flutter</span>
              <span className="text-ink-dim">platforms</span>
              <span className="text-ink">Web · iOS · Android</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section id="projects" className="px-6 md:px-12 lg:px-16">
        <div className="py-8 lg:py-10">
          <h2 className="font-display text-lg font-bold text-ink">
            selected work
          </h2>
          <div className="mt-3 h-px w-full bg-border-strong" />
        </div>

        <div className="grid grid-cols-1 gap-5 pb-20 sm:grid-cols-2 lg:grid-cols-4">
          {/* ── 01: RECEIPT CARD — Café POS & Billing ── */}
          <div className="receipt-zigzag flex flex-col border border-border-strong">
            <div className="px-5 pt-5 pb-3">
              <div className="font-mono text-[10px] text-live">01</div>
              <div className="mt-1 font-display text-xl font-bold leading-tight text-ink">
                Café POS & Billing
              </div>
              <div className="mt-1 text-xs text-ink-dim">
                Fast billing. Smart inventory.
                <br />
                Built for real cafés.
              </div>
            </div>
            {/* Receipt body — monospace, dotted separators */}
            <div className="flex-1 border-t border-dashed border-border-strong px-5 py-3 font-mono">
              {/* Header row */}
              <div className="mb-1 flex justify-between border-b border-border pb-1 text-[9px] text-ink-dim">
                <span>ITEM</span>
                <span className="flex gap-6">
                  <span>QTY</span>
                  <span className="w-16 text-right">AMOUNT</span>
                </span>
              </div>
              {/* Items with dotted separator */}
              {RECEIPT_ITEMS.map((row, i) => (
                <div key={row.item}>
                  <div className="flex justify-between py-1 text-[11px] text-ink">
                    <span>{row.item}</span>
                    <span className="flex gap-6 tabular">
                      <span className="text-center">{row.qty}</span>
                      <span className="w-16 text-right">{row.amount}</span>
                    </span>
                  </div>
                  {i < RECEIPT_ITEMS.length - 1 && (
                    <div className="border-b border-dotted border-border" />
                  )}
                </div>
              ))}
              {/* Totals */}
              <div className="mt-2 space-y-0.5 border-t border-border pt-2 text-[10px]">
                <div className="flex justify-between text-ink-dim">
                  <span>SUBTOTAL</span>
                  <span className="tabular">550.00</span>
                </div>
                <div className="flex justify-between text-ink-dim">
                  <span>TAX (5%)</span>
                  <span className="tabular">27.50</span>
                </div>
                <div className="flex justify-between border-t border-border-strong pt-1 text-[11px] font-bold text-ink">
                  <span>TOTAL</span>
                  <span className="tabular">577.50</span>
                </div>
              </div>
              <div className="mt-2 flex justify-between border-t border-dotted border-border pt-2 text-[10px] text-ink-dim">
                <span>PAYMENT</span>
                <span className="text-ink">Card</span>
              </div>
            </div>
          </div>

          {/* ── 02: ROUTE CARD — Logistics & GPS Tracking ── */}
          <div className="flex flex-col border border-border-strong">
            <div className="px-5 pt-5 pb-3">
              <div className="font-mono text-[10px] text-live">02</div>
              <div className="mt-1 font-display text-xl font-bold leading-tight text-ink">
                Logistics & GPS Tracking
              </div>
              <div className="mt-1 text-xs text-ink-dim">
                Live tracking, optimized routes,
                <br />
                and delivery performance.
              </div>
            </div>
            {/* Route map */}
            <div className="relative mx-5 mb-3 border border-border">
              <svg
                className="h-32 w-full"
                viewBox="0 0 300 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Route from Mumbai to Pune"
              >
                <title>Route polyline</title>
                {/* Grid lines */}
                <line
                  x1="0"
                  y1="27"
                  x2="300"
                  y2="27"
                  stroke="#171a17"
                  strokeWidth="0.3"
                  strokeDasharray="2 4"
                />
                <line
                  x1="0"
                  y1="55"
                  x2="300"
                  y2="55"
                  stroke="#171a17"
                  strokeWidth="0.3"
                  strokeDasharray="2 4"
                />
                <line
                  x1="0"
                  y1="82"
                  x2="300"
                  y2="82"
                  stroke="#171a17"
                  strokeWidth="0.3"
                  strokeDasharray="2 4"
                />
                <line
                  x1="50"
                  y1="0"
                  x2="50"
                  y2="110"
                  stroke="#171a17"
                  strokeWidth="0.3"
                  strokeDasharray="2 4"
                />
                <line
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="110"
                  stroke="#171a17"
                  strokeWidth="0.3"
                  strokeDasharray="2 4"
                />
                <line
                  x1="150"
                  y1="0"
                  x2="150"
                  y2="110"
                  stroke="#171a17"
                  strokeWidth="0.3"
                  strokeDasharray="2 4"
                />
                <line
                  x1="200"
                  y1="0"
                  x2="200"
                  y2="110"
                  stroke="#171a17"
                  strokeWidth="0.3"
                  strokeDasharray="2 4"
                />
                <line
                  x1="250"
                  y1="0"
                  x2="250"
                  y2="110"
                  stroke="#171a17"
                  strokeWidth="0.3"
                  strokeDasharray="2 4"
                />
                {/* Route polyline */}
                <polyline
                  points="20,78 60,78 80,30 130,30 150,55 200,55 220,78 280,78"
                  stroke="#171a17"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Green dot */}
                <circle className="route-dot" r="5" fill="#157f3a" />
              </svg>
              {/* Route info below map */}
              <div className="flex items-end justify-between border-t border-border px-4 py-2">
                <div>
                  <div className="font-mono text-[9px] text-ink-dim">
                    ROUTE STRIP
                  </div>
                  <div className="font-mono text-xs text-ink">
                    Mumbai → Pune
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[9px] text-ink-dim">ETA</div>
                  <div className="tabular font-mono text-lg font-bold text-ink">
                    18:42
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 03: TICKET CARD — Gaming Café Sessions ── */}
          <div className="ticket-notch flex flex-col border border-border-strong">
            <div className="px-5 pt-5 pb-3">
              <div className="font-mono text-[10px] text-live">03</div>
              <div className="mt-1 font-display text-xl font-bold leading-tight text-ink">
                Gaming Café Sessions
              </div>
              <div className="mt-1 text-xs text-ink-dim">
                Session billing, prepaid packs,
                <br />
                and real-time usage.
              </div>
            </div>
            {/* Ticket stub — dashed border, structured grid */}
            <div className="mx-5 mb-3 border-2 border-dashed border-border-strong">
              <div className="grid grid-cols-2">
                <div className="border-r border-dashed border-border-strong px-4 py-3">
                  <div className="font-mono text-[9px] text-ink-dim">
                    STATION
                  </div>
                  <div className="mt-0.5 font-mono text-xs font-bold text-ink">
                    PC-07
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="font-mono text-[9px] text-ink-dim">
                    DURATION
                  </div>
                  <div className="mt-0.5 font-mono text-xs font-bold text-ink tabular">
                    02:14:38
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 border-t border-dashed border-border-strong">
                <div className="border-r border-dashed border-border-strong px-4 py-3">
                  <div className="font-mono text-[9px] text-ink-dim">USER</div>
                  <div className="mt-0.5 font-mono text-xs font-bold text-ink">
                    guest_2841
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="font-mono text-[9px] text-ink-dim">
                    STARTED
                  </div>
                  <div className="mt-0.5 font-mono text-[11px] text-ink tabular">
                    2025-05-20
                  </div>
                  <div className="font-mono text-[11px] text-ink tabular">
                    16:18:12
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 border-t border-dashed border-border-strong">
                <div className="border-r border-dashed border-border-strong px-4 py-3">
                  <div className="font-mono text-[9px] text-ink-dim">RATE</div>
                  <div className="mt-0.5 font-mono text-xs text-ink tabular">
                    ₹ 60.00 / hr
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="font-mono text-[9px] text-ink-dim">STATE</div>
                  <div className="mt-0.5 font-mono text-sm font-bold text-live">
                    live
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 04: SPEC CARD — Cross-Platform App ── */}
          <div className="flex flex-col border border-border-strong">
            <div className="px-5 pt-5 pb-3">
              <div className="font-mono text-[10px] text-live">04</div>
              <div className="mt-1 font-display text-xl font-bold leading-tight text-ink">
                Cross-Platform App
              </div>
              <div className="mt-1 text-xs text-ink-dim">
                Unified client app for field ops
                <br />
                on iOS and Android.
              </div>
            </div>
            {/* Spec rows */}
            <div className="mx-5 mb-3 border border-border">
              <div className="flex border-b border-border px-4 py-2">
                <span className="w-1/3 font-mono text-[9px] text-ink-dim">
                  project
                </span>
                <span className="text-xs text-ink">unified client</span>
              </div>
              <div className="flex border-b border-border px-4 py-2">
                <span className="w-1/3 font-mono text-[9px] text-ink-dim">
                  build
                </span>
                <span className="text-xs text-ink">1.8.4</span>
              </div>
              <div className="flex border-b border-border px-4 py-2">
                <span className="w-1/3 font-mono text-[9px] text-ink-dim">
                  targets
                </span>
                <span className="text-xs text-ink">iOS · Android</span>
              </div>
              <div className="flex border-b border-border px-4 py-2">
                <span className="w-1/3 font-mono text-[9px] text-ink-dim">
                  mode
                </span>
                <span className="text-xs text-ink">shipped</span>
              </div>
              <div className="flex border-b border-border px-4 py-2">
                <span className="w-1/3 font-mono text-[9px] text-ink-dim">
                  framework
                </span>
                <span className="text-xs text-ink">React Native</span>
              </div>
              <div className="flex border-b border-border px-4 py-2">
                <span className="w-1/3 font-mono text-[9px] text-ink-dim">
                  language
                </span>
                <span className="text-xs text-ink">TypeScript</span>
              </div>
              <div className="flex border-b border-border px-4 py-2">
                <span className="w-1/3 font-mono text-[9px] text-ink-dim">
                  state
                </span>
                <span className="text-xs text-ink">production</span>
              </div>
              <div className="flex border-b border-border px-4 py-2">
                <span className="w-1/3 font-mono text-[9px] text-ink-dim">
                  api
                </span>
                <span className="text-xs text-ink">REST · GraphQL</span>
              </div>
              <div className="flex px-4 py-2">
                <span className="w-1/3 font-mono text-[9px] text-ink-dim">
                  storage
                </span>
                <span className="text-xs text-ink">SQLite · MMKV</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATUS LEGEND — bottom right ── */}
      <div className="fixed bottom-6 right-6 flex items-center gap-5 font-mono text-[11px] text-ink-dim md:bottom-8 md:right-8 lg:bottom-10 lg:right-10">
        <span className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-live" />
          Live
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-hold" />
          Hold
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-halt" />
          Halt
        </span>
      </div>
    </div>
  );
}
