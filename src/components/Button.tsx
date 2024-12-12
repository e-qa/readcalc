type BtnProps = {
  text: string;
  fn: () => void;
  disabled?: boolean;
};

const Button = ({ text, disabled, fn }: BtnProps) => {
  return (
    <button className="btn my-7" onClick={fn} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
