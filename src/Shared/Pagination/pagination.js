import React, { Component } from 'react';

class CustomPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: this.props.currentPage,
            totalPages: this.props.pages
        }
    }
    render() {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href="#" tabIndex="-1" onClick={this.props.getPreviousMovies}>Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">{this.state.currentPage}</a></li>
                    {/* <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li> */}
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={this.props.getNextMovies}>Next</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#" >{this.state.totalPages}</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default CustomPagination