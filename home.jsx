import { useState } from "react";

const sections = [
  {
    id: "vision",
    title: "Vision",
    icon: "◉",
    content: null, // custom render
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: "⬡",
    content: null,
  },
  {
    id: "flows",
    title: "User Flows",
    icon: "↯",
    content: null,
  },
  {
    id: "hil",
    title: "Human-in-Loop",
    icon: "⟐",
    content: null,
  },
  {
    id: "preview",
    title: "Preview System",
    icon: "◫",
    content: null,
  },
  {
    id: "payments",
    title: "Payments (UPI)",
    icon: "₹",
    content: null,
  },
  {
    id: "expansion",
    title: "Platform Expansion",
    icon: "∞",
    content: null,
  },
  {
    id: "pilot",
    title: "Pilot Plan",
    icon: "▸",
    content: null,
  },
];

const ArchDiagram = () => (
  <div style={{ padding: "24px 0" }}>
    <svg viewBox="0 0 800 520" style={{ width: "100%", height: "auto" }}>
      <defs>
        <linearGradient id="gUser" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
        <linearGradient id="gOrch" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="gAgent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="gInfra" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id="gHIL" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#e11d48" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Layer labels */}
      <text x="16" y="46" fill="#9ca3af" fontSize="11" fontFamily="monospace" fontWeight="600">CHANNEL LAYER</text>
      <text x="16" y="166" fill="#9ca3af" fontSize="11" fontFamily="monospace" fontWeight="600">ORCHESTRATION</text>
      <text x="16" y="286" fill="#9ca3af" fontSize="11" fontFamily="monospace" fontWeight="600">AGENT LAYER</text>
      <text x="16" y="426" fill="#9ca3af" fontSize="11" fontFamily="monospace" fontWeight="600">INFRASTRUCTURE</text>

      {/* Channel Layer */}
      <rect x="160" y="20" width="140" height="56" rx="10" fill="url(#gUser)" filter="url(#shadow)" />
      <text x="230" y="42" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">TELEGRAM</text>
      <text x="230" y="58" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9">Bot API + Mini App</text>

      <rect x="330" y="20" width="140" height="56" rx="10" fill="url(#gUser)" filter="url(#shadow)" />
      <text x="400" y="42" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">WHATSAPP</text>
      <text x="400" y="58" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9">Business API + Flows</text>

      <rect x="500" y="20" width="140" height="56" rx="10" fill="url(#gUser)" filter="url(#shadow)" />
      <text x="570" y="42" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">WEB DASHBOARD</text>
      <text x="570" y="58" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9">Fallback + Admin</text>

      {/* Arrows down */}
      <line x1="400" y1="76" x2="400" y2="110" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3" />
      <polygon points="396,108 404,108 400,116" fill="#6b7280" />

      {/* Orchestration */}
      <rect x="200" y="118" width="400" height="72" rx="12" fill="url(#gOrch)" filter="url(#shadow)" />
      <text x="400" y="143" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">KAM+AI ORCHESTRATOR</text>
      <text x="400" y="162" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="10">Intent Router • Session Manager • Context Engine • Queue</text>
      <text x="400" y="178" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">Stateful conversation management + tool dispatch</text>

      {/* HIL branch */}
      <rect x="640" y="128" width="140" height="52" rx="10" fill="url(#gHIL)" filter="url(#shadow)" />
      <text x="710" y="150" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">HIL QUEUE</text>
      <text x="710" y="165" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9">Escalation → Human</text>
      <line x1="600" y1="154" x2="640" y2="154" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4,3" />
      <polygon points="636,150 636,158 644,154" fill="#f43f5e" />

      {/* Arrows to agents */}
      <line x1="300" y1="190" x2="180" y2="240" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3" />
      <line x1="400" y1="190" x2="400" y2="240" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3" />
      <line x1="500" y1="190" x2="580" y2="240" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3" />

      {/* Agent Layer */}
      <rect x="100" y="242" width="160" height="72" rx="10" fill="url(#gAgent)" filter="url(#shadow)" />
      <text x="180" y="266" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">WEBSITE AGENT</text>
      <text x="180" y="282" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9">Generate • Edit • Publish</text>
      <text x="180" y="296" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Templates + AI Layout</text>

      <rect x="310" y="242" width="160" height="72" rx="10" fill="url(#gAgent)" filter="url(#shadow)" opacity="0.6" />
      <text x="390" y="266" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">CONTENT AGENT</text>
      <text x="390" y="282" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9">Copy • Images • SEO</text>
      <text x="390" y="296" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Future expansion</text>

      <rect x="520" y="242" width="160" height="72" rx="10" fill="url(#gAgent)" filter="url(#shadow)" opacity="0.6" />
      <text x="600" y="266" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">PAYMENTS AGENT</text>
      <text x="600" y="282" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9">UPI • Invoicing • Subs</text>
      <text x="600" y="296" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Razorpay / PhonePe</text>

      {/* Arrows to infra */}
      <line x1="180" y1="314" x2="180" y2="370" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="390" y1="314" x2="390" y2="370" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="600" y1="314" x2="600" y2="370" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />

      {/* Infrastructure */}
      <rect x="80" y="372" width="140" height="48" rx="8" fill="url(#gInfra)" filter="url(#shadow)" />
      <text x="150" y="393" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">HOSTING</text>
      <text x="150" y="407" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">Cloudflare Pages/R2</text>

      <rect x="240" y="372" width="140" height="48" rx="8" fill="url(#gInfra)" filter="url(#shadow)" />
      <text x="310" y="393" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">DATABASE</text>
      <text x="310" y="407" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">Supabase / Postgres</text>

      <rect x="400" y="372" width="140" height="48" rx="8" fill="url(#gInfra)" filter="url(#shadow)" />
      <text x="470" y="393" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">AI ENGINE</text>
      <text x="470" y="407" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">Claude API / LLM</text>

      <rect x="560" y="372" width="140" height="48" rx="8" fill="url(#gInfra)" filter="url(#shadow)" />
      <text x="630" y="393" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">PAYMENTS</text>
      <text x="630" y="407" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">Razorpay UPI</text>

      {/* Preview callout */}
      <rect x="80" y="460" width="620" height="40" rx="8" fill="#1e1b4b" filter="url(#shadow)" opacity="0.9" />
      <text x="390" y="484" textAnchor="middle" fill="#c4b5fd" fontSize="10" fontWeight="600">
        PREVIEW SYSTEM: Telegram Mini App renders live preview → User approves → Auto-publish to custom domain
      </text>
    </svg>
  </div>
);

const FlowDiagram = () => (
  <div style={{ padding: "16px 0" }}>
    <svg viewBox="0 0 760 300" style={{ width: "100%", height: "auto" }}>
      <defs>
        <linearGradient id="fgGreen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
      </defs>

      {/* Steps */}
      {[
        { x: 20, y: 20, w: 130, label: "1. ONBOARD", sub: "\"I'm a dentist in\nKarnal, build my site\"", color: "#22c55e" },
        { x: 170, y: 20, w: 130, label: "2. GATHER", sub: "Bot asks: services,\nhours, photos, logo", color: "#f97316" },
        { x: 320, y: 20, w: 130, label: "3. GENERATE", sub: "AI builds site from\ntemplate + content", color: "#8b5cf6" },
        { x: 470, y: 20, w: 130, label: "4. PREVIEW", sub: "Mini App shows live\nsite inside Telegram", color: "#06b6d4" },
        { x: 620, y: 20, w: 120, label: "5. PUBLISH", sub: "One tap → live on\ncustom domain", color: "#f43f5e" },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={s.y} width={s.w} height={80} rx="8" fill={s.color} opacity="0.15" stroke={s.color} strokeWidth="1.5" />
          <text x={s.x + s.w / 2} y={s.y + 22} textAnchor="middle" fill={s.color} fontSize="11" fontWeight="800">{s.label}</text>
          {s.sub.split("\n").map((line, j) => (
            <text key={j} x={s.x + s.w / 2} y={s.y + 42 + j * 16} textAnchor="middle" fill="#9ca3af" fontSize="9">{line}</text>
          ))}
          {i < 4 && <text x={s.x + s.w + 10} y={s.y + 44} fill="#6b7280" fontSize="16">→</text>}
        </g>
      ))}

      {/* Maintenance flow */}
      <text x="20" y="140" fill="#d1d5db" fontSize="12" fontWeight="700">ONGOING MAINTENANCE</text>
      {[
        { x: 20, y: 155, w: 170, label: "\"Add new service: teeth whitening\"", color: "#22c55e" },
        { x: 210, y: 155, w: 170, label: "AI updates site section + preview", color: "#8b5cf6" },
        { x: 400, y: 155, w: 170, label: "\"Change phone number to 98xxx\"", color: "#22c55e" },
        { x: 590, y: 155, w: 150, label: "Instant update + confirm", color: "#06b6d4" },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={s.y} width={s.w} height={40} rx="6" fill={s.color} opacity="0.1" stroke={s.color} strokeWidth="1" />
          <text x={s.x + s.w / 2} y={s.y + 24} textAnchor="middle" fill="#d1d5db" fontSize="9">{s.label}</text>
        </g>
      ))}

      {/* HIL flow */}
      <text x="20" y="234" fill="#f43f5e" fontSize="12" fontWeight="700">HIL ESCALATION</text>
      {[
        { x: 20, y: 248, w: 180, label: "\"I need a custom logo designed\"", color: "#f43f5e" },
        { x: 220, y: 248, w: 160, label: "Agent detects: beyond AI", color: "#f97316" },
        { x: 400, y: 248, w: 160, label: "Routes to human designer", color: "#f43f5e" },
        { x: 580, y: 248, w: 160, label: "Human delivers via same chat", color: "#22c55e" },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={s.y} width={s.w} height={40} rx="6" fill={s.color} opacity="0.1" stroke={s.color} strokeWidth="1" strokeDasharray={i >= 2 ? "4,3" : "none"} />
          <text x={s.x + s.w / 2} y={s.y + 24} textAnchor="middle" fill="#d1d5db" fontSize="9">{s.label}</text>
        </g>
      ))}
    </svg>
  </div>
);

const VisionSection = () => (
  <div>
    <div style={{
      background: "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(6,182,212,0.08))",
      borderRadius: "12px",
      padding: "24px",
      border: "1px solid rgba(139,92,246,0.2)",
      marginBottom: "20px"
    }}>
      <p style={{ color: "#e2e8f0", fontSize: "18px", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
        "Every small business deserves a professional website. Most can't afford one. Kam+AI lets them build, maintain, and pay for one — entirely through a chat they already use every day."
      </p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
      {[
        { title: "The Problem", desc: "~63M SMBs in India. Most have no website. Existing builders (Wix, WordPress) are too complex. Agencies are too expensive (₹15-50K+). Business happens on WhatsApp — the website should too." },
        { title: "The Insight", desc: "Small business owners don't want to 'build websites'. They want customers. A conversational agent that handles everything — from setup to updates to payments — in the messaging app they already live in." },
        { title: "Why Telegram First", desc: "Bot API is powerful and free. Mini Apps allow rich in-chat previews. No approval gatekeeping like WhatsApp Business API. Perfect for a pilot. WhatsApp is Phase 2 for scale." },
        { title: "The Moat", desc: "Not the website builder — it's the conversational relationship. Once a business owner trusts Kam+AI for their website, expanding to invoicing, social media, booking, inventory is natural." },
      ].map((item, i) => (
        <div key={i} style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: "10px",
          padding: "16px",
          border: "1px solid rgba(255,255,255,0.06)"
        }}>
          <h4 style={{ color: "#8b5cf6", fontSize: "13px", margin: "0 0 8px", fontWeight: 700, letterSpacing: "0.5px", textTransform: "uppercase" }}>{item.title}</h4>
          <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const HILSection = () => (
  <div>
    <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
      The Human-in-the-Loop system is the secret weapon. It ensures users never hit a dead end, while keeping the AI handling 80%+ of requests autonomously.
    </p>
    <div style={{ display: "grid", gap: "12px" }}>
      {[
        { trigger: "Custom logo / graphic design", how: "Route to freelance designer pool. User pays via UPI in-chat. Designer uploads assets, AI integrates automatically.", auto: "10%", human: "90%" },
        { trigger: "Domain purchase + DNS setup", how: "AI walks user through domain selection. Purchase via UPI. DNS config done by backend automation, with human fallback for edge cases.", auto: "70%", human: "30%" },
        { trigger: "Complex layout requests", how: "If AI can't match the request after 2 attempts, escalate to a human web designer who adjusts the template. AI learns from the fix.", auto: "60%", human: "40%" },
        { trigger: "Content writing (long-form)", how: "AI generates first draft. If user is unsatisfied after revision, human copywriter refines. Delivered back through same chat.", auto: "75%", human: "25%" },
        { trigger: "Legal / compliance pages", how: "Always human-reviewed. AI generates template privacy policy/terms, human legal advisor validates before publish.", auto: "20%", human: "80%" },
      ].map((item, i) => (
        <div key={i} style={{
          background: "rgba(244,63,94,0.05)",
          borderRadius: "10px",
          padding: "14px 16px",
          border: "1px solid rgba(244,63,94,0.15)",
          display: "grid",
          gridTemplateColumns: "200px 1fr 80px",
          gap: "12px",
          alignItems: "start"
        }}>
          <div>
            <span style={{ color: "#f43f5e", fontSize: "12px", fontWeight: 700 }}>{item.trigger}</span>
          </div>
          <div>
            <span style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.5 }}>{item.how}</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "10px", color: "#22c55e" }}>AI: {item.auto}</div>
            <div style={{ fontSize: "10px", color: "#f43f5e" }}>Human: {item.human}</div>
          </div>
        </div>
      ))}
    </div>
    <div style={{
      marginTop: "20px",
      background: "rgba(249,115,22,0.08)",
      borderRadius: "10px",
      padding: "16px",
      border: "1px solid rgba(249,115,22,0.2)"
    }}>
      <h4 style={{ color: "#f97316", fontSize: "13px", margin: "0 0 8px", fontWeight: 700 }}>HIL QUEUE ARCHITECTURE</h4>
      <p style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.6, margin: 0 }}>
        Every escalation creates a ticket with: user context, conversation history, current site state, and specific request. Human operators see a dashboard (web-based, not Telegram) with priority queue. They can respond through the same Telegram thread — the user never leaves the chat. SLA: simple requests {"<"}4hrs, design requests {"<"}24hrs. The orchestrator tracks which tasks were escalated and feeds this back to improve the AI over time.
      </p>
    </div>
  </div>
);

const PreviewSection = () => (
  <div>
    <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>
      Preview is the magic moment — the user sees their real website inside Telegram before it goes live.
    </p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
      <div style={{
        background: "rgba(6,182,212,0.06)",
        borderRadius: "10px",
        padding: "16px",
        border: "1px solid rgba(6,182,212,0.15)"
      }}>
        <h4 style={{ color: "#06b6d4", fontSize: "13px", margin: "0 0 10px", fontWeight: 700 }}>TELEGRAM MINI APP</h4>
        <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.7 }}>
          <p style={{ margin: "0 0 8px" }}>Telegram Mini Apps are web apps that open inside Telegram as a modal. Perfect for preview.</p>
          <p style={{ margin: "0 0 8px" }}>• User says "show me my site" → Bot sends Mini App button</p>
          <p style={{ margin: "0 0 8px" }}>• Mini App loads the actual generated site in an iframe</p>
          <p style={{ margin: "0 0 8px" }}>• Overlay controls: "Approve", "Edit section", "Change colors"</p>
          <p style={{ margin: 0 }}>• Tap "Publish" → site goes live instantly</p>
        </div>
      </div>
      <div style={{
        background: "rgba(139,92,246,0.06)",
        borderRadius: "10px",
        padding: "16px",
        border: "1px solid rgba(139,92,246,0.15)"
      }}>
        <h4 style={{ color: "#8b5cf6", fontSize: "13px", margin: "0 0 10px", fontWeight: 700 }}>PREVIEW STATES</h4>
        <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.7 }}>
          <p style={{ margin: "0 0 8px" }}><span style={{ color: "#fbbf24" }}>● Draft</span> — AI-generated, not yet reviewed</p>
          <p style={{ margin: "0 0 8px" }}><span style={{ color: "#06b6d4" }}>● Preview</span> — User is actively reviewing in Mini App</p>
          <p style={{ margin: "0 0 8px" }}><span style={{ color: "#22c55e" }}>● Approved</span> — User confirmed, ready to publish</p>
          <p style={{ margin: "0 0 8px" }}><span style={{ color: "#8b5cf6" }}>● Published</span> — Live on user's domain</p>
          <p style={{ margin: 0 }}><span style={{ color: "#f43f5e" }}>● Revision</span> — User requested changes, back to draft</p>
        </div>
      </div>
    </div>
    <div style={{
      marginTop: "16px",
      background: "rgba(255,255,255,0.03)",
      borderRadius: "10px",
      padding: "16px",
      border: "1px solid rgba(255,255,255,0.06)"
    }}>
      <h4 style={{ color: "#d1d5db", fontSize: "13px", margin: "0 0 8px", fontWeight: 700 }}>FOR WHATSAPP (Phase 2)</h4>
      <p style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.6, margin: 0 }}>
        WhatsApp doesn't support Mini Apps natively. Solution: send a secure, short-lived preview link (e.g., preview.kamai.in/abc123) that opens in the phone's browser. Same approval flow, just opens externally. WhatsApp Flows can handle simple approve/reject inline.
      </p>
    </div>
  </div>
);

const PaymentsSection = () => (
  <div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
      <div style={{
        background: "rgba(34,197,94,0.06)",
        borderRadius: "10px",
        padding: "16px",
        border: "1px solid rgba(34,197,94,0.15)"
      }}>
        <h4 style={{ color: "#22c55e", fontSize: "13px", margin: "0 0 10px", fontWeight: 700 }}>SUBSCRIPTION MODEL</h4>
        <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.8 }}>
          <p style={{ margin: "0 0 4px" }}><strong style={{ color: "#d1d5db" }}>Free Tier:</strong> kamai.in/businessname subdomain, 3 pages, basic template</p>
          <p style={{ margin: "0 0 4px" }}><strong style={{ color: "#d1d5db" }}>Starter ₹199/mo:</strong> Custom domain, 10 pages, contact forms, analytics</p>
          <p style={{ margin: "0 0 4px" }}><strong style={{ color: "#d1d5db" }}>Pro ₹499/mo:</strong> Unlimited pages, SEO, blog, WhatsApp widget, priority HIL</p>
          <p style={{ margin: 0 }}><strong style={{ color: "#d1d5db" }}>Business ₹999/mo:</strong> E-commerce, booking, multi-language, dedicated support</p>
        </div>
      </div>
      <div style={{
        background: "rgba(249,115,22,0.06)",
        borderRadius: "10px",
        padding: "16px",
        border: "1px solid rgba(249,115,22,0.15)"
      }}>
        <h4 style={{ color: "#f97316", fontSize: "13px", margin: "0 0 10px", fontWeight: 700 }}>UPI INTEGRATION</h4>
        <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.8 }}>
          <p style={{ margin: "0 0 4px" }}><strong style={{ color: "#d1d5db" }}>Flow:</strong> User says "upgrade to Pro" → Bot generates UPI payment link via Razorpay</p>
          <p style={{ margin: "0 0 4px" }}><strong style={{ color: "#d1d5db" }}>In Telegram:</strong> Payment link opens UPI app (GPay/PhonePe/Paytm) directly</p>
          <p style={{ margin: "0 0 4px" }}><strong style={{ color: "#d1d5db" }}>Webhook:</strong> Razorpay confirms → Bot updates subscription → instant upgrade</p>
          <p style={{ margin: 0 }}><strong style={{ color: "#d1d5db" }}>Recurring:</strong> UPI AutoPay mandate for monthly subscriptions (RBI compliant)</p>
        </div>
      </div>
    </div>
    <div style={{
      background: "rgba(139,92,246,0.06)",
      borderRadius: "10px",
      padding: "16px",
      border: "1px solid rgba(139,92,246,0.15)"
    }}>
      <h4 style={{ color: "#8b5cf6", fontSize: "13px", margin: "0 0 8px", fontWeight: 700 }}>ONE-TIME PURCHASES (HIL Services)</h4>
      <p style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.6, margin: 0 }}>
        Logo design (₹500-2000), custom illustrations (₹300-1000), content writing packages (₹500-1500), domain registration (at cost + ₹99 setup). All purchased via the same in-chat UPI flow. User never leaves Telegram.
      </p>
    </div>
  </div>
);

const ExpansionSection = () => (
  <div>
    <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>
      The website builder is Agent #1. The real play is becoming the operating system for small businesses — all through chat.
    </p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
      {[
        { phase: "NOW", agents: ["Website Builder", "Domain Manager"], color: "#22c55e", status: "Pilot" },
        { phase: "6 MONTHS", agents: ["Google My Business", "Social Media Posts", "WhatsApp Catalog"], color: "#f97316", status: "Build" },
        { phase: "12 MONTHS", agents: ["Booking / Appointments", "Invoice & Billing", "Review Management"], color: "#8b5cf6", status: "Plan" },
        { phase: "18 MONTHS", agents: ["Inventory Agent", "Hiring / Job Posts", "Customer CRM"], color: "#06b6d4", status: "Vision" },
        { phase: "24 MONTHS", agents: ["Accounting / GST", "Marketing Campaigns", "Multi-location"], color: "#f43f5e", status: "Vision" },
        { phase: "PLATFORM", agents: ["3rd Party Agents", "Agent Marketplace", "API for Developers"], color: "#fbbf24", status: "Dream" },
      ].map((item, i) => (
        <div key={i} style={{
          background: `${item.color}08`,
          borderRadius: "10px",
          padding: "14px",
          border: `1px solid ${item.color}25`
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <span style={{ color: item.color, fontSize: "11px", fontWeight: 800 }}>{item.phase}</span>
            <span style={{ color: item.color, fontSize: "9px", fontWeight: 600, background: `${item.color}15`, padding: "2px 8px", borderRadius: "4px" }}>{item.status}</span>
          </div>
          {item.agents.map((a, j) => (
            <p key={j} style={{ color: "#94a3b8", fontSize: "11px", margin: "0 0 4px", lineHeight: 1.5 }}>→ {a}</p>
          ))}
        </div>
      ))}
    </div>
    <div style={{
      marginTop: "16px",
      background: "rgba(251,191,36,0.06)",
      borderRadius: "10px",
      padding: "16px",
      border: "1px solid rgba(251,191,36,0.15)"
    }}>
      <h4 style={{ color: "#fbbf24", fontSize: "13px", margin: "0 0 8px", fontWeight: 700 }}>PLATFORM ARCHITECTURE PRINCIPLE</h4>
      <p style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.6, margin: 0 }}>
        Every agent follows the same pattern: conversational interface → AI execution → preview/confirm → publish/execute → HIL fallback. The orchestrator routes to the right agent. Users say "post on Instagram" just like they say "update my website" — same chat, same trust, new capability. Build the orchestration layer right from day one.
      </p>
    </div>
  </div>
);

const PilotSection = () => (
  <div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
      <div style={{
        background: "rgba(34,197,94,0.06)",
        borderRadius: "10px",
        padding: "16px",
        border: "1px solid rgba(34,197,94,0.15)"
      }}>
        <h4 style={{ color: "#22c55e", fontSize: "13px", margin: "0 0 10px", fontWeight: 700 }}>PILOT SCOPE (8 WEEKS)</h4>
        <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.8 }}>
          <p style={{ margin: "0 0 4px" }}><strong style={{ color: "#d1d5db" }}>Users:</strong> 20-50 small businesses in Karnal / NCR</p>
          <p style={{ margin: "0 0 4px" }}><strong style={{ color: "#d1d5db" }}>Verticals:</strong> Doctors, tutors, local shops, freelancers</p>
          <p style={{ margin: "0 0 4px" }}><strong style={{ color: "#d1d5db" }}>Channel:</strong> Telegram only (fast iteration)</p>
          <p style={{ margin: "0 0 4px" }}><strong style={{ color: "#d1d5db" }}>Features:</strong> Website gen, preview, publish, basic edits</p>
          <p style={{ margin: 0 }}><strong style={{ color: "#d1d5db" }}>Price:</strong> Free tier only (validate engagement first)</p>
        </div>
      </div>
      <div style={{
        background: "rgba(249,115,22,0.06)",
        borderRadius: "10px",
        padding: "16px",
        border: "1px solid rgba(249,115,22,0.15)"
      }}>
        <h4 style={{ color: "#f97316", fontSize: "13px", margin: "0 0 10px", fontWeight: 700 }}>PILOT METRICS</h4>
        <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.8 }}>
          <p style={{ margin: "0 0 4px" }}><strong style={{ color: "#d1d5db" }}>Activation:</strong> % who complete website within first session</p>
          <p style={{ margin: "0 0 4px" }}><strong style={{ color: "#d1d5db" }}>Quality:</strong> % who publish without HIL escalation</p>
          <p style={{ margin: "0 0 4px" }}><strong style={{ color: "#d1d5db" }}>Retention:</strong> % who make ≥1 edit in week 2-4</p>
          <p style={{ margin: "0 0 4px" }}><strong style={{ color: "#d1d5db" }}>NPS:</strong> Would you recommend to another business?</p>
          <p style={{ margin: 0 }}><strong style={{ color: "#d1d5db" }}>Conversion:</strong> % willing to pay ₹199/mo at week 6</p>
        </div>
      </div>
    </div>
    <div style={{
      background: "rgba(139,92,246,0.06)",
      borderRadius: "10px",
      padding: "16px",
      border: "1px solid rgba(139,92,246,0.15)"
    }}>
      <h4 style={{ color: "#8b5cf6", fontSize: "13px", margin: "0 0 10px", fontWeight: 700 }}>BUILD SEQUENCE (8 WEEKS)</h4>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px" }}>
        {[
          { week: "WK 1-2", tasks: "Telegram bot scaffold, template engine (3 templates), AI content generation pipeline" },
          { week: "WK 3-4", tasks: "Mini App preview, publish flow (Cloudflare Pages), subdomain routing, basic edit commands" },
          { week: "WK 5-6", tasks: "HIL queue + operator dashboard, UPI payment flow (Razorpay), custom domain setup" },
          { week: "WK 7-8", tasks: "Pilot launch, onboard 20 users, daily iteration, collect feedback, fix critical bugs" },
        ].map((item, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: "8px",
            padding: "10px",
          }}>
            <div style={{ color: "#8b5cf6", fontSize: "11px", fontWeight: 800, marginBottom: "6px" }}>{item.week}</div>
            <p style={{ color: "#94a3b8", fontSize: "10px", lineHeight: 1.6, margin: 0 }}>{item.tasks}</p>
          </div>
        ))}
      </div>
    </div>
    <div style={{
      marginTop: "16px",
      background: "rgba(6,182,212,0.06)",
      borderRadius: "10px",
      padding: "16px",
      border: "1px solid rgba(6,182,212,0.15)"
    }}>
      <h4 style={{ color: "#06b6d4", fontSize: "13px", margin: "0 0 8px", fontWeight: 700 }}>TECH STACK RECOMMENDATION</h4>
      <p style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.6, margin: 0 }}>
        <strong style={{ color: "#d1d5db" }}>Bot:</strong> Node.js + grammY (Telegram) → easily extensible to WhatsApp later &nbsp;|&nbsp;
        <strong style={{ color: "#d1d5db" }}>AI:</strong> Claude API (orchestration + content gen) &nbsp;|&nbsp;
        <strong style={{ color: "#d1d5db" }}>Sites:</strong> Static HTML on Cloudflare Pages (fast, free, global CDN) &nbsp;|&nbsp;
        <strong style={{ color: "#d1d5db" }}>DB:</strong> Supabase (Postgres + auth + realtime) &nbsp;|&nbsp;
        <strong style={{ color: "#d1d5db" }}>Payments:</strong> Razorpay UPI &nbsp;|&nbsp;
        <strong style={{ color: "#d1d5db" }}>Preview:</strong> Telegram Mini App (React) &nbsp;|&nbsp;
        <strong style={{ color: "#d1d5db" }}>HIL Dashboard:</strong> Next.js internal tool
      </p>
    </div>
  </div>
);

const sectionRenderers = {
  vision: VisionSection,
  architecture: () => (
    <div>
      <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.7, marginBottom: "8px" }}>
        Three-layer architecture: channels on top, orchestrator in the middle, specialized agents below. The orchestrator is the brain — it routes intents, manages sessions, and decides when to escalate to humans.
      </p>
      <ArchDiagram />
    </div>
  ),
  flows: () => (
    <div>
      <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.7, marginBottom: "8px" }}>
        Three core flows: initial website creation (one-time), ongoing maintenance (recurring), and HIL escalation (exception handling). All happen in the same chat thread.
      </p>
      <FlowDiagram />
    </div>
  ),
  hil: HILSection,
  preview: PreviewSection,
  payments: PaymentsSection,
  expansion: ExpansionSection,
  pilot: PilotSection,
};

export default function KamAIDesign() {
  const [active, setActive] = useState("vision");

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#e2e8f0",
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
    }}>
      {/* Header */}
      <div style={{
        padding: "32px 32px 0",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            fontSize: "16px",
            color: "white"
          }}>K</div>
          <div>
            <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 800, letterSpacing: "-0.5px" }}>
              Kam<span style={{ color: "#8b5cf6" }}>+</span>AI
            </h1>
            <p style={{ margin: 0, fontSize: "11px", color: "#6b7280", letterSpacing: "1px", textTransform: "uppercase" }}>
              Product Design Document
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex",
          gap: "4px",
          marginTop: "20px",
          overflowX: "auto",
          paddingBottom: "0",
        }}>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              style={{
                padding: "10px 14px",
                border: "none",
                borderBottom: active === s.id ? "2px solid #8b5cf6" : "2px solid transparent",
                background: "none",
                color: active === s.id ? "#e2e8f0" : "#6b7280",
                fontSize: "12px",
                fontWeight: active === s.id ? 700 : 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.15s",
                fontFamily: "inherit",
              }}
            >
              <span style={{ marginRight: "5px" }}>{s.icon}</span>
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "24px 32px 48px" }}>
        {sectionRenderers[active] && sectionRenderers[active]()}
      </div>
    </div>
  );
}
