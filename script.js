/**
 * ============================================================================
 * IEM-UEM University Events Portal - Official JavaScript Engine
 * Vanilla JavaScript (No Frameworks)
 * ============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Comprehensive University Events Data Model
     -------------------------------------------------------------------------- */
  const UNIVERSITY_EVENTS = [
    {
      id: 1,
      title: "INNOVISION 2026 - Annual Techno-Management Fest",
      shortTitle: "Innovision 2026",
      category: "Technical",
      isFeatured: true,
      flagshipLabel: "Flagship Fest",
      date: "March 24 - 26, 2026",
      time: "09:30 AM - 07:00 PM IST",
      dateTimeISO: "2026-03-24T09:30:00",
      venue: "Main Auditorium & Tech Grounds",
      campus: "IEM Kolkata (Sector V, Salt Lake)",
      teamSize: "1 - 4 Members per Track",
      entryFee: "Free Entry (College ID Req.)",
      eligibility: "Open to All Engineering & Science Students",
      image: "assets/images/event-techfest.svg",
      shortDesc: "Eastern India's largest annual techno-management conclave featuring 35+ competitive events in robotics, AI challenge, paper presentations, and venture pitch.",
      fullDesc: "INNOVISION is the premier annual techno-management festival of IEM-UEM Group. Bringing together over 5,000 tech enthusiasts and delegates from top institutions across the nation, Innovision offers an unparalleled platform to showcase engineering prowess, technological innovation, and managerial acumen. From autonomous bot wars to quantum coding challenges, experience three days of pure technological excellence.",
      highlights: [
        "RoboWars & Drone Grand Prix in specialized obstacle arenas",
        "AI Innovation Challenge sponsored by industry tech partners",
        "VenturePitch: Start-up ideathon evaluated by venture capitalists",
        "Tech Expo: Showcase of innovative student patents and research models",
        "Keynote addresses by prominent scientists and silicon valley leaders"
      ],
      prizeTitle: "₹ 5,00,000 Total Prize Pool",
      prizeDesc: "Cash awards for top 3 positions in every track, trophies, internships, and IEEE-endorsed certificates."
    },
    {
      id: 2,
      title: "EUPHORIA 2026 - Annual Inter-University Cultural Gala",
      shortTitle: "Euphoria 2026",
      category: "Cultural",
      isFeatured: true,
      flagshipLabel: "Cultural Gala",
      date: "April 10 - 12, 2026",
      time: "04:00 PM - 10:30 PM IST",
      dateTimeISO: "2026-04-10T16:00:00",
      venue: "Central Amphitheatre & Convention Grounds",
      campus: "UEM Kolkata (New Town Campus)",
      teamSize: "Solo & Group Troupes",
      entryFee: "Free for Registered Attendees",
      eligibility: "Open to Students & University Alumni",
      image: "assets/images/event-cultural.svg",
      shortDesc: "A multi-genre cultural celebration of music, theatrical drama, fashion walks, choreography battles, and live Bollywood celebrity concert.",
      fullDesc: "EUPHORIA is the iconic celebration of youth, performing arts, and heritage at the UEM Kolkata campus. Across three memorable evenings, students take center stage to compete in classical and contemporary music, street theatre (Nukkad Natak), cinematic dance showdowns, and high-fashion couture pageants. The festival culminates in a star-studded celebrity musical night.",
      highlights: [
        "Battle of the University Bands (Western & Eastern rock categories)",
        "StepUp: Inter-college mega choreography and street dance face-off",
        "Panache: Themed fashion pageant promoting sustainable campus wear",
        "Spotlight Drama: Original one-act plays and street theatre competitions",
        "Grand Celebrity Night featuring national chart-topping musicians"
      ],
      prizeTitle: "₹ 3,00,000 Prizes & Performance Contracts",
      prizeDesc: "Winner rolling trophies, music gear vouchers, and studio recording opportunities."
    },
    {
      id: 3,
      title: "HACK-O-UTSAV 4.0 - 36-Hour National Hackathon",
      shortTitle: "Hack-O-Utsav 4.0",
      category: "Technical",
      isFeatured: true,
      flagshipLabel: "National Hackathon",
      date: "May 15 - 16, 2026",
      time: "08:00 AM (36 Hours Continuous)",
      dateTimeISO: "2026-05-15T08:00:00",
      venue: "Advanced Computing Labs & AI Incubation Center",
      campus: "UEM Kolkata (University Campus)",
      teamSize: "2 - 4 Developers per Team",
      entryFee: "Free (Subject to Shortlisting)",
      eligibility: "Undergraduate & Postgraduate Coders",
      image: "assets/images/event-hackathon.svg",
      shortDesc: "A high-intensity 36-hour sprint uniting 100+ shortlisted developer teams to build cutting-edge prototypes across Generative AI, Web3, FinTech, and Smart Cities.",
      fullDesc: "Hack-O-Utsav 4.0 is IEM-UEM's flagship national hackathon recognized by leading tech consortia. Over 36 rigorous hours, developers, designers, and innovators collaborate inside state-of-the-art labs with non-stop mentorship from senior engineers at Google, Microsoft, and high-growth startups. Teams submit working code and live demos judged on real-world impact, architecture, and innovation.",
      highlights: [
        "Tracks: Generative AI/LLMs, Web3 & Decentralized Apps, HealthTech, Sustainable Smart Cities",
        "Dedicated round-the-clock industry mentors and cloud architecture support",
        "Direct fast-track interview opportunities with 15+ sponsor hiring partners",
        "Hardware IoT kits and cloud credits provided to all qualifying finalists",
        "Midnight gaming sprints, developer swag kits, and unlimited food/refreshments"
      ],
      prizeTitle: "₹ 3,50,000 Cash Pool + Cloud Credits",
      prizeDesc: "₹1.5 Lakhs for Grand Champion, category winners, and seed incubation grants for viable startups."
    },
    {
      id: 4,
      title: "AI & Quantum Frontiers - International Research Seminar",
      shortTitle: "AI & Quantum Symposium",
      category: "Seminar",
      isFeatured: false,
      flagshipLabel: null,
      date: "March 30, 2026",
      time: "11:00 AM - 04:30 PM IST",
      dateTimeISO: "2026-03-30T11:00:00",
      venue: "Sir J.C. Bose Seminar Hall, Management Block",
      campus: "IEM Kolkata (Sector V)",
      teamSize: "Individual Registration",
      entryFee: "Complimentary (Prior Registration Required)",
      eligibility: "Researchers, Faculty & Senior Engineering Students",
      image: "assets/images/event-seminar.svg",
      shortDesc: "Distinguished academic symposium examining quantum algorithmic speedups, generative foundational models, and neuromorphic architectures.",
      fullDesc: "Join esteemed international researchers, industry scientists, and IEEE fellows for an illuminating day of academic exploration into AI & Quantum Computing. Attendees will explore peer-reviewed research papers, examine hardware quantum testbeds, and participate in an interactive panel on the ethical frontiers of artificial intelligence.",
      highlights: [
        "Keynote by Senior Research Scientists on Quantum Annealing & Cryptography",
        "Panel discussion on Safe Generative AI in Healthcare and Financial Engineering",
        "Presentation of student research posters with peer-review citations",
        "Networking high-tea with visiting PhD delegates and faculty heads"
      ],
      prizeTitle: "IEEE & IEM-UEM Certified Academic Credential",
      prizeDesc: "Official Certificate of Participation with Scopus/IEEE indexable poster mentions for top papers."
    },
    {
      id: 5,
      title: "SPARDHA 2026 - Inter-University Sports Championship",
      shortTitle: "Spardha 2026",
      category: "Sports",
      isFeatured: false,
      flagshipLabel: null,
      date: "April 20 - 25, 2026",
      time: "07:30 AM - 06:00 PM IST",
      dateTimeISO: "2026-04-20T07:30:00",
      venue: "University Sports Arena & Green Pavilion",
      campus: "UEM Kolkata (Action Area III, New Town)",
      teamSize: "Inter-College Squads",
      entryFee: "Standard College Squad Entry",
      eligibility: "Enrolled University College Contingents",
      image: "assets/images/event-sports.svg",
      shortDesc: "Six days of athletic spirit across football, cricket, basketball, volleyball, table tennis, badminton, and track athletics.",
      fullDesc: "SPARDHA 2026 brings together over 40 collegiate sports contingents competing for the prestigious University Sports Championship Trophy. Held across our world-class turf grounds and indoor sports pavilion, Spardha celebrates fitness, discipline, tactical teamwork, and collegiate sportsmanship.",
      highlights: [
        "Day & Night Floodlit T20 Cricket Championship matches",
        "Inter-University 7-a-side Football Cup on FIFA-standard turf",
        "Indoor Badminton & Table Tennis singles and doubles showdowns",
        "Basketball tournament with certified national referees",
        "Grand closing medal ceremony with former national athletes"
      ],
      prizeTitle: "Championship Trophies & Medals",
      prizeDesc: "Overall Champions Trophy, individual gold/silver/bronze medals, and Best Athlete honours."
    },
    {
      id: 6,
      title: "Full-Stack Web3 & Cloud Native Hands-on Workshop",
      shortTitle: "Cloud Native Bootcamp",
      category: "Workshop",
      isFeatured: false,
      flagshipLabel: null,
      date: "April 04, 2026",
      time: "10:00 AM - 04:30 PM IST",
      dateTimeISO: "2026-04-04T10:00:00",
      venue: "High Performance Computing Lab (HPC-102)",
      campus: "IEM Kolkata (Ashram Building)",
      teamSize: "Individual (Hands-on Lab)",
      entryFee: "Free with Pre-registration",
      eligibility: "Engineering Students (All Branches)",
      image: "assets/images/event-workshop.svg",
      shortDesc: "Intensive hands-on lab deploying scalable Kubernetes microservices, containerized APIs, and Ethereum smart contracts with live cloud credits.",
      fullDesc: "Led by certified cloud architects and seasoned Web3 core contributors, this one-day bootcamp walks students through real-world deployment workflows. Attendees will build, containerize, and ship modern microservices into AWS/GCP clusters and deploy smart contracts on Ethereum testnets.",
      highlights: [
        "Hands-on containerization with Docker and Kubernetes cluster management",
        "Setting up CI/CD pipelines with GitHub Actions and Terraform",
        "Smart contract creation with Solidity, Hardhat, and ethers.js",
        "$100 complimentary AWS Cloud Credits provided per attendee"
      ],
      prizeTitle: "Verified Developer Certification",
      prizeDesc: "Digital verifiable certificate of completion + curated resource bundle and interview prep toolkit."
    },
    {
      id: 7,
      title: "RoboWarriors 2026 - Autonomous Robotics Grand Prix",
      shortTitle: "RoboWarriors 2026",
      category: "Technical",
      isFeatured: false,
      flagshipLabel: null,
      date: "April 18, 2026",
      time: "10:30 AM - 06:30 PM IST",
      dateTimeISO: "2026-04-18T10:30:00",
      venue: "Mechanical Engineering Innovation Arena",
      campus: "UEM Kolkata (Engineering Block)",
      teamSize: "2 - 5 Members",
      entryFee: "Free (Prior Spec Approval)",
      eligibility: "Technical & Polytechnic Students",
      image: "assets/images/event-robotics.svg",
      shortDesc: "High-octane combat arena for 15kg & 30kg combat bots, precision line-followers, autonomous maze solvers, and micro-drone racing.",
      fullDesc: "Organized by the IEM-UEM Robotics Society, RoboWarriors is the ultimate battlefield for mechanical and mechatronics engineers. Witness sparks fly as armored combat bots clash in an enclosed safety arena, while autonomous algorithms compete for millisecond supremacy in the maze and line-following circuit.",
      highlights: [
        "15kg & 30kg Combat Bot Deathmatch in specialized steel-caged arena",
        "High-speed PID Line Follower and micromouse maze navigation",
        "FPV (First Person View) Micro-Drone slalom obstacle course",
        "Design innovation award for custom 3D-printed chassis"
      ],
      prizeTitle: "₹ 2,00,000 Cash Pool & Robotics Toolkits",
      prizeDesc: "Cash awards, motor controller kits, and sponsorship from top mechatronics vendors."
    },
    {
      id: 8,
      title: "Rhythm & Raag - Battle of the University Bands",
      shortTitle: "Rhythm & Raag",
      category: "Cultural",
      isFeatured: false,
      flagshipLabel: null,
      date: "April 11, 2026",
      time: "06:00 PM - 10:30 PM IST",
      dateTimeISO: "2026-04-11T18:00:00",
      venue: "Open Air Theatre (OAT)",
      campus: "UEM Kolkata (Main Campus)",
      teamSize: "3 - 8 Band Members",
      entryFee: "Free for Spectators",
      eligibility: "College & University Music Bands",
      image: "assets/images/event-band.svg",
      shortDesc: "The ultimate acoustic and rock battle featuring 20 shortlisted university bands playing original compositions and tribute covers.",
      fullDesc: "Rhythm & Raag is the premier inter-college musical tournament hosted under the lights of UEM's Open Air Theatre. From hard rock and alternative indie to classical fusion and Sufi melodies, top collegiate musicians compete for professional recording contracts and state recognition.",
      highlights: [
        "20 finalist musical bands performing before celebrity music judges",
        "Professional live acoustics, digital mixers, and stage lighting rig",
        "Awards for Best Vocalist, Best Guitarist, and Best Drummer",
        "Closing tribute set by previous year's champions"
      ],
      prizeTitle: "₹ 1,00,000 + Studio Recording Session",
      prizeDesc: "Winners receive studio time to record and produce an official original single."
    },
    {
      id: 9,
      title: "DesignSprint 2026 - UI/UX & Product Masterclass",
      shortTitle: "DesignSprint 2026",
      category: "Workshop",
      isFeatured: false,
      flagshipLabel: null,
      date: "May 02, 2026",
      time: "02:00 PM - 06:30 PM IST",
      dateTimeISO: "2026-05-02T14:00:00",
      venue: "Design & Prototyping Studio (Block C)",
      campus: "IEM Kolkata (Ashram Campus)",
      teamSize: "Individual / Pairs",
      entryFee: "Free with Student ID",
      eligibility: "Aspiring Designers, Product Managers & Frontend Devs",
      image: "assets/images/event-design.svg",
      shortDesc: "Master user research, design systems, interactive Figma prototyping, and product usability testing with Silicon Valley design mentors.",
      fullDesc: "DesignSprint 2026 provides an immersive deep-dive into digital product craftsmanship. Students will take a raw user problem, sketch wireframes, architect design tokens, build accessible UI components, and test micro-interactions using industry-standard tools like Figma and Framer.",
      highlights: [
        "Design Thinking workshop: from problem discovery to empathy mapping",
        "Building scalable design systems using auto-layout and component variables",
        "Portfolio teardowns & live feedback by senior product designers",
        "Interactive prototype competition with instant peer review"
      ],
      prizeTitle: "1-Year Figma Professional + Design Mentorship",
      prizeDesc: "Premium software licenses, design book hampers, and 1-on-1 portfolio mentorship."
    }
  ];

  /* --------------------------------------------------------------------------
     2. DOM Elements Cache
     -------------------------------------------------------------------------- */
  const DOM = {
    // Header & Navigation
    mainHeader: document.getElementById('mainHeader'),
    mobileToggleBtn: document.getElementById('mobileToggleBtn'),
    mobileNavMenu: document.getElementById('mobileNavMenu'),
    navLinks: document.querySelectorAll('.nav-link, .mobile-nav-link'),
    mobileHostBtn: document.getElementById('mobileHostBtn'),
    
    // Hero & Countdown
    marqueeCountdown: document.getElementById('marqueeCountdown'),
    countdownDays: document.getElementById('countdownDays'),
    countdownHours: document.getElementById('countdownHours'),
    countdownMinutes: document.getElementById('countdownMinutes'),
    countdownSeconds: document.getElementById('countdownSeconds'),
    openHostModalBtn: document.getElementById('openHostModalBtn'),
    
    // Event Listings Grids
    featuredEventsGrid: document.getElementById('featuredEventsGrid'),
    upcomingEventsGrid: document.getElementById('upcomingEventsGrid'),
    noEventsState: document.getElementById('noEventsState'),
    emptyStateResetBtn: document.getElementById('emptyStateResetBtn'),
    
    // Search & Filters
    eventSearchInput: document.getElementById('eventSearchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    categoryButtons: document.querySelectorAll('.category-btn'),
    resultsCountText: document.getElementById('resultsCountText'),
    resetAllFiltersBtn: document.getElementById('resetAllFiltersBtn'),
    footerCatLinks: document.querySelectorAll('.footer-cat-link'),

    // Event Details Modal
    eventDetailsModal: document.getElementById('eventDetailsModal'),
    closeEventModalBtn: document.getElementById('closeEventModalBtn'),
    modalCloseSecondaryBtn: document.getElementById('modalCloseSecondaryBtn'),
    modalEventImg: document.getElementById('modalEventImg'),
    modalEventCategory: document.getElementById('modalEventCategory'),
    modalEventCode: document.getElementById('modalEventCode'),
    modalEventEligibility: document.getElementById('modalEventEligibility'),
    modalEventTitle: document.getElementById('modalEventTitle'),
    modalEventDateTime: document.getElementById('modalEventDateTime'),
    modalEventVenue: document.getElementById('modalEventVenue'),
    modalEventTeamSize: document.getElementById('modalEventTeamSize'),
    modalEventFee: document.getElementById('modalEventFee'),
    modalEventDescription: document.getElementById('modalEventDescription'),
    modalEventHighlights: document.getElementById('modalEventHighlights'),
    modalEventPrizeTitle: document.getElementById('modalEventPrizeTitle'),
    modalEventPrizeDesc: document.getElementById('modalEventPrizeDesc'),
    modalRegisterActionBtn: document.getElementById('modalRegisterActionBtn'),

    // Registration Modal & Form
    registrationModal: document.getElementById('registrationModal'),
    closeRegisterModalBtn: document.getElementById('closeRegisterModalBtn'),
    eventRegistrationForm: document.getElementById('eventRegistrationForm'),
    regEventSelect: document.getElementById('regEventSelect'),
    regStudentName: document.getElementById('regStudentName'),
    regEmail: document.getElementById('regEmail'),
    regDepartment: document.getElementById('regDepartment'),
    regPhone: document.getElementById('regPhone'),
    regYear: document.getElementById('regYear'),
    submitRegistrationBtn: document.getElementById('submitRegistrationBtn'),

    // Registration Field Errors
    regEventError: document.getElementById('regEventError'),
    regNameError: document.getElementById('regNameError'),
    regEmailError: document.getElementById('regEmailError'),
    regDeptError: document.getElementById('regDeptError'),
    regPhoneError: document.getElementById('regPhoneError'),

    // Ticket Success Modal
    ticketSuccessModal: document.getElementById('ticketSuccessModal'),
    closeTicketModalBtn: document.getElementById('closeTicketModalBtn'),
    doneTicketBtn: document.getElementById('doneTicketBtn'),
    printTicketBtn: document.getElementById('printTicketBtn'),
    ticketIdDisplay: document.getElementById('ticketIdDisplay'),
    ticketEventName: document.getElementById('ticketEventName'),
    ticketStudentName: document.getElementById('ticketStudentName'),
    ticketDepartment: document.getElementById('ticketDepartment'),
    ticketDateTime: document.getElementById('ticketDateTime'),
    ticketVenue: document.getElementById('ticketVenue'),
    ticketBarcodeText: document.getElementById('ticketBarcodeText'),

    // Host Event Modal
    hostEventModal: document.getElementById('hostEventModal'),
    closeHostModalBtn: document.getElementById('closeHostModalBtn'),
    hostEventProposalForm: document.getElementById('hostEventProposalForm'),
    hostClubName: document.getElementById('hostClubName'),
    hostEventTitle: document.getElementById('hostEventTitle'),
    hostLeadEmail: document.getElementById('hostLeadEmail'),
    hostSummary: document.getElementById('hostSummary'),
    hostClubError: document.getElementById('hostClubError'),
    hostTitleError: document.getElementById('hostTitleError'),
    hostEmailError: document.getElementById('hostEmailError'),
    hostSummaryError: document.getElementById('hostSummaryError'),

    // Contact Form
    contactForm: document.getElementById('contactForm'),
    contactName: document.getElementById('contactName'),
    contactEmail: document.getElementById('contactEmail'),
    contactSubject: document.getElementById('contactSubject'),
    contactMessage: document.getElementById('contactMessage'),
    contactNameError: document.getElementById('contactNameError'),
    contactEmailError: document.getElementById('contactEmailError'),
    contactSubjectError: document.getElementById('contactSubjectError'),
    contactMessageError: document.getElementById('contactMessageError'),

    // Utilities
    backToTopBtn: document.getElementById('backToTopBtn'),
    toastContainer: document.getElementById('toastContainer')
  };

  /* --------------------------------------------------------------------------
     3. State Management
     -------------------------------------------------------------------------- */
  const state = {
    selectedCategory: 'All',
    searchQuery: '',
    currentModalEvent: null,
    countdownInterval: null
  };

  /* --------------------------------------------------------------------------
     4. Helper Functions: Category Badges & SVGs
     -------------------------------------------------------------------------- */
  function getCategoryClass(category) {
    switch (category.toLowerCase()) {
      case 'technical': return 'technical';
      case 'cultural': return 'cultural';
      case 'workshop': return 'workshop';
      case 'sports': return 'sports';
      case 'seminar': return 'seminar';
      default: return 'technical';
    }
  }

  function createCalendarIcon() {
    return `<svg class="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>`;
  }

  function createLocationIcon() {
    return `<svg class="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>`;
  }

  /* --------------------------------------------------------------------------
     5. Render Event Cards
     -------------------------------------------------------------------------- */
  function renderEventCardHTML(event, isFeaturedSection = false) {
    const catClass = getCategoryClass(event.category);
    const flagshipHTML = event.flagshipLabel ? `<span class="flagship-badge">${event.flagshipLabel}</span>` : '';

    return `
      <article class="event-card reveal" data-id="${event.id}">
        <div class="card-image-box">
          <img src="${event.image}" alt="${event.title}" class="card-img" loading="lazy">
          <span class="category-pill ${catClass}">${event.category}</span>
          ${flagshipHTML}
        </div>
        
        <div class="card-body">
          <div class="card-meta-list">
            <div class="meta-item">
              ${createCalendarIcon()}
              <span>${event.date} &bull; ${event.time}</span>
            </div>
            <div class="meta-item">
              ${createLocationIcon()}
              <span>${event.venue}</span>
            </div>
          </div>

          <h3 class="card-title">${event.title}</h3>
          <p class="card-description">${event.shortDesc}</p>

          <div class="card-footer">
            <button class="btn btn-primary btn-sm btn-block view-details-btn" data-id="${event.id}">
              <span>View Details</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            <button class="btn btn-outline btn-sm quick-register-btn" data-id="${event.id}" title="Register immediately">
              Register
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function renderFeaturedEvents() {
    if (!DOM.featuredEventsGrid) return;
    const featured = UNIVERSITY_EVENTS.filter(e => e.isFeatured);
    DOM.featuredEventsGrid.innerHTML = featured.map(e => renderEventCardHTML(e, true)).join('');
  }

  function renderUpcomingEvents() {
    if (!DOM.upcomingEventsGrid) return;

    const query = state.searchQuery.toLowerCase().trim();
    const cat = state.selectedCategory;

    const filtered = UNIVERSITY_EVENTS.filter(event => {
      const matchesCategory = (cat === 'All') || (event.category.toLowerCase() === cat.toLowerCase());
      const matchesSearch = query === '' ||
        event.title.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.venue.toLowerCase().includes(query) ||
        event.shortDesc.toLowerCase().includes(query) ||
        event.campus.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    // Update Result count and buttons
    const count = filtered.length;
    DOM.resultsCountText.textContent = `Showing ${count} event${count === 1 ? '' : 's'}`;
    
    // Toggle Reset filters link visibility
    if (DOM.resetAllFiltersBtn) {
      DOM.resetAllFiltersBtn.style.display = (cat !== 'All' || query !== '') ? 'inline-block' : 'none';
    }

    if (count === 0) {
      DOM.upcomingEventsGrid.innerHTML = '';
      DOM.noEventsState.style.display = 'block';
    } else {
      DOM.noEventsState.style.display = 'none';
      DOM.upcomingEventsGrid.innerHTML = filtered.map(e => renderEventCardHTML(e, false)).join('');
      
      // Trigger scroll animations for new elements
      initScrollAnimations();
    }
  }

  function populateRegistrationEventSelect() {
    if (!DOM.regEventSelect) return;
    DOM.regEventSelect.innerHTML = '<option value="">-- Choose an Event --</option>' +
      UNIVERSITY_EVENTS.map(e => `<option value="${e.id}">${e.title} (${e.date})</option>`).join('');
  }

  /* --------------------------------------------------------------------------
     6. Event Search & Category Filter Handlers
     -------------------------------------------------------------------------- */
  function initFiltersAndSearch() {
    // Search Input Listener
    if (DOM.eventSearchInput) {
      DOM.eventSearchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        DOM.clearSearchBtn.style.display = state.searchQuery.length > 0 ? 'block' : 'none';
        renderUpcomingEvents();
      });
    }

    // Clear Search Button
    if (DOM.clearSearchBtn) {
      DOM.clearSearchBtn.addEventListener('click', () => {
        DOM.eventSearchInput.value = '';
        state.searchQuery = '';
        DOM.clearSearchBtn.style.display = 'none';
        renderUpcomingEvents();
        DOM.eventSearchInput.focus();
      });
    }

    // Category Filter Buttons
    DOM.categoryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        DOM.categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedCategory = btn.dataset.category;
        renderUpcomingEvents();
      });
    });

    // Footer Category Links
    DOM.footerCatLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const cat = link.dataset.cat;
        if (cat) {
          state.selectedCategory = cat;
          DOM.categoryButtons.forEach(b => {
            b.classList.toggle('active', b.dataset.category.toLowerCase() === cat.toLowerCase());
          });
          renderUpcomingEvents();
        }
      });
    });

    // Reset Filters Actions
    const handleResetAll = () => {
      state.selectedCategory = 'All';
      state.searchQuery = '';
      if (DOM.eventSearchInput) DOM.eventSearchInput.value = '';
      if (DOM.clearSearchBtn) DOM.clearSearchBtn.style.display = 'none';
      DOM.categoryButtons.forEach(b => b.classList.toggle('active', b.dataset.category === 'All'));
      renderUpcomingEvents();
      showToast('Filters reset to show all events', 'info');
    };

    if (DOM.resetAllFiltersBtn) DOM.resetAllFiltersBtn.addEventListener('click', handleResetAll);
    if (DOM.emptyStateResetBtn) DOM.emptyStateResetBtn.addEventListener('click', handleResetAll);
  }

  /* --------------------------------------------------------------------------
     7. Modal Controllers (Open, Close, Escape, Click Outside)
     -------------------------------------------------------------------------- */
  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('show');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('show');
    modalEl.setAttribute('aria-hidden', 'true');
    // Only restore body overflow if no other modal is currently active
    const activeModals = document.querySelectorAll('.modal-backdrop.show');
    if (activeModals.length === 0) {
      document.body.style.overflow = '';
    }
  }

  function initModalDismissals() {
    const allModals = [
      DOM.eventDetailsModal,
      DOM.registrationModal,
      DOM.ticketSuccessModal,
      DOM.hostEventModal
    ];

    allModals.forEach(modal => {
      if (!modal) return;
      // Close on backdrop click (click outside dialog)
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    });

    // Global Escape Key to close open modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const topModal = document.querySelector('.modal-backdrop.show');
        if (topModal) closeModal(topModal);
      }
    });

    // Close button binds
    if (DOM.closeEventModalBtn) DOM.closeEventModalBtn.addEventListener('click', () => closeModal(DOM.eventDetailsModal));
    if (DOM.modalCloseSecondaryBtn) DOM.modalCloseSecondaryBtn.addEventListener('click', () => closeModal(DOM.eventDetailsModal));
    if (DOM.closeRegisterModalBtn) DOM.closeRegisterModalBtn.addEventListener('click', () => closeModal(DOM.registrationModal));
    if (DOM.closeTicketModalBtn) DOM.closeTicketModalBtn.addEventListener('click', () => closeModal(DOM.ticketSuccessModal));
    if (DOM.doneTicketBtn) DOM.doneTicketBtn.addEventListener('click', () => closeModal(DOM.ticketSuccessModal));
    if (DOM.closeHostModalBtn) DOM.closeHostModalBtn.addEventListener('click', () => closeModal(DOM.hostEventModal));
  }

  /* --------------------------------------------------------------------------
     8. Event Details Modal Population
     -------------------------------------------------------------------------- */
  function showEventDetails(eventId) {
    const event = UNIVERSITY_EVENTS.find(e => e.id === Number(eventId));
    if (!event) return;

    state.currentModalEvent = event;

    DOM.modalEventImg.src = event.image;
    DOM.modalEventImg.alt = event.title;
    DOM.modalEventCategory.textContent = event.category;
    DOM.modalEventCategory.className = `modal-category-badge ${getCategoryClass(event.category)}`;
    DOM.modalEventCode.textContent = `IEM-UEM-EVT0${event.id}`;
    DOM.modalEventEligibility.textContent = event.eligibility;
    DOM.modalEventTitle.textContent = event.title;
    DOM.modalEventDateTime.textContent = `${event.date} • ${event.time}`;
    DOM.modalEventVenue.textContent = `${event.venue}, ${event.campus}`;
    DOM.modalEventTeamSize.textContent = event.teamSize;
    DOM.modalEventFee.textContent = event.entryFee;
    DOM.modalEventDescription.textContent = event.fullDesc;

    // Highlights list
    DOM.modalEventHighlights.innerHTML = event.highlights.map(h => `<li>${h}</li>`).join('');

    // Prizes / Certificates
    DOM.modalEventPrizeTitle.textContent = event.prizeTitle;
    DOM.modalEventPrizeDesc.textContent = event.prizeDesc;

    // Setup Register Button inside Modal
    DOM.modalRegisterActionBtn.onclick = () => {
      closeModal(DOM.eventDetailsModal);
      setTimeout(() => openRegistrationForEvent(event.id), 200);
    };

    openModal(DOM.eventDetailsModal);
  }

  /* --------------------------------------------------------------------------
     9. Event Registration Flow & Form Validation
     -------------------------------------------------------------------------- */
  function openRegistrationForEvent(eventId) {
    if (DOM.regEventSelect && eventId) {
      DOM.regEventSelect.value = eventId;
    }
    clearRegistrationErrors();
    openModal(DOM.registrationModal);
  }

  function clearRegistrationErrors() {
    DOM.regEventError.textContent = '';
    DOM.regNameError.textContent = '';
    DOM.regEmailError.textContent = '';
    DOM.regDeptError.textContent = '';
    DOM.regPhoneError.textContent = '';

    [DOM.regEventSelect, DOM.regStudentName, DOM.regEmail, DOM.regDepartment, DOM.regPhone].forEach(input => {
      if (input) {
        input.classList.remove('is-invalid');
        input.classList.remove('is-valid');
      }
    });
  }

  function initRegistrationForm() {
    if (!DOM.eventRegistrationForm) return;

    DOM.eventRegistrationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearRegistrationErrors();

      let isValid = true;

      // 1. Validate Event Selection
      const selectedEventId = DOM.regEventSelect.value;
      if (!selectedEventId) {
        DOM.regEventError.textContent = 'Please choose an event to register for.';
        DOM.regEventSelect.classList.add('is-invalid');
        isValid = false;
      } else {
        DOM.regEventSelect.classList.add('is-valid');
      }

      // 2. Validate Student Name (min 3 chars, letters & spaces)
      const nameVal = DOM.regStudentName.value.trim();
      const nameRegex = /^[a-zA-Z\s.]{3,60}$/;
      if (!nameVal) {
        DOM.regNameError.textContent = 'Full student name is required.';
        DOM.regStudentName.classList.add('is-invalid');
        isValid = false;
      } else if (!nameRegex.test(nameVal)) {
        DOM.regNameError.textContent = 'Please enter a valid full name (at least 3 alphabetic characters).';
        DOM.regStudentName.classList.add('is-invalid');
        isValid = false;
      } else {
        DOM.regStudentName.classList.add('is-valid');
      }

      // 3. Validate Email Address
      const emailVal = DOM.regEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal) {
        DOM.regEmailError.textContent = 'Email address is required.';
        DOM.regEmail.classList.add('is-invalid');
        isValid = false;
      } else if (!emailRegex.test(emailVal)) {
        DOM.regEmailError.textContent = 'Please enter a valid email address (e.g. name@iem.edu.in).';
        DOM.regEmail.classList.add('is-invalid');
        isValid = false;
      } else {
        DOM.regEmail.classList.add('is-valid');
      }

      // 4. Validate Department Selection
      const deptVal = DOM.regDepartment.value;
      if (!deptVal) {
        DOM.regDeptError.textContent = 'Please select your college/department.';
        DOM.regDepartment.classList.add('is-invalid');
        isValid = false;
      } else {
        DOM.regDepartment.classList.add('is-valid');
      }

      // 5. Validate Phone Number (10 digits)
      const phoneVal = DOM.regPhone.value.trim().replace(/[\s-]/g, '');
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneVal) {
        DOM.regPhoneError.textContent = 'Contact phone number is required.';
        DOM.regPhone.classList.add('is-invalid');
        isValid = false;
      } else if (!phoneRegex.test(phoneVal)) {
        DOM.regPhoneError.textContent = 'Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.';
        DOM.regPhone.classList.add('is-invalid');
        isValid = false;
      } else {
        DOM.regPhone.classList.add('is-valid');
      }

      if (!isValid) return;

      // Submit state button animation
      const submitBtn = DOM.submitRegistrationBtn;
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Processing Registration...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        const eventObj = UNIVERSITY_EVENTS.find(ev => ev.id === Number(selectedEventId));
        
        // Generate Realistic Demo Pass
        const randomPassNum = Math.floor(1000 + Math.random() * 9000);
        const passId = `IEM-2026-${randomPassNum}`;

        DOM.ticketIdDisplay.textContent = `PASS #${passId}`;
        DOM.ticketEventName.textContent = eventObj ? eventObj.title : 'University Event';
        DOM.ticketStudentName.textContent = nameVal;
        DOM.ticketDepartment.textContent = deptVal;
        DOM.ticketDateTime.textContent = eventObj ? `${eventObj.date} (${eventObj.time})` : 'TBD';
        DOM.ticketVenue.textContent = eventObj ? `${eventObj.venue}, ${eventObj.campus}` : 'Campus Grounds';
        DOM.ticketBarcodeText.textContent = `IEMUEM-${randomPassNum}-PASS-${nameVal.toUpperCase().slice(0, 4)}`;

        // Close form modal, open success ticket modal
        closeModal(DOM.registrationModal);
        DOM.eventRegistrationForm.reset();
        clearRegistrationErrors();

        setTimeout(() => {
          openModal(DOM.ticketSuccessModal);
          showToast(`Registration verified for ${nameVal}!`, 'success');
        }, 250);

      }, 600);
    });

    // Print Pass action
    if (DOM.printTicketBtn) {
      DOM.printTicketBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  /* --------------------------------------------------------------------------
     10. Delegated Click Listener for Event Action Buttons
     -------------------------------------------------------------------------- */
  function initCardActionDelegation() {
    document.addEventListener('click', (e) => {
      // 1. "View Details" Click
      const viewDetailsBtn = e.target.closest('.view-details-btn');
      if (viewDetailsBtn) {
        const id = viewDetailsBtn.dataset.id;
        showEventDetails(id);
        return;
      }

      // 2. Quick Register Click
      const quickRegisterBtn = e.target.closest('.quick-register-btn');
      if (quickRegisterBtn) {
        const id = quickRegisterBtn.dataset.id;
        openRegistrationForEvent(id);
        return;
      }

      // 3. Hero Quick Action Buttons
      const openQuickRegister = e.target.closest('.open-quick-register');
      if (openQuickRegister) {
        const id = openQuickRegister.dataset.eventId;
        openRegistrationForEvent(id);
        return;
      }

      const viewQuickDetails = e.target.closest('.view-quick-details');
      if (viewQuickDetails) {
        const id = viewQuickDetails.dataset.eventId;
        showEventDetails(id);
        return;
      }
    });
  }

  /* --------------------------------------------------------------------------
     11. Host an Event Proposal Flow
     -------------------------------------------------------------------------- */
  function initHostEventModal() {
    const openButtons = [DOM.openHostModalBtn, DOM.mobileHostBtn];
    openButtons.forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => {
          if (DOM.mobileNavMenu.classList.contains('open')) {
            closeMobileMenu();
          }
          openModal(DOM.hostEventModal);
        });
      }
    });

    if (!DOM.hostEventProposalForm) return;

    DOM.hostEventProposalForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let valid = true;
      DOM.hostClubError.textContent = '';
      DOM.hostTitleError.textContent = '';
      DOM.hostEmailError.textContent = '';
      DOM.hostSummaryError.textContent = '';

      if (!DOM.hostClubName.value.trim()) {
        DOM.hostClubError.textContent = 'Club or organizing body name is required.';
        valid = false;
      }
      if (!DOM.hostEventTitle.value.trim()) {
        DOM.hostTitleError.textContent = 'Proposed event title is required.';
        valid = false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!DOM.hostLeadEmail.value.trim() || !emailRegex.test(DOM.hostLeadEmail.value.trim())) {
        DOM.hostEmailError.textContent = 'Valid organizer email address is required.';
        valid = false;
      }
      if (!DOM.hostSummary.value.trim() || DOM.hostSummary.value.trim().length < 15) {
        DOM.hostSummaryError.textContent = 'Please provide a summary of at least 15 characters.';
        valid = false;
      }

      if (!valid) return;

      const submitBtn = document.getElementById('submitHostBtn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting Proposal...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Proposal for Review';
        closeModal(DOM.hostEventModal);
        DOM.hostEventProposalForm.reset();
        showToast('Event proposal submitted for Faculty Board review! (Demo mode)', 'success', 5000);
      }, 600);
    });
  }

  /* --------------------------------------------------------------------------
     12. Contact Form Handler & Client-side Validation
     -------------------------------------------------------------------------- */
  function initContactForm() {
    if (!DOM.contactForm) return;

    DOM.contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let valid = true;
      DOM.contactNameError.textContent = '';
      DOM.contactEmailError.textContent = '';
      DOM.contactSubjectError.textContent = '';
      DOM.contactMessageError.textContent = '';

      [DOM.contactName, DOM.contactEmail, DOM.contactSubject, DOM.contactMessage].forEach(el => el.classList.remove('is-invalid'));

      const name = DOM.contactName.value.trim();
      if (!name || name.length < 3) {
        DOM.contactNameError.textContent = 'Please enter your name (minimum 3 characters).';
        DOM.contactName.classList.add('is-invalid');
        valid = false;
      }

      const email = DOM.contactEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        DOM.contactEmailError.textContent = 'Please enter a valid email address.';
        DOM.contactEmail.classList.add('is-invalid');
        valid = false;
      }

      const subject = DOM.contactSubject.value;
      if (!subject) {
        DOM.contactSubjectError.textContent = 'Please choose an inquiry purpose.';
        DOM.contactSubject.classList.add('is-invalid');
        valid = false;
      }

      const message = DOM.contactMessage.value.trim();
      if (!message || message.length < 10) {
        DOM.contactMessageError.textContent = 'Please provide a message of at least 10 characters.';
        DOM.contactMessage.classList.add('is-invalid');
        valid = false;
      }

      if (!valid) return;

      const submitBtn = document.getElementById('contactSubmitBtn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending Message...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Send Message</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>`;
        
        DOM.contactForm.reset();
        showToast('Thank you! Your inquiry has been forwarded to the Events Desk.', 'success');
      }, 700);
    });
  }

  /* --------------------------------------------------------------------------
     13. Configurable Live Countdown Timer
     -------------------------------------------------------------------------- */
  function initCountdownTimer() {
    if (!DOM.marqueeCountdown) return;

    // Configurable target date via data-target-date attribute or fallback
    const targetDateStr = DOM.marqueeCountdown.dataset.targetDate || "2026-03-24T09:30:00";
    let targetTime = new Date(targetDateStr).getTime();

    // If targetTime has elapsed or is invalid, set a realistic forward date 45 days in the future
    const now = new Date().getTime();
    if (isNaN(targetTime) || targetTime <= now) {
      targetTime = now + (45 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000);
    }

    function updateCountdown() {
      const current = new Date().getTime();
      const difference = targetTime - current;

      if (difference <= 0) {
        DOM.countdownDays.textContent = '00';
        DOM.countdownHours.textContent = '00';
        DOM.countdownMinutes.textContent = '00';
        DOM.countdownSeconds.textContent = '00';
        if (state.countdownInterval) clearInterval(state.countdownInterval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      DOM.countdownDays.textContent = days < 10 ? `0${days}` : days;
      DOM.countdownHours.textContent = hours < 10 ? `0${hours}` : hours;
      DOM.countdownMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
      DOM.countdownSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }

    updateCountdown();
    state.countdownInterval = setInterval(updateCountdown, 1000);
  }

  /* --------------------------------------------------------------------------
     14. Sticky Navbar, Scrollspy & Back-to-Top
     -------------------------------------------------------------------------- */
  function initScrollBehaviors() {
    const sections = document.querySelectorAll('section[id], header[id]');

    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;

      // 1. Sticky Navbar shadow elevation
      if (DOM.mainHeader) {
        DOM.mainHeader.classList.toggle('scrolled', scrollPos > 30);
      }

      // 2. Back to top button visibility
      if (DOM.backToTopBtn) {
        DOM.backToTopBtn.classList.toggle('show', scrollPos > 350);
      }

      // 3. Scrollspy active link highlighter
      let currentSectionId = '';
      sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = section.getAttribute('id');
        }
      });

      if (currentSectionId) {
        DOM.navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${currentSectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });

    // Back to top button action
    if (DOM.backToTopBtn) {
      DOM.backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // Smooth scroll for nav anchor links with header offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerHeight = DOM.mainHeader ? DOM.mainHeader.offsetHeight : 80;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Close mobile menu if open
          closeMobileMenu();
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     15. Mobile Navigation Menu Toggle
     -------------------------------------------------------------------------- */
  function closeMobileMenu() {
    if (DOM.mobileNavMenu && DOM.mobileToggleBtn) {
      DOM.mobileNavMenu.classList.remove('open');
      DOM.mobileNavMenu.setAttribute('aria-hidden', 'true');
      DOM.mobileToggleBtn.classList.remove('open');
      DOM.mobileToggleBtn.setAttribute('aria-expanded', 'false');
    }
  }

  function initMobileMenu() {
    if (!DOM.mobileToggleBtn || !DOM.mobileNavMenu) return;

    DOM.mobileToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = DOM.mobileNavMenu.classList.contains('open');

      if (isOpen) {
        closeMobileMenu();
      } else {
        DOM.mobileNavMenu.classList.add('open');
        DOM.mobileNavMenu.setAttribute('aria-hidden', 'false');
        DOM.mobileToggleBtn.classList.add('open');
        DOM.mobileToggleBtn.setAttribute('aria-expanded', 'true');
      }
    });

    // Close when clicking outside mobile nav menu
    document.addEventListener('click', (e) => {
      if (DOM.mobileNavMenu.classList.contains('open') &&
          !DOM.mobileNavMenu.contains(e.target) &&
          !DOM.mobileToggleBtn.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  /* --------------------------------------------------------------------------
     16. IntersectionObserver Scroll Reveal Animations
     -------------------------------------------------------------------------- */
  function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal:not(.active)');
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('active'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  /* --------------------------------------------------------------------------
     17. Toast Notification System
     -------------------------------------------------------------------------- */
  function showToast(message, type = 'info', duration = 3500) {
    if (!DOM.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconSVG = '';
    if (type === 'success') {
      iconSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    } else if (type === 'warning') {
      iconSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
    } else {
      iconSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    toast.innerHTML = `${iconSVG}<span>${message}</span>`;
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-hide');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, duration);
  }

  /* --------------------------------------------------------------------------
     18. Application Initialization
     -------------------------------------------------------------------------- */
  function init() {
    renderFeaturedEvents();
    renderUpcomingEvents();
    populateRegistrationEventSelect();
    initFiltersAndSearch();
    initModalDismissals();
    initRegistrationForm();
    initCardActionDelegation();
    initHostEventModal();
    initContactForm();
    initCountdownTimer();
    initScrollBehaviors();
    initMobileMenu();
    initScrollAnimations();

    console.log('%c IEM-UEM University Events Portal Engine Initialized Successfully! ', 'background: #0f2b5c; color: #38bdf8; font-weight: bold; padding: 4px 8px; border-radius: 4px;');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
