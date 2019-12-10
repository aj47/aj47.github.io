import React, { Component } from "react";
import Cross_Tag from './cross_tag.svg';

class TagBubbles extends Component {
  render() {
      return (<div className="just-flex">
      
      {this.props.location && <div className="tag-bubble"> {this.props.location} <div className="circle-icon" onClick={(e) => this.props.removeTag("location", e)}><img src={Cross_Tag} className="cross-tag"/> </div> </div>}
      {this.props.keyword && <div className="tag-bubble"> {this.props.keyword} <div className="circle-icon" onClick={(e) => this.props.removeTag("keyword", e)}><img src={Cross_Tag} className="cross-tag"/> </div> </div>}
      {Object.keys(this.props.filters).map (item => {
       if (this.props.filters[item]) {
        return (
        <div key={item} className="tag-bubble"> {item} <div className="circle-icon" onClick={(e) => this.props.removeTag(item, e)}> <img src={Cross_Tag} className="cross-tag"/></div>  </div>
        )
       }  
      })}
    </div>);
  }
}

export default TagBubbles;
