import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      alt=""
      title="First Meetup"
      address="Some Street 5"
      description="A first meetup"
    />
  );
};
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://parthgera25:hstRTud0n0pzSzSW@cluster0.caehmlo.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupcollection = db.collection("meetups");

  const meetups = await meetupcollection.find({},{_id:1}).toArray();
  return {
    fallback: false,
    paths:meetups.map((meetup)=>({
      params:{meetupId:meetup._id.toString()},
    }))
  };
}

export default MeetupDetails;
