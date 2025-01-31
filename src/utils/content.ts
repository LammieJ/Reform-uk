export interface GeneratedContent {
  home: {
    hero: {
      text: string;
      image: string;
    };
    about: {
      text: string;
      image: string;
    };
    priorities: string[];
    keyIssues: {
      economy: string;
      safety: string;
      housing: string;
    };
  };
  about: {
    hero: {
      title: string;
      text: string;
      image: string;
    };
    mission: {
      title: string;
      text: string;
      points: string[];
    };
    team: {
      title: string;
      text: string;
      members: Array<{
        name: string;
        role: string;
        bio: string;
        image: string;
      }>;
    };
    values: {
      title: string;
      text: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
  };
  events: {
    intro: string;
  };
  join: {
    intro: string;
    benefits: string;
    image: string;
  };
  news: {
    intro: string;
    featured: string;
  };
  contact: {
    intro: string;
    methods: string;
  };
}

const content: GeneratedContent = {
  home: {
    hero: {
      text: "Join us in making real change in Erdington. We're committed to cutting taxes, reducing net migration to zero, protecting our NHS, and bringing common sense back to local governance. Together, we can build a stronger, more prosperous community where your voice matters and your vote counts.",
      image: "/images/hero.jpg"
    },
    about: {
      text: "ReformUK Erdington is your local voice for national reform. We're fighting for a 5-point plan: cutting taxes, reducing net migration to zero, reforming the NHS, tackling crime, and delivering growth. Our contract with you puts these commitments at the heart of everything we do.",
      image: "/images/about.jpg"
    },
    priorities: [
      "Cut taxes to boost local businesses and help families keep more of their money",
      "Support NHS reform to cut waiting lists and improve healthcare access",
      "Back zero net migration to protect local services and housing",
      "Fight crime with more police on our streets",
      "Drive economic growth through tax cuts and deregulation",
      "Revitalize Erdington High Street with business-friendly policies",
      "Protect local services from excessive demand",
      "Ensure housing development serves local needs first"
    ],
    keyIssues: {
      economy: "We're committed to cutting taxes and reducing red tape to help Erdington's businesses thrive. Our plan includes a 50% business rates cut, lower income tax, and simplified regulations to boost local enterprise and create jobs through practical, common-sense policies.",
      safety: "Community safety is essential. We're pushing for increased police presence, tougher sentencing, and effective community-led initiatives. Our approach combines Reform UK's commitment to law and order with local action to make Erdington safer.",
      housing: "Everyone deserves affordable housing. We're advocating for practical solutions that prioritize local needs, focusing on both new housing and improving existing stock while ensuring our infrastructure can support development. Our zero net migration policy will help reduce pressure on local housing."
    }
  },
  about: {
    hero: {
      title: "About ReformUK Erdington",
      text: "We are your local Reform UK branch, committed to delivering our Contract with You through practical, common-sense solutions. Our focus is on cutting taxes, supporting the NHS, reducing net migration to zero, and making Erdington a better place for everyone.",
      image: "/images/about-hero.jpg"
    },
    mission: {
      title: "Our Mission",
      text: "ReformUK Erdington exists to implement real reform at both national and local levels. We believe in practical solutions that work for our community while delivering Reform UK's 5-point plan for positive change.",
      points: [
        "Cut taxes to boost economic growth and help families",
        "Reform the NHS to slash waiting lists",
        "Reduce net migration to zero",
        "Fight crime and support law enforcement",
        "Drive local economic growth through deregulation",
        "Protect and enhance our local services"
      ]
    },
    team: {
      title: "Our Team",
      text: "Meet the dedicated individuals working to make Erdington better for everyone.",
      members: [
        {
          name: "Sarah Thompson",
          role: "Branch Coordinator",
          bio: "A lifelong Erdington resident with 15 years of community organizing experience.",
          image: "/images/team/sarah.jpg"
        },
        {
          name: "James Wilson",
          role: "Community Outreach",
          bio: "Former local business owner passionate about economic regeneration.",
          image: "/images/team/james.jpg"
        },
        {
          name: "Dr. Amira Patel",
          role: "Policy Advisor",
          bio: "Healthcare professional focused on improving local services.",
          image: "/images/team/amira.jpg"
        }
      ]
    },
    values: {
      title: "Our Values",
      text: "These core principles guide everything we do in our mission to reform Erdington.",
      items: [
        {
          title: "Common Sense Solutions",
          description: "We believe in practical, straightforward approaches to solving local and national challenges, guided by our Contract with You."
        },
        {
          title: "Accountability",
          description: "We hold ourselves and others to the highest standards of transparency and responsibility in public service."
        },
        {
          title: "Community First",
          description: "We prioritize the needs of local residents while supporting national reform objectives."
        },
        {
          title: "Delivery Focused",
          description: "We focus on achievable changes that make a real difference to people's lives, backed by clear commitments and timelines."
        }
      ]
    }
  },
  events: {
    intro: "Stay connected with ReformUK Erdington's activities. Whether you're interested in national reform campaigns or local initiatives, find the perfect way to get involved and help deliver our Contract with You."
  },
  join: {
    intro: "Join ReformUK Erdington and be part of the change. Together we can implement our 5-point plan and make a real difference in our community.",
    benefits: "Get involved in local and national campaigns, help deliver our Contract with You, attend exclusive events, and build a better future for Erdington.",
    image: "/images/join.jpg"
  },
  news: {
    intro: "Stay updated with the latest news from ReformUK Erdington and our national campaign for real change.",
    featured: "Latest updates on our fight for lower taxes, NHS reform, zero net migration, and safer communities."
  },
  contact: {
    intro: "Get in touch with ReformUK Erdington. We're here to listen and work together to deliver our Contract with You.",
    methods: "Email, phone, or visit us at our local office."
  }
};

export function getContent(): GeneratedContent {
  return content;
}
