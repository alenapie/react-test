export const Button = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => <button onClick={onClick}>{title}</button>;
