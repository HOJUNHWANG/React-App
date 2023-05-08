import {classNames} from "../utils/utils";

const PasswordField = (
  {
    label,
    password,
    setPassword,
    placeholder,
    icon,
    minLength = 6,
  }) => {
  return (
    <label className="relative w-full flex flex-col">
      <span className="text-black text-base font-medium">{label}</span>
      <input
        className={classNames(
          icon ? "pl-12 pr-2 py-2" : "",
          "bg-transparent border-0 border-b border-black placeholder-gray-500 text-base text-black focus:ring-0 focus:border-0 focus:border-b-2 focus:border-black"
        )}
        type="password"
        name="input"
        placeholder={placeholder}
        value={password}
        minLength={minLength}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {icon}
    </label>
  );
};

export default PasswordField;
