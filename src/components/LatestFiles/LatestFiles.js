import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";
import './LatestFiles.css';


const LatestFiles = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  // جلب البيانات من ملف JSON
 
  useEffect(() => {
    setLoading(true);
    fetch("/latestFiles.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch files.");
        }
        return response.json();
      })
      .then((data) => {
        setFiles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching files:", error);
        setLoading(false);
      });
  }, []);
  

  return (
    <section className="latest-files py-5">
      <Container>
        <h2 className="text-center mb-4">أجدد الملفات</h2>
        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
            <p>جاري تحميل الملفات...</p>
          </div>
          </div>
        ) : (
          <Row>
            {files.map((file, index) => (
              <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={file.image} alt={file.title} />
                  <Card.Body>
                    <Card.Title className="text-center text-primary">{file.title}</Card.Title>
                    <Card.Text className="text-center">{file.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <a href={file.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary m-2">
                      عرض الملف
                    </a>
                    <a href={file.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                     تحميل الملف
                   </a>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default LatestFiles;
