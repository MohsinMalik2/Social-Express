import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {

        constructor(){
            super();
            this.state = {
                articles: [],
                loading: false, 
                page: 1

            }
        }
        async componentDidMount(){
            var url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b7e3db46081440d5b4c54a42081743c6&pageSize=20&page=1";
            var data = await fetch(url);
            var parseData = await data.json();
            this.setState({
                articles: parseData.articles,
                totalResult: parseData.totalResults,
                page: 1
            });
        }
        prevFunction = async () =>{
            var url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b7e3db46081440d5b4c54a42081743c6&pageSize=20&page=${this.state.page-1}`;
            var data = await fetch(url);
            var parseData = await data.json();
            this.setState({
                articles: parseData.articles,
                page: this.state.page - 1

            });
        };
        nextFunction = async () =>{
            var url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b7e3db46081440d5b4c54a42081743c6&pageSize=20&page=${this.state.page-1}`;
            var data = await fetch(url);
            var parseData = await data.json();
            if( Math.ceil(this.state.totalResult/20) < this.state.page +1){

                alert("Pages End Here");
            }
            else{

                this.setState({
                    
                    articles: parseData.articles,
                    totalResult: parseData.totalResults,
                    page: this.state.page + 1
                });
            }
            
        };
    render() {
        return (
            <div className='container my-3'>
                <div className="row">
                    <div className="col-md-12 mb-4">
                        <h1>Social Express - Top Headlines</h1>
                    </div>
                    {this.state.articles.map((element)=>{
                           return <NewsItem newsUrl={element.url} key={element.url} title={element.title?element.title.slice(0,45):""} desc={element.description?element.description.slice(0,88):""} img={element.urlToImage?element.urlToImage:"https://cdn.vox-cdn.com/thumbor/4ECl1MgKXJDJ_pRPP6p4u_NPCaQ=/0x434:6056x3605/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22964001/verge_vjeran_pavic_meta_3_20211028.jpg"}/>
                    })}

                    <div className="col-md-12 text-end">
                        <button className="btn btn-primary mx-3" disabled={this.state.page<=1} onClick={this.prevFunction} > &larr; Primary</button>
                        <button className="btn btn-primary mx-3 des" onClick={this.nextFunction} >Next &rarr;</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;