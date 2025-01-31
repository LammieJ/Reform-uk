interface DataRow {
  when: string;
  purpose: string;
  data: string;
  basis: string;
  interests: string;
  retention: string;
}

export default function PrivacyPolicyPage() {
  const directDataTable: DataRow[] = [
    {
      when: "In all cases",
      purpose: "Electoral Purposes\n• Profiling\n• Use anonymised data about you to identify further potential supporters with similar characteristics.",
      data: "Identity\nContact details\nOpinions if you include them",
      basis: "Public interest\nAn activity that supports or promotes democratic engagement.\nSection 8(e), Data Protection Act 18",
      interests: "",
      retention: "For the life of our relationship, or\nUntil you ask us not to profile you"
    },
    {
      when: "When you register",
      purpose: "As a supporter or subscriber:\n• To manage our relationship with you\n• Notify changes to our Website, services, terms or privacy policy\n• Ask your views",
      data: "Identity\nContact details",
      basis: "Legitimate interest",
      interests: "Know, understand and communicate with our subscribers",
      retention: "For the life of our relationship"
    },
    {
      when: "When you register",
      purpose: "As a volunteer:\n• To manage our relationship with you\n• Notify changes to our Website, services, terms or privacy policy\n• Due Diligence",
      data: "Identity\nContact details",
      basis: "Legitimate interest",
      interests: "Know, understand and communicate with our volunteers",
      retention: "For the life of our relationship +2 years"
    },
    {
      when: "When you register",
      purpose: "Register you as a supporter\n• (process and receive your £25 donation)",
      data: "Identity\nContact details\nPayment method\nValue of donation(s)",
      basis: "Contractual Obligation & Legitimate interest",
      interests: "To a level that is appropriate, demonstrate that our funding comes mostly from the ordinary people of Great Britain",
      retention: "At least 7 years\nThis is required by law"
    },
    {
      when: "When you submit an application",
      purpose: "Review and select candidate applications\n• (process and receive your £100 administration fee)",
      data: "Identity\nContact details\nPayment method\nProof of identity\nCV\nSocial Media profiles\nConfirmation statements",
      basis: "Legitimate interest",
      interests: "Ensure candidates fall within the requirements of the Electoral Commission",
      retention: "At least 7 years\nThis is required by law"
    },
    {
      when: "When you make a donation",
      purpose: "• Conduct permissibility checks on donations over £500\n• Calculation multiple donations over £500 in a calendar year\n• Report donations greater than £7500 in a calendar year",
      data: "Identity\nContact details\nPayment method",
      basis: "Lawful requirement\nPolitical Parties, Elections and Referendums Act 2000",
      interests: "",
      retention: "At least 7 years\nThis is required by law"
    },
    {
      when: "When you send us a communication",
      purpose: "As a general query\n• Respond to queries",
      data: "Identity\nContact details\nOpinions if you include them",
      basis: "Lawful requirement\nData Protection Act 2018",
      interests: "",
      retention: "At least 7 years\nThis is to support any queries from regulatory authorities in relation to our activities"
    },
    {
      when: "When you send us a communication",
      purpose: "To exercise any of the Data Subject Rights\n• To maintain evidence of compliance with our obligations\n• To maintain a suppression list should you opt-out of profiling or receiving communications",
      data: "Identity\nContact details\nRequest\nResponse",
      basis: "Lawful requirement\nData Protection Act 2018\n& Legitimate interest",
      interests: "Ensuring as much as reasonably possible that we do not contact people that have asked us not to do so\nNote, this does not affect our right in law to use registered voter information for electoral purposes",
      retention: "Indefinitely"
    },
    {
      when: "When you register to attend an event",
      purpose: "Provide a safe environment for our staff and supporters\n• Ensuring we know who attends our events",
      data: "Identity",
      basis: "Legitimate interest",
      interests: "Ensuring we know who attends our events to assist with the prevention and detection of crime or the verification of claims.",
      retention: "At least 2 years"
    },
    {
      when: "When you register to attend an event",
      purpose: "• To manage our relationship with you\n• Notify changes to event timings etc\n• to invite you to our supporter platform",
      data: "Identity\nContact details",
      basis: "Legitimate interest",
      interests: "Know, understand and communicate with our event goers",
      retention: "At least 2 years"
    },
    {
      when: "When you make a purchase from our online shop",
      purpose: "Delivery of the product\n• provide a receipt\n• to confirm the initial order, shipping confirmation and maintain a customer relationship",
      data: "Identity\nDelivery Address\nBilling address – to cross reference against payment method\nEmail address\nTelephone number (optional)",
      basis: "Fulfilment of a contract",
      interests: "",
      retention: "At least 7 years\nThis is to support any queries from regulatory authorities in relation to our income"
    },
    {
      when: "When you visit our website; reformparty.uk",
      purpose: "Deliver website content\nCookies",
      data: "Please see separate cookie policy",
      basis: "Please see separate cookie policy",
      interests: "Please see separate cookie policy",
      retention: "Please see separate cookie policy"
    }
  ]

  const indirectDataTable: DataRow[] = [
    {
      when: "Electoral registers provided by each Electoral Registration Officer\n• This may include the public, anonymous and marked registers.",
      purpose: "• Delivery of Freepost Electoral Addresses to registered voters",
      data: "Identity\nAddress\nVoting method\nConfirmed voter (not vote selection)",
      basis: "Public Interest\nSection 91 of the Representation of the People Act 1983",
      interests: "",
      retention: "As long as the data is required to produce the mailings plus 90 days"
    },
    {
      when: "Electoral registers provided by each Electoral Registration Officer\n• This may include the public, anonymous and marked registers.",
      purpose: "• Profiling of the electorate\n• Electoral Purposes",
      data: "Identity\nAddress\nVoting method\nConfirmed voter (not vote selection)",
      basis: "Public Interest\nRegulation 106 – The Representation of the People (England and Wales)(Amendment) Regulations 2002",
      interests: "",
      retention: "As long as the data remains relevant, or\nUntil you ask us not to profile you"
    },
    {
      when: "Electoral registers provided by each Electoral Registration Officer\nThis may include the public, anonymous and marked registers.",
      purpose: "• Confirming the identity of candidate applicants\n• Confirming the permissibility of personal donations over £500",
      data: "Identity\nAddress",
      basis: "Lawful Requirement\nPart iv – Political Parties, Elections and Referendums Act 2000",
      interests: "",
      retention: "At least 7 years\nThis is required by law"
    },
    {
      when: "Public records (Companies House etc)",
      purpose: "• Confirming the permissibility of organisational donations over £500",
      data: "Organisational Identity\nOrganisational Address\nOrganisational Status\nIdentity of interested persons",
      basis: "Lawful Requirement\nPart iv – Political Parties, Elections and Referendums Act 2000",
      interests: "",
      retention: "At least 7 years\nThis is required by law"
    },
    {
      when: "Publicly available information; local, national and international media, open social media and forums",
      purpose: "• Due diligence",
      data: "Any such information that has been made publicly available\nComments, likes and interests",
      basis: "Legitimate interest",
      interests: "Ensuring we know what relevant publicly available information exists concerning those who we engage with.",
      retention: "As long as the data remains relevant"
    },
    {
      when: "Data vendors – anonymised data\nWe will only deal with vendors that can demonstrate compliance with the GDPR",
      purpose: "• Know and understand voters\n• Deliver promoted advertisements",
      data: "Location\nDemographics",
      basis: "Public Interest\nAn activity that supports or promotes democratic engagement.\nSection 8(e), Data Protection Act 18",
      interests: "",
      retention: "As long as the data remains relevant"
    },
    {
      when: "Data vendors – personal data\nWe will only deal with vendors that can demonstrate you personally have given specific consent to share your information with us",
      purpose: "• Know, understand and communicate with voters.",
      data: "Identity\nContact details\nPolitical opinions\nPolitical concerns\nDemographics",
      basis: "Public Interest\nAn activity that supports or promotes democratic engagement.\nSection 8(e), Data Protection Act 18",
      interests: "",
      retention: "As long as the data remains relevant"
    },
    {
      when: "Credit Reference agencies",
      purpose: "• Confirming the identity and status of candidate applicants",
      data: "Identity\nAddress\nBankruptcy status",
      basis: "Legitimate interest",
      interests: "Ensure candidates fall within the requirements of the Electoral Commission",
      retention: "For the life of our relationship plus 2 years"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-reform-primary to-reform-secondary dark:from-reform-dark dark:to-reform-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy / Transparency Information</h1>
            <p className="text-lg md:text-xl text-white/90">
              V2.4 - Jan 2022
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
            <p>Reform Party UK process and control Personal Data and therefore are required by Articles 13 and 14 of the General Data Protection Regulation (GDPR) to publish this information using clear and plain language.</p>

            <h3>Contact Details</h3>
            <p>Reform Party UK may be contacted here <a href="https://www.reformparty.uk/contact" target="_blank" rel="noopener noreferrer" className="text-reform-primary dark:text-reform-secondary hover:underline">https://www.reformparty.uk/contact</a> or Postal Address: 124 City Road, London EC1V 2NX, United Kingdom. Telephone: 0800 414 8525.</p>

            <h3>Transparent Information</h3>
            <p>The reasons, purposes and retention periods for which we process personal data, including any specified lawful basis or legitimate interest are detailed in separate tables for ease. These are split into data we may obtain from you directly and indirectly.</p>

            <h3>Profiling</h3>
            <p>Reform Party UK aims to create and maintain a profile for each registered voter in the UK. We will do this by merging the Electoral Register(s) with other data that may be lawfully available to us. For more detailed information about this type of processing, you may wish to read the ICO Draft framework code of practice for the use of personal data in political campaigning. If you wish, you can ask us not to maintain a profile in your name using the contact details above and we will take steps to remove you from our systems.</p>

            <p>Reform UK will respect the wishes of the people and aim to fully comply with the Information Commissioner's Office (ICO), in particular the specified requirements for Political Parties set out by the ICO in the report, titled Democracy Disrupted, dated 11 July 18.</p>

            <h3>Your Rights</h3>
            <p>Under data protection law, you have rights including:</p>
            <ul className="text-gray-700 dark:text-gray-300">
              <li><strong className="text-gray-900 dark:text-white">Access</strong> – You have the right to ask us for copies of your personal information.</li>
              <li><strong className="text-gray-900 dark:text-white">Rectification</strong> – You have the right to ask us to rectify information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</li>
              <li><strong className="text-gray-900 dark:text-white">Erasure</strong> – You have the right to ask us to erase your personal information in certain circumstances.</li>
              <li><strong className="text-gray-900 dark:text-white">Restriction</strong> – You have the right to ask us to restrict the processing of your information in certain circumstances.</li>
              <li><strong className="text-gray-900 dark:text-white">Object</strong> – You have the right to object to the processing of your personal data in certain circumstances.</li>
              <li><strong className="text-gray-900 dark:text-white">Data portability</strong> – You have the right to ask that we transfer the information you gave us to another organisation, or to you, in certain circumstances.</li>
            </ul>

            <p>You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you.</p>

            <h3>Data Processing and Storage</h3>
            <p>We use service providers to host and or process your information on our behalf. We only use processors who provide guarantees of appropriate technical and organisational measures that meet the requirements of the GDPR. Each service agreement is clear that we remain the data controller and they will only process the data in accordance with our written instructions.</p>

            <h3>Data Sharing</h3>
            <p>We will never sell your information or share it with another organisation.</p>

            <h3>Your Right to Complain</h3>
            <p>If you are unhappy with how we use your data, you can let us know directly or complain to the Information Commissioner's Office (ICO). The ICO's contact details are:</p>
            <p className="text-gray-700 dark:text-gray-300">
              Information Commissioner's Office<br />
              Wycliffe House<br />
              Water Lane<br />
              Wilmslow<br />
              Cheshire<br />
              SK9 5AF
            </p>
            <p>Helpline number: 0303 123 1113</p>

            <h2>Information obtained from you directly</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-gray-700 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 p-2 text-gray-900 dark:text-white">When and how is this data obtained</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2 text-gray-900 dark:text-white">Purpose</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2 text-gray-900 dark:text-white">Type of data used or requested</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2 text-gray-900 dark:text-white">Legal Basis for the use</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2 text-gray-900 dark:text-white">If the legal basis is our legitimate interests</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2 text-gray-900 dark:text-white">How long will we hold this data</th>
                  </tr>
                </thead>
                <tbody>
                  {directDataTable.map((row, index) => (
                    <tr key={index} className="border border-gray-300 dark:border-gray-700 even:bg-gray-50 dark:even:bg-gray-800/50">
                      <td className="border border-gray-300 dark:border-gray-700 p-2 whitespace-pre-line text-gray-700 dark:text-gray-300">{row.when}</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-2 whitespace-pre-line text-gray-700 dark:text-gray-300">{row.purpose}</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-2 whitespace-pre-line text-gray-700 dark:text-gray-300">{row.data}</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-2 whitespace-pre-line text-gray-700 dark:text-gray-300">{row.basis}</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-2 whitespace-pre-line text-gray-700 dark:text-gray-300">{row.interests}</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-2 whitespace-pre-line text-gray-700 dark:text-gray-300">{row.retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Information about you that we may obtain from another source</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-gray-700 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 p-2 text-gray-900 dark:text-white">When and how is this data obtained</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2 text-gray-900 dark:text-white">Purpose</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2 text-gray-900 dark:text-white">Type of data used or requested</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2 text-gray-900 dark:text-white">Legal Basis for the use</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2 text-gray-900 dark:text-white">If the legal basis is our legitimate interests</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2 text-gray-900 dark:text-white">How long will we hold this data</th>
                  </tr>
                </thead>
                <tbody>
                  {indirectDataTable.map((row, index) => (
                    <tr key={index} className="border border-gray-300 dark:border-gray-700 even:bg-gray-50 dark:even:bg-gray-800/50">
                      <td className="border border-gray-300 dark:border-gray-700 p-2 whitespace-pre-line text-gray-700 dark:text-gray-300">{row.when}</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-2 whitespace-pre-line text-gray-700 dark:text-gray-300">{row.purpose}</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-2 whitespace-pre-line text-gray-700 dark:text-gray-300">{row.data}</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-2 whitespace-pre-line text-gray-700 dark:text-gray-300">{row.basis}</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-2 whitespace-pre-line text-gray-700 dark:text-gray-300">{row.interests}</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-2 whitespace-pre-line text-gray-700 dark:text-gray-300">{row.retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
