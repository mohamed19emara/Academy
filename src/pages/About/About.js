// src/pages/About.js
import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <section className="hero">
        <h1>مرحبًا بك في منصتنا الرقمية</h1>
        <p>منصة تعليمية رقمية تهدف إلى دعم العملية التعليمية من خلال توفير موارد تعليمية متكاملة للمعلمين، الطلاب، وأولياء الأمور.</p>
      </section>
      
      <section className="content">
        <h2>من نحن؟</h2>
        <p>
          منصتنا الرقمية تجمع بين المعارف التعليمية الحديثة ووسائل التعليم المبتكرة
          لتقديم حلول شاملة تدعم المعلمين والطلاب على حد سواء.
        </p>
        <p>
          نحن نقدم مجموعة متنوعة من الموارد مثل المقالات، الدروس، الوسائط المتعددة،
          والأنشطة التفاعلية التي تهدف إلى تعزيز تجربة التعلم داخل الفصل الدراسي
          وخارجه.
        </p>
      </section>
      
      <section className="target">
        <h2>خدماتنا للمستفيدين</h2>
        <div className="service">
          <h3>دعم المعلم</h3>
          <p>
            نقدم للمعلمين أدوات تعليمية متقدمة لتسهيل إعداد الدروس وطرق التدريس
            المتنوعة، بالإضافة إلى مقاطع الفيديو التعليمية والأنشطة التي تساعدهم
            في التواصل مع الطلاب.
          </p>
        </div>
        <div className="service">
          <h3>دعم الطالب</h3>
          <p>
            نوفر للطلاب موارد تعليمية متنوعة مثل المقالات التفاعلية، والأنشطة
            التربوية، ومقاطع الفيديو التي تسهم في تعزيز تعلمهم وتنمية مهاراتهم.
          </p>
        </div>
        <div className="service">
          <h3>دعم ولي الأمر</h3>
          <p>
            نقدم لأولياء الأمور معلومات وموارد تساعدهم في متابعة تقدم أبنائهم
            ومساعدتهم في مسيرتهم التعليمية، بالإضافة إلى نصائح وإرشادات تربوية.
          </p>
        </div>
      </section>
      
      <section className="cta">
        <h2>انضم إلينا الآن!</h2>
        <p>سجل الآن لتتمكن من الوصول إلى جميع مواردنا التعليمية المتنوعة.</p>
      </section>
    </div>
  );
};

export default About;
