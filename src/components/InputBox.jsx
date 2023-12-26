import React from "react";

function InputBox({
  label,
  className = "",
  amount ,
amountDisable= false,
currencyDisable = false,
currency,
  options = [],
  onCurrencyChange,
  onAmountChange,
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex text-black`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">label</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          value={amount}
          disabled={amountDisable}
          placeholder="Amount"
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
        value={currency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="rounded-lg text-black px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        >
          {options.map((option) => (
            <option className="text-black" key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
