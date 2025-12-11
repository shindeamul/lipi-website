import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin } from "lucide-react";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import PersonModal from "@/components/about/PersonModal";

interface Person {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  fullBio?: string;
  location?: string;
  email?: string;
}

const teamMembers: Person[] = [
  {
    name: "Sagar Anisingaraju",
    role: "Founder & CEO",
    bio: "Passionate about bridging traditional Indian knowledge with modern technology.",
    fullBio: "Passionate about bridging traditional Indian knowledge with modern technology. Leading Lipi's mission to make cultural learning accessible and engaging. With over 15 years of experience in technology and education, Sagar envisions a world where ancient wisdom meets modern innovation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    location: "Hyderabad, India"
  },
  {
    name: "Priya Sharma",
    role: "Content Lead",
    bio: "Expert in Indian languages and cultural content creation.",
    fullBio: "Expert in Indian languages and cultural content creation. Ensuring authenticity and quality in every game experience. Priya holds a PhD in Sanskrit literature and has authored multiple books on Indian mythology for young readers.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    location: "Mumbai, India"
  },
  {
    name: "Rahul Verma",
    role: "Tech Lead",
    bio: "Building the AI-powered platform that makes learning interactive.",
    fullBio: "Building the AI-powered platform that makes learning interactive and fun for millions of users worldwide. Rahul brings expertise from leading tech companies and a deep passion for using technology to preserve cultural heritage.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    location: "Bangalore, India"
  },
  {
    name: "Ananya Reddy",
    role: "Design Director",
    bio: "Crafting visual experiences that honor tradition while embracing modernity.",
    fullBio: "Crafting visual experiences that honor tradition while embracing modernity. Ananya's designs bring ancient stories to life with stunning visuals that resonate with audiences across generations.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    location: "Chennai, India"
  },
  {
    name: "Vikram Patel",
    role: "Game Developer",
    bio: "Creating engaging gameplay mechanics that make learning addictive.",
    fullBio: "Creating engaging gameplay mechanics that make learning addictive. With a background in game design from top studios, Vikram ensures every Lipi game is both educational and entertaining.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    location: "Pune, India"
  },
  {
    name: "Meera Krishnan",
    role: "Marketing Head",
    bio: "Spreading the word about Lipi's mission to global audiences.",
    fullBio: "Spreading the word about Lipi's mission to global audiences. Meera's strategic marketing initiatives have helped Lipi reach millions of users who are now reconnecting with their cultural roots.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    location: "Delhi, India"
  },
];

const advisors: Person[] = [
  {
    name: "Dr. Ramesh Iyer",
    role: "Strategic Advisor",
    bio: "Bringing decades of experience in education technology.",
    fullBio: "Bringing decades of experience in education technology and cultural preservation initiatives. Dr. Iyer has advised numerous startups and government bodies on integrating technology with traditional learning methods.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    location: "San Francisco, USA"
  },
  {
    name: "Prof. Lakshmi Menon",
    role: "Cultural Advisor",
    bio: "Expert in Indian mythology and ancient texts.",
    fullBio: "Expert in Indian mythology and ancient texts, ensuring scholarly accuracy in content. Professor Menon has spent 30 years studying and teaching the Mahabharata and Ramayana at prestigious universities worldwide.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    location: "Varanasi, India"
  },
  {
    name: "Arjun Nair",
    role: "Business Advisor",
    bio: "Serial entrepreneur with multiple successful exits.",
    fullBio: "Serial entrepreneur with multiple successful exits in the edtech and gaming space. Arjun provides strategic guidance on scaling Lipi to reach a global audience while maintaining its cultural authenticity.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    location: "Singapore"
  },
  {
    name: "Dr. Sunita Rao",
    role: "Language Advisor",
    bio: "Linguist specializing in Indian languages and scripts.",
    fullBio: "Linguist specializing in Indian languages and scripts. Dr. Rao ensures that Lipi's word games maintain linguistic accuracy across all supported languages while being accessible to learners of all levels.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    location: "London, UK"
  },
];

const PersonCard = ({ 
  person, 
  index, 
  onClick 
}: { 
  person: Person; 
  index: number;
  onClick: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group relative cursor-pointer"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02]">
        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 60%)" }} />
        
        <motion.div
          className="relative z-10"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-24 h-24 mx-auto mb-4">
            <motion.img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover rounded-full border-2 border-primary/30"
              whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/50 to-transparent" />
          </div>
          
          <h3 className="text-lg font-semibold text-foreground mb-1 text-center">{person.name}</h3>
          <p className="text-primary text-sm mb-2 text-center">{person.role}</p>
          <p className="text-foreground/70 text-xs leading-relaxed text-center line-clamp-2">{person.bio}</p>
          
          <motion.div
            className="mt-4 flex justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="inline-flex items-center gap-1.5 text-foreground/60 hover:text-primary transition-colors text-xs">
              <Linkedin size={14} />
              View Profile
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePersonClick = (person: Person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, hsl(215 40% 8%) 0%, hsl(215 50% 15%) 50%, hsl(200 55% 20%) 100%)"
        }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section 
        ref={contentRef}
        className="py-16 sm:py-24"
        style={{
          background: "linear-gradient(180deg, hsl(200 55% 20%) 0%, hsl(200 50% 25%) 100%)"
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.p
              className="text-foreground/90 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold">Lipi Epics and Word Games</span> is a unique learning and gamification platform dedicated to celebrating Indian epics, languages and cultural values. The focus of our current version is on the Mahabharat, the timeless Indian epic, while also offering engaging word games in Indian languages and English.
            </motion.p>

            <motion.p
              className="text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Globally, curricula of education systems rarely include ancient epics and the profound wisdom they offer. As a result, only a limited audience are able to access the benefits of invaluable lessons from texts such as the Mahabharat, Ramayana, Gita, and Vedas.
            </motion.p>

            <motion.p
              className="text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Lipi Epics and Word Games bridges this gap by offering a platform for Indian languages with word games and culturally rich learning experiences. AI-powered high-quality gamified visual content makes learning interactive and fun for youth to explore epics, culture and values systematically using mobile devices.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        className="py-20 sm:py-28"
        style={{
          background: "linear-gradient(180deg, hsl(200 50% 25%) 0%, hsl(215 45% 18%) 100%)"
        }}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Team
          </motion.h2>
          <motion.p
            className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Click on any team member to learn more about them
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
            {teamMembers.map((member, index) => (
              <PersonCard 
                key={member.name + index} 
                person={member} 
                index={index}
                onClick={() => handlePersonClick(member)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section 
        className="py-20 sm:py-28"
        style={{
          background: "linear-gradient(180deg, hsl(215 45% 18%) 0%, hsl(215 40% 12%) 100%)"
        }}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Advisors
          </motion.h2>
          <motion.p
            className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Industry experts guiding our vision
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {advisors.map((advisor, index) => (
              <PersonCard 
                key={advisor.name + index} 
                person={advisor} 
                index={index}
                onClick={() => handlePersonClick(advisor)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Person Modal */}
      <PersonModal 
        person={selectedPerson}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default About;
