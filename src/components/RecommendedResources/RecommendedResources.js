import React, { useState } from 'react';
import './RecommendedResources.css'; // استيراد CSS للتصميم

const RecommendedResources = () => {
  // حالة للتصنيف (مثال: مقالات، دورات تدريبية، كتب إلكترونية)
  const [selectedCategory, setSelectedCategory] = useState('all');

  // قائمة الموارد حسب الفئات
  const resources = [
    {
      title: 'دورة تدريبية: تعلم React',
      category: 'courses',
      link: 'https://example.com/course1',
    },
    {
      title: 'مقال: استراتيجيات تعليمية فعالة',
      category: 'articles',
      link: 'https://example.com/article1',
    },
    {
      title: 'كتاب: أساليب التدريس الحديثة',
      category: 'ebooks',
      link: 'https://example.com/book1',
    },
    {
      title: 'دورة تدريبية: تطوير مهارات المعلم',
      category: 'courses',
      link: 'https://example.com/course2',
    },
    {
      title: 'مقال: تكنولوجيا التعليم في القرن 21',
      category: 'articles',
      link: 'https://example.com/article2',
    },
    {
      title: 'كتاب: التعليم الإلكتروني في المستقبل',
      category: 'ebooks',
      link: 'https://example.com/book2',
    },
  ];

  // تصفية الموارد حسب الفئة المحددة
  const filteredResources = selectedCategory === 'all' ? resources : resources.filter(resource => resource.category === selectedCategory);

  return (
    <section className="recommended-resources">
      <h2>الموارد الموصى بها</h2>

      <div className="categories">
        <button onClick={() => setSelectedCategory('all')}>كل الفئات</button>
        <button onClick={() => setSelectedCategory('courses')}>دورات تدريبية</button>
        <button onClick={() => setSelectedCategory('articles')}>مقالات</button>
        <button onClick={() => setSelectedCategory('ebooks')}>كتب إلكترونية</button>
      </div>

      <div className="resources-list">
        {filteredResources.map((resource, index) => (
          <div key={index} className="resource-card">
            <h3>{resource.title}</h3>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-link">تحميل</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedResources;
