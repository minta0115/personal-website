import React, { useEffect } from 'react'
import './App.css'

function App() {
  // 处理汉堡菜单的点击事件
  useEffect(() => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
      });

      // 点击菜单项后关闭菜单
      const links = navLinks.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => {
          menuToggle.classList.remove('active');
          navLinks.classList.remove('active');
        });
      });
    }
  }, []);

  // 处理滚动动画
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <div className="App">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <a href="#">个人网站</a>
          </div>
          <div className="menu-toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="nav-links" id="nav-links">
            <li><a href="#home">首页</a></li>
            <li><a href="#work">工作</a></li>
            <li><a href="#life">生活</a></li>
            <li><a href="#learning">学习</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-image">
              <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20photo%20of%20a%20data%20analyst%2C%20friendly%20smile%2C%20clean%20background%20with%20subtle%20data%20visualization%20elements%2C%20soft%20filter&image_size=square" alt="个人照片" />
            </div>
            <h1>8年数据分析 · 售后客户成功从业者</h1>
            <p className="slogan">以数据为序，以服务为光，在深耕中沉淀，在热爱中生长</p>
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="container">
          <h2>工作</h2>
          <div className="work-content">
            <div className="work-section">
              <h3>职业历程</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-stage">入门期（1-2年）</div>
                  <div className="timeline-content">从数据分析基础切入，解锁Excel、SQL技能，初涉售后对接，攒下第一份客户沟通经验✨</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-stage">成长期（3-5年）</div>
                  <div className="timeline-content">聚焦售后客户成功，对接核心客户，解决数据落地难题，搭建服务流程，让客户从“会用”到“用好”</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-stage">成熟期（6-8年）</div>
                  <div className="timeline-content">深耕领域，牵头客户分层服务，联动团队优化产品，带新人、传方法，成为团队核心骨干</div>
                </div>
              </div>
            </div>

            <div className="work-section">
              <h3>核心能力</h3>
              <div className="skills-container">
                <div className="skill-category">
                  <h4>专业能力</h4>
                  <ul className="skill-list">
                    <li>数据分析（Excel、SQL、基础BI）📊</li>
                    <li>售后流程优化</li>
                    <li>客户需求挖掘</li>
                    <li>数据价值落地</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>软能力</h4>
                  <ul className="skill-list">
                    <li>共情沟通 ❤️</li>
                    <li>高效解决问题</li>
                    <li>跨部门协作</li>
                    <li>耐心细致，用服务打动客户</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="work-section">
              <h3>工作成果</h3>
              <div className="achievements">
                <div className="achievement-item">
                  <p>负责核心客户，留存率提升30%+</p>
                </div>
                <div className="achievement-item">
                  <p>优化售后流程，投诉率下降40%</p>
                </div>
                <div className="achievement-item">
                  <p>推动产品优化8项，助力客户复购率提升50%</p>
                </div>
                <div className="achievement-item">
                  <p>某客户不会用数据分析工具，通过一对一指导+定制手册，帮其落地业务决策，年度复购翻倍，用专业兑现服务价值</p>
                </div>
              </div>
            </div>

            <div className="work-section">
              <h3>行业感悟</h3>
              <div className="insight">
                <p>八年深耕，慢慢明白：售后客户成功，从来不是“被动解决问题”，而是“主动创造价值”。懂数据、懂产品，更要懂客户的期待，把专业变成温度，让每一份数据都能落地，这才是这份工作的意义。未来，继续深耕细分领域，带着热爱前行 ✨</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="life" className="section">
        <div className="container">
          <h2>生活</h2>
          <div className="life-content">
            <div className="life-section">
              <h3>生活日常</h3>
              <div className="life-photos">
                <div className="life-photo">
                  <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=home%20cooked%20meal%2C%20simple%20and%20delicious%2C%20warm%20lighting%2C%20cozy%20atmosphere&image_size=square" alt="家常菜" />
                  <p>周末煮一顿家常菜，解锁新菜谱</p>
                </div>
                <div className="life-photo">
                  <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=book%20and%20tea%20on%20a%20table%2C%20cozy%20reading%20corner%2C%20soft%20lighting&image_size=square" alt="读书" />
                  <p>午后泡一杯茶，读一本闲书</p>
                </div>
                <div className="life-photo">
                  <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=evening%20walk%20in%20park%2C%20sunset%2C%20peaceful%20atmosphere&image_size=square" alt="散步" />
                  <p>傍晚散步吹风，卸下职场疲惫</p>
                </div>
              </div>
              <p className="life-description">工作之外，偏爱慢下来的时光——周末煮一顿家常菜，解锁新菜谱；午后泡一杯茶，读一本闲书；傍晚散步吹风，卸下职场疲惫。不追求完美，只愿认真生活，不负每一份小美好 🌿</p>
            </div>

            <div className="life-section">
              <h3>兴趣爱好</h3>
              <div className="hobbies">
                <div className="hobby-item">
                  <p>阅读：偏爱职场成长、心理学书籍，在文字里沉淀自己，补充精神能量 📖</p>
                </div>
                <div className="hobby-item">
                  <p>跑步：坚持3年，不仅改善体质，更学会了坚持与沉淀，这份心态也让工作更有耐心 🏃</p>
                </div>
                <div className="hobby-item">
                  <p>手作：偶尔做一些小手工，解压又治愈，锻炼耐心，也让生活多一份仪式感 ✂️</p>
                </div>
              </div>
            </div>

            <div className="life-section">
              <h3>生活态度</h3>
              <p className="life-attitude">认真工作，是对专业的敬畏；热爱生活，是对自己的温柔。八年职场，一半专业，一半热爱，慢慢来，每一步都有意义。</p>
            </div>

            <div className="life-section">
              <h3>联系渠道</h3>
              <div className="contact-links">
                <a href="mailto:xxx@163.com" className="contact-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4C16.418 4 20 7.582 20 12C20 16.418 16.418 20 12 20ZM10 17L17 10L10 3V17Z" fill="currentColor" />
                  </svg>
                  邮箱：xxx@163.com
                </a>
                <a href="#" className="contact-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 3.99999C21.1138 3.99999 20.2614 4.33879 19.6569 4.94324C19.0523 5.54768 18.7135 6.40015 18.7135 7.28638V8.28638H15.4286L15.7143 12H18.7135V20.7136C18.7135 21.125 18.5508 21.519 18.2774 21.8217C18.004 22.1244 17.6327 22.2893 17.2321 22.2893H13.2857V15.2864H10.7143V22.2893H6.76786C6.36731 22.2893 5.99595 22.1244 5.7226 21.8217C5.44925 21.519 5.28654 21.125 5.28654 20.7136V12H8.28571L8.57143 8.28638H5.28654V7.28638C5.28654 6.40015 4.94774 5.54768 4.34319 4.94324C3.73865 4.33879 2.88621 3.99999 2 3.99999" fill="currentColor" />
                  </svg>
                  脉脉/LinkedIn：XXX
                </a>
              </div>
              <p className="message">欢迎同行交流、朋友探讨，愿我们一起成长，共赴山海 💬</p>
            </div>
          </div>
        </div>
      </section>

      <section id="learning" className="section">
        <div className="container">
          <h2>学习</h2>
          <div className="learning-content">
            <div className="learning-section">
              <h3>专业学习</h3>
              <p>学习内容：进阶SQL、BI工具深化，客户成功方法论，细分行业数据应用场景 📚</p>
              <p>学习形式：线上专项课、行业研讨会、同行交流，偶尔读专业书籍（如《客户成功》《数据分析实战》）</p>
              <p>学习成果：用新技能优化客户报告，提升沟通效率，把学习成果落地到工作中</p>
            </div>

            <div className="learning-section">
              <h3>个人成长学习</h3>
              <p>学习沟通表达、客户心理学，偶尔读人文类书籍，提升内在修养。慢慢发现，这些学习不仅丰富了自己，也让我更能共情客户，沟通更有温度。</p>
            </div>

            <div className="learning-section">
              <h3>学习计划</h3>
              <div className="plan-items">
                <div className="plan-item">
                  <p>专业：深耕电商/金融细分领域，学习智能化售后工具，适配行业发展趋势 🚀</p>
                </div>
                <div className="plan-item">
                  <p>个人：提升演讲分享能力，尝试输出行业经验；培养一项新兴趣，让生活更丰富</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© XXX（你的姓名/昵称） | 个人网站 | 深耕数据分析售后客户成功 🌿</p>
          <p className="last-update">最后更新：2026年04月</p>
        </div>
      </footer>
    </div>
  )
}

export default App