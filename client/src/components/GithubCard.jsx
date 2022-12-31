import React from 'react'
import GitHubCalendar from 'react-github-calendar'



const calenderStyle = {
    margin: '1rem auto 4rem',
    color: 'var(--text-ternary)',
    height: '150px',
}

const GithubCard = () => {

    return (
        <>
            <h1 className="text-5xl my-10" >
                Days I <strong>Code</strong>
            </h1>
            <GitHubCalendar
            username="BLew10"
            color="#4C3831"
            style={calenderStyle}
            blockSize={14}
            blockMargin={6}
            />
        </>
    )
}

export default GithubCard