import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner'

class News extends Component {

        constructor(){
            super();
            this.state = {
                articles: [],
                loading: false, 
                page: 1,
                pageSize:15,
                category: "business" 

            }
        }
        async componentDidMount(){
            var url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.state.category}&apiKey=b7e3db46081440d5b4c54a42081743c6&pageSize=${this.state.pageSize}&page=1`;
            this.setState({
                loading : true
            });  
            var data = await fetch(url);
            var parseData = await data.json();
            this.setState({
                articles: parseData.articles,
                totalResult: parseData.totalResults,
                page: 1,
                loading : false
            });
        }
        prevFunction = async () =>{
            var url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.state.category}&apiKey=b7e3db46081440d5b4c54a42081743c6&pageSize=${this.state.pageSize}&page=${this.state.page-1}`;
            this.setState({
                loading : true
            }); 
            var data = await fetch(url);
           
            var parseData = await data.json();
            this.setState({
                articles: parseData.articles,
                page: this.state.page - 1,
                category: 'sports',
                loading: false 

            });
        };
        nextFunction = async () =>{
            var url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.state.category}&apiKey=b7e3db46081440d5b4c54a42081743c6&pageSize=${this.state.pageSize}&page=${this.state.page+1 }`;
            this.setState({
                loading : true
            });  

            var data = await fetch(url);
           
            var parseData = await data.json();
            if( Math.ceil(this.state.totalResult/12) < this.state.page +1){

                
            }
            else{

                this.setState({
                    
                    articles: parseData.articles,
                    totalResult: parseData.totalResults,
                    page: this.state.page + 1,
                    category: 'technology',
                    loading:  false 
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
                    {this.state.loading &&<Spinner />}
                    {!this.state.loading && this.state.articles.map((element)=>{
                           return <div className='col-md-4 text-center'>
                                    <NewsItem newsUrl={element.url} key={element.url} title={element.title?element.title.slice(0,45):""} desc={element.description?element.description.slice(0,88):""} img={element.urlToImage?element.urlToImage:"https://cdn.vox-cdn.com/thumbor/4ECl1MgKXJDJ_pRPP6p4u_NPCaQ=/0x434:6056x3605/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22964001/verge_vjeran_pavic_meta_3_20211028.jpg"}/>
                               </div>
                    })}

                    <div className="col-md-12 text-end">
                        <button className="btn btn-primary mx-1" disabled={this.state.page<=1} onClick={this.prevFunction} > &larr; Previous</button>
                            <button className="btn btn-primary mx-1" > {this.state.page} </button>

                        <button disabled={Math.ceil(this.state.totalResult/12) < this.state.page +1} className="btn btn-primary mx-1 des" onClick={this.nextFunction} >Next &rarr;</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;