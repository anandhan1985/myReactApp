import React, { Component } from 'react';
import './custom.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MapQuest from './MapQuest';

class EmpDetails extends Component {
    state = {
        map: false
    }
    componentDidMount = () => {
        // Reamove browser back functioality
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event) {
            window.history.pushState(null, document.title, window.location.href);
        });
    }
    getMap = () => {
        this.setState({ map: true })
    }
    closeMap = () => {
        this.setState({ map: false })
    }

    render() {

        const empData = Object.keys(this.props.edata).map(key =>
            //To avoiding assocaiative array, added bellow condition
            typeof this.props.edata[key] === 'string' || typeof this.props.edata[key] === 'number' || typeof this.props.edata[key] === 'boolean' ?
                <div key={key} className='emp-list-outer'>
                    <span className='emp-label' value={key}>{key}</span>
                    {(key === 'picture' || key === 'thumbnail') ? <img className={key} src={this.props.edata[key]} alt='Bigpicture'></img>
                        : <span className='emp-value'>{this.props.edata[key]}</span>}
                </div>
                : null
        )

        return (

            <React.Fragment>

                <div className='title-outer'>
                    {this.state.map === false ? <button className="btn btn-success map-btn" onClick={this.getMap} >View Map</button>
                        : <button className="btn btn-danger map-btn" onClick={this.closeMap} >Close Map</button>}
                    <Link className="btn btn-primary" to="/emp-list">Back</Link>
                    <h3 className='details-page-title'>Employee Details</h3>
                </div>
                {this.state.map === true ?
                    <div>
                        <MapQuest></MapQuest>
                    </div>
                    : null}

                {this.props.edata.length !== 0 ?
                    <ul className="list-group list-outer" >
                        <li className="list-group-item list-group-item-action list-group-item-primary">
                            {empData}
                        </li>
                        <li className="list-group-item list-group-item-action list-group-item-primary">
                            <span className='emp-label'>Friends</span>
                            {this.props.edata.friends.map(fdata =>

                                <span key={fdata.id} className='emp-value'> {fdata.name}</span>

                            )}
                        </li>
                        <li className="list-group-item list-group-item-action list-group-item-primary">
                            <span className='emp-label'>Tags</span>
                            {
                                this.props.edata.tags.map((tdata, index) =>
                                    <span key={index} className='emp-value'>{tdata}</span>
                                )}
                        </li>
                    </ul> :
                    <span className='text-center no-record'>Details not Found</span>
                }
            </React.Fragment>
        );

    }
}
const mapStateToProps = (state) => {
    return {
        edata: state.selctdEmpData
    };
}

export default connect(mapStateToProps)(EmpDetails);