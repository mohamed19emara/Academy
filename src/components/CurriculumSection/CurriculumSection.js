import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './CurriculumSection.css';

const CurriculumSection = () => {
  const [files, setFiles] = useState([]);

  // تحميل البيانات من ملف JSON
  useEffect(() => {
    fetch('/curriculums.json')  // المسار إلى الملف JSON
      .then((response) => response.json())
      .then((data) => setFiles(data))
      .catch((error) => console.error('Error fetching JSON:', error));
  }, []);

  // تحديد عدد المناهج التي نعرضها
  const [visible, setVisible] = useState(6);  // بدايةً نعرض 6 مناهج فقط
  
  // تحميل المزيد من المناهج
  const loadMore = () => {
    setVisible(prevVisible => prevVisible + 6);  // تحميل 6 مناهج إضافية عند الضغط على "عرض المزيد"
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">المناهج الدراسية من الصف الأول إلى الصف الثاني عشر</h2>
      
      {/* تنظيم المناهج في صفوف وأعمدة */}
      <Row>
        {files.slice(0, visible).map((file, index) => (
          <Col md={4} sm={6} xs={12} key={index}>
            <Card className="shadow-sm mb-4 custom-card">
              <Card.Body>
                <Card.Title>{file.grade}</Card.Title>
                <Card.Text>{file.title}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center align-items-center">
                <Button
                  href={file.file} // رابط تحميل الملف PDF
                  target="_blank"
                  download
                  variant="primary"
                  className="w-100" // ملء عرض الزر
                >
                  تحميل المنهج
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      
      {/* زر "عرض المزيد" */}
      {visible < files.length && (
        <div className="text-center mt-4">
          <Button onClick={loadMore} variant="outline-primary" className="w-50">
            عرض المزيد
          </Button>
        </div>
      )}
    </div>
  );
};

export default CurriculumSection;
