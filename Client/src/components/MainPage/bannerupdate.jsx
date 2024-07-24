import React, { useState } from "react";
import axios from "axios";

const UpdateBanner = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const onFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const updateBanner = () => {
        const formData = new FormData();
        formData.append("banner", selectedFile);

        axios
            .post("http://localhost:3001/banner", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                alert(response.data.message);
                window.location.reload(); // Reload the page to see the updated banner
            })
            .catch((error) => {
                console.error("There was an error updating the banner image!", error);
            });
    };

    return (
        <div>
            <input type="file" onChange={onFileChange} accept="image/*" />
            <button onClick={updateBanner}>Update Banner</button>
        </div>
    );
};

export default UpdateBanner;