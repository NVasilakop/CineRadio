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
                    <li className="page-item"><a className="page-link" href="#" onClick={() => this.props.getSpecificMoviesPage(this.props.currentPage)}>{this.props.currentPage}</a></li>
                    <li className="page-item"><a className="page-link" href="#" onClick={() => this.props.getSpecificMoviesPage(this.props.currentPage + 1)}>{this.props.currentPage + 1}</a></li>
                    <li className="page-item"><a className="page-link" href="#" onClick={() => this.props.getSpecificMoviesPage(this.props.currentPage + 2)}>{this.props.currentPage + 2}</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={this.props.getNextMovies}>Next</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#" >{this.props.pages}</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default CustomPagination