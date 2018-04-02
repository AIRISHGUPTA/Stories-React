import React,{Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
class ShowStories extends Component
{
  render()
  {
    return (
      <div>
          {this.props.stories && this.props.stories.map((story)=>(
              <div className="card" key={story.title}>
                <Card style={{marginBottom:'30px'}}>
                  <CardHeader
                    title={story.author}
                    subtitle={story.read}
                    avatar={story.imageAuthor}
                  />
                  <CardMedia
                    overlay={<CardTitle title={story.title} subtitle="Overlay subtitle" />}
                  >
                    <img src={story.image} alt="" />
                  </CardMedia>
                  <CardText>
                    {story.description}
                  </CardText>
                  <CardActions>
                  {
                    story.isSet==='yes' &&
                      <FlatButton label={story.like+' LIKE'} style={{color:'blue',fontWeight:'200'}} onClick={(e)=>{this.props.updateLike(story)}}/>

                  }
                  {
                    story.isSet==='no' &&
                      <FlatButton label={story.like+` LIKE`} onClick={(e)=>{this.props.updateLike(story)}}/>

                  }
                  </CardActions>
                </Card>
              </div>
          ))}
      </div>
    )
  }
}
export default ShowStories;
