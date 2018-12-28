import React from 'react';
import { Image } from 'rebass';

import Container from 'src/Components/Container';
import { H1, P } from 'src/Components/Typo';
import Head from 'src/Components/Head';

const MarkdownData = require('data/post.md');
const imagePath = require('src/assets/images/full-logo.svg');

function About() {
  return (
    <React.Fragment>
      <Head title="Brightizen" />
      <Container width={[1, 1/2, 1/2]} mx="auto" mt={[2, 3, 4]}>
        <Image src={imagePath} alt="Brightizen" />
        <H1>{MarkdownData.title}</H1>
        <P>{MarkdownData.__content}</P>
      </Container>
    </React.Fragment>
  );
}

export default About;
