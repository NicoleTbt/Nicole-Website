// reducers.js
const initialState = {
  Skills: [{ name: "", icon: "java.png", rate: 0 }],
  Album: [],
  Education: [],
  Experience: [],
  Introduction: {},
  Accounts: {},
  Start: false,
  Screensize: "Large",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SKILLS":
      return { ...state, Skills: action.payload };
    case "SET_ALBUM":
      return { ...state, Album: action.payload };
    case "SET_EDUCATION":
      return { ...state, Education: action.payload };
    case "SET_EXPERIENCE":
      return { ...state, Experience: action.payload };
    case "SET_INTRODUCTION":
      return { ...state, Introduction: action.payload };
    case "SET_ACCOUNTS":
      return { ...state, Accounts: action.payload };
    case "SET_START":
      return { ...state, Start: action.payload };
    case "SET_SCREENSIZE":
      return { ...state, Screensize: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
