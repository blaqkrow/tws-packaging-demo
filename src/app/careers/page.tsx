import Link from 'next/link';

const openings = [
  {
    id: 'sales-exec',
    title: 'Sales Executive',
    type: 'Full-Time',
    location: 'Singapore (West)',
    icon: '💼',
    description: 'Drive revenue growth by developing and maintaining relationships with B2B clients across logistics, manufacturing, and retail sectors.',
    responsibilities: [
      'Identify and pursue new business opportunities in the packaging industry',
      'Manage and grow existing client accounts to meet monthly sales targets',
      'Conduct product presentations and on-site demonstrations for prospective clients',
      'Prepare quotations, negotiate pricing, and close deals',
      'Collaborate with the operations team to ensure timely order fulfilment',
      'Attend industry trade shows and networking events',
    ],
    requirements: [
      'Minimum 1–2 years of B2B sales experience (packaging or industrial supplies preferred)',
      'Strong communication and relationship-building skills',
      'Self-motivated with a results-driven mindset',
      'Valid Class 3 driving licence preferred',
      'Comfortable working in an industrial/warehouse environment',
    ],
  },
  {
    id: 'sales-coord',
    title: 'Sales Coordinator',
    type: 'Full-Time',
    location: 'Singapore (West)',
    icon: '📋',
    description: 'Support the sales team with order processing, client communication, and logistics coordination to ensure smooth day-to-day operations.',
    responsibilities: [
      'Process and manage customer orders from receipt to delivery',
      'Coordinate with warehouse and logistics teams for timely dispatch',
      'Handle enquiries via phone, email, and WhatsApp',
      'Prepare sales reports, delivery schedules, and inventory updates',
      'Maintain accurate records in the CRM system',
      'Assist with invoicing and accounts receivable follow-ups',
    ],
    requirements: [
      'Diploma or above in Business Administration or related field',
      'Minimum 1 year of experience in sales support or administration',
      'Proficiency in Microsoft Office (Excel, Word, Outlook)',
      'Detail-oriented with strong organisational skills',
      'Able to multitask and work in a fast-paced environment',
      'Team player with a positive attitude',
    ],
  },
  {
    id: 'warehouse-asst',
    title: 'Warehouse Assistant',
    type: 'Full-Time',
    location: 'Singapore (West)',
    icon: '📦',
    description: 'Support daily warehouse operations including receiving, picking, packing, and dispatching of packaging materials.',
    responsibilities: [
      'Receive and verify incoming stock against delivery orders',
      'Pick and pack orders accurately for dispatch',
      'Operate forklifts and pallet jacks safely',
      'Maintain cleanliness and organisation of the warehouse',
      'Conduct regular stock counts and update inventory records',
      'Load and unload delivery vehicles',
    ],
    requirements: [
      'Minimum N/O Level or equivalent',
      'Prior warehouse or logistics experience preferred',
      'Valid forklift licence is an advantage',
      'Physically fit and able to lift heavy items',
      'Dependable and punctual',
    ],
  },
  {
    id: 'delivery-driver',
    title: 'Delivery Driver',
    type: 'Full-Time',
    location: 'Island-wide',
    icon: '🚚',
    description: 'Deliver packaging products to customers island-wide, ensuring timely and professional service that upholds our company reputation.',
    responsibilities: [
      'Deliver goods to customer locations across Singapore',
      'Plan efficient delivery routes to meet daily schedules',
      'Collect payment and obtain delivery acknowledgements',
      'Perform basic vehicle maintenance checks',
      'Handle products with care during loading and unloading',
      'Report delivery issues or customer feedback to the office',
    ],
    requirements: [
      'Valid Class 3/4 driving licence',
      'Minimum 1 year of delivery driving experience',
      'Familiar with Singapore roads and industrial areas',
      'Good physical fitness for loading/unloading',
      'Responsible and customer-oriented',
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-title-section">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: 'var(--space-3)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.6)' }}>Home</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--red-300)' }}>Careers</span>
          </div>
          <h1>Join Our Team</h1>
          <p>Build your career with one of Singapore&apos;s leading packaging solutions providers</p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2>Why Work at <span>Megapac</span></h2>
              <p>We believe our people are our greatest asset</p>
            </div>
          </div>
          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-icon">🌱</div>
              <h4>Growth Opportunities</h4>
              <p>We invest in your development with on-the-job training, mentorship, and clear career progression paths.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">🤝</div>
              <h4>Supportive Culture</h4>
              <p>Work alongside experienced professionals in a collaborative, family-like environment where your contributions matter.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">🏭</div>
              <h4>Stable Industry</h4>
              <p>Packaging is an essential industry. Join a company with over 20 years of proven track record and steady growth.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">💰</div>
              <h4>Competitive Pay</h4>
              <p>We offer competitive salaries, performance bonuses, and comprehensive benefits including medical coverage.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">📍</div>
              <h4>Convenient Location</h4>
              <p>Our office is located at 11 Gul Link, easily accessible by public transport and with ample parking.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">⏰</div>
              <h4>Work-Life Balance</h4>
              <p>Regular working hours (Mon–Fri 8AM–5PM, Sat half-day) with annual leave and public holidays observed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-sm" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2>Open <span>Positions</span></h2>
              <p>Explore our current openings and find the right fit for you</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            {openings.map((job) => (
              <div key={job.id} style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--gray-100)',
                padding: 'var(--space-8)',
                transition: 'all .3s ease',
              }}>
                <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start', marginBottom: 'var(--space-5)' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 'var(--radius-md)',
                    background: 'var(--blue-50)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: 28, flexShrink: 0,
                  }}>
                    {job.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 20, marginBottom: 4 }}>{job.title}</h3>
                    <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                      <span className="badge badge-info">{job.type}</span>
                      <span className="badge badge-success">📍 {job.location}</span>
                    </div>
                  </div>
                </div>

                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-5)' }}>
                  {job.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--blue-800)', marginBottom: 'var(--space-3)', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                      Responsibilities
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {job.responsibilities.map((item, i) => (
                        <li key={i} style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 'var(--space-2)', paddingLeft: 20, position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--blue-500)' }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--blue-800)', marginBottom: 'var(--space-3)', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                      Requirements
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {job.requirements.map((item, i) => (
                        <li key={i} style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 'var(--space-2)', paddingLeft: 20, position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--gray-400)' }}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Apply?</h2>
          <p>Send your resume and cover letter to our HR team. We&apos;ll review your application and get back to you within 5 business days.</p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:sales@megapac.sg?subject=Job%20Application%20—%20Megapac%20Industries"
              className="btn btn-primary btn-lg"
            >
              📧 Email Your Resume
            </a>
            <a
              href="https://wa.me/6590482345?text=Hi%20Megapac%2C%20I%27m%20interested%20in%20a%20career%20opportunity."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
              style={{ background: '#25D366', color: '#fff', borderColor: '#25D366' }}
            >
              💬 WhatsApp Us
            </a>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', marginTop: 'var(--space-4)' }}>
            Email: sales@megapac.sg &nbsp;|&nbsp; 11 Gul Link, Singapore 629381
          </p>
        </div>
      </section>
    </>
  );
}
