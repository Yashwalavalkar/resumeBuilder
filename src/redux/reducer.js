const INITIAL_STATE = {
<<<<<<< HEAD
  template: "",
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    objective: "",
  },
  workexperience: {},
  educationInfo: {
    graduation: "",
    university: "",
    degree: "",
    startYear: "",
    endYear: "",
  },
  education: {},
  skills: {}, // Add skills state
=======
  template: '',
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    objective: ''
  },
  workexperience: {},
  educationInfo:{
    graduation:'',
    university:'',
    degree:'',
    startYear:'',
    endYear:''
  },
  education: {},
  skills: {} // Add skills state
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case "TEMPLATE": {
      return {
        ...state,
        template: action.payload,
      };
    }
    case "PERSONAL_INFO_DATA": {
      return {
        ...state,
        personalInfo: action.payload,
      };
    }
    case "EXPERIENCE_DATA": {
=======
    case 'TEMPLATE': {
      return {
        ...state,
        template: action.payload
      };
    }
    case 'PERSONAL_INFO_DATA': {
      return {
        ...state,
        personalInfo: action.payload
      };
    }
    case 'EXPERIENCE_DATA': {
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
      const experiences = action.payload;
      const workexperience = experiences.reduce((acc, exp) => {
        acc[exp.id] = exp;
        return acc;
      }, {});
      return {
        ...state,
<<<<<<< HEAD
        workexperience,
      };
    }
    case "EDUCATION_DATA": {
      return {
        ...state,
        educationInfo: action.payload,
      };
    }
    case "SKILL_DATA": {
      // Handle SKILL_DATA action
      return {
        ...state,
        skills: action.payload,
=======
        workexperience
      };
    }
    case 'EDUCATION_DATA': {
      return {
        ...state,
        educationInfo: action.payload
      };
    }
    case 'SKILL_DATA': { // Handle SKILL_DATA action
      return {
        ...state,
        skills: action.payload
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
      };
    }
    default:
      return state;
  }
};

export default reducer;
