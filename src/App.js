import React from 'react';
import './App.css';
import Name from './component/name/Name';
import Title from './component/title/Title';
import Description from './component/description/Description';
import Navigation from './component/navigation/Navigation';
import Contact from './component/contact/Contact';
import Paragraph from './component/paragraph/Paragraph';

function App() {
  return (
    <main>
      <section>
        <section className='fixed-container'>
          <Name name="R Judd Celis"/>
          <Title title="Software Developer at Freelance"/>
          <Description width={450} content="I transform webpage designs onto a working webpage using HTML and CSS."/>
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
      </section>
    </main>
  );
}

export default App;
