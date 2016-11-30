import React from 'react';
import Navbar from './navbar';
import ForumItem from './forumitem';
import PostQuestionEntry from './feeditem';

import {getForumData} from '../server';
import {postQuestionEntry} from '../server';

export default class Forum extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  refresh() {
    getForumData(this.props.user, (forumData) => {
      this.setState(forumData);
    });
  }

  onPost (postContents) {
    // Send to server
    // use geolocation later
    postQuestionEntry(1, postContents, () => {
      this.refresh();
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <PostQuestionEntry
          onPost={(postContents) => this.onPost(postContents)}/>
        {this.state.contents.map((forumItem) => {
          return (
            <ForumItem key={forumItem._id} data={forumItem} />
          )
        })}

      </div>
    )
  }







}
