  import React from "react";
  import PaperSubmissionForm from "./components/Form";
import { submissionMetadata } from "@/components/metadata";
 
    
  export const metadata = submissionMetadata;

  
  function page() {
    return (
      <div>
        <PaperSubmissionForm/>
      </div>
    );
  }

  export default page;
