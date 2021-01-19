import React from 'react'
import StatsContent from './StatsContent'

const StatsList = ({stats}) => {
    return (
        <div className="stats-list section">
           { stats && stats.map(stats =>{
                return(
                    <StatsContent stats={stats} key={stats.id}/>
                )
           })}
        </div>
    )
}

export default StatsList