import React, { Component } from 'react';

class NewsItem extends Component {
    render() {

        let {title,desc,img,newsUrl, author, date} = this.props;
        return (
            
                <div className="card mx-3 my-3" style={{width: "18rem"}}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{desc}...</p>
                        <p className="card-text"><small className='text-muted'>By {!author ? "Unknow" : author} at {new Date(date).toUTCString()} </small></p>
                        
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                    </div>
                </div>
        );
    }
}

export default NewsItem;