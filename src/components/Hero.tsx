import { useState } from 'react';
import { STEPS } from '../CONTSANT';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

type HeroProps = {
  next: number;
  setNext: React.Dispatch<React.SetStateAction<number>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  selectedValues: { [key: string]: string | number };
  setSelectedValues: React.Dispatch<
    React.SetStateAction<{ [key: string]: string | number }>
  >;
  calculateTotalBooks: () => string;
};

const Hero = ({
  next,
  setNext,
  selectedValues,
  setProgress,
  setSelectedValues,
  calculateTotalBooks,
}: HeroProps) => {
  const currentStep = STEPS[next];
  const navigate = useNavigate();
  const [isNextDisabled, SetIsNextDisabled] = useState(true);
  const [showBtn, setShowBtn] = useState(false);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    SetIsNextDisabled(false);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      {next <= 2 ? (
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body items-center text-center text-xl">
            {currentStep.label}
            <select
              className="select select-bordered w-full max-w-xs"
              name={currentStep.name}
              onChange={handleSelectChange}
              value={selectedValues[currentStep.name] || ''}
              required
            >
              {currentStep.options?.map((option, idx) => (
                <option key={idx} value={option}>
                  {currentStep.name === 'readingSpeed'
                    ? `${option} WPM`
                    : currentStep.name === 'durationMonths'
                    ? `${option} Ay`
                    : `${option} dəqiqə`}
                </option>
              ))}
            </select>
            {currentStep.name === 'readingSpeed' && (
              <p className="text-sm text-gray-500 mt-2">
                <strong>WPM</strong>(Words Per Minute) — hər dəqiqədə oxuduğunuz
                söz sayıdır. Ortalama bir insan dəqiqədə 200-250 söz oxuyur.
                Oxuma sürətinizi
                <a
                  href="https://swiftread.com/reading-speed-test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  bu saytdan ölçə bilərsiniz.
                </a>
              </p>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl">{calculateTotalBooks()}</h1>
        </div>
      )}

      {!showBtn ? (
        next >= 2 ? (
          <Button
            text={'Nəticəni göstər'}
            fn={() => {
              setProgress((prev) => prev + 1);
              setNext((prev) => prev + 1);
              setShowBtn(true);
            }}
          />
        ) : (
          <Button
            text={'Növbəti'}
            fn={() => {
              setNext((prev) => (prev >= 2 ? 0 : prev + 1));
              setProgress((prev) => prev + 1);
              SetIsNextDisabled(!isNextDisabled);
            }}
            disabled={isNextDisabled}
          />
        )
      ) : (
        <Button
          text="Yenidən hesabla"
          fn={() => {
            navigate(0);
          }}
        />
      )}
    </div>
  );
};

export default Hero;
