import React, { Component } from 'react';

import './App.css';
import ShowStories from './ShowStories'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  state={
    stories:[
      {image:'https://unsplash.it/500/200?random=237',read:'20 min read',imageAuthor:'https://randomuser.me/api/portraits/men/89.jpg',title:'OVERCOMING THE PAST',description:'We dont really care about who has control in the wars to come, we only care ifwe are safe, or if we are doomed. Our neighbours, or freinds seem to matter lesswhen we have family',author:'Steve Richards',like:652,isSet:'no'},
      {image:'https://unsplash.it/500/200?random=211',read:'16 min read',imageAuthor:'https://randomuser.me/api/portraits/women/27.jpg',title:'THE SUMMER IS OVER',description:'Well it isnt too hard to create random data made from random strings, that dont reallymean much. My IDE makes this super easy, I can just type some shit, and itll come up as plus',author:'Steve Richards',like:439,isSet:'no'},
      {image:'https://unsplash.it/500/200?random=559',read:'12 min read',imageAuthor:'https://randomuser.me/api/portraits/men/38.jpg',title:'JAPANS BEAUTY PARKS',description:'To break the changes is to kill the man, the fight that comes with evil and bland, we dont sow, we dont cry. We make the changes we must fry, because we are kings among people',author:'Michael Fisher',like:609,isSet:'no'},
      {image:'https://unsplash.it/500/200?random=373',read:'2 min read',imageAuthor:'https://randomuser.me/api/portraits/women/14.jpg',title:'NO MORE WAR',description:'To break the changes is to kill the man, the fight that comes with evil and bland, we dont sow, we dont cry. We make the changes we must fry, because we are kings among people',author:'Massturoka Latifa',like:488,isSet:'no'},
      {image:'https://unsplash.it/500/200?random=494',read:'12 min read',imageAuthor:'https://randomuser.me/api/portraits/women/34.jpg',title:'THEY REALLY DONT CARE',description:'They give absolutely nothing about anything, we only care ifThey are safe, or if they are doomed. Everything is secondary when they have family',author:'Stephanie Cornocopia',like:275,isSet:'no'}

    ],
  }
  updateLike=(storyRecieved)=>{

    this.setState({
      stories:this.state.stories.map((story)=>{
        if(story.title === storyRecieved.title)
        {
            if(story.isSet==='no')
            {
              story.isSet='yes';
              story.like=story.like+1;
            }
            else if(story.isSet==='yes')
            {
              story.isSet='no';
              story.like=story.like-1;
            }
         }
         return story;
      })
    });
  }
  render() {
    return (
      <MuiThemeProvider>
        <ShowStories stories={this.state.stories} updateLike={this.updateLike}/>
      </MuiThemeProvider>
    )
  }
}

export default App;
