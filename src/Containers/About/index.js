import React from 'react';
import Head from 'src/Components/Head';
import Content from 'src/Components/Content';

const MarkdownData = require('data/post.md');
const imagePath = require('src/assets/images/full-logo.svg');

function About() {
  return (
    <div>
      <Head title="Brightizen" />
      <Content>
        <div>
          <img src={imagePath} alt="" />
          <h1>{MarkdownData.title}</h1>
          <div>{MarkdownData.__content}</div>
        </div>
      </Content>
    </div>
  );
}

export default About;
