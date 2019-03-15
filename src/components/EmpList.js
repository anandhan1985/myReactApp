import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterSelectedEmp, getEmpDataFromApi } from '../redux/actions/EmpActions';
class EmpList extends Component {

    componentDidMount = () => {
        // Reamove browser back functioality
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event) {
            window.history.pushState(null, document.title, window.location.href);
        });
        // get employee details from json
        this.props.getEmpDataFromApi();
    }
    setSelectedEmpState = (selctdEmpData) => {
        this.props.filterSelectedEmp(selctdEmpData);
        this.props.history.push('/emp-details');
    }
    checkActive = (id) => {
        if (this.props.clickdIds.some(item => id === item)) {
            return 'active'
        } else { return '' }
        // if (this.props.lastClickdId !== 'undefined' && this.props.lastClickdId === id) {
        //     return 'active';
        // } else { return '' }
    }

    render() {
        return (
            <React.Fragment>
                <h3 className='text-center'>Employee List</h3>
                <ul className="list-group">
                    {this.props.data.map(empdata =>
                        <div key={empdata._id}>
                            <li onClick={() => this.setSelectedEmpState(empdata)}
                                className={`list-group-item list-group-item-action list-group-item-primary text-center emp-name-list ${this.checkActive(empdata._id)}`}
                            >
                                {empdata.name} <br></br>
                                <img src={empdata.picture} alt='thumbnail'></img>
                            </li>
                        </div>
                    )}
                </ul>
            </React.Fragment>
        );
    }
}

const mapSateToProps = (state) => {
    return {
        data: state.data,
        lastClickdId: state.selctdEmpData._id,
        clickdIds: state.selctdEmpIds
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getEmpDataFromApi: () => {
            dispatch(getEmpDataFromApi());
        },
        filterSelectedEmp: (selctdEmpData) => {
            dispatch(filterSelectedEmp(selctdEmpData));
        }
    }
}


export default connect(mapSateToProps, mapDispatchToProps)(EmpList)