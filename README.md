Quiz Web Application

A fast, responsive, and interactive Quiz Web Application built with HTML, CSS, and JavaScript.
Designed to deliver a smooth user experience with clean UI, dynamic question rendering, progress indicators, and real-time answer validation.

Key Features:
Modern UI/UX — Clean layout, smooth transitions, card-style options
Dynamic Quiz Engine — Questions load from a JavaScript data file
Real-Time Feedback — Correct and wrong options are visually highlighted
Progress Tracking — A progress bar updates with each question
Responsive Design — Works across desktop, tablet, and mobile
Score Calculation — Final score displayed at the end of quiz
Smooth Navigation — Splash screen → quiz → results

Project Structure:
quiz/
│── index.html         # Main quiz interface
│── splash.html        # Intro splash screen
│── style.css          # Styling, layout, UI animations
│── script.js          # Quiz logic and event handling
│── questions.js       # Question bank (MCQs)

How It Works:
User starts the quiz from the splash screen
Questions are fetched from questions.js
User selects an answer → app instantly shows correct/wrong
Progress bar updates after each question
Final results are displayed once all questions are answered

Technologies Used:
HTML5 — Page structure
CSS3 — Styling, responsive design, animations
JavaScript (Vanilla JS) — Logic, question loading, event handling
