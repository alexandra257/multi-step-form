import React from "react";

function MasterForm() {
  return (
    <div className="container">
      <h2>This is the MasterForm</h2>
      {/*-------MoodDrop (STEP1)------------------*/}
      <form>
        <div className="form-group">
          <label htmlFor="moodMenu">How are you feeling today?</label>
          <select className="form-control" id="moodMenu">
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
        <div className="form-group">
          <label htmlFor="intensity">
            How intense is this feeling?&nbsp;&nbsp;&nbsp;
          </label>
          <div
            className="btn-group btn-group-toggle mb-3"
            data-toggle="buttons"
            id="intensity"
          >
            <label class="btn btn-secondary active" htmlFor="intensity1">
              <input
                type="radio"
                name="intensity1"
                id="intensity1"
                value="1"
                autocomplete="off"
                checked
              />
              1
            </label>
            <label class="btn btn-secondary" htmlFor="intensity2">
              <input
                type="radio"
                name="intensity2"
                id="intensity2"
                value="2"
                autocomplete="off"
              />
              2
            </label>
            <label class="btn btn-secondary" htmlFor="intensity3">
              <input
                type="radio"
                name="intensity3"
                id="intensity3"
                value="3"
                autocomplete="off"
              />
              3
            </label>
            <label class="btn btn-secondary" htmlFor="intensity4">
              <input
                type="radio"
                name="intensity4"
                id="intensity4"
                value="4"
                autocomplete="off"
              />
              4
            </label>
            <label class="btn btn-secondary" htmlFor="intensity5">
              <input
                type="radio"
                name="intensity5"
                id="intensity5"
                value="5"
                autocomplete="off"
              />
              5
            </label>
          </div>
        </div>
        {/*-------MoodLog (STEP2)------------------*/}
        <div>
          <textarea
            className="form-control"
            id="textArea"
            rows="5"
            placeholder="Write a bit more about how you're feeling..."
            autoFocus
            required
          ></textarea>
        </div>
        {/*-------DistortionDrop (STEP3)------------------*/}
        <div className="drop">
          <h5 className="m-3">Can you identify this distortion?</h5>
          <select class="form-control mb-3">
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
            className="form-control"
            id="textArea"
            rows="5"
            placeholder="Now try to rationally respond to this thought..."
          ></textarea>
        </div>
        <button type="button" class="btn btn-outline-secondary" name="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default MasterForm;
