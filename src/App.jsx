import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import { generate1000Questions } from './data/generateQuestions';

const categoriesData = generate1000Questions();

export default function App() {
  const [userName, setUserName] = useState(localStorage.getItem('quiz_user') || '');
  const [roomCode, setRoomCode] = useState(localStorage.getItem('quiz_room') || '');
  const [isJoined, setIsJoined] = useState(!!(userName && roomCode));
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleJoin = (e) => {
    e.preventDefault();
    if (!userName.trim() || !roomCode.trim()) return;
    localStorage.setItem('quiz_user', userName);
    localStorage.setItem('quiz_room', roomCode.toUpperCase());
    setRoomCode(roomCode.toUpperCase());
    setIsJoined(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsJoined(false);
    setSelectedCategory(null);
  };

  // ÉCRAN DE CONNEXION
  if (!isJoined) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <form onSubmit={handleJoin} className="glass-card" style={{ padding: '2rem', borderRadius: '1.5rem', width: '100%', maxWidth: '400px', boxSizing: 'border-box' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>👩‍❤️‍👨</div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#9d174d', margin: 0 }}>Quiz de Notre Couple</h1>
            <p style={{ fontSize: '0.8rem', color: '#be185d', marginTop: '0.25rem' }}>Testez votre complicité à deux ✨</p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#374151', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Ton Prénom 💌
            </label>
            <input 
              type="text" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)} 
              placeholder="Ex: Sara / Ali" 
              style={{ width: '100%', padding: '0.8rem', borderRadius: '0.75rem', border: '1px solid #fbcfe8', outline: 'none', boxSizing: 'border-box', fontSize: '1rem' }} 
              required 
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#374151', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Code Secret du Couple 🔑
            </label>
            <input 
              type="text" 
              value={roomCode} 
              onChange={(e) => setRoomCode(e.target.value)} 
              placeholder="Ex: NOTRE-DUO" 
              style={{ width: '100%', padding: '0.8rem', borderRadius: '0.75rem', border: '1px solid #fbcfe8', outline: 'none', boxSizing: 'border-box', fontSize: '1rem', textTransform: 'uppercase' }} 
              required 
            />
          </div>

          <button 
            type="submit" 
            style={{ width: '100%', background: 'linear-gradient(90deg, #ec4899, #f43f5e)', color: 'white', fontWeight: '700', padding: '1rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer', fontSize: '1rem', boxShadow: '0 4px 12px rgba(236,72,153,0.3)' }}
          >
            Entrer dans notre cocon 💞
          </button>
        </form>
      </div>
    );
  }

  // ÉCRAN PRINCIPAL
  return (
    <div style={{ minHeight: '100vh', padding: '1rem', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>
        
        {/* EN-TÊTE */}
        <header className="glass-card" style={{ padding: '0.85rem 1.25rem', borderRadius: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', background: '#fce7f3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
              💖
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '800', color: '#1f2937' }}>{userName}</h2>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#db2777', fontWeight: '700' }}>Code : {roomCode}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout} 
            style={{ background: '#fce7f3', color: '#be185d', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '0.6rem', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}
          >
            Changer
          </button>
        </header>

        <main>
          {!selectedCategory ? (
            <div>
              <div style={{ textAlignment: 'center', textAlign: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: '800', color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>Choisis une catégorie 🌹</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem', color: '#fce7f3' }}>100 thèmes pour mieux vous découvrir</p>
              </div>

              {/* LISTE DES CATÉGORIES EN VERTICALE UNIPOLAIRE */}
              <div className="no-scrollbar" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '72vh', overflowY: 'auto', paddingRight: '0.25rem' }}>
                {categoriesData.map((cat) => (
                  <button
                    key={cat.category_id}
                    onClick={() => setSelectedCategory(cat)}
                    className="glass-card"
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '1rem 1.25rem',
                      borderRadius: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      border: '1px solid rgba(255,255,255,0.7)',
                      boxSizing: 'border-box'
                    }}
                  >
                    <div>
                      <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: '700', color: '#1f2937' }}>
                        {cat.category_name}
                      </h4>
                      <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.75rem', color: '#6b7280' }}>10 QCM • {cat.description}</p>
                    </div>
                    <span style={{ color: '#ec4899', fontSize: '1.2rem', fontWeight: 'bold', marginLeft: '0.5rem' }}>✨</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <QuizView 
              category={selectedCategory} 
              roomCode={roomCode} 
              userName={userName} 
              onBack={() => setSelectedCategory(null)} 
            />
          )}
        </main>
      </div>
    </div>
  );
}

function QuizView({ category, roomCode, userName, onBack }) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [allAnswers, setAllAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const questions = category.questions;
  const letters = ['A', 'B', 'C', 'D'];

  useEffect(() => {
    const fetchAnswers = async () => {
      const { data } = await supabase
        .from('answers')
        .select('*')
        .eq('room_id', roomCode)
        .eq('category_id', category.category_id);
      
      if (data) {
        setAllAnswers(data);
        const myAnswers = {};
        data.filter(a => a.user_id === userName).forEach(a => {
          myAnswers[a.question_id] = a.selected_option;
        });
        setUserAnswers(myAnswers);
        if (Object.keys(myAnswers).length === questions.length) {
          setIsFinished(true);
        }
      }
    };

    fetchAnswers();

    const channel = supabase
      .channel('realtime_answers')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'answers', filter: `room_id=eq.${roomCode}` }, (payload) => {
        if (payload.new.category_id === category.category_id) {
          setAllAnswers((prev) => [...prev, payload.new]);
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [category, roomCode, userName]);

  const handleSelectOption = async (optionIdx) => {
    const qId = questions[currentQuestionIdx].id;
    const newAnswers = { ...userAnswers, [qId]: optionIdx };
    setUserAnswers(newAnswers);

    await supabase.from('answers').insert([
      {
        room_id: roomCode,
        user_id: userName,
        category_id: category.category_id,
        question_id: qId,
        selected_option: optionIdx,
      },
    ]);

    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setIsFinished(true);
    }
  };

  const otherAnswers = allAnswers.filter((a) => a.user_id !== userName);
  const partnersHaveFinished = otherAnswers.length >= questions.length;

  const calculateMatch = () => {
    let matches = 0;
    questions.forEach((q) => {
      const myAns = userAnswers[q.id];
      const partnerAns = otherAnswers.find((a) => a.question_id === q.id)?.selected_option;
      if (myAns !== undefined && myAns === partnerAns) {
        matches++;
      }
    });
    return Math.round((matches / questions.length) * 100);
  };

  return (
    <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '1.5rem', boxSizing: 'border-box' }}>
      <button onClick={onBack} style={{ background: 'none', border: 'none', color: '#db2777', fontWeight: '700', fontSize: '0.8rem', cursor: 'pointer', padding: 0, marginBottom: '1rem' }}>
        ← Retour aux thèmes
      </button>

      {!isFinished ? (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ background: '#fce7f3', color: '#be185d', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '800' }}>
              Question {currentQuestionIdx + 1} / {questions.length}
            </span>
          </div>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1f2937', marginBottom: '1.25rem', lineHeight: '1.4' }}>
            {questions[currentQuestionIdx].question}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {questions[currentQuestionIdx].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className="love-btn-option"
              >
                <span style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '9999px',
                  background: '#fdf2f8',
                  color: '#ec4899',
                  fontWeight: '800',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '1px solid #fbcfe8'
                }}>
                  {letters[idx] || (idx + 1)}
                </span>
                <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                  {opt}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '1rem 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>💌</div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1f2937', margin: 0 }}>Catégorie Complétée !</h3>

          {partnersHaveFinished ? (
            <div>
              <div style={{ fontSize: '3.5rem', fontWeight: '900', color: '#ec4899', margin: '0.75rem 0' }}>
                {calculateMatch()}%
              </div>
              <p style={{ fontSize: '0.85rem', fontWeight: '700', color: '#db2777', marginBottom: '1.25rem' }}>de correspondance entre vos cœurs ! ❤️</p>

              <div style={{ textAlign: 'left', borderTop: '1px solid #fbcfe8', paddingTop: '1rem', maxHeight: '45vh', overflowY: 'auto' }}>
                <h4 style={{ fontSize: '0.75rem', fontWeight: '800', color: '#4b5563', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Détails des réponses :</h4>
                {questions.map((q) => {
                  const myAns = userAnswers[q.id];
                  const partnerAns = otherAnswers.find((a) => a.question_id === q.id)?.selected_option;
                  const isSame = myAns === partnerAns;

                  return (
                    <div key={q.id} style={{
                      padding: '0.75rem',
                      borderRadius: '0.85rem',
                      fontSize: '0.75rem',
                      marginBottom: '0.5rem',
                      background: isSame ? '#ecfdf5' : '#fff1f2',
                      border: isSame ? '1px solid #a7f3d0' : '1px solid #fecdd3'
                    }}>
                      <p style={{ margin: '0 0 0.25rem 0', fontWeight: '700', color: '#1f2937' }}>{q.question}</p>
                      <p style={{ margin: 0, color: '#4b5563' }}>Toi : <strong style={{ color: '#ec4899' }}>{q.options[myAns]}</strong></p>
                      <p style={{ margin: 0, color: '#4b5563' }}>Partenaire : <strong style={{ color: '#8b5cf6' }}>{partnerAns !== undefined ? q.options[partnerAns] : 'En attente...'}</strong></p>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div style={{ padding: '1rem', background: '#fdf2f8', border: '1px solid #fbcfe8', color: '#9d174d', borderRadius: '1rem', fontSize: '0.8rem', marginTop: '1rem' }}>
              <p style={{ margin: 0, fontWeight: '800' }}>Tes réponses sont enregistrées ! 🔒💖</p>
              <p style={{ margin: '0.4rem 0 0 0', fontSize: '0.75rem', lineHeight: '1.4' }}>
                En attente que ton/ta partenaire termine cette catégorie sur son téléphone pour débloquer le pourcentage de correspondance...
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}