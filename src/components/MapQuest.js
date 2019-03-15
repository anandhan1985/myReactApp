import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
class MapQuest extends Component {

    state = {
        mapAvilablity: true
    }
    componentDidMount() {

        if (typeof this.props.selctdEmp.latitude !== 'undefined' && typeof this.props.selctdEmp.longitude !== 'undefined') {
            window.L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';
            var map = window.L.mapquest.map('map', {
                center: [this.props.selctdEmp.latitude, this.props.selctdEmp.longitude],
                layers: window.L.mapquest.tileLayer('map'),
                zoom: 12
            });
            window.L.mapquest.textMarker([this.props.selctdEmp.latitude, this.props.selctdEmp.longitude], {
                text: 'Exact Location',
                subtext: 'Your are located here',
                position: 'right',
                type: 'marker',
                icon: {
                    primaryColor: '#333333',
                    secondaryColor: '#333333',
                    size: 'sm'
                }
            }).addTo(map);
            map.addControl(window.L.mapquest.control());
        } else {
            this.setState({ mapAvilablity: false })
        }

    }

    render() {
        const mapStyle = {
            height: 400,
            width: 1110
        };
        return (
            <Fragment>
                {this.state.mapAvilablity === true ? <div id="map" style={mapStyle}>
                    <p style={{ textAlign: 'center' }}>Map loading...</p>
                </div> : <span className='text-center no-record'>Map not found</span>}
            </Fragment>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        selctdEmp: state.selctdEmpData
    }
}

export default connect(mapStateToProps)(MapQuest)