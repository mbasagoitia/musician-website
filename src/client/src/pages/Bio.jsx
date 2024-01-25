import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import ContentRenderer from "../ContentRenderer";

function Bio () {

    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        const markdownFilePath = "/content/pages/bio.md";

        fetch(markdownFilePath)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Network response error")
            }
            return res.text();
        })
        .then((data) => {
            setMarkdownContent(data);
        })
        .catch((err) => {
            console.error(err)
        })
    }, [])

    const externalLink = "https://digscholarship.unco.edu/dissertations/721/";

    const openLink = () => {
      window.open(externalLink, '_blank');
    };

    return (
        <div id="bio" className="bio">
            <h1 className="my-4">Bio</h1>
            <div className="bio-text">
                <ContentRenderer content={markdownContent} />
            </div>
            <div className="d-flex justify-content-center">
                <Button onClick={openLink} id="diss-btn" className="mt-2">View Dissertation</Button>
            </div>
        </div>
    )
}

export default Bio;