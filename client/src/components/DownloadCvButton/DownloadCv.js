import React from "react";
import Button from '../../styles/GlobalComponents/Button';

const CvDownload = () => {
  const handleDownload = async () => {
    try {
      // Make a request to the API route to download the document
      const response = await fetch("/api/download");
      // Convert the response to a blob
      const blob = await response.blob();
      // Create a URL for the blob
      const url = URL.createObjectURL(blob);
      // Create a link element and click it to trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = "ChristianMarucco.pdf"; // The desired name for the downloaded file
      a.click();
      // Clean up the URL and the link element
      URL.revokeObjectURL(url);
      a.remove();
    } catch (error) {
      console.error("Error downloading:", error);
    }
  };

  return (
    <div>
      {/* Your other content */}
      <Button onClick={handleDownload}>Get my CV</Button>
    </div>
  );
};

export default CvDownload;