import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='container-fluid bg-dark mt-5'>
                    <h6 className='text-white text-center p-3 mb-0'>
                        All rights reserved by <a href='/' className='text-decoration-none'> BuggBear  </a>.
                    </h6>
                </div>
            </footer>
        )
    }
}
