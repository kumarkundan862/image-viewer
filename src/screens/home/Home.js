import React, { Component } from 'react';
import './Home.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Header from '../../common/header/Header';


class Home extends Component {

    constructor() {
        super();
        this.state={
            posts: [{}],
            userPosts: {},
            timestamp: ""
        }
    }
    

    UNSAFE_componentWillMount() {

        //get all media
        let that = this;
        let dataPosts = null;
        let xhrPosts = new XMLHttpRequest();
        xhrPosts.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(JSON.parse(this.responseText));
                that.setState({
                    posts: JSON.parse(this.responseText).dataPosts
                });
            }
        });

        let accessToken = sessionStorage.getItem("access-token");
        xhrPosts.open("GET", "https://graph.instagram.com/me/media?fields=id,caption&access_token=" + accessToken);
        xhrPosts.setRequestHeader("Cache-Control", "no-cache");
        xhrPosts.send(dataPosts);

        //get the details about a media
        let postDetails = null;
        let xhrPostDetails = new XMLHttpRequest();
        xhrPostDetails.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(JSON.parse(this.responseText));
                that.setState({
                    userPosts: JSON.parse(this.responseText)
                });
            }
        });

        xhrPostDetails.open("GET", "https://graph.instagram.com/17842775141565601?fields=id,media_type,media_url,username,timestamp&access_token=" + accessToken);
        xhrPostDetails.setRequestHeader("Cache-Control", "no-cache");
        xhrPostDetails.send(postDetails);


    }


    render() {

        //const { classes } = this.props;
        return (
            <div>
                <Header showSearchBox="true" />  
                <div> 
                 i am not able to move further. I am deeply sad for that.
                 </div>
                 {/* <div>
                 <GridList cellHeight={350} cols={3} >
                            {this.state.userPosts.map(post => (
                                <GridListTile onClick={() => this.movieClickHandler(post.id)} className="released-movie-grid-item" key={"grid" + post.id}>
                                    <img src={post.media_url}  alt="post" />
                                    <GridListTileBar
                                        title={post.username}
                                        subtitle={<span>Release Date: {new Date(post.timestamp).toDateString()}</span>}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                </div>    */}
      
            </div>
        )
    }
}

export default Home;