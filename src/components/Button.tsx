const Button = ({ disabled = false }: { disabled?: boolean }) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`w-full ${
        disabled ? "opacity-50" : "hover:opacity-80"
      } bg-black text-white rounded-md py-2 mt-4  font-medium`}
    >
      Button
    </button>
  );
};

export default Button;
