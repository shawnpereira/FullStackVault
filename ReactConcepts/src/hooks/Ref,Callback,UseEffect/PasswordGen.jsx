import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8); // State for password length
  const [numberAllowed, setNumberAllowed] = useState(false); // State for allowing numbers in password
  const [charAllowed, setCharAllowed] = useState(false); // State for allowing special characters in password
  const [password, setPassword] = useState(""); // State for generated password

  // Reference to the input field for the generated password
  const passwordRef = useRef(null);

  // Function to generate a random password based on current settings
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789"; // Add numbers if allowed
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"; // Add special characters if allowed

    // Generate password of specified length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length); // Pick a random character from the combined string
      pass += str.charAt(char); // Add the character to the password
    }

    setPassword(pass); // Update the generated password state
  }, [length, numberAllowed, charAllowed, setPassword]);

  // Function to copy generated password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // Select the password text
    passwordRef.current?.setSelectionRange(0, 999); // For mobile devices
    window.navigator.clipboard.writeText(password); // Copy the password to clipboard
  }, [password]);

  // Effect to generate password whenever relevant settings change
  useEffect(() => {
    passwordGenerator(); // Generate password
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // JSX for rendering the password generator UI
  return (
    <div>
      <h1>Password generator</h1>
      <div>
        {/* Input field for displaying the generated password */}
        <input
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        {/* Button to copy the generated password to clipboard */}
        <button onClick={copyPasswordToClipboard}>copy</button>
      </div>
      {/* Controls for configuring password settings */}
      <div>
        <div>
          {/* Slider to adjust password length */}
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value); // Update password length
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div>
          {/* Checkbox to allow or disallow numbers in password */}
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev); // Toggle allowing numbers
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div>
          {/* Checkbox to allow or disallow special characters in password */}
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev); // Toggle allowing special characters
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
