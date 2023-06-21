import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetupPage = () => {
  const router = useRouter()
  const addMeetupHandler = async (enteredMeetupData) => {
    try {
      
    
      const response = await fetch("/api/newmeetup", {
        method:"POST",
        body:JSON.stringify(enteredMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      console.log(data);
      router.push('/')
    } catch (err) {
      console.log(err);
    }
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
