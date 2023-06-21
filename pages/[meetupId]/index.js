import React from "react";
import { MongoClient,ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
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
export async function getStaticProps(context){
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://parthgera25:hstRTud0n0pzSzSW@cluster0.caehmlo.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupcollection = db.collection("meetups");

  const selectedMeetup = await meetupcollection.findOne({_id:new ObjectId(meetupId),})
  client.close()

  return {
    props:{
      meetupData:{
        id:selectedMeetup._id.toString(),
        title:selectedMeetup.title,
        address:selectedMeetup.address,
        image:selectedMeetup.image,
        description:selectedMeetup.description
      },
    },
  };
}

export default MeetupDetails;
