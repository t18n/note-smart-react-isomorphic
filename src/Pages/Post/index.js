import React from 'react';
import PropTypes from 'prop-types';

import { CardBox, FlexBox } from 'src/Components/Layout';
import { Heading, Text } from 'src/Components/Typo';
import Head from 'src/Components/Head';
import Badge from 'src/Components/Badge';

// Import all files inside `data` via Webpack require.context
// Read more:
// https://goo.gl/315fi3 - Importing Multiple Markdown files into a React Component with Webpack
const postContext = require.context('../../../content', false, /\.md$/);
const postFiles = postContext
  .keys()
  .map(filename => postContext(filename));

class Post extends React.Component {
  state = {
    post: {},
  }

  componentDidMount() {
    const post = postFiles.find(p => p.slug === this.props.match.params.slug);
    console.log(post);
    this.setState(state => ({ ...state, post }));
  }

  render() {
    /* eslint-disable react/no-array-index-key */
    const { post } = this.state;

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
          <CardBox width={1} px={[1, 2, 3]} py={[0, 1, 2]} mx={[1, 2, 3]}>
            <Heading as="h3" dangerouslySetInnerHTML={{ __html: post.title }} />
            <Text as="span" dangerouslySetInnerHTML={{ __html: post.__content }} color="black" />
            <FlexBox width={1}>
              <Badge bg="success" dangerouslySetInnerHTML={{ __html: post.category }} />
              <Text as="span" float="right" dangerouslySetInnerHTML={{ __html: post.date }} />
            </FlexBox>
          </CardBox>
        </FlexBox>
      </React.Fragment>
    );
    /* eslint-enable react/no-array-index-key */
  }
}

Post.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      lang: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Post;
