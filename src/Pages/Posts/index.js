import React from 'react';

import truncate from 'src/helpers/truncate';
import FlexBox from 'src/Components/FlexBox';
import CardBox from 'src/Components/CardBox';
import { H3, Span } from 'src/Components/Typo';
import Head from 'src/Components/Head';
import Footer from 'src/Components/Footer';

// Import all files inside `data` via Webpack require.context
// Read more:
// https://goo.gl/315fi3 - Importing Multiple Markdown files into a React Component with Webpack
const postContext = require.context('../../../content', false, /\.md$/);
const postFiles = postContext
  .keys()
  .map(filename => postContext(filename));

class Posts extends React.Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    const posts = postFiles;

    this.setState(state => ({ ...state, posts }));
  }

  render() {
    /* eslint-disable react/no-array-index-key */
    const { posts } = this.state;

    return (
      <React.Fragment>
        <Head title="Posts" />
        <FlexBox
          width={[1, 1 / 2, 1 / 2]}
          mx="auto"
          mt={[2, 3, 4]}
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          {
            posts.map((post, i) => (
              <CardBox key={i} width={[1, 1/3]} px={[1, 2, 3]} py={[0, 1, 2]} mx={[1, 2, 3]}>
                <H3 dangerouslySetInnerHTML={{ __html: post.title }} />
                <Span dangerouslySetInnerHTML={{ __html: truncate(post.__content) }} />
              </CardBox>
            ))
          }
        </FlexBox>
        <Footer />
      </React.Fragment>
    );
    /* eslint-enable react/no-array-index-key */
  }
}

export default Posts;
