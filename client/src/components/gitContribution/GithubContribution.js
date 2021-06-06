import React from "react"
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import "./github-contribution.css"


const GitContribution = () => {


  return(
    <div className="git-contribution-box">
      <h1>My Github Activities</h1>
        <CalendarHeatmap
          startDate={new Date('2020-06-03')}
          endDate={new Date('2021-05-29')}
          values={[
            { date: '2020-06-08', count: 2 },
            { date: '2020-06-13', count: 19 },
            { date: '2020-06-15', count: 1 },
            { date: '2020-06-17', count: 1 },
            { date: '2020-06-18', count: 3 },
            { date: '2020-06-19', count: 3 },
            { date: '2020-06-22', count: 2 },
            { date: '2020-06-24', count: 1 },
            { date: '2020-07-01', count: 1 },
            { date: '2020-07-03', count: 1 },
            { date: '2020-07-04', count: 1 },
            { date: '2020-07-05', count: 3 },
            { date: '2020-07-07', count: 2 },
            { date: '2020-07-08', count: 2 },
            { date: '2020-07-09', count: 1 },
            { date: '2020-07-14', count: 1 },
            { date: '2020-07-28', count: 7 },
            { date: '2020-07-29', count: 2 },
            { date: '2020-08-10', count: 9 },
            { date: '2020-08-28', count: 5 },
            { date: '2020-09-06', count: 23 },
            { date: '2020-10-07', count: 14 },
            { date: '2020-10-10', count: 12 },
            { date: '2020-10-18', count: 4 },
            { date: '2020-10-26', count: 10 },
            { date: '2020-11-18', count: 29 },
            { date: '2020-11-19', count: 14 },
            { date: '2020-11-20', count: 2 },
            { date: '2020-11-23', count: 1 },
            { date: '2020-12-01', count: 1 },
            { date: '2020-12-15', count: 16 },
            { date: '2020-12-16', count: 26 },
            { date: '2020-12-17', count: 3 },
            { date: '2020-12-18', count: 1 },
            { date: '2020-12-29', count: 1 },
            { date: '2020-12-31', count: 1 },
            { date: '2021-01-01', count: 27 },
            { date: '2021-01-10', count: 3 },
            { date: '2021-01-11', count: 1 },
            { date: '2021-01-12', count: 1 },
            { date: '2021-01-25', count: 20 },
            { date: '2021-02-09', count: 1 },
            { date: '2021-02-13', count: 3 },
            { date: '2021-02-14', count: 2 },
            { date: '2021-04-30', count: 4 },
            { date: '2021-05-04', count: 7 },
            { date: '2021-05-29', count: 6 }
          ]}
        />
    </div>
  )
}


export default GitContribution
