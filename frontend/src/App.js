import React, { useEffect, useState } from "react";
import "./App.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const carouselTexts = [
    "There's no one thing I like about you.",
    "Your Smile", "Your Laugh", "Your Nature", "Your Heart", "Your Eyes", "Your Voice",
    "Your Strong Arms", "Your Goofy Jokes", "Your Calm Energy",
    "Your Patience When You Try Not To Get Offended By My Things",
    "Your Care", "Your Honesty", "Your Strength", "Your Confidence", "Your Mind",
    "Your Warmth", "Your Support", "Your Attention", "Your Anger (That You Control With Me)",
    "Your Time", "Your Respect", "Your Ambition", "Your Vibe", "Your Cars", "Your Calmness",
    "Your Teasing", "Your Weirdness", "Your Passion", "Your Secrets", "Your Devotion",
    "Your Consistency", "Your Possessiveness", "Your Intelligence", "Your Happiness",
    "Your One Little Dimple", "Your Soft Gaze", "Your Habits", "Your Walk", "Your Playlists",
    "Your Movie Recommendations", "Your Quirky Replies", "Your Curiosity", "Your Deep Thoughts",
    "Your Life Goals", "Your Manners", "Your Sleepy Voice", "Your Courage", "Your Excitement",
    "Your Cute Words", "Your Pride", "Your Madness", "Your Randomness", "Your Empathy",
    "Your Beliefs", "Your Family", "Your Efforts", "Your Growth",
    "Your Stories (Especially The Oklahoma Ones)", "Your Guidance", "Your Innocence",
    "Your Integrity", "Your Trust", "Your Rawness", "Your Pure Intentions", "Your Vulnerability",
    "Your Hands", "Your Ears", "Your Applesadam", "Your Workout Dedication", "Your Thoughtfulness",
    "Your Creativity", "Your Peace", "Your Choices", "Your Everlasting Support",
    "Your Pure Soul", "And Most Importantly — You"
  ];

  const typingWords = [
    "Your beautiful smile that lights up my world ✨",
    "The way you laugh at my jokes 😊",
    "Your incredible dedication to fitness 💪",
    "How you make me feel so loved and special 💕",
    "Your gorgeous eyes that I get lost in 👀",
    "The way you care for everyone around you ❤️",
    "Your amazing strength, inside and out 🔥",
    "How you always believe in your dreams 🌟"
  ];

  // Typing animation effect
  useEffect(() => {
    const typeSpeed = 100; // typing speed
    const deleteSpeed = 50; // deleting speed
    const pauseTime = 2000; // pause between words

    const timeout = setTimeout(() => {
      const current = typingWords[typingIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentWord.length < current.length) {
          setCurrentWord(current.substring(0, currentWord.length + 1));
        } else {
          // Start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (currentWord.length > 0) {
          setCurrentWord(current.substring(0, currentWord.length - 1));
        } else {
          // Move to next word
          setIsDeleting(false);
          setTypingIndex((prev) => (prev + 1) % typingWords.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, typingIndex, typingWords]);

  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselTexts.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % carouselTexts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + carouselTexts.length) % carouselTexts.length);
  };

  return (
    <div className="birthday-card">
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="fade-in">Happy Birthday, Osama! 🎂🌸</h1>
          <p className="fade-in">To the most amazing person I've ever known - your kindness, your heart, and your beautiful soul make every day feel like a celebration. I'm so grateful to have you in my life.</p>
          <a href="#features" className="cta-button fade-in">Why You're Special</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <h2 className="section-title">Why You're So Special</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌸</div>
              <h3>Your Beautiful Heart</h3>
              <p>Your kindness knows no bounds. You have the most caring and compassionate heart I've ever known.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Your Amazing Soul</h3>
              <p>Your goodness radiates from within. You make the world a better place just by being you.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤗</div>
              <h3>Your Warmth</h3>
              <p>Your hugs feel like home. Your presence brings comfort and joy to everyone around you.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💪</div>
              <h3>Your Strength</h3>
              <p>You face challenges with courage and grace. Your resilience inspires me every single day.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">😊</div>
              <h3>Your Smile</h3>
              <p>Your smile lights up my world. It's the most beautiful thing I've ever seen.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Your Dreams</h3>
              <p>Your passion and determination to achieve your goals make me so proud to be yours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Love Story Section */}
      <section className="love-story">
        <div className="container">
          <div className="love-story-content">
            <h2 className="section-title">A little bit of story 💕</h2>
            <div className="heart-decoration">💖</div>
            <div className="love-story-text">
              From the moment I connected with you, I knew you were someone special.<br/>
              Your batain caught my attention, but it's your heart that truly captured me.<br/>
              Every moment we've spent together feels like a gift.<br/>
              I love the way you make me laugh, the way you care for others,<br/>
              and the way you light up the world just by being in it. 💖
            </div>
            <div className="love-story-text">
              I thought I knew the whole syllabus of life… until you appeared, the unexpected chapter I never knew I needed.
            </div>
            <div className="heart-decoration">💕</div>
          </div>
        </div>
      </section>

      {/* Brain Image Section */}
      <section className="brain-section">
        <div className="container">
          <div className="brain-content">
            <h2 className="section-title">My Brain When I'm With You 🧠💕</h2>
            <div className="brain-image-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="brain-image" width="800" height="600">
                <defs>
                  <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: "#ffffff", stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: "#f0f0f0", stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="flowerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: "#ff6b9d", stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: "#e91e63", stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="flowerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: "#ffd700", stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: "#ffa500", stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="flowerGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: "#9c27b0", stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: "#673ab7", stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <rect width="800" height="600" fill="#ffeef8"/>
                <path d="M400 100 Q300 120 250 200 Q200 300 250 400 Q300 500 400 520 Q500 500 550 400 Q600 300 550 200 Q500 120 400 100 Z" fill="url(#brainGrad)" stroke="#e91e63" strokeWidth="3"/>
                <path d="M350 150 Q320 180 300 220" stroke="#e91e63" strokeWidth="2" fill="none"/>
                <path d="M450 150 Q480 180 500 220" stroke="#e91e63" strokeWidth="2" fill="none"/>
                <path d="M380 200 Q360 240 350 280" stroke="#e91e63" strokeWidth="2" fill="none"/>
                <path d="M420 200 Q440 240 450 280" stroke="#e91e63" strokeWidth="2" fill="none"/>
                <circle cx="350" cy="180" r="8" fill="url(#flowerGrad1)"/>
                <circle cx="450" cy="180" r="8" fill="url(#flowerGrad2)"/>
                <circle cx="380" cy="240" r="6" fill="url(#flowerGrad3)"/>
                <circle cx="420" cy="240" r="6" fill="url(#flowerGrad1)"/>
                <circle cx="400" cy="300" r="7" fill="url(#flowerGrad2)"/>
                <circle cx="370" cy="350" r="5" fill="url(#flowerGrad3)"/>
                <circle cx="430" cy="350" r="5" fill="url(#flowerGrad1)"/>
                <rect x="300" y="520" width="200" height="60" fill="#ffffff" stroke="#e91e63" strokeWidth="2" rx="10"/>
                <text x="400" y="560" textAnchor="middle" fill="#e91e63" fontSize="16" fontWeight="bold">MY BRAIN WHEN I'M WITH YOU</text>
              </svg>
            </div>
            <div className="brain-quote">
              "Just like this beautiful brain sculpture, my mind blooms with joy, creativity, and love when I'm with you."
            </div>
            <div className="brain-description">
              This stunning sculpture represents how my thoughts and feelings flourish when I'm with you. Every flower represents a beautiful moment, a shared laugh, a tender touch, or a loving glance. My brain truly comes alive with colors, emotions, and pure happiness when you're by my side. You make my world bloom with love and beauty, just like these flowers blooming from the brain.
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="photo-gallery">
        <div className="container">
          <div className="gallery-content">
            <h2 className="section-title">My Favorite Photos of You 📸💕</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <div className="gallery-category">Locker Room Vibes</div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_6b724278-85bb-43c0-bf00-821017067555/artifacts/hmdxmr8g_9FF0A2BF-DA2F-4926-A03C-86D289F4C7B0.JPG" 
                  className="gallery-photo" 
                  alt="Handsome gym selfie" 
                  width="347" 
                  height="300"
                />
                <div className="gallery-caption">Your confidence and that mysterious vibe in the locker room</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-category">Travel Style</div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_6b724278-85bb-43c0-bf00-821017067555/artifacts/y7l5u069_F51B6A9F-DC21-4889-B7C6-886F13756C67.JPG" 
                  className="gallery-photo" 
                  alt="Stylish travel selfie" 
                  width="347" 
                  height="300"
                />
                <div className="gallery-caption">Your amazing style and that perfect travel selfie</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-category">Gym Dedication</div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_6b724278-85bb-43c0-bf00-821017067555/artifacts/uar3unep_DEC9FF47-D483-49AC-BA3F-F9D0DC58E17D.JPG" 
                  className="gallery-photo" 
                  alt="Focused workout session" 
                  width="347" 
                  height="300"
                />
                <div className="gallery-caption">Your dedication and focus during workouts - so inspiring!</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-category">Casual Perfection</div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_6b724278-85bb-43c0-bf00-821017067555/artifacts/ijjjbd1t_09EB8065-17D7-4B70-850A-2D90FAE7F2D2.JPG" 
                  className="gallery-photo" 
                  alt="Casual mirror selfie" 
                  width="347" 
                  height="300"
                />
                <div className="gallery-caption">Your casual style and that perfect mirror selfie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Section */}
      <section className="gym-section">
        <div className="container">
          <h2 className="section-title">Your Gym Dedication 💪</h2>
          <div className="gym-content">
            <div className="gym-card">
              <div className="gym-icon">🏋️‍♂️</div>
              <h3>Your Workout Dedication</h3>
              <p>Every rep, every set, every drop of sweat shows your incredible discipline and determination. Your commitment to fitness inspires me every single day.</p>
            </div>
            <div className="gym-card">
              <div className="gym-icon">💪</div>
              <h3>Your Strength</h3>
              <p>Not just physical strength, but the mental fortitude to push through every challenge. You turn every obstacle into an opportunity to grow stronger.</p>
            </div>
            <div className="gym-card">
              <div className="gym-icon">🎯</div>
              <h3>Your Goals</h3>
              <p>Setting targets and smashing them with precision. Your focus and dedication to achieving your fitness goals is absolutely incredible.</p>
            </div>
            <div className="gym-card">
              <div className="gym-icon">🔥</div>
              <h3>Your Passion</h3>
              <p>The fire in your eyes when you talk about your workouts, the excitement about new PRs, and the joy of progress - it's absolutely contagious!</p>
            </div>
            <div className="gym-card">
              <div className="gym-icon">⚡</div>
              <h3>Your Energy</h3>
              <p>Even after the toughest workouts, you still have energy to light up my world. Your post-workout glow is one of my favorite things about you.</p>
            </div>
            <div className="gym-card">
              <div className="gym-icon">🏆</div>
              <h3>Your Achievements</h3>
              <p>Every milestone you reach, every personal record you break - I'm so proud of you. Your dedication to self-improvement is truly inspiring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-content">
            <h2 className="section-title">Trust & Faith 💙</h2>
            <div className="trust-quote">
              In you, I found not just a friend, but a safe harbor for my heart. Your trust in me gives me strength, and my trust in you gives me peace. Together, we're unstoppable.
              <div className="quote-author">- Heart's Promise</div>
            </div>
            <div className="trust-quote">
              You're the person I can share my deepest fears with, knowing you'll hold them gently. Your faith in us makes me believe in forever.
              <div className="quote-author">- Soul's Truth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="support-section">
        <div className="container">
          <div className="support-content">
            <h2 className="section-title">Always Here For You 💝</h2>
            <div className="support-quote">
              Through every high and every low, I'll be your biggest cheerleader and your softest landing place. Your dreams are my dreams, and your happiness is my mission.
              <div className="quote-author">- My Promise to You</div>
            </div>
            <div className="support-quote">
              When you're tired, I'll be your rest. When you're lost, I'll be your compass. When you're flying, I'll be your wings. You never have to face anything alone.
              <div className="quote-author">- My Love's Vow</div>
            </div>
          </div>
        </div>
      </section>

      {/* Typing Animation Section */}
      <section className="typing-section">
        <div className="container">
          <h2 className="section-title">All the Things I Adore About You ✨</h2>
          <div className="typing-container">
            <div className="typing-text">
              <span className="typing-content">{currentWord}</span>
              <span className="cursor">|</span>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <div className="container">
          <h2 className="section-title">Every Little Thing About You 💖</h2>
          <div className="carousel-container">
            <div className="carousel-slide active" data-index={currentSlide}>
              <p>{carouselTexts[currentSlide]}</p>
            </div>
            <div className="carousel-nav">
              <div className="carousel-arrow" onClick={prevSlide}>←</div>
              <div className="carousel-arrow" onClick={nextSlide}>→</div>
            </div>
            <div className="carousel-controls">
              <button className="carousel-btn" onClick={prevSlide}>Previous</button>
              <button className="carousel-btn" onClick={nextSlide}>Next</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <h2 className="section-title">What My Heart Says</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"Every day with you feels like a gift. Your love has transformed my life in ways I never thought possible. You make me want to be a better person."</p>
              <div className="testimonial-author">- My Heart ❤️</div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"You're not just my love, you're my best friend, my confidant, my biggest supporter. Thank you for being exactly who you are - perfect in every way."</p>
              <div className="testimonial-author">- My Soul 🌟</div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"Your kindness touches everyone around you. You have this incredible ability to make people feel seen, heard, and loved. You're truly one of a kind."</p>
              <div className="testimonial-author">- My Love 💕</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="container">
          <h2>Forever & Always</h2>
          <p>I promise to love you more with each passing day. You deserve all the happiness, success, and love in the world. Happy Birthday, my everything! 🎂💖</p>
          <a href="#" className="cta-button">I Love You ❤️</a>
        </div>
      </section>
    </div>
  );
}

export default App;