import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputBox from "./components/InputBox";
import CurrencyData from "./hooks/CurrencyData";

function App() {
  const [To, setTo] = useState("inr");
  const [From, setFrom] = useState("usd");
  const [Amount, setAmount] = useState(0);
  const [ConvertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = CurrencyData(From);

  const options = Object.keys(currencyInfo);
  // console.log(options);
  // console.log(currencyInfo);

  const backgroundImage = `https://www.pexels.com/video/drone-shot-of-cortina-ski-resort-7064870/`;
  console.log(From);

  const swap = () => {
    setFrom(To);
    setTo(From);
    setAmount(ConvertedAmount);
    setConvertedAmount(Amount);
  };

  const convert = () => {
    setConvertedAmount(Amount * currencyInfo[To]);
  };
  console.log(ConvertedAmount);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={
        {
          // "backgroundImage": `url('')`,
        }
      }
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={Amount}
                options={options}
                currency={From}
                onCurrencyChange={(value) => setFrom(value)}
                onAmountChange={(value) => setAmount(value)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={() => swap()}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                amountDisable={true}
                // currencyDisable = {true}
                amount={ConvertedAmount}
                label="To"
                currency={To}
                onCurrencyChange={(value) => setTo(value)}
                options={options}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
