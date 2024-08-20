import React, { useState, useEffect, useRef } from 'react';
import audioFile from './Fly Me To The Moon (Cover) by The Macarons Project.mp3';
import './Happybirthday.css';

const Happybirthday = () => {
  const [toggle, setToggle] = useState(false);
  const [step, setStep] = useState(0);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    if (toggle) {
      let timer;
      if (step < 1) {
        timer = setTimeout(() => {
          setStep(step + 1);
        }, 2000);
      } else if (step < 2) {
        timer = setTimeout(() => {
          setStep(step + 1);
        }, 3500);
      }
      else if (step < 13) {
        timer = setTimeout(() => {
          setStep(step + 1);
        }, 1000);
      }
      else if (step < 15) {
        timer = setTimeout(() => {
          setStep(step + 1);
        }, 2100);
      }
      else if (step < 20) {
        timer = setTimeout(() => {
          setStep(step + 1);
        }, 1500);
      }

      return () => clearTimeout(timer);
    }
  }, [step, toggle]);

  return (
    <div className='app__birthdaycard'> 
      <audio ref={audioRef} src={audioFile} />
      <div className='align-right'>
        <p className='birthdaycard-component-audio' onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </p>
      </div>
      <div className='app__birthdaycard-component'>
        <p className='birthdaycard-component-p1'>Happy Birthday <br/></p>
      </div>
      <div>
        <p className='birthdaycard-component-p2'>Here's To Your Sixteenth Birthday!</p>
      </div>
      <div>
        {!toggle ? (
          <p className='birthdaycard-component-p3' onClick={() => setToggle(true)}>
            Click Me!
          </p>
        ) : (
          <div>
            {step >= 0 && (
              <p className='birthdaycard-component-p4 typewriter'>I Love You, Anna Baby</p>
            )}
            {step >= 1 && (
              <p className='birthdaycard-component-p4 typewriter'>
                Here Is Everything I Love About You:
              </p>
            )}
            <ul className='birthdaycard-component-p4'>
              {step >= 2 && <li className='typewriter'>Your Eyes</li>}
              {step >= 3 && <li className='typewriter'>Your Nose</li>}
              {step >= 4 && <li className='typewriter'>Your Lips</li>}
              {step >= 5 && <li className='typewriter'>Your Ears</li>}
              {step >= 6 && <li className='typewriter'>Your Smile</li>}
              {step >= 7 && <li className='typewriter'>Your Voice</li>}
              {step >= 8 && <li className='typewriter'>Your Hands</li>}
              {step >= 9 && <li className='typewriter'>Your Hair</li>}
              {step >= 10 && <li className='typewriter'>Your Skin</li>}
              {step >= 11 && <li className='typewriter'>Your Laugh</li>}
              {step >= 12 && <li className='typewriter'>Your Style</li>}
              {step >= 13 && <li className='typewriter'>Your Kindness</li>}
              {step >= 14 && <li className='typewriter'>Your Sense of Humor</li>}
              {step >= 15 && <li className='typewriter'>Your Intelligence</li>}
              {step >= 16 && <li className='typewriter'>Your Creativity</li>}
              {step >= 17 && <li className='typewriter'>Your Confidence</li>}
              {step >= 18 && <li className='typewriter'>Your Compassion</li>}
              {step >= 19 && <li className='typewriter'>Your Generosity</li>}
              {step >= 20 && <li className='typewriter'>Your Determination</li>}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Happybirthday;
