import React from "react";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

const Homepage = (props) => {
  return (
    <>
    <Head>
      <title>React Meetups</title>
      <meta name="description" content="Browse large collection of Meetups and also can upload meetups"/>
    </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://parthgera25:hstRTud0n0pzSzSW@cluster0.caehmlo.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupcollection = db.collection("meetups");
  const meetups = await meetupcollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Homepage;
