import React from "react";

function MasterForm() {
  const drop = {
    width: "40%"
  };

  return (
    <div style={drop}>
      <h2>This is the MasterForm</h2>
      {/*-------MoodDrop (STEP1)------------------*/}
      <form className="form-group border border-light ">
        <div>
          <h5 className="p-2">How are you feeling?</h5>
          <select class="browser-default custom-select mb-1">
            <option value="Happy">Happy</option>
            <option value="Inspired">Inspired</option>
            <option value="Excited">Excited</option>
            <option value="Neutral">Neutral</option>
            <option value="Anxious">Anxious</option>
            <option value="Exhausted">Exhausted</option>
            <option value="Sad">Sad</option>
            <option value="Overwhelmed">Overwhelmed</option>
            <option value="Stressed">Stressed</option>
            <option value="Angry">Angry</option>
          </select>
        </div>
        {/*-------INTENSITY RADIO (STEP1)------------------*/}
        <div>
          <h5 className="m-3">How intense is this feeling?</h5>
          <div class="btn-group btn-group-toggle mb-3" data-toggle="buttons">
            <label class="btn btn-secondary active">
              <input
                type="radio"
                name="options"
                id="option1"
                autocomplete="off"
                checked
              />
              1
            </label>
            <label class="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option2"
                autocomplete="off"
              />
              2
            </label>
            <label class="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option3"
                autocomplete="off"
              />
              3
            </label>
            <label class="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option3"
                autocomplete="off"
              />
              4
            </label>
            <label class="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option3"
                autocomplete="off"
              />
              5
            </label>
          </div>
        </div>
        {/*-------MoodLog (STEP2)------------------*/}
        <textarea
          className="form-control"
          id="textArea"
          rows="5"
          placeholder="Write a bit more about how you're feeling..."
        ></textarea>
        {/*-------DistortionDrop (STEP3)------------------*/}
        <div className="drop">
          <h5 className="m-3">Can you identify this distortion?</h5>
          <select class="form-control">
            <option value="All or Nothing">All or Nothing</option>
            <option value="Jumping to Conclusions">
              Jumping to Conclusions
            </option>
            <option value="Overgeneralisation">Overgeneralisation</option>
            <option value="Catastrophising">Catastrophising</option>
            <option value="Mental filtering">Mental filtering</option>
            <option value="Disqualifying the Positive">
              Disqualifying the Positive
            </option>
            <option value="Personalisation">Personalisation</option>
            <option value="Shoulds and Oughts">Shoulds and Oughts</option>
            <option value="Emotional Reasoning">Emotional Reasoning</option>
            <option value="Labelling">Labelling</option>
          </select>
        </div>
        {/*-------Response (STEP4)------------------*/}
        <div>
          <textarea
            className="form-control m-3"
            id="textArea"
            rows="5"
            placeholder="Now try to rationally respond to this thought..."
          ></textarea>
        </div>
      </form>
      <button type="button" class="btn btn-outline-secondary">
        Submit
      </button>
    </div>
  );
}

export default MasterForm;
