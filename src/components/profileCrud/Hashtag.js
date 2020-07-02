import { TagInput } from 'reactjs-tag-input'
import React from 'react';
class Hashtag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tags: []}
        this.onTagsChanged = this.onTagsChanged.bind(this);
    }

    onTagsChanged(tags) {
        this.setState({tags})
    }

    render() {
        return <TagInput tags={this.state.tags} onTagsChanged={this.onTagsChanged} />
    }
}

export default Hashtag