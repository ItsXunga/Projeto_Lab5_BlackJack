import React, { Component } from 'react'
import StatsList from './StatsList'
import { connect } from 'react-redux'

class Stats extends Component {
    render(){
       // console.log(this.props);
       const { stats } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s6">
                        <StatsList stats={stats}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stats: state.stats.stats
    }
}

export default connect(mapStateToProps)(Stats)