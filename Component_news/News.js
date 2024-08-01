import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 10,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    articles = [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Steve Dent",
            "title": "Amazon's Prime Video will show ads unless you pay $3 more per month",
            "description": "Prime Video users will soon see ads on shows and movies unless they pay an extra $2.99 per month on top of their regular Prime subscription.",
            "url": "https://www.engadget.com/amazons-prime-video-will-show-ads-unless-you-pay-3-more-per-month-111709384.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/e.67JbnGaMg0y9P_usDdHg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/15832590-5931-11ee-befb-b46545507b21",
            "publishedAt": "2023-09-22T11:17:09Z",
            "content": "Prime Video users will soon see ads on shows and movies unless they pay an extra $3 per month on top of their regular Prime subscription, Amazon has announced. \"Starting in early 2024, Prime Video sh… [+2428 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "The Associated Press",
            "title": "Amazon Prime Video will soon come with ads, or a $2.99 monthly charge to dodge them",
            "description": "Amazon’s Prime Video will begin showing adds during shows and movies early next year, joining other streaming services that have added different tiers of subscriptions",
            "url": "https://abcnews.go.com/Technology/wireStory/amazon-prime-video-adds-299-monthly-charge-dodge-103405050",
            "urlToImage": "https://i.abcnewsfe.com/a/c9b96efa-3513-4a24-a617-622033bb5178/wirestory_e3713ac21acc14b8ba8381fa7ab447e5_16x9.jpg?w=992",
            "publishedAt": "2023-09-22T11:07:36Z",
            "content": "SEATTLE -- Amazon Prime Video will include advertising during shows and movies starting early next year, joining other streaming services that have added different tiers of subscriptions. \r\nMembers o… [+493 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jess Weatherbed",
            "title": "Ads are coming to Amazon Prime Video — unless you pay more",
            "description": "Amazon has announced plans to start placing “limited advertisements” on TV shows and movies running on the company’s Prime Video streaming platform in 2024.",
            "url": "http://www.theverge.com/2023/9/22/23885242/amazon-prime-tv-movies-streaming-ads-subscription-date",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/gGXG4F_gdAUOH7ys60vQz873lYs=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23935559/acastro_STK103__02.jpg",
            "publishedAt": "2023-09-22T10:58:09Z",
            "content": "Amazon is sticking ads in Prime Video shows and movies unless you pay more\r\nAmazon is sticking ads in Prime Video shows and movies unless you pay more\r\n / Amazon aims to show meaningfully fewer ads t… [+1547 chars]"
        },
        {
            "source": {
                "id": "entertainment-weekly",
                "name": "Entertainment Weekly"
            },
            "author": "Lauren Huff",
            "title": "What's new on Netflix in September 2023: <em>Virgin River</em> season 5, <em>Jaws</em>, <em>Anchorman</em>, and more",
            "description": "Check out the full list of movies and TV shows coming to the streaming service this month.",
            "url": "https://ew.com/tv/new-on-netflix-september-2023/",
            "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C95%2C1500%2C845&poi=face&w=1500&h=750&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F09%2F01%2Fnew-on-netflix-083123.jpg",
            "publishedAt": "2023-09-01T17:30:00Z",
            "content": "Summer is rapidly dwindling down, but thankfully, the plethora of new movies and TV shows to binge on Netflix is not.\r\nFans of romantic dramas will be happy to know that season 5 of the streamer's Vi… [+3675 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Collier Jennings",
            "title": "Best Action Movies on Netflix Right Now (September 2022) - IGN",
            "description": "These are the best action movies on Netflix right now -- blockbusters, fight films, animated adventures and shootouts galore.",
            "url": "https://www.ign.com/articles/best-action-movies-on-netflix-right-now",
            "urlToImage": "https://assets-prd.ignimgs.com/2022/07/28/rrr-1659047262112.jpg?width=1280",
            "publishedAt": "2022-09-01T18:03:14Z",
            "content": "There is nothing like a good action movie on Netflix. The perfectly choreographed fight scenes that let you feel every punch and kick on screen; the shootouts that see bullets and bodies hitting the … [+11394 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": null,
            "title": "Daily Briefing",
            "description": "The day's top stories, from sports to movies to politics to world events.",
            "url": "https://profile.usatoday.com/newsletters/daily-briefing/",
            "urlToImage": "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
            "publishedAt": "2021-08-15T15:35:07+00:00",
            "content": "The day's top stories, from sports to movies to politics to world events."
        }
    ]
    capitalizefirstletter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props){
        super(props);
        // console.log("Hello i am constructor in news component");
        this.state={
            articles: this.articles,
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizefirstletter(this.props.category)} - NewsCreepy`;
    }
    // async UpdateNews(){
    //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading: true })
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         articles: parsedData.articles, 
    //         totalResults: parsedData.totalResults,
    //         loading: false
    //     })his.props.apiKey}
    // }
    async componentDidMount(){
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true })
        let data = await fetch(url);
        this.props.setProgress(30)
        let parsedData = await data.json();
        this.props.setProgress(70)
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100)
        // this.UpdateNews();
    }
    handleprevclick = async ()=>{
        this.props.setProgress(10)

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true })
        let data = await fetch(url);
        this.props.setProgress(30)
        let parsedData = await data.json();
        this.props.setProgress(70)
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
        this.props.setProgress(100)

        // this.setState({page: this.state.page - 1});
        // this.UpdateNews();
    }
    handlenextclick = async ()=>{
        this.props.setProgress(10)
        if( !(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){}
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true })
        let data = await fetch(url);
        this.props.setProgress(30)
        let parsedData = await data.json();
        this.props.setProgress(70)

        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading: false
        })
        this.props.setProgress(100)

        // this.setState({page: this.state.page + 1});
        // this.UpdateNews();
        
    }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='mb-4' style={{marginTop:'90px'}}>Top {this.capitalizefirstletter(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} ImageUrl={element.urlToImage} NewsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>}
            )}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handleprevclick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handlenextclick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
