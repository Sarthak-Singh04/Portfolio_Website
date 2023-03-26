import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

function About() {
return (
<div>
<h2 className="text-4xl font-bold mb-4">About Me</h2>
<p className="mb-8">I am a dedicated and enthusiastic developer with a strong passion for open source. My technical skills include:</p>
<ul className="mb-8">
<li className="flex items-center"><FaHtml5 className="mr-2 text-2xl" />HTML</li>
<li className="flex items-center"><FaCss3Alt className="mr-2 text-2xl" />CSS</li>
<li className="flex items-center"><FaJs className="mr-2 text-2xl" />JavaScript</li>
<li className="flex items-center"><FaReact className="mr-2 text-2xl" />React</li>
<li className="flex items-center"><FaNodeJs className="mr-2 text-2xl" />Node.js</li>
<li className="flex items-center"><FaDatabase className="mr-2 text-2xl" />MongoDB</li>
</ul>
<p className="mb-8">I have experience working with Git and collaborating effectively with other developers. I am highly motivated and always looking for new challenges to deepen my understanding of web development concepts. I am a team player with great organizational skills and attention to detail. I take pride in my work and am committed to delivering high-quality results. My contributions to open source projects reflect my dedication to making technology more accessible and inclusive.</p>
</div>
)
}

export default About;