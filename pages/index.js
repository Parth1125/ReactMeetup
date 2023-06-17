import React from "react";
import MeetupList from "../components/meetups/MeetupList";


const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "First place",
    address: "some address",
    description: "first place",
    image:
      "https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "m2",
    title: "second place",
    address: "second address",
    description: "second place",
    image:
      "https://images.unsplash.com/photo-1686740172488-6a680069affb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

const Homepage = () => {
  return (
    <>
        <MeetupList meetups={DUMMY_MEETUP} />
      
    </>
  );
};

export default Homepage;
