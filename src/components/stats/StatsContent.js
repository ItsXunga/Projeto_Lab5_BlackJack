import React from 'react'


const StatsContent = ({stats}) => {
    return(
        <div className="card z-depth-0 stats-content">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{stats.title}</span>
                <p>Stats Value</p>
            </div>
        </div>
    )
}

export default StatsContent