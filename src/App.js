import React from 'react';
import './App.css';
import Name from './component/name/Name';
import Title from './component/title/Title';
import Description from './component/description/Description';
import Navigation from './component/navigation/Navigation';
import Contact from './component/contact/Contact';
import Paragraph from './component/paragraph/Paragraph';
import Experience from './component/experience/Experience';
import Skillset from './component/experience/Skillset';
import Skill from './component/experience/Skill';
import SectionHeading from './component/section_heading/SectionHeading';
import ProjectSet from './component/experience/ProjectSet';
import Project from './component/experience/Project';

function App() {
  return (
    <main>
      <section>
        <section className='fixed-container'>
          <Name name="R Judd Celis"/>
          <Title title="Software Developer at Freelance"/>
          <Description width={450} content="I transform webpage designs into a working webpage using HTML and CSS."/>
          <Navigation/>
          <Contact/>
        </section>
      </section>
      <section>
        <Paragraph>
          For several years ago I decided to take up <b>Information Technology</b> as my college degree just out of curiosity how softwares were made.
          The days and years were certainly long and the journey was not easy, but I am glad that it was through and the learnings I have acquired were 
          tremendous and extremely helpful.
        </Paragraph>
        <Paragraph>
          Over the years I have had several opportunities to participate in <b>projects</b> whether in <b>team collaboration</b> or <b>solo</b>. I also have had the chance 
          to meet some amazing people who have contributed directly or indirectly to my growth and skillset, and for that I am deeply grateful and feel indebted in some ways. 
        </Paragraph> 
        <Paragraph>
          Aside from tinkering with anything technology related, I love to do <b>volunteer work</b>. In fact I do a lot of volunteering at our church and helping just in general 
          whenever it is warranted. When I have spare time I also do enjoy <b>reading non fiction books</b>.
        </Paragraph>
        <Paragraph>
          Feel free to <b>contact me</b>.
        </Paragraph>
        {/* Education Section */}
        <SectionHeading title="Education" link="https://usls.edu.ph/"/>
        <Experience
          from="2012"
          to="2016"
          title="BSIT"
          work="University of St. La Salle"
          description="Earned my four year Bachelors Degree in Information Technology in this university. Throughout, I have learned relevant skills and knowledge that would help me as a professional.">
          <Skillset>
            <Skill name="OOAD"/>
            <Skill name="Java"/>
            <Skill name="PHP"/>
            <Skill name="Programming Fundamentals"/>
            <Skill name="Database Modeling"/>
            <Skill name="MySQL"/>
            <Skill name="SAP"/>
          </Skillset>
        </Experience>
        {/*Experience Section*/}
        <SectionHeading title="Experience" link=""/>
        <Experience
          from="AUG 2015"
          to="FEB 2016"
          title="Web Developer"
          work="University of St. La Salle IT Center"
          description="Developed and maintained web based ticketing system for the IT Center of the university to resolve and handle internal issues more efficiently.
          The system has the capability to sort and prioritize issues based on its severity.">
          <Skillset>
            <Skill name="HTML"/>
            <Skill name="CSS"/>
            <Skill name="Materialize CSS"/>
            <Skill name="VS Code"/>
            <Skill name="MySQL"/>
            <Skill name="Git"/>
          </Skillset>
        </Experience>
        <Experience
          from="APR 2016"
          to="SEP 2016"
          title="Image Editor and Content Writer"
          work="G.O Green Enterprises"
          description="Responsible for processing the images to be put on PlumbersStock.com and likewise was responsible for creating product content.">
          <Skillset>
            <Skill name="Adobe Photoshop"/>
            <Skill name="MS Excel"/>
            <Skill name="MS Word"/>
          </Skillset>
        </Experience>
        <Experience
          from="MAR 2017"
          to="MAR 2019"
          title="Missionary"
          work="The Church of Jesus Christ of Latter Day Saints"
          description="In charge of training new missionaries in the field and was likewise assigned to
          several leadership position whose main task was to be in charge of the overall
          planning and leading weekly meetings.">
        </Experience>
        <Experience
          from="OCT 2019"
          to="APR 2020"
          title="Frontend Developer"
          work="Binary Anvil"
          description="Responsible for translating and implementing the webpage designs from Figma onto a working HTML and CSS onto the Magento Platform.">
          <Skillset>
            <Skill name="HTML"/>
            <Skill name="Magento 2.0"/>
            <Skill name="CSS"/>
            <Skill name="LESS"/>
            <Skill name="Vagrant"/>
            <Skill name="Figma"/>
            <Skill name="PHP Storm"/>
            <Skill name="Git"/>
          </Skillset>
        </Experience>
        <Experience
          from="JAN 2023"
          to="MAY 2023"
          title="Mobile Applications Developer"
          work="Freelance"
          description="Developed and maintained a mobile app for elementary students to help their subject mastery in preparation for yearly examination.">
          <ProjectSet>
            <Project name="Sidlak" link="https://github.com/keyboardhit212/Sidlak"/>
          </ProjectSet>
          <Skillset>
            <Skill name="Flutter"/>
            <Skill name="Android Studio"/>
            <Skill name="SQLite"/>
          </Skillset>
        </Experience>
      </section>
    </main>
  );
}

export default App;
