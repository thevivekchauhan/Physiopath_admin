import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./VideoPlatform.css";

const VideoPlatform = () => {
  const [videoData, setVideoData] = useState([
    {
      title: "Lower Back Pain Relief",
      description:
        "Targeted exercises to ease pain, strengthen muscles, and improve flexibility in the lower back.",
      link: "https://www.youtube.com/embed/P4z-5Oz9zXE",
      thumbnail: "https://img.youtube.com/vi/P4z-5Oz9zXE/0.jpg",
    },
    {
      title: "Pigeon Pose Progression for Lower Back Pain - Yoga Flow for Back Pain",
      description:
        "A yoga flow focusing on pigeon pose progression to ease lower back pain and improve flexibility.",
      link: "https://www.youtube.com/watch?v=MZQyfnXZG7I",
      thumbnail: "https://img.youtube.com/vi/MZQyfnXZG7I/0.jpg",
    },
    // Add more videos as needed
  ]);

  const [likes, setLikes] = useState(Array(videoData.length).fill(0));
  const [dislikes, setDislikes] = useState(Array(videoData.length).fill(0));
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [newVideo, setNewVideo] = useState({
    title: "",
    description: "",
    link: "",
    thumbnail: "",
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const handleDislike = (index) => {
    const newDislikes = [...dislikes];
    newDislikes[index] += 1;
    setDislikes(newDislikes);
  };

  const handleThumbnailClick = (videoLink) => {
    setSelectedVideo(videoLink);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVideo({
      ...newVideo,
      [name]: value,
    });
  };

  const handleAddVideo = () => {
    setVideoData([
      ...videoData,
      {
        title: newVideo.title,
        description: newVideo.description,
        link: newVideo.link,
        thumbnail: `https://img.youtube.com/vi/${newVideo.link.split('=')[1]}/0.jpg`,
      },
    ]);
    setNewVideo({ title: "", description: "", link: "", thumbnail: "" });
  };

  const handleEditVideo = (index) => {
    const videoToEdit = videoData[index];
    setNewVideo({
      title: videoToEdit.title,
      description: videoToEdit.description,
      link: videoToEdit.link,
      thumbnail: videoToEdit.thumbnail,
    });
    setEditingIndex(index);
  };

  const handleUpdateVideo = () => {
    const updatedVideoData = [...videoData];
    updatedVideoData[editingIndex] = {
      title: newVideo.title,
      description: newVideo.description,
      link: newVideo.link,
      thumbnail: `https://img.youtube.com/vi/${newVideo.link.split('=')[1]}/0.jpg`,
    };
    setVideoData(updatedVideoData);
    setEditingIndex(null);
    setNewVideo({ title: "", description: "", link: "", thumbnail: "" });
  };

  return (
    <div style={styles.platform}>
      <main style={styles.mainContent}>
        {selectedVideo && (
          <div style={styles.videoPlayer}>
            <iframe
              width="800"
              height="450"
              src={selectedVideo}
              title="Selected Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <section style={styles.videoGrid}>
          {videoData.map((video, index) => (
            <div key={index} style={styles.videoCard}>
              <div
                style={styles.thumbnail}
                onClick={() => handleThumbnailClick(video.link)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  style={styles.thumbnailImage}
                />
              </div>

              <div style={styles.videoDetails}>
                <h3 style={styles.videoTitle}>{video.title}</h3>
                <p style={styles.videoDescription}>{video.description}</p>
                <div style={styles.videoButtons}>
                  <button
                    onClick={() => handleLike(index)}
                    style={styles.button}
                  >
                    👍 {likes[index]}
                  </button>
                  <button
                    onClick={() => handleDislike(index)}
                    style={styles.button}
                  >
                    👎 {dislikes[index]}
                  </button>
                  <button
                    onClick={() => handleEditVideo(index)}
                    style={styles.button}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section style={styles.addVideoForm}>
          <h2>{editingIndex !== null ? "Edit Video" : "Add New Video"}</h2>
          <input
            type="text"
            name="title"
            value={newVideo.title}
            onChange={handleChange}
            placeholder="Video Title"
            style={styles.input}
          />
          <textarea
            name="description"
            value={newVideo.description}
            onChange={handleChange}
            placeholder="Video Description"
            style={styles.textarea}
          ></textarea>
          <input
            type="text"
            name="link"
            value={newVideo.link}
            onChange={handleChange}
            placeholder="Video Link (YouTube URL)"
            style={styles.input}
          />
          <button
            onClick={editingIndex !== null ? handleUpdateVideo : handleAddVideo}
            style={styles.submitButton}
          >
            {editingIndex !== null ? "Update Video" : "Add Video"}
          </button>
        </section>
      </main>
    </div>
  );
};

// Inline Styles
const styles = {
  platform: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
  },
  videoPlayer: {
    marginBottom: "20px",
  },
  videoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  videoCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    cursor: "pointer",
  },
  thumbnail: {
    position: "relative",
    paddingTop: "56.25%", // 16:9 aspect ratio
    backgroundColor: "#ddd",
    overflow: "hidden",
    borderRadius: "8px 8px 0 0",
  },
  thumbnailImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  videoDetails: {
    padding: "15px",
  },
  videoTitle: {
    fontSize: "18px",
    margin: "0 0 10px 0",
  },
  videoDescription: {
    fontSize: "14px",
    color: "#666",
  },
  videoButtons: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },
  addVideoForm: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#ecf0f1",
    borderRadius: "8px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    minHeight: "80px",
  },
  submitButton: {
    padding: "10px 15px",
    backgroundColor: "#27ae60",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default VideoPlatform;
