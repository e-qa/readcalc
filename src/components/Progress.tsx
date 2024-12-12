const Progress = ({ progress }: { progress: number }) => {
  return (
    <div className="my-10">
      <progress
        className="progress progress-success w-full transition-all duration-500 ease-in-out"
        value={progress}
        max="3"
      ></progress>
    </div>
  );
};

export default Progress;
