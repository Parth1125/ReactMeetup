import React from 'react'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUP = [
    {
        id:'m1',
        title:'First place',
        address:'some address',
        description:'first place'
    }
]

const Homepage = () => {
  return <MeetupList meetups={DUMMY_MEETUP}/>
}

export default Homepage