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



      {/* Photo Gallery Section */}
      <section className="photo-gallery">
        <div className="container">
          <div className="gallery-content">
            <h2 className="section-title">My Favorite Photos of You 📸💕</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <div className="gallery-category">Handsome Perfection</div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_pic-collection-8/artifacts/0nadmcn2_7A77F5DF-828F-4B61-BFF6-F3D42A9658F0.JPG" 
                  className="gallery-photo" 
                  alt="Handsome portrait" 
                  width="347" 
                  height="300"
                />
                <div className="gallery-caption">Your natural charm and that gorgeous face that takes my breath away</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-category">Casual Elegance</div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_pic-collection-8/artifacts/xje5gs88_10E945B2-2951-4CE8-A690-C0432982D04E.JPG" 
                  className="gallery-photo" 
                  alt="Casual elegance" 
                  width="347" 
                  height="300"
                />
                <div className="gallery-caption">Your effortless style and that perfect casual look</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-category">Adorable Smile</div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_pic-collection-8/artifacts/7aee3m41_89E81A65-0C8C-4E00-A585-9E30B503C6DA_4_5005_c.jpeg" 
                  className="gallery-photo" 
                  alt="Beautiful smile" 
                  width="347" 
                  height="300"
                />
                <div className="gallery-caption">That beautiful smile that lights up my entire world</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-category">Confident Charm</div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_pic-collection-8/artifacts/vr547ufw_C6D5D368-5793-4D80-9873-297A32BCC3FA_4_5005_c.jpeg" 
                  className="gallery-photo" 
                  alt="Confident and charming" 
                  width="347" 
                  height="300"
                />
                <div className="gallery-caption">Your confidence and natural charisma that captivates everyone</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-category">Perfect Moment</div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_pic-collection-8/artifacts/ud33qg5o_54AA856A-C4EC-4C51-9E10-8FC35821ACE5.JPG" 
                  className="gallery-photo" 
                  alt="Perfect moment capture" 
                  width="347" 
                  height="300"
                />
                <div className="gallery-caption">Every moment with you is perfect, just like this beautiful photo</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-category">Gym Motivation</div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_pic-collection-8/artifacts/0wi4my5z_8B32081A-7EBE-4105-B19B-EDEA25E3D9BA.JPG" 
                  className="gallery-photo" 
                  alt="Gym motivation selfie" 
                  width="347" 
                  height="300"
                />
                <div className="gallery-caption">Your "Gym-ish today" energy - love your dedication and strength</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-category">Daily Improvement</div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_pic-collection-8/artifacts/bq4e1uyt_457BD146-93EB-437B-9056-B5E60343A768.JPG" 
                  className="gallery-photo" 
                  alt="Improve everyday mindset" 
                  width="347" 
                  height="300"
                />
                <div className="gallery-caption">Your "Improve 0.01% everyday" mindset inspires me beyond words</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-category">Sophisticated Look</div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_pic-collection-8/artifacts/cutyiofw_1826CEE5-4989-4501-A76B-374D585F35B0.JPG" 
                  className="gallery-photo" 
                  alt="Sophisticated with glasses" 
                  width="347" 
                  height="300"
                />
                <div className="gallery-caption">Those glasses make you look so sophisticated and incredibly handsome</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-category">Home Comfort</div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_pic-collection-8/artifacts/hnajpk10_4EBC4F54-D0FB-4324-A4B0-446AC4DE420E.JPG" 
                  className="gallery-photo" 
                  alt="Comfortable at home" 
                  width="347" 
                  height="300"
                />
                <div className="gallery-caption">Your relaxed home vibes - love seeing you comfortable and at peace</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-category">Strong & Stunning</div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_pic-collection-8/artifacts/as3gkh8n_453EFB2F-7273-4398-9351-C2DB824FB8D7.JPG" 
                  className="gallery-photo" 
                  alt="Strong and attractive" 
                  width="347" 
                  height="300"
                />
                <div className="gallery-caption">Your strength and natural attractiveness in every single shot</div>
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