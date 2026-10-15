export type ProjectGroup = "ecommerce" | "business" | "healthcare" | "media";

export type ProjectDetails = {
  tagline: string;
  overview: string;
  role: string;
  type: string;
  status: string;
  metrics?: { value: string; label: string }[];
  challenge?: string;
  featuresTitle: string;
  features: { title: string; text: string }[];
  result?: { title: string; points: string[] };
  stack: string[];
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  category: string;
  title: string;
  description: string;
  stack: string[];
  group: ProjectGroup;
  link?: string;
  images?: ProjectImage[];
  details?: ProjectDetails;
};

export function getDomain(link: string) {
  return new URL(link).hostname.replace(/^www\./, "");
}

export const projects: Project[] = [
  {
    category: "AI · Film & Media",
    title: "ONE WORLD 3D",
    description: "Turns written stories into cinematic reels with AI images, voice, and video.",
    stack: ["Django", "React", "Celery", "OpenAI"],
    group: "media",
    link: "https://oneworld3d.ai/",
    images: [
      {
        src: "/projects/oneworld/character.png",
        alt: "ONE WORLD 3D character page for Dr. Elara Voss with two AI-generated portraits and their prompts",
        caption: "Character page — AI-generated portraits from the story's description",
      },
      {
        src: "/projects/oneworld/story.png",
        alt: "ONE WORLD 3D story dashboard listing characters, locations, assets with budgets, and sequences",
        caption: "Story breakdown — characters, locations, assets, and sequences",
      },
      {
        src: "/projects/oneworld/gallery.png",
        alt: "ONE WORLD 3D visual gallery showing every character, location, and asset of a story",
        caption: "Visual gallery — the whole cast and world in one view",
      },
      {
        src: "/projects/oneworld/assets.png",
        alt: "ONE WORLD 3D asset list with estimated costs and buttons to assign talent and departments",
        caption: "Asset budgeting — cost estimates with talent and department assignment",
      },
      {
        src: "/projects/oneworld/departments.png",
        alt: "ONE WORLD 3D departments table from concept art and modeling to lighting and render farm",
        caption: "Production departments — concept art to final render",
      },
    ],
    details: {
      tagline: "From script to screen — AI-powered cinematic production in one platform.",
      overview:
        "A SaaS platform that lets creators turn a written story into a fully produced reel — complete with AI-generated images, voice-overs, video clips, and background music. I worked across both the Django REST backend and the React studio interface.",
      role: "Full-stack developer",
      type: "SaaS platform",
      status: "Live",
      metrics: [
        { value: "5", label: "AI services connected" },
        { value: "4", label: "AI production agents" },
        { value: "2", label: "Payment gateways" },
      ],
      featuresTitle: "What I built",
      features: [
        {
          title: "Story to scenes",
          text: "AI reads a raw script and pulls out characters, locations, scenes, and shots.",
        },
        {
          title: "AI media generation",
          text: "Images, voices, and video through OpenAI, Gemini, ElevenLabs, and fal.ai.",
        },
        {
          title: "AI studio agents",
          text: "Producer, Budget, Continuity, and SFX agents that run the production workflow.",
        },
        {
          title: "3D models",
          text: "Characters and assets converted into 3D models with Meshy AI.",
        },
        {
          title: "Billing & credits",
          text: "Stripe and PayPal subscriptions with a credit ledger.",
        },
        {
          title: "Secure & scalable",
          text: "JWT login, role-based access, Celery + Redis background jobs, and AWS S3 media storage.",
        },
      ],
      stack: [
        "Django",
        "DRF",
        "React",
        "Redux",
        "Celery",
        "Redis",
        "MySQL",
        "OpenAI",
        "ElevenLabs",
        "fal.ai",
        "Stripe",
        "PayPal",
        "AWS S3",
      ],
    },
  },
  {
    category: "E-commerce",
    title: "Artroom by Artjazz",
    description: "Art store with gallery, wishlist, cart, and PayPal checkout.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "PayPal"],
    group: "ecommerce",
    link: "https://artroombyartjazz.com",
    images: [
      {
        src: "/projects/artroom/home.png",
        alt: "Artroom by Artjazz home page with the studio philosophy quote and a contact form",
        caption: "Home page — studio philosophy and quick contact",
      },
      {
        src: "/projects/artroom/contact.png",
        alt: "Artroom by Artjazz contact page with an enquiry form and studio details",
        caption: "Contact page — enquiries go straight to the artist",
      },
      {
        src: "/projects/artroom/shop.png",
        alt: "Artroom by Artjazz shop page and site footer",
        caption: "Shop page and footer",
      },
    ],
    details: {
      tagline: "A complete online art store, built from scratch for a US-based artist.",
      overview:
        "A production-ready e-commerce platform where the artist showcases and sells original artwork. I built the whole product — storefront, backend, payments, and admin panel — and deployed it live.",
      role: "Full-stack developer",
      type: "Freelance · US client",
      status: "Live",
      featuresTitle: "What I built",
      features: [
        {
          title: "Custom gallery",
          text: "Product gallery and collections designed around the artwork.",
        },
        {
          title: "Wishlist & cart",
          text: "A smooth shopping flow that works well on every screen size.",
        },
        {
          title: "Live PayPal payments",
          text: "Secure checkout with PayPal, running in production.",
        },
        {
          title: "Price on Request",
          text: "For special pieces, buyers send an enquiry that arrives as an email lead.",
        },
        {
          title: "Admin panel",
          text: "Full control over products, collections, and image uploads to AWS S3.",
        },
        {
          title: "Cloud deployment",
          text: "FastAPI on AWS EC2 with PostgreSQL (RDS) and Nginx; Next.js frontend on Hostinger.",
        },
      ],
      stack: [
        "Next.js 15",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "AWS EC2",
        "AWS S3",
        "PayPal API",
        "Nginx",
      ],
    },
  },
  {
    category: "CRM",
    title: "AgencyFlow CRM",
    description: "One CRM for agency pipelines, client delivery, and GST invoicing.",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    group: "business",
    link: "https://agencyflow-frontend-lac.vercel.app/",
    images: [
      {
        src: "/projects/agencyflow/dashboard.png",
        alt: "AgencyFlow owner dashboard with revenue, profit, pipeline, expenses and team performance cards",
        caption: "Owner dashboard — revenue, profit, pipeline, and growth at a glance",
      },
      {
        src: "/projects/agencyflow/deals.png",
        alt: "AgencyFlow deals board with qualification, proposal, negotiation, won and lost stages",
        caption: "Deals pipeline — drag deals across stages",
      },
      {
        src: "/projects/agencyflow/lead.png",
        alt: "AgencyFlow lead detail page with lead information, attachments and activity log",
        caption: "Lead details — follow-ups, activities, notes, and files",
      },
      {
        src: "/projects/agencyflow/project.png",
        alt: "AgencyFlow project page with task progress, project time, and expenses and profit",
        caption: "Project view — tasks, time, expenses, and profit",
      },
      {
        src: "/projects/agencyflow/calendar.png",
        alt: "AgencyFlow calendar with colour-coded meetings, calls, tasks and follow-ups",
        caption: "Calendar — meetings, calls, deadlines, and follow-ups",
      },
      {
        src: "/projects/agencyflow/login.png",
        alt: "AgencyFlow login page with Google sign-in and email sign-in",
        caption: "Login with Google or email",
      },
    ],
    details: {
      tagline: "Run your entire agency from one place.",
      overview:
        "A multi-tenant CRM for agencies that connects the whole workflow — leads, deals, clients, projects, GST invoicing, and team management — in one workspace, with a live dashboard that shows how the business is doing.",
      role: "Full-stack developer",
      type: "SaaS CRM",
      status: "Live",
      featuresTitle: "What I built",
      features: [
        {
          title: "Owner dashboard",
          text: "Revenue, profit, pipeline, expenses, cash flow, and month-over-month growth.",
        },
        {
          title: "Leads & deals",
          text: "Lead tracking with follow-ups and activity logs, and a drag-and-drop deals pipeline.",
        },
        {
          title: "Clients & projects",
          text: "360° client view, project tasks, documents, time, and profit per project.",
        },
        {
          title: "GST billing",
          text: "India-first invoicing with CGST / IGST, plus expense tracking.",
        },
        {
          title: "Calendar",
          text: "Colour-coded meetings, calls, deadlines, invoices, and follow-ups.",
        },
        {
          title: "Secure workspaces",
          text: "Separate workspace per agency, role-based access, and Google or email login.",
        },
      ],
      stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Google OAuth"],
    },
  },
  {
    category: "E-commerce",
    title: "Wildwood Carvings",
    description: "Online store for handcrafted wooden showpieces.",
    stack: ["Next.js", "Django", "Tailwind CSS"],
    group: "ecommerce",
    link: "https://www.wildwoodcarvings.com/",
    images: [
      {
        src: "/projects/wildwood/home.png",
        alt: "Wildwood Carvings home page with a product category slider and a 20 percent off sign-up offer",
        caption: "Home page — category slider and sign-up offer",
      },
      {
        src: "/projects/wildwood/products.png",
        alt: "Wildwood Carvings popular products section with handcrafted wooden figurines",
        caption: "Popular products with Home and Decor tabs",
      },
      {
        src: "/projects/wildwood/shop.png",
        alt: "Wildwood Carvings shop page with category and price filters and low-stock badges",
        caption: "Shop — categories, price filter, and stock alerts",
      },
      {
        src: "/projects/wildwood/product.png",
        alt: "Wildwood Carvings product page with an image gallery, price, reviews and add to cart",
        caption: "Product page — photo gallery, reviews, and sharing",
      },
      {
        src: "/projects/wildwood/cart.png",
        alt: "Wildwood Carvings cart with quantities, tax, grand total and a coupon code field",
        caption: "Cart with tax and discount coupons",
      },
      {
        src: "/projects/wildwood/reviews.png",
        alt: "Wildwood Carvings customer reviews slider with product photos",
        caption: "Customer reviews with photos",
      },
    ],
    details: {
      tagline: "An online store for hand-carved wooden sculptures and home decor.",
      overview:
        "A complete e-commerce website for a woodcarving artist who sells handmade figurines, candle holders, and decor. Customers can browse the catalogue, read reviews, and check out, while the shop also supports wholesale buyers.",
      role: "Full-stack developer",
      type: "E-commerce store",
      status: "Live",
      featuresTitle: "What I built",
      features: [
        {
          title: "Shop & filters",
          text: "Catalogue of 91 products with categories, price filter, sorting, and grid or list view.",
        },
        {
          title: "Product pages",
          text: "Photo galleries, stock alerts like “Only 3 left”, ratings, and social sharing.",
        },
        {
          title: "Cart & checkout",
          text: "Quantity updates, tax, discount coupons, and saved addresses at checkout.",
        },
        {
          title: "Customer accounts",
          text: "Dashboard with orders, addresses, wishlist, and account details.",
        },
        {
          title: "Wholesale pricing",
          text: "Separate wholesale status and pricing for trade buyers.",
        },
        {
          title: "Reviews & blog",
          text: "Customer reviews with photos, a blog, and a link to the artist's Etsy store.",
        },
      ],
      stack: ["Next.js", "Django", "Tailwind CSS"],
    },
  },
  {
    category: "HR & Admin",
    title: "Smart HR Management",
    description: "Dashboard for employees, attendance, leave, hiring, and payroll.",
    stack: ["Next.js", "Django", "Tailwind CSS"],
    group: "business",
    link: "https://hrms-theta-teal.vercel.app/",
    images: [
      {
        src: "/projects/smart-hr/dashboard.png",
        alt: "Smart HR admin dashboard with employee, department, leave, payroll, attendance and recruitment stats",
        caption: "Admin dashboard — employees, leave, payroll, and hiring at a glance",
      },
      {
        src: "/projects/smart-hr/overview.png",
        alt: "Smart HR overview with employee status, attendance chart, leave status and recruitment statistics",
        caption: "Employee, attendance, and leave overview",
      },
      {
        src: "/projects/smart-hr/departments.png",
        alt: "Smart HR departments table with nested designations and employee counts",
        caption: "Departments with nested designations",
      },
      {
        src: "/projects/smart-hr/leave.png",
        alt: "Smart HR leave types table with maximum days and paid or unpaid status",
        caption: "Leave policies — paid and unpaid leave types",
      },
      {
        src: "/projects/smart-hr/salary.png",
        alt: "Smart HR salary records with basic salary, HRA, allowances, deductions, gross and net salary",
        caption: "Salary templates and payslip generation",
      },
      {
        src: "/projects/smart-hr/login.png",
        alt: "Smart HR login page with playful illustrated characters",
        caption: "Login page",
      },
    ],
    details: {
      tagline: "Everything HR needs — people, leave, payroll, and hiring — in one dashboard.",
      overview:
        "An HR management system for companies to manage employees from hiring to payroll. Admins get a live dashboard and simple tools for departments, attendance, leave, salaries, job openings, and announcements.",
      role: "Full-stack developer",
      type: "HR management system",
      status: "Live",
      featuresTitle: "What I built",
      features: [
        {
          title: "Live dashboard",
          text: "Employees, departments, leave requests, payroll, attendance, and recruitment in one view.",
        },
        {
          title: "Employees & departments",
          text: "Employee onboarding, active / inactive status, and departments with designations.",
        },
        {
          title: "Attendance & leave",
          text: "Daily attendance, leave policies with paid or unpaid types, and leave approvals.",
        },
        {
          title: "Payroll",
          text: "Salary templates with basic pay, HRA, allowances, and deductions, plus payslip generation.",
        },
        {
          title: "Recruitment",
          text: "Job openings and application tracking with status.",
        },
        {
          title: "Announcements",
          text: "Company-wide announcements and in-app notifications.",
        },
      ],
      stack: ["Next.js", "Django", "Tailwind CSS"],
    },
  },
  {
    category: "Healthcare",
    title: "Patient Batch Loader",
    description: "Patient-file validation with 25+ rule fixes, duplicate checks, and SFTP retries.",
    stack: ["FastAPI", "PostgreSQL", "Kafka", "AWS S3"],
    group: "healthcare",
    details: {
      tagline: "Bulk patient-file processing for a medication-history platform.",
      overview:
        "A production Python microservice for a US healthcare technology company. Healthcare providers submit patient files, and the service handles everything — upload, validation, de-duplication, medication-history lookup, and delivering results back to the client.",
      role: "Python backend developer",
      type: "Healthcare microservice",
      status: "In production",
      metrics: [
        { value: "25+", label: "Business-rule gaps fixed" },
        { value: "22", label: "New unit tests" },
        { value: "6/6", label: "Code-review findings resolved" },
      ],
      challenge:
        "The service was ported from an older Oracle PL/SQL system, but it no longer behaved like the original. I compared both line by line and found where the Python version was missing rules or doing things differently.",
      featuresTitle: "Key fixes",
      features: [
        {
          title: "Accurate file status",
          text: "Files were stuck at “in progress” forever — the final status update was missing.",
        },
        {
          title: "No double processing",
          text: "Fixed the duplicate-file filter and added the missing guard against processing two files at once.",
        },
        {
          title: "Correct notifications",
          text: "Status notifications now go out after validation, matching the original system.",
        },
        {
          title: "Stable SFTP retries",
          text: "The retry loop no longer treats normal errors as connection failures and crashes.",
        },
      ],
      result: {
        title: "Result",
        points: [
          "Patient records now show the correct processing state.",
          "Medication-history queries and file notifications work reliably again.",
        ],
      },
      stack: [
        "Python",
        "FastAPI",
        "SQLModel",
        "PostgreSQL",
        "Apache Kafka",
        "AWS S3",
        "Elasticsearch",
        "SFTP",
        "pytest",
        "GitLab CI/CD",
      ],
    },
  },
  {
    category: "Healthcare",
    title: "License Sync Service",
    description: "Replaced a legacy PHP/Oracle system — 135 tests at 99% coverage.",
    stack: ["Python", "FastAPI", "PostgreSQL", "pytest"],
    group: "healthcare",
    details: {
      tagline: "A legacy PHP and Oracle system rebuilt as a modern, tested Python service.",
      overview:
        "This service keeps contract, practice, and user-license data in sync between an ERP (NetSuite) and a healthcare e-prescribing platform. I rebuilt the old system as a clean FastAPI service on PostgreSQL while keeping the same business behaviour.",
      role: "Python backend developer",
      type: "Legacy modernization",
      status: "In code review",
      metrics: [
        { value: "~10K", label: "Lines of legacy code mapped" },
        { value: "48", label: "Database tables rebuilt" },
        { value: "99%", label: "Test coverage (135 tests)" },
      ],
      challenge:
        "About 10,000 lines of untested PHP and PL/SQL, no table definitions anywhere, hard-coded credentials, and an end-of-life stack that was hard to maintain.",
      featuresTitle: "What I built",
      features: [
        {
          title: "Two-way sync",
          text: "Downloads data from NetSuite with validation, and uploads only the records that really changed.",
        },
        {
          title: "Data reconciliation",
          text: "A tool that compares tables between systems and reports differences.",
        },
        {
          title: "Automation",
          text: "Scheduled jobs, email alerts, and a pre-upload check replace the old Windows scripts.",
        },
        {
          title: "Security",
          text: "API-key authentication, safe error handling, and secrets moved out of the code.",
        },
      ],
      result: {
        title: "Bugs found & fixed",
        points: [
          "Old changes were re-uploaded on every run.",
          "A slow full-table scan replaced with a targeted lookup.",
          "Unsafe text in notification emails (HTML injection).",
        ],
      },
      stack: [
        "Python 3.13",
        "FastAPI",
        "SQLModel",
        "PostgreSQL",
        "Alembic",
        "NetSuite SOAP",
        "APScheduler",
        "pytest",
        "Ruff",
      ],
    },
  },
];
