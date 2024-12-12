type Step = {
  label: string;
  name: string;
  type: 'number' | 'select';
  options?: (string | number)[];
};

export const STEPS: Step[] = [
  {
    label: 'Hər gün neçə dəqiqə oxuyacaqsınız?',
    name: 'dailyTime',
    type: 'select',
    options: ['Seçin', 5, 10, 15, 20, 30, 45, 60, 120],
  },
  {
    label: 'Oxuma sürətiniz nə qədərdir?',
    name: 'readingSpeed',
    type: 'select',
    options: ['Seçin', 150, 200, 250, 300, 400, 500],
  },
  {
    label: 'Oxuma müddətiniz neçə ay olacaq?',
    name: 'durationMonths',
    type: 'select',
    options: ['Seçin', 1, 3, 6, 12, 24],
  },
];
