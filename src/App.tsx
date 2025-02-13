import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [showButtons, setShowButtons] = useState(true);
  
  const noMessages = [
    "No",
    "Seriously Tae?",
    "I won't call u short?",
    "Are you sure?",
    "I'll get u Brownies!",
    "Biriyani?",
    "Really nigga?",
    "I'll be sad..;(",
    "I won't ask again",
    "I'll ask divya then",
    "POOKIE PLEASE..😭"
  ];

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setYesButtonSize(prev => prev + 0.06);
  };

  const handleYesClick = () => {
    setAccepted(true);
    setTimeout(() => setShowButtons(false), 1000);
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Continuous Hearts Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute animate-fall text-pink-${Math.random() > 0.5 ? '400' : '500'}`}
            size={Math.random() * 20 + 20}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 3 + 4}s`,
              opacity: Math.random() * 0.5 + 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Running Hearts Animation when accepted */}
      {accepted && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={`running-${i}`}
              className="absolute animate-run text-red-500"
              size={30}
              style={{
                animationDelay: `${Math.random() * 2}s`,
                bottom: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      )}
      
      {/* Main Content */}
      <div className="z-10 flex flex-col items-center gap-8 p-4 sm:p-8 bg-pink-50/90 backdrop-blur-sm rounded-2xl shadow-xl max-w-[95vw] sm:max-w-[600px]">
        <div className="w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] rounded-lg overflow-hidden bg-white relative">
          <iframe 
            src={accepted 
              ? "https://media.gifdb.com/kim-taehyung-charming-big-smile-29o98e17q57hpf0r.gif"
              : "https://media.gifdb.com/nervous-kim-taehyung-biting-lips-65o9tytl61zwiuk3.gif"
            }
            className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            style={{
              border: 'none',
              margin: 0,
              padding: 0,
            }}
            title="Tae GIF"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-pink-600 text-center">
          {accepted ? "WOOHOO LESGOO po(TAE)te! 🎉" : "Will you be my valentine TAE?"}
        </h1>

        {showButtons && (
          <div className="flex flex-wrap gap-4 justify-center items-center min-h-[100px]">
            <button
              onClick={handleYesClick}
              className="px-8 py-4 bg-pink-500 text-white rounded-lg transition-all hover:bg-pink-600 shadow-lg hover:shadow-xl"
              style={{ 
                transform: `scale(${yesButtonSize})`,
                transition: 'all 0.3s ease'
              }}
            >
              YES
            </button>

            {!accepted && (
              <button
                onClick={handleNoClick}
                className="px-8 py-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 shadow-lg whitespace-nowrap"
              >
                {noCount >= noMessages.length ? noMessages[noMessages.length - 1] : noMessages[noCount]}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
