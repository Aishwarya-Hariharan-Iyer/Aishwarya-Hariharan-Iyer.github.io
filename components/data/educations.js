import { motion } from "framer-motion";
import { FaBook } from 'react-icons/fa';
import { CardSpotlight, Step, CheckIcon} from "../ui/card-spotlight";

export const educations = [
  {
    title: "National University of Singapore",
    category: "Bachelor of Computing, Computer Science (Hons.) & University Scholars Programme",
    src: "/aish-usp.jpg",
    content: (
      <motion.div className="flex items-stretch justify-items-center space-x-4 content-start">
      <CardSpotlight className="h-98 w-98 py-4">
      <p className="text-2xl font-bold relative z-20 mt-2 text-white">
        Academic Milestones
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none  mt-4 text-lg">
          <Step title="GPA: 4.68/5.00; Expected Graduation: May 2025" />
          <Step title="Dr Goh Keng Swee Scholarship by Association of Banks in Singapore" />
          <Step title="Certificate of Distinction in the AI Focus Area" />
          <Step title="Dean’s List AY 23/24 Sem 1" />
          <Step title="Dean’s List AY 23/24 Sem 2" />
          <Step title="USP Honor Roll AY 22/23 Sem 1" />
          <Step title="USP Senior Honor Roll AY 23/24 Sem 1" />
        </ul>
      </div>
    </CardSpotlight>
    
    <CardSpotlight className="h-98 w-98 py-4">
      <p className="text-2xl font-bold relative z-20 mt-2 text-white">
        Notable Activities
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none  mt-4 text-lg">
          <Step title="External Head of Tech. of the Google Developer Student Club at NUS" />
          <Step title="Internal Head of Tech. of the Google Developer Student Club at NUS" />
          <Step title="Head Coordinator of the NUSC Peer Mentorship Programme" />
          <Step title="President of NUS Art of Living committed to creating a stress-free campus" />
          <Step title="Co-Chaired the Technical Interview Preparation in Summer (TIPS) 2023 " />
          <Step title="Contributed to Game Development Team of Source Academy & Cinnabot Team at Tech Directorate, NUSC" />
          <Step title="Authored work published in the USP PLAYSET! Magazine"/>
        </ul>
      </div>
    </CardSpotlight>
    </motion.div>
      )
  },
  {
    title: "City Composite PU College",
    category: "Pre-University Education (Grades XI and XII)",
    src: "/aish-avenger.jpg",
    content: (
      <motion.div className="flex items-stretch justify-items-center flex space-x-4 content-start">
      <CardSpotlight className="h-98 w-98 py-4">
      <p className="text-2xl font-bold relative z-20 mt-2 text-white">
        Academic Milestones
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none  mt-4 text-lg">
          <Step title="Distinction in Grade XII with 100% (600/600 marks)" />
          <Step title="Distinction in Grade XI with 99.5% (597/600 marks)" />
          <Step title="TOEFL iBT score of 120/120" />
          <Step title="AP Scholar with Honor Award with 5/5 in AP Biology, Chemistry, Physics C (E&M)" />
          <Step title="SAT score 1570/1600 (Essay: 7/6/7)" />
          <Step title="SAT Subject Tests - Biology Molecular, Math Level 2, Physics: 800/800" />
          <Step title="AP Scholar with Honor Award, SAT India Top Performer 2021" />
        </ul>
      </div>
    </CardSpotlight>
    
    <CardSpotlight className="h-98 w-98 py-4">
      <p className="text-2xl font-bold relative z-20 mt-2 text-white">
        Notable Activities
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none  mt-4 text-lg">
          <Step title="Authored poetry book Cobwebs Of The Cosmos (2020) with 62 poems" />
          <Step title="Presented work on incidence of dengue with an ecological perspective in LAKE 2020" />
          <Step title="Head Coordinator of the NUSC Peer Mentorship Programme" />
          <Step title="President of NUS Art of Living committed to creating a stress-free campus" />
          <Step title="Co-Chaired the Technical Interview Preparation in Summer (TIPS) 2023 " />
          <Step title="3rd author of first-prize winning paper on 'Land-Use Dynamics in Sacred Groves' in LAKE 2020" />
          <Step title="Founded and headed digital magazine for creative catharsis during the pandemic" />
          <Step title="Member of Commonwealth Students' Welfare Group of India, RCS branch in India" />
          <Step title="Participated in The Asian Youth Interaction Session for the UN Food Systems Summit" />
        </ul>
      </div>
    </CardSpotlight>
    </motion.div>
    )
  },
  {
    title: "Presidency School Bangalore South",
    category: "Central Board of Secondary Education (Upto Grade X)",
    src: "/aish-republic.jpg",
    content: (
      <motion.div className="flex items-stretch justify-items-center flex space-x-4 content-start">
      <CardSpotlight className="h-98 w-98 py-4">
      <p className="text-2xl font-bold relative z-20 mt-2 text-white">
        Academic Milestones
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none  mt-4 text-lg">
          <Step title="National Rank III, State Rank II and City Rank I in All India Senior School Certificate Examination (Grade X)" />
          <Step title="Grade X: 99.4% (497/500 marks)" />
          <Step title="Grade IX: 99%" />
          <Step title="Invited by the Govt. of India as part of Meritorious Students of India to witness the Republic Day Parade 2020 from the PM's Box" />
          <Step title="Special Student of the School Award" />
        </ul>
      </div>
    </CardSpotlight>
    
    <CardSpotlight className="h-98 w-98 py-4">
      <p className="text-2xl font-bold relative z-20 mt-2 text-white">
        Notable Activities
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none  mt-4 text-lg">
          <Step title="Sahyadri Young Ecologist Award 2018 for the paper presented at LAKE 2018 Conference by IISc" />
          <Step title="Authored poetry book Incandescence (2018) which has 42 poems" />
          <Step title="Gold Award in The Queen's Commonwealth Essay Competition 2018, Silver in 2017" />
          <Step title="Best and Outstanding Delegate Awards at PRESMUN 2018 and PRESMUN 2019" />
        </ul>
      </div>
    </CardSpotlight>
    </motion.div>
    )
  }
];
