import { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Progress from './components/Progress';

const App = () => {
  const [progress, setProgress] = useState<number>(0);
  const [next, setNext] = useState<number>(0);
  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string | number;
  }>({});

  function calculateTotalBooks() {
    const { dailyTime, durationMonths, readingSpeed } = selectedValues;
    const averageWordsPerBook = 80000;
    const dailyWords = dailyTime * readingSpeed;
    const totalWords = dailyWords * 30 * durationMonths;
    const totalBooks = totalWords / averageWordsPerBook;

    const roundedBooks = Math.round(totalBooks);
    if (roundedBooks < 1) {
      return 'Təxminən 1 kitabı tamamlamağa yaxın olacaqsız Bir az daha çox vaxt ayırmağa çalışın.😊📚';
    } else if (roundedBooks === 1) {
      return 'Bu müddət ərzində 1 kitab oxuya biləcəksiniz! 🎉';
    } else {
      return `Nəticə möhtəşəm olacaq! Təxminən ${roundedBooks} kitab oxuya biləcəksiniz! 👏📖`;
    }
  }

  return (
    <div>
      <Navbar />
      <Progress progress={progress} />
      <Hero
        next={next}
        setProgress={setProgress}
        setNext={setNext}
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValues}
        calculateTotalBooks={calculateTotalBooks}
      />
    </div>
  );
};

export default App;
