import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <div className="form-wrapper">
          <div className="label-input-wrapper">
            <label for="student-name" name="student-check">
              Amara
            </label>
            <input className="check-box" type="checkbox" name="student-check" />
          </div>
          <div className="label-input-wrapper">
            <label for="student-name" name="student-check">
              Ann
            </label>
            <input className="check-box" type="checkbox" name="student-check" />
          </div>
          <div className="label-input-wrapper">
            <label for="student-name" name="student-check">
              Cynthia
            </label>
            <input className="check-box" type="checkbox" name="student-check" />
          </div>
          <div className="label-input-wrapper">
            <label for="student-name" name="student-check">
              Lavender
            </label>
            <input className="check-box" type="checkbox" name="student-check" />
          </div>

          <div className="label-input-wrapper">
            <label for="student-name" name="student-check">
              Jiggii
            </label>
            <input className="check-box" type="checkbox" name="student-check" />
          </div>
          <div className="label-input-wrapper">
            <label for="student-name" name="student-check">
              Kia
            </label>
            <input className="check-box" type="checkbox" name="student-check" />
          </div>
          <div className="label-input-wrapper">
            <label for="student-name" name="student-check">
              Scarlett
            </label>
            <input className="check-box" type="checkbox" name="student-check" />
          </div>
          <div className="label-input-wrapper">
            <label for="student-name" name="student-check">
              Shan
            </label>
            <input className="check-box" type="checkbox" name="student-check" />
          </div>
          <div className="label-input-wrapper">
            <label for="student-name" name="student-check">
              Taylor
            </label>
            <input className="check-box" type="checkbox" name="student-check" />
          </div>
        </div>
        <button className="submit-button" type="submit">
          Reset
        </button>
      </form>
    </div>
  );
}

export default App;
